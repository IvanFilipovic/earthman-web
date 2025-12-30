// stores/facets.ts
import { defineStore } from 'pinia'

interface Collection {
  slug: string
  name: string
}

interface Category {
  id: number
  name: string
}

interface Size {
  name: string
}

interface Color {
  name: string
  image: string
}

interface Facets {
  collections: Collection[]
  categories: Category[]
  sizes: Size[]
  colors: Color[]
}

interface FacetsState {
  data: Facets | null
  lastFetched: number | null
  isLoading: boolean
  error: string | null
}

export const useFacetsStore = defineStore('facets', {
  state: (): FacetsState => ({
    data: null,
    lastFetched: null,
    isLoading: false,
    error: null
  }),

  getters: {
    facets: (state): Facets => state.data || {
      collections: [],
      categories: [],
      sizes: [],
      colors: []
    },
    
    // Check if cache is still fresh (5 minutes)
    isCacheFresh: (state): boolean => {
      if (!state.lastFetched) return false
      const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes
      return Date.now() - state.lastFetched < CACHE_DURATION
    }
  },

  actions: {
    async fetchFacets(force = false): Promise<void> {
      // Return cached data if fresh and not forcing refresh
      if (!force && this.isCacheFresh && this.data) {
        return
      }

      this.isLoading = true
      this.error = null

      try {
        const config = useRuntimeConfig()
        
        // Make all 4 API calls in parallel (same as before, but only once every 5 minutes)
        const [categories, sizes, colors, collections] = await Promise.all([
          $fetch<Category[]>(`${config.public.apiBase}/public/categories/`),
          $fetch<Size[]>(`${config.public.apiBase}/public/sizes/`),
          $fetch<Color[]>(`${config.public.apiBase}/public/colors/`),
          $fetch<Collection[]>(`${config.public.apiBase}/public/collections/`)
        ])

        this.data = {
          categories: Array.isArray(categories) ? categories : [],
          sizes: Array.isArray(sizes) ? sizes : [],
          colors: Array.isArray(colors) 
            ? colors.map(c => ({ name: c.name, image: c.image }))
            : [],
          collections: Array.isArray(collections)
            ? collections.map(c => ({ name: c.name, slug: c.slug }))
            : []
        }
        
        this.lastFetched = Date.now()
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to fetch facets'
        console.error('Error fetching facets:', err)
      } finally {
        this.isLoading = false
      }
    },

    // Force refresh when needed (e.g., after admin updates)
    async refresh(): Promise<void> {
      await this.fetchFacets(true)
    },

    // Clear cache
    clearCache(): void {
      this.data = null
      this.lastFetched = null
      this.error = null
    }
  }
})