
<template>
  <section class="fixed top-0 left-0 right-0 z-40 bg-background_color">
    <!-- Desktop Navigation -->
    <div class="hidden md:flex flex-col lg:flex-row w-full">
      <!-- Logo Section -->
      <div class="flex flex-col w-full lg:w-1/2">          
        <div class="w-1/2 md:px-8">
          <NuxtLink
            to="/"
            class="flex justify-center py-6 min-h-[88px]"
          >
            <img 
              src="/logo/earth-man920.png" 
              alt="Earth Man Logo" 
              width="300"
              height="56"
              class="w-[300px] h-[56px] object-contain" 
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Navigation Links Section -->
      <div class="hidden md:flex w-full items-start justify-end lg:w-1/2 px-4 md:px-8 md:py-14 lg:py-24 gap-6 h-full">
        <section class="flex flex-col justify-end w-full bg-transparent z-50 my-auto">
          <div class="flex pt-4">
            <div class="flex flex-row justify-end w-full mx-auto space-x-4 py-4">
              <NuxtLink
                to="/shop"
                :class="[linkColorClass, getNavWeight('/shop'), 'text-sm my-auto px-4']"
              >
                SHOP
              </NuxtLink>

              <NuxtLink
                to="/collections"
                :class="[linkColorClass, getNavWeight('/collections'), 'text-sm my-auto px-4']"
              >
                STORIES
              </NuxtLink>

              <NuxtLink
                to="/about"
                :class="[linkColorClass, getNavWeight('/about'), 'text-sm my-auto px-4']"
              >
                ABOUT
              </NuxtLink>

              <!-- Cart Icon -->
              <ClientOnly>
                <button
                  type="button"
                  class="relative my-auto px-4 cursor-pointer"
                  :class="[linkColorClass, getNavWeight('/cart')]"
                  @click="openCart"
                  aria-label="Open shopping cart"
                >
                  <Icon name="lucide:shopping-cart" class="w-6 h-6" :class="linkColorClass" />
                  <span
                    v-if="cartStore.itemCount > 0"
                    class="absolute -top-1 -right-1 bg-text_color text-background_color text-[12px] w-4 h-4 flex items-center justify-center"
                    :aria-label="`${cartStore.itemCount} items in cart`"
                  >
                    {{ cartStore.itemCount }}
                  </span>
                </button>
              </ClientOnly>

              <!-- User Profile Icon -->
              <NuxtLink
                to="/profile"
                :class="[linkColorClass, getNavWeight('/profile'), 'my-auto font-light pl-4']"
                aria-label="User profile"
              >
                <Icon name="lucide:circle-user-round" class="w-6 h-6" :class="linkColorClass" />
              </NuxtLink>
            </div>

            <ClientOnly>
              <CartPanel v-model:open="cartOpen" />
              <MobileMenu v-model:open="mobileMenuOpen" />
            </ClientOnly>
          </div>
        </section>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <section class="flex md:hidden flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 py-6 gap-6">
      <div class="flex md:hidden items-center justify-between w-full px-2">
        <!-- Mobile Logo -->
        <div class="w-[200px] h-12">
          <NuxtLink to="/" class="block w-full h-full">
            <img 
              src="/logo/earth-man920.png" 
              alt="Earth Man Logo"
              width="200"
              height="48"
              class="w-full h-full object-contain object-left"
            />
          </NuxtLink>
        </div>

        <!-- Mobile Icons -->
        <div class="flex items-center gap-4">
          <!-- Cart Icon -->
          <ClientOnly>
            <button
              type="button"
              class="relative cursor-pointer"
              :class="linkColorClass"
              @click="openCart"
              aria-label="Open shopping cart"
            >
              <Icon name="lucide:shopping-cart" class="w-6 h-6" :class="linkColorClass" />
              <span
                v-if="cartStore.itemCount > 0"
                class="absolute -top-1 -right-1 bg-text_color text-background_color text-[10px] w-[14px] h-[14px] md:text-[12px] md:w-4 md:h-4 flex items-center justify-center"
                :aria-label="`${cartStore.itemCount} items in cart`"
              >
                {{ cartStore.itemCount }}
              </span>
            </button>
          </ClientOnly>

          <!-- Hamburger Menu -->
          <button 
            type="button"
            @click="openMobileMenu"
            aria-label="Open menu"
          >
            <Icon name="lucide:menu" class="w-7 h-7" :class="linkColorClass" />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
  import { useCartStore } from '~/stores/cart'

  interface Props {
    dark?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    dark: false
  })

  const route = useRoute()
  const cartStore = useCartStore()

  const cartOpen = ref(false)
  const mobileMenuOpen = ref(false)

  const linkColorClass = computed(() =>
    props.dark ? 'text-background_color' : 'text-text_color'
  )

  function isPathActive(path: string): boolean {
    return route.path === path || route.path.startsWith(`${path}/`)
  }

  function getNavWeight(path: string): string {
    return isPathActive(path) ? 'font-bold' : 'font-light'
  }

  function openCart(): void {
    cartOpen.value = true
  }

  function openMobileMenu(): void {
    mobileMenuOpen.value = true
  }

  function handleCartUpdate(): void {
    cartStore.fetchCart(true)
  }

  // Compensate for scrollbar width to prevent layout shift
  watch([cartOpen, mobileMenuOpen], ([isCartOpen, isMenuOpen]) => {
    const isAnyPanelOpen = isCartOpen || isMenuOpen
    
    if (import.meta.client) {
      if (isAnyPanelOpen) {
        // Calculate scrollbar width before hiding it
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
        
        // Lock scroll and compensate for scrollbar
        document.documentElement.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scrollbarWidth}px`
        
        // Also add padding to fixed header to prevent shift
        const header = document.querySelector('section > div.hidden.md\\:flex') as HTMLElement
        if (header) {
          header.style.paddingRight = `${scrollbarWidth}px`
        }
        
        window.dispatchEvent(new CustomEvent('panel:open'))
      } else {
        // Restore scroll and remove padding
        document.documentElement.style.overflow = ''
        document.body.style.paddingRight = ''
        
        const header = document.querySelector('section > div.hidden.md\\:flex') as HTMLElement
        if (header) {
          header.style.paddingRight = ''
        }
        
        window.dispatchEvent(new CustomEvent('panel:close'))
      }
    }
  })

  onMounted(async () => {
    await cartStore.fetchCart()
    
    if (import.meta.client) {
      window.addEventListener('cart:updated', handleCartUpdate)
    }
  })

  onBeforeUnmount(() => {
    if (import.meta.client) {
      document.documentElement.style.overflow = ''
      document.body.style.paddingRight = ''
      
      const header = document.querySelector('section > div.hidden.md\\:flex') as HTMLElement
      if (header) {
        header.style.paddingRight = ''
      }
      
      window.removeEventListener('cart:updated', handleCartUpdate)
    }
  })
</script>