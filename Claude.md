# Earthman Web - Nuxt 3 E-commerce Platform

## Project Overview

Earthman Web is a modern, production-ready e-commerce platform built with Nuxt 3, featuring a complete shopping experience with advanced product filtering, secure payment processing, and smooth animations. The project uses a headless architecture with a Django REST API backend and Nuxt 3 frontend.

### Key Characteristics
- **Type**: E-commerce webshop (clothing/fashion)
- **Framework**: Nuxt 3 (v3.17.7) with Vue 3 Composition API
- **Styling**: Tailwind CSS with custom components
- **Language**: TypeScript
- **Architecture**: JAMstack with server-side API routes

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

## Recommended Improvements

This section outlines critical improvements and issues identified in the codebase, organized by priority level.

### 🔴 CRITICAL PRIORITY

#### Security Issues

**1. Hardcoded Encryption Key in Version Control**
- **File:** `nuxt.config.ts:12`
- **Issue:** Payment encryption key is hardcoded and exposed in the codebase
- **Risk:** Complete compromise of payment encryption security
- **Fix:**
```typescript
// BEFORE (INSECURE)
paymentEncryptionKey: 'fada803edc9b334ffa99e94a3ef4433890d15afd5c0deec175bc86e5e96ec4f1',

// AFTER (SECURE)
paymentEncryptionKey: process.env.PAYMENT_ENCRYPTION_KEY || '',
```
- **Action:** Move to environment variable immediately, rotate the key

**2. Exposed Stripe Keys**
- **File:** `nuxt.config.ts:17`
- **Issue:** Stripe keys hardcoded (should use environment variables)
- **Risk:** Keys can't be rotated without code changes
- **Fix:**
```typescript
public: {
  stripePublishableKey: process.env.NUXT_PUBLIC_STRIPE_KEY || '',
}
```

**3. Missing CSRF Protection**
- **Files:** All API routes (`/server/api/`)
- **Issue:** No CSRF token validation on state-changing operations
- **Risk:** Cross-site request forgery attacks on cart, checkout, and payments
- **Fix:** Implement CSRF middleware
```typescript
// server/middleware/csrf.ts
export default defineEventHandler(async (event) => {
  if (['POST', 'PUT', 'DELETE'].includes(event.method)) {
    const token = getCookie(event, 'csrf_token')
    const header = getHeader(event, 'x-csrf-token')

    if (!token || token !== header) {
      throw createError({
        statusCode: 403,
        message: 'Invalid CSRF token'
      })
    }
  }
})
```

**4. No Rate Limiting**
- **Files:** All API routes
- **Issue:** No rate limiting on any endpoints
- **Risk:** Brute force attacks, DoS, enumeration attacks
- **Fix:** Add rate limiting using `nuxt-rate-limit`
```typescript
// nuxt.config.ts
rateLimit: {
  routes: {
    '/api/orders/create': { maxRequests: 5, intervalSeconds: 60 },
    '/api/contact': { maxRequests: 3, intervalSeconds: 300 },
    '/api/private/put/cart': { maxRequests: 20, intervalSeconds: 60 }
  }
}
```

**5. Weak Email Validation**
- **File:** `components/CheckoutForm.vue:55-59`
- **Issue:** Permissive regex allows invalid emails
- **Current:** `/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i`
- **Fix:** Use proper email validation library or stricter regex

**6. Missing Input Sanitization**
- **File:** `server/api/contact.post.ts`
- **Issue:** User input directly used in email without HTML sanitization
- **Risk:** Email injection, XSS in email clients
- **Fix:** Sanitize all user input before using in emails

**7. Client-Controlled Shipping Cost**
- **File:** `server/api/orders/create.post.ts:32-37`
- **Issue:** Shipping cost accepted from client without server-side verification
- **Risk:** Users can manipulate shipping costs to $0
- **Impact:** Direct financial loss
- **Fix:** Calculate shipping server-side based on cart weight/destination

**8. Cart Session Cookie Not HttpOnly**
- **File:** `plugins/session.client.ts:43`
- **Issue:** `httpOnly: false` allows JavaScript access
- **Risk:** XSS attacks can steal session IDs
- **Fix:** Set `httpOnly: true` and handle cart operations server-side

**9. Missing Content Security Policy (CSP)**
- **File:** `nuxt.config.ts`
- **Issue:** No CSP headers configured
- **Risk:** XSS attacks, data injection
- **Fix:** Add CSP headers
```typescript
app: {
  head: {
    meta: [
      {
        'http-equiv': 'Content-Security-Policy',
        content: "default-src 'self'; script-src 'self' 'unsafe-inline' js.stripe.com; ..."
      }
    ]
  }
}
```

---

### 🟠 HIGH PRIORITY

#### Security & Architecture

**10. Missing User Authentication System**
- **Impact:** No user accounts, order history, or saved addresses
- **Required Features:**
  - Login/Register functionality
  - Password reset flow
  - Email verification
  - OAuth integration (Google, Facebook)
  - Protected routes
  - User profile management

**11. No Request Size Limits**
- **Issue:** API endpoints don't validate request body size
- **Risk:** DoS attacks with large payloads
- **Fix:** Add body size limits in server middleware

**12. Weak Session ID Generation Fallback**
- **File:** `plugins/session.client.ts:22-26`
- **Issue:** Falls back to `Math.random()` if crypto unavailable
- **Risk:** Predictable session IDs
- **Fix:** Refuse to operate if crypto unavailable

**13. Missing Request Validation**
- **File:** `server/api/private/put/cart.put.ts`
- **Issue:** No maximum quantity check
- **Risk:** Users can add 999999 items
- **Fix:** Add max quantity validation (e.g., 99 per item)

**14. Error Information Exposure**
- **Multiple files:** Backend error details potentially exposed to client
- **Risk:** Information disclosure
- **Fix:** Sanitize all error messages before sending to client

#### Code Quality

**15. TypeScript Type Safety Gaps**
- **File:** `stores/cart.ts:80`
- **Issue:** Using `any` type defeats TypeScript benefits
```typescript
// BEFORE
const data = await $fetch<any>('/api/private/get/cart')

// AFTER
const data = await $fetch<CartData>('/api/private/get/cart')
```

**16. Duplicate Interface Definitions**
- **Files:** `stores/cart.ts`, `pages/checkout.vue`, `components/CartPanel.vue`
- **Issue:** Same `CartItem` interface defined 3+ times
- **Fix:** Create shared types directory
```typescript
// types/cart.ts
export interface CartItem {
  product: string
  product_slug: string
  avatar_image: string
  size?: string
  quantity: number
  unit_price_original: string
  unit_price_discounted: string
}

export interface CartData {
  items: CartItem[]
  cart_total_to_pay: string
}
```

**17. Console Logs in Production**
- **Issue:** 100+ console.log/error/warn statements throughout codebase
- **Files:** Multiple files including API routes and stores
- **Fix:** Remove all debug logs or use proper logging service

**18. No Error Boundaries**
- **File:** `app.vue`
- **Issue:** No error boundary to catch runtime errors
- **Impact:** App crashes show blank page
- **Fix:** Add Vue error handler

**19. No API Response Validation**
- **Issue:** API responses not validated at runtime
- **Risk:** Runtime errors if API returns unexpected data
- **Fix:** Use Zod or similar for runtime validation

#### Performance

**20. Client-Side Only Rendering**
- **File:** `app.vue:2-5`
- **Issue:** Entire app wrapped in `<ClientOnly>` - no SSR benefits
```vue
<ClientOnly>
  <NuxtPage />
</ClientOnly>
```
- **Impact:** Poor initial load performance, terrible SEO
- **Fix:** Remove ClientOnly wrapper, fix hydration issues

**21. Bundle Size - No Dynamic GSAP Loading**
- **Issue:** GSAP loaded on all pages even when not needed
- **Fix:** Use dynamic imports for pages that need animations
```typescript
// Only on pages with animations
const { gsap } = await import('gsap')
```

**22. Missing Image Lazy Loading**
- **Issue:** Many images missing `loading="lazy"` attribute
- **Impact:** Slower initial page load
- **Fix:** Add lazy loading to all below-fold images

**23. No Image Preloading**
- **Issue:** No preload for above-the-fold images
- **Fix:** Add preload links for hero images in page head

---

### 🟡 MEDIUM PRIORITY

#### SEO Issues

**24. Missing Dynamic Meta Tags**
- **Files:** All product/shop pages
- **Issue:** No `useSeoMeta()` or `useHead()` calls with product-specific data
- **Missing:** Product titles, descriptions, OpenGraph tags, Twitter cards
- **Fix:** Add SEO meta tags to all pages
```typescript
// pages/product/[collection]/[...product].vue
useSeoMeta({
  title: () => `${productName.value} - Earthman`,
  description: () => product.value?.description?.substring(0, 160),
  ogTitle: () => productName.value,
  ogImage: () => product.value?.images[0],
  ogType: 'product',
  twitterCard: 'summary_large_image',
})
```

