# Earthman Web - Nuxt 3 E-commerce Platform

## Project Overview

Earthman Web is a modern, production-ready e-commerce platform built with Nuxt 3, featuring a complete shopping experience with advanced product filtering, secure payment processing, and smooth animations. The project uses a headless architecture with a Django REST API backend and Nuxt 3 frontend.

### Key Characteristics
- **Type**: E-commerce webshop (clothing/fashion)
- **Framework**: Nuxt 3 (v3.17.7) with Vue 3 Composition API
- **Styling**: Tailwind CSS with custom components
- **Language**: TypeScript
- **Architecture**: JAMstack with server-side API routes
- **Deployment**: Vercel (frontend), PythonAnywhere (backend)

## Tech Stack

### Core Framework
- **Nuxt 3** (v3.17.7) - Vue 3 meta-framework with SSR/ISR
- **Vue 3** (v3.5.17) - Composition API with `<script setup>`
- **TypeScript** - Full type safety throughout the codebase
- **Pinia** (v3.0.3) - State management

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** (@headlessui/vue) - Unstyled, accessible UI components
- **Nuxt Icon** - Iconify integration (using Lucide icons)
- **Nuxt Image** - Optimized image loading with CloudFlare CDN
- **Nuxt Fonts** - Custom "Neue Einstellung" font family

### Animation & Interaction
- **GSAP** (@hypernym/nuxt-gsap v2.4.3) - ScrollTrigger and ScrollSmoother for smooth scrolling
- **Keen Slider** - Touch-enabled image carousels for mobile
- **AOS** (Animate On Scroll) - Scroll-based animations

### Payment Processing
- **Stripe.js** (@stripe/stripe-js v8.4.0) - Card payment processing
- **PayPal** - Alternative payment method
- **Custom encryption** - AES-256-CBC for secure payment token handling

### Forms & Validation
- **VeeValidate** (v4.15.1) - Form validation with schema support

### Analytics & Compliance
- **Google Analytics** (nuxt-gtag v4.1.0) - With Google Consent Mode v2
- **Cookie Control** - GDPR-compliant cookie consent management

### Development Tools
- **ESLint** (@nuxt/eslint v1.5.2) - Code linting
- **Nodemailer** - Contact form email handling

## Project Structure

