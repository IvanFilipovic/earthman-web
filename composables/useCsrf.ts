/**
 * CSRF Token Composable
 *
 * Provides utilities for including CSRF tokens in API requests.
 * The token is automatically read from the cookie and included in request headers.
 */
import type { FetchOptions } from '~/types/api'

export const useCsrf = () => {
  /**
   * Get the CSRF token from the cookie
   */
  const getCsrfToken = (): string | undefined => {
    if (import.meta.server) return undefined

    const cookies = document.cookie.split(';')
    const csrfCookie = cookies.find(cookie => cookie.trim().startsWith('csrf_token='))

    if (csrfCookie) {
      return csrfCookie.split('=')[1]
    }

    return undefined
  }

  /**
   * Get headers object with CSRF token included
   */
  const getCsrfHeaders = (): Record<string, string> => {
    const token = getCsrfToken()

    if (token) {
      return {
        'X-CSRF-Token': token
      }
    }

    return {}
  }

  /**
   * Make a fetch request with CSRF token automatically included
   */
  const csrfFetch = async <T>(url: string, options: FetchOptions = {}): Promise<T> => {
    const headers = {
      ...options.headers,
      ...getCsrfHeaders()
    }

    return $fetch<T>(url, {
      ...options,
      headers
    })
  }

  return {
    getCsrfToken,
    getCsrfHeaders,
    csrfFetch
  }
}