**25. Missing Structured Data (JSON-LD)**
- **Issue:** No schema.org markup for products, breadcrumbs, organization
- **Impact:** Lost rich snippets in search results
- **Fix:** Add JSON-LD structured data
```typescript
useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: productName.value,
      image: product.value?.images,
      offers: {
        '@type': 'Offer',
        price: product.value?.price,
        priceCurrency: 'EUR',
      }
    })
  }]
})
```

**26. No Sitemap Generation**
- **Issue:** No sitemap.xml for search engines
- **Fix:** Add `@nuxtjs/sitemap` module

**27. Missing robots.txt**
- **Issue:** No robots.txt to control crawler access
- **Fix:** Create `public/robots.txt`

#### Accessibility

**28. Cart Count Not Announced to Screen Readers**
- **File:** Navigation cart icon
- **Issue:** Count badge not announced to screen readers
- **Fix:** Add `role="status"` and `aria-live="polite"` to count badge

**29. Color-Only Selection Indicators**
- **File:** `pages/product/[collection]/[...product].vue`
- **Issue:** Color/size selection only indicated visually
- **Fix:** Add `aria-selected` or `aria-pressed` states

**30. Missing Skip Links**
- **All pages**
- **Issue:** No "Skip to main content" link for keyboard users
- **Fix:** Add skip link before navigation
```vue
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**31. Form Errors Need Role="alert"**
- **File:** `components/CheckoutForm.vue`
- **Issue:** Error containers should announce to screen readers
- **Fix:** Add `role="alert"` to error messages

**32. Insufficient Focus Indicators**
- **Issue:** Custom buttons may have insufficient focus styles
- **Fix:** Ensure 3:1 contrast ratio for all focus indicators

#### UX Issues

**33. Generic Error Messages**
- **Multiple files**
- **Issue:** Generic fallback messages don't help users
- **Example:** "Could not create order. Please try again."
- **Fix:** Provide specific, actionable error messages

**34. No Form Autosave**
- **File:** `pages/checkout.vue`
- **Issue:** If user accidentally navigates away, form data is lost
- **Fix:** Save form data to localStorage on input change

**35. Missing Empty States**
- **File:** `pages/shop/index.vue`
- **Issue:** No empty state when filters return no results
- **Fix:** Show helpful message with "Clear filters" button

**36. No Loading Skeletons**
- **Multiple pages**
- **Issue:** Blank space while loading data
- **Fix:** Add skeleton screens for better perceived performance

**37. Typo in Thank You Page**
- **File:** `pages/thank-you.vue:59`
- **Issue:** "Continue shoping" should be "Continue shopping"

---

### 🟢 LOW PRIORITY

#### Missing Features

**38. No Search Functionality**
- Product search with autocomplete
- Search suggestions
- Recent searches

**39. No Product Reviews & Ratings**
- Customer reviews
- Star ratings
- Review moderation
- Helpful/not helpful voting

**40. No Wishlist/Favorites**
- Save products for later
- Share wishlist
- Wishlist notifications (price drops)

**41. No Order History**
- View past orders
- Track shipments
- Reorder functionality
- Download invoices

**42. No Product Comparison**
- Compare multiple products side-by-side
- Comparison table

**43. No Related/Recommended Products**
- "You may also like" suggestions
- Recently viewed items
- Frequently bought together

**44. No Discount Code System**
- Promo codes
- Coupon management
- Automatic discounts
- First-time buyer discounts

**45. No Email Order Confirmations**
- Order confirmation emails
- Shipping notifications
- Delivery confirmations

**46. No Newsletter System**
- Email newsletter signup
- Marketing campaigns
- Abandoned cart emails

**47. No Admin Panel**
- Product management interface
- Order management
- Customer management
- Analytics dashboard

#### Code Organization

**48. Missing Shared Types Directory**
- **Fix:** Create `types/` directory with:
  - `types/cart.ts`
  - `types/product.ts`
  - `types/order.ts`
  - `types/api.ts`

**49. No Utils Directory**
- **Fix:** Create `utils/` directory with:
  - `utils/validation.ts`
  - `utils/formatting.ts`
  - `utils/constants.ts`

**50. Inconsistent File Naming**
- Some use kebab-case, some PascalCase
- **Fix:** Standardize on one convention

**51. Missing Documentation**
- No JSDoc comments on functions
- No inline documentation
- **Fix:** Add JSDoc to all public functions

#### Configuration

**52. Hardcoded Business Logic**
- **File:** `pages/checkout.vue:19-20`
```typescript
const FREE_THRESHOLD = 200
const FLAT_SHIPPING = 12.99
```
- **Issue:** Business rules hardcoded
- **Fix:** Move to config file or fetch from API

**53. No Environment Validation**
- **Issue:** No check that required env vars are set
- **Fix:** Validate on app startup

---

## Testing

**Current State:** Zero test coverage - no tests exist in the codebase.

### Required Test Coverage

**Critical Paths That Need Tests:**

1. **Cart Operations** (`stores/cart.ts`)
   - Adding items
   - Removing items
   - Updating quantities
   - Optimistic updates and rollback
   - Error handling

2. **Checkout Flow** (`pages/checkout.vue`)
   - Form validation
   - Shipping cost calculation
   - Order creation
   - Error states

3. **Payment Processing** (`pages/payment/card.vue`)
   - Stripe integration
   - Token decryption
   - Payment verification
   - Error handling

4. **Form Validation** (`components/CheckoutForm.vue`)
   - Email validation
   - Required field validation
   - Phone number validation
   - Postal code validation

5. **API Routes** (`server/api/`)
   - Request validation
   - Error responses
   - Authorization checks

### Recommended Test Structure

```
tests/
├── unit/
│   ├── stores/
│   │   └── cart.spec.ts
│   ├── composables/
│   │   ├── useToast.spec.ts
│   │   ├── useCartSession.spec.ts
│   │   └── useStripe.spec.ts
│   └── utils/
│       ├── validation.spec.ts
│       └── paymentToken.spec.ts
├── integration/
│   ├── checkout-flow.spec.ts
│   ├── cart-operations.spec.ts
│   └── payment-flow.spec.ts
└── e2e/
    ├── complete-purchase.spec.ts
    ├── product-browsing.spec.ts
    └── cart-management.spec.ts
```

### Testing Tools to Add
- **Unit Tests:** Vitest
- **Component Tests:** Vue Test Utils + Vitest
- **E2E Tests:** Playwright or Cypress
- **Coverage:** Aim for minimum 70% coverage

---

## Immediate Action Plan

### This Week
1. ✅ **Move all secrets to environment variables** (CRITICAL)
2. ✅ **Rotate the exposed encryption key** (CRITICAL)
3. ✅ **Add CSRF protection** (CRITICAL)
4. ✅ **Implement rate limiting** (CRITICAL)
5. ✅ **Fix client-controlled shipping cost** (CRITICAL)
6. ✅ **Create shared types directory** (HIGH)

### This Month
1. **Add comprehensive testing** (minimum 70% coverage)
2. **Implement user authentication system**
3. **Fix SEO meta tags on all pages**
4. **Add structured data (JSON-LD)**
5. **Remove all console.log statements**
6. **Fix accessibility issues**
7. **Remove ClientOnly wrapper for SSR**

### Ongoing
- Improve error messages to be specific and actionable
- Add loading states and skeletons
- Implement proper logging service
- Add monitoring and error tracking (Sentry)
- Regular security audits
- Performance monitoring

---

## Security Checklist Before Production

- [ ] All secrets moved to environment variables
- [ ] Encryption keys rotated
- [ ] CSRF protection implemented
- [ ] Rate limiting on all endpoints
- [ ] Input validation on all forms
- [ ] Server-side validation for all business logic
- [ ] HttpOnly cookies for sessions
- [ ] Content Security Policy configured
- [ ] HTTPS enforced
- [ ] Security headers configured (HSTS, X-Frame-Options, etc.)
- [ ] Dependency vulnerabilities checked (`npm audit`)
- [ ] Penetration testing completed
- [ ] PCI DSS compliance verified (for payment processing)

**⚠️ WARNING:** This codebase has a solid foundation but requires significant security hardening before production use with real customers and payments.

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
- Review browser console for client-side errors
- Check Stripe dashboard for payment issues
- Review server API logs for backend errors

---

**Last Updated**: 2025-12-30
**Nuxt Version**: 3.17.7
**Node Version**: 18+ or 20+