```
earthman-web/
├── pages/                      # File-based routing
│   ├── index.vue              # Homepage
│   ├── shop/                  # Shop pages
│   │   └── index.vue          # Shop listing with filters
│   ├── collections/           # Collection pages
│   │   ├── index.vue          # Collections overview
│   │   └── [...slug].vue     # Dynamic collection page
│   ├── product/               # Product pages
│   │   └── [collection]/[...product].vue
│   ├── cart.vue               # Cart page
│   ├── checkout.vue           # Checkout form
│   ├── payment/               # Payment pages
│   │   ├── card.vue           # Stripe card payment
│   │   └── paypal/
│   │       ├── success.vue    # PayPal success redirect
│   │       └── cancel.vue     # PayPal cancel redirect
│   ├── thank-you.vue          # Order confirmation
│   ├── about/                 # About pages
│   ├── contact.vue            # Contact form
│   ├── privacy-policy.vue     # Privacy policy
│   ├── cookie-policy.vue      # Cookie policy
│   └── terms-conditions.vue   # Terms and conditions
│
├── components/                # Vue components
│   ├── Cart/                  # Cart-related components
│   │   └── CartPanel.vue      # Slide-out cart drawer
│   ├── Checkout/              # Checkout components
│   │   ├── CheckoutForm.vue   # Main checkout form
│   │   └── PaymentMethodSelector.vue
│   ├── Filters/               # Product filtering
│   │   ├── FilterPanel.vue    # Filter sidebar
│   │   └── FilterTag.vue      # Active filter tags
│   ├── Navigation/            # Navigation components
│   │   ├── Navbar.vue         # Desktop navigation
│   │   └── MobileMenu.vue     # Mobile drawer menu
│   ├── Products/              # Product components
│   │   ├── ProductCard.vue    # Product grid item
│   │   ├── ProductGallerySlider.vue  # Image gallery
│   │   ├── ProductVariantSelector.vue
│   │   └── ProductListing.vue # Product grid
│   ├── CookieControl.vue      # Cookie consent UI
│   ├── Toast.vue              # Toast notifications
│   └── ...
│
├── composables/               # Reusable composition functions
│   ├── useCartSession.ts      # Cart session cookie management
│   ├── useStripe.ts           # Stripe initialization
│   ├── useToast.ts            # Toast notification system
│   ├── useImageTransform.ts   # CloudFlare CDN image transforms
│   └── useScrollSmootherPanels.ts  # GSAP ScrollSmoother control
│
├── stores/                    # Pinia stores
│   └── cart.ts               # Cart state management
│
├── server/                    # Nitro server routes
│   ├── api/                   # API endpoints
│   │   ├── private/           # Cart management endpoints
│   │   │   ├── get/cart.ts   # Get cart items
│   │   │   ├── put/cart.ts   # Add/update cart item
│   │   │   ├── delete/cart.ts # Remove cart item
│   │   │   └── cart/clear.ts  # Clear cart
│   │   ├── orders/
│   │   │   └── create.ts     # Create order
│   │   ├── payment/
│   │   │   ├── initialize.ts # Decrypt payment token
│   │   │   ├── get-client-secret.ts # Get Stripe secret
│   │   │   └── verify.ts     # Verify payment
│   │   └── contact.ts        # Contact form handler
│   └── utils/
│       └── paymentToken.ts   # AES encryption utilities
│
├── layouts/                   # Layout components
│   └── default.vue           # Main layout with smooth scrolling
│
├── plugins/                   # Nuxt plugins
│   └── cartSession.client.ts # Initialize cart session on load
│
├── assets/                    # Static assets
│   └── css/
│       ├── components/
│       │   └── buttons.css   # Custom button styles
│       └── tailwind.css      # Tailwind imports
│
├── i18n/                     # Internationalization
│   └── locales/
│       └── en.json           # English translations
│
├── public/                   # Static public files
│
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Key Features

### 1. Product Catalog
- Multi-variant products (size, color)
- High-quality image galleries with zoom
- Product filtering by gender, collection, category, size, color
- Responsive product grids
- Discount pricing support
- Related products suggestions

### 2. Shopping Cart
- **Persistent cart** using session cookies (7-day expiration)
- Real-time cart updates with optimistic UI
- Quantity management
- Slide-out cart panel
- Cart item removal
- Total price calculation
- Cross-session cart recovery

### 3. Checkout Flow
- Multi-step checkout process
- Billing and delivery address forms
- Form validation with VeeValidate
- Payment method selection (Card/PayPal)
- Email confirmation
- Order summary display

### 4. Payment Processing
- **Stripe Integration**: Card payments with Stripe Elements
- **PayPal Integration**: Redirect-based PayPal checkout
- **Security**: Encrypted payment tokens (AES-256-CBC)
- Server-side payment verification
- Webhook integration for payment confirmation
- Order status tracking

### 5. User Experience
- **Smooth scrolling** with GSAP ScrollSmoother
- **Responsive design** - Mobile-first approach
- **Touch-optimized** image sliders on mobile
- **Toast notifications** for cart actions
- **Loading states** and optimistic updates
- **Accessibility** - ARIA labels, keyboard navigation

### 6. Performance
- **ISR (Incremental Static Regeneration)** for product pages
- **Image optimization** via CloudFlare CDN
- **Code splitting** by route
- **Lazy loading** for heavy dependencies
- **Compression** (gzip + brotli)
- **Caching strategies** for API calls

### 7. Compliance
- **GDPR-compliant** cookie consent
- **Google Consent Mode v2** integration
- Cookie policy and privacy policy pages
- Terms and conditions

## Architecture Patterns

### Frontend Architecture

```
┌─────────────────┐
│   Nuxt 3 App    │
│  (Vue 3 + TS)   │
└────────┬────────┘
         │
    ┌────┴────┐
    │  Pinia  │  (State Management)
    └────┬────┘
         │
┌────────┴────────┐
│ Nuxt Server API │  (Middleware Layer)
└────────┬────────┘
         │
┌────────┴────────┐
│  Django REST    │  (Backend API)
│   PythonAnywhere│
└────────┬────────┘
         │
    ┌────┴────┐
    │Database │
    │ Stripe  │
    │ PayPal  │
    └─────────┘
```

### Key Patterns

#### 1. Session-Based Cart
- Uses `cart_session_id` cookie (httpOnly, 7-day expiration)
- Generated on client with cryptographically secure random ID
- Forwarded to Django backend for cart persistence
- No user authentication required (guest checkout)

#### 2. Optimistic UI Updates
```typescript
// Store pattern: Update immediately, rollback on error
const oldQuantity = item.quantity
item.quantity = newQuantity
try {
  await $fetch('/api/private/put/cart', { ... })
} catch (error) {
  item.quantity = oldQuantity // Rollback
  showToast('Failed to update cart')
}
```

#### 3. Encrypted Payment Flow
```typescript
// 1. Create order (server-side)
const { payment_id } = await $fetch('/api/orders/create', {
  body: { cart, billing, delivery, payment_method }
})

// 2. payment_id is encrypted token containing:
//    - client_secret (Stripe)
//    - paypal_approval_url
//    - order_reference
//    - amount
//    - expiration (1 hour)

// 3. Navigate to payment page with token
navigateTo(`/payment/card?payment_id=${payment_id}`)

// 4. Payment page decrypts token server-side
const { client_secret } = await $fetch('/api/payment/initialize', {
  body: { payment_id }
})

// 5. Process payment, verify server-side
await $fetch('/api/payment/verify', { body: { payment_id } })
```

**Security Benefits**:
- Client never sees sensitive payment data
- Token tampering prevented by HMAC
- Time-limited tokens (1 hour expiration)
- Server-side verification before order completion

#### 4. Image Optimization Pattern
```typescript
// CloudFlare CDN transforms
const { getResponsiveImages } = useImageTransform()

const images = getResponsiveImages(
  originalUrl,
  [400, 800, 1200], // Widths
  '(max-width: 1023px) 100vw, 66vw' // Sizes
)
// Returns: { src, srcset, sizes }
```

#### 5. State Management with Pinia
```typescript
// stores/cart.ts
export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const totals = ref({ toPay: '0.00' })
  const loading = ref(false)
  const lastFetched = ref<number | null>(null)

  // 30-second cache to prevent excessive API calls
  const fetchCart = async (force = false) => {
    const now = Date.now()
    if (!force && lastFetched.value && now - lastFetched.value < 30000) {
      return // Use cached data
    }
    // ... fetch from API
  }

  return { items, totals, loading, fetchCart, addToCart, ... }
})
```

#### 6. Responsive Component Pattern
```vue
<!-- Desktop/Mobile variants -->
<template>
  <!-- Desktop -->
  <div class="hidden lg:block">
    <DesktopProductGallery />
  </div>

  <!-- Mobile -->
  <div class="lg:hidden">
    <MobileProductSlider />
  </div>
</template>
```

## API Integration

### Backend API
- **Base URL**: `https://earthmanweb.pythonanywhere.com/api/`
- **Framework**: Django REST Framework
- **Authentication**: Session-based cart (no user auth)

### Nuxt Server Routes (Proxy Layer)

#### Cart Management
```typescript
GET  /api/private/get/cart          // Fetch cart items
PUT  /api/private/put/cart          // Add/update item
DELETE /api/private/delete/cart     // Remove item
DELETE /api/private/cart/clear      // Clear cart
```

#### Order & Payment
```typescript
POST /api/orders/create             // Create order, returns encrypted payment_id
POST /api/payment/initialize        // Decrypt payment token
POST /api/payment/get-client-secret // Get Stripe client secret
POST /api/payment/verify            // Verify payment completion
```

#### Contact
```typescript
POST /api/contact                   // Send contact form email
```

### Example API Call
```typescript
// Add to cart
await $fetch('/api/private/put/cart', {
  method: 'PUT',
  body: {
    product_id: productId,
    quantity: 1,
    variant_id: variantId
  }
})
```

## Development Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn or pnpm

### Environment Variables
Create a `.env` file in the root directory:

```bash
# Backend API
NUXT_PUBLIC_API_BASE_URL=https://earthmanweb.pythonanywhere.com/api

# Stripe (Public key for frontend)
NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# Payment Encryption (Server-side)
PAYMENT_TOKEN_KEY=your-32-byte-encryption-key
PAYMENT_TOKEN_IV=your-16-byte-iv

# Email (Nodemailer)
NUXT_GMAIL_USER=your-email@gmail.com
NUXT_GMAIL_PASS=your-app-password

# Google Analytics
NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run typecheck
```

### Development Server
- Local: `http://localhost:3000`
- Network: Available on local network

## Important Files

### Configuration Files

#### `nuxt.config.ts`
Main Nuxt configuration:
- Modules setup (Tailwind, Pinia, i18n, etc.)
- Route rules with ISR caching
- Build optimization (code splitting)
- SEO defaults
- Environment variables
- GSAP and animation setup

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@hypernym/nuxt-gsap',
    'nuxt-gtag',
    // ... more modules
  ],

  routeRules: {
    '/product/**': { isr: 3600 }, // ISR with 1-hour revalidation
    '/shop/**': { isr: 1800 },
    // ...
  }
})
```

#### `tailwind.config.js`
Tailwind CSS configuration:
- Custom colors (beige, black)
- Extended spacing, font sizes
- Custom animations (sweep)
- Responsive breakpoints

### Key Components

#### `stores/cart.ts`
Central cart state management with:
- Optimistic updates
- Error handling with rollback
- 30-second cache
- Event emission for cross-component updates

#### `composables/useCartSession.ts`
Cart session cookie management:
- Generates secure session ID
- Sets 7-day expiration cookie
- Used for anonymous cart persistence

#### `composables/useToast.ts`
Global toast notification system:
- Success/error/info toasts
- Customizable duration
- Action buttons support

#### `server/utils/paymentToken.ts`
Payment security utilities:
- `encryptPaymentToken()` - AES-256-CBC encryption with HMAC
- `decryptPaymentToken()` - Decryption with verification
- Token expiration validation

### Critical Pages

#### `pages/checkout.vue`
Checkout form with:
- Billing/delivery address collection
- Form validation (VeeValidate)
- Payment method selection
- Order creation and payment token generation

#### `pages/payment/card.vue`
Stripe payment processing:
- Stripe Elements mounting
- Payment confirmation
- Server-side verification
- Error handling and retry logic

#### `pages/product/[collection]/[...product].vue`
Product detail page with:
- Image gallery (desktop) or slider (mobile)
- Variant selection (size, color)
- Add to cart functionality
- Related products

## Deployment

### Frontend (Vercel)
```bash
# Vercel deployment (automatic via Git)
npm run build

# Preview deployment
vercel

# Production deployment
vercel --prod
```

**Vercel Configuration**:
- Build command: `npm run build`
- Output directory: `.output/public`
- Preset: `vercel` (configured in nuxt.config.ts)

### Backend (PythonAnywhere)
- Django application running on PythonAnywhere
- URL: `https://earthmanweb.pythonanywhere.com`
- Stripe webhooks configured for payment verification

### Environment Variables (Vercel)
Set in Vercel dashboard:
- `NUXT_PUBLIC_API_BASE_URL`
- `NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `PAYMENT_TOKEN_KEY`
- `PAYMENT_TOKEN_IV`
- `NUXT_GMAIL_USER`
- `NUXT_GMAIL_PASS`
- `NUXT_PUBLIC_GTAG_ID`

## Code Conventions

### TypeScript Interfaces
All data structures are strongly typed:

```typescript
interface Product {
  id: number
  name: string
  slug: string
  price: string
  discount_price: string | null
  images: ProductImage[]
  variants: ProductVariant[]
  collection: Collection
  // ...
}

interface CartItem {
  id: number
  product: string
  variant: number
  quantity: number
  item_total: string
  selected_variant: ProductVariant
}
```

### Component Structure
```vue
<script setup lang="ts">
// Props with TypeScript interfaces
interface Props {
  product: Product
  variant?: ProductVariant | null
}

const props = defineProps<Props>()

// Composables
const cartStore = useCartStore()
const { showToast } = useToast()

// Reactive state
const selectedSize = ref<string | null>(null)

// Methods
const addToCart = async () => {
  // ...
}
</script>

<template>
  <!-- Template -->
</template>

<style scoped>
/* Scoped styles */
</style>
```

### Naming Conventions
- **Components**: PascalCase (`ProductCard.vue`)
- **Composables**: camelCase with `use` prefix (`useCartSession.ts`)
- **Stores**: camelCase (`cart.ts`)
- **API Routes**: kebab-case (`get-client-secret.ts`)
- **CSS Classes**: Tailwind utilities + custom BEM-style (`.btn--primary`)

### Error Handling
```typescript
try {
  const response = await $fetch('/api/endpoint')
  // Success handling
} catch (error: any) {
  console.error('Operation failed:', error)
  showToast(error.data?.message || 'An error occurred', 'error')
  // Rollback changes if needed
}
```

## Performance Optimizations

1. **Route-based ISR**: Product and shop pages cached with 30-60 minute revalidation
2. **Image CDN**: CloudFlare transforms with responsive srcsets
3. **Code splitting**: Manual chunks for GSAP, Stripe, and vendor libraries
4. **Lazy loading**: Heavy dependencies loaded on-demand
5. **API caching**: 30-second client-side cache in Pinia store
6. **Optimistic UI**: Immediate feedback, API call in background
7. **Compression**: Brotli and gzip enabled
8. **Static asset caching**: 1-year cache headers

## Testing

Currently, there are no automated tests in the codebase. Consider adding:
- Unit tests with Vitest
- Component tests with Vue Test Utils
- E2E tests with Playwright or Cypress

## Common Tasks

### Adding a New Page
1. Create file in `pages/` directory
2. Use `definePageMeta()` for SEO
3. Follow existing layout patterns

### Adding a New Component
1. Create in appropriate `components/` subdirectory
2. Define TypeScript interfaces for props
3. Use Composition API with `<script setup>`
4. Apply Tailwind for styling

### Modifying Cart Logic
1. Update `stores/cart.ts` for state changes
2. Update server routes in `server/api/private/` if needed
3. Test optimistic updates and error rollback

### Adding New Payment Method
1. Create order in `server/api/orders/create.ts`
2. Add payment details to encrypted token
3. Create payment page in `pages/payment/`
4. Add verification endpoint in `server/api/payment/`

## Troubleshooting

### Cart not persisting
- Check `cart_session_id` cookie is being set
- Verify cookie is forwarded to Django backend
- Check backend API is accessible

### Payment failing
- Verify environment variables (`PAYMENT_TOKEN_KEY`, etc.)
- Check Stripe publishable key is correct
- Ensure payment token hasn't expired (1 hour limit)
- Check Django backend Stripe webhooks

### Animations not working
- Ensure GSAP plugins are loaded
- Check ScrollSmoother initialization in layout
- Verify `smooth-wrapper` and `smooth-content` classes

### Images not loading
- Check CloudFlare CDN is accessible
- Verify image URLs from backend are correct
- Check `useImageTransform` composable configuration

## Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Stripe Documentation](https://stripe.com/docs)
- [GSAP Documentation](https://greensock.com/docs/)

## Support

For questions or issues:
- Check Django backend logs on PythonAnywhere
- Check Vercel deployment logs
- Review browser console for client-side errors
- Check Stripe dashboard for payment issues

---

**Last Updated**: 2025-12-30
**Nuxt Version**: 3.17.7
**Node Version**: 18+ or 20+
