interface TransformOptions {
  quality?: number
  format?: 'auto' | 'webp' | 'avif' | 'jpeg' | 'png'
  fit?: 'scale-down' | 'contain' | 'cover' | 'crop' | 'pad'
  height?: number
}

interface ResponsiveImageAttrs {
  srcset: string
  sizes: string
  src: string
}

export function useImageTransform() {
  /**
   * Get a single transformed image URL
   * @param url - Original image URL
   * @param width - Desired width in pixels
   * @param options - Additional transformation options
   * @returns Transformed image URL
   */
  const getTransformedUrl = (
    url: string,
    width: number,
    options: TransformOptions = {}
  ): string => {
    if (!url) return ''

    const {
      quality = 85,
      format = 'auto',
      fit = 'scale-down',
      height,
    } = options

    // Remove base URL if present
    const path = url.replace('https://static.earth-man.eu/', '')

    // Build transformation parameters
    const params = [
      `width=${width}`,
      `quality=${quality}`,
      `format=${format}`,
      fit && `fit=${fit}`,
      height && `height=${height}`,
    ].filter(Boolean).join(',')

    return `https://static.earth-man.eu/cdn-cgi/image/${params}/${path}`
  }

  /**
   * Get responsive image attributes (srcset, sizes, src)
   * @param url - Original image URL
   * @param widths - Array of widths for srcset (e.g., [400, 800, 1200, 1600])
   * @param sizesAttr - Custom sizes attribute (e.g., "(max-width: 1023px) 100vw, 66vw")
   * @param options - Additional transformation options
   * @returns Object with srcset, sizes, and src properties
   */
  const getResponsiveImages = (
    url: string,
    widths: number[] = [400, 800, 1200],
    sizesAttr?: string,
    options: TransformOptions = {}
  ): ResponsiveImageAttrs => {
    if (!url) return { srcset: '', sizes: '', src: '' }

    // Generate srcset with all provided widths
    const srcset = widths
      .map(width => `${getTransformedUrl(url, width, options)} ${width}w`)
      .join(', ')

    // Use custom sizes if provided, otherwise use sensible defaults
    const sizes = sizesAttr || '100vw'

    // Use largest width as fallback src
    const src = getTransformedUrl(url, widths[widths.length - 1], options)

    return {
      srcset,
      sizes,
      src,
    }
  }

  return {
    getTransformedUrl,
    getResponsiveImages,
  }
}