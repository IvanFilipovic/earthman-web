# i18n Implementation Guide

This document provides instructions for implementing i18n translations throughout the Earthman web application.

## What's Already Done

✅ Created comprehensive `i18n/locales/en.json` with 500+ translation keys
✅ Configured Nuxt i18n in `nuxt.config.ts`
✅ Updated `components/CartPanel.vue` as a complete example

## Translation File Structure

The translations in `i18n/locales/en.json` are organized by context:

```
common.*          - Shared text (HOME, SHOP, loading, error, etc.)
nav.*             - Navigation elements
footer.*          - Footer content
cart.*            - Cart panel and cart-related text
checkout.*        - Checkout page
product.*         - Product pages
contact.*         - Contact page
faq.*             - FAQ page
sizeGuide.*       - Size guide page
deliveryReturns.* - Delivery & returns page
payment.*         - Payment pages
thankYou.*        - Thank you page
newsletter.*      - Newsletter component
filterPanel.*     - Filter panel component
cookieControl.*   - Cookie control component
toast.*           - Toast notifications
```

## How to Implement i18n in Components/Pages

### Basic Pattern

Replace hardcoded strings with `$t()` function calls:

**Before:**
```vue
<h1>Shopping Cart</h1>
<button>Checkout</button>
<p>Your cart is empty.</p>
```

**After:**
```vue
<h1>{{ $t('cart.title') }}</h1>
<button>{{ $t('cart.checkout') }}</button>
<p>{{ $t('cart.empty') }}</p>
```

### Conditional Text

**Before:**
```vue
{{ isLoading ? 'Loading...' : 'Submit' }}
```

**After:**
```vue
{{ $t(isLoading ? 'common.loading' : 'common.submit') }}
```

### Pluralization

**Before:**
```vue
{{ count }} {{ count === 1 ? 'item' : 'items' }}
```

**After:**
```vue
{{ count }} {{ $t(count === 1 ? 'cart.item' : 'cart.items') }}
```

### Attributes (aria-label, title, placeholder, etc.)

**Before:**
```vue
<button aria-label="Close cart">
  <input placeholder="Enter email">
</button>
```

**After:**
```vue
<button :aria-label="$t('cart.closeCart')">
  <input :placeholder="$t('contact.form.placeholders.email')">
</button>
```

### Dynamic Values

Use interpolation for dynamic values:

**Before:**
```vue
<p>Pay €{{ amount }}</p>
```

**After:**
```vue
<p>{{ $t('payment.card.pay', { amount }) }}</p>
```

And ensure the translation key supports interpolation:
```json
{
  "payment": {
    "card": {
      "pay": "Pay €{amount}"
    }
  }
}
```

### Currency Symbol

Use the common currency symbol for consistency:

**Before:**
```vue
€{{ price }}
```

**After:**
```vue
{{ $t('common.currency') }}{{ price }}
```

## Complete Example: CartPanel.vue

See `components/CartPanel.vue` for a fully implemented example. Key changes:

1. **Title and Header:**
   ```vue
   <DialogTitle>{{ $t('cart.title') }}</DialogTitle>
   ```

2. **Item Count with Pluralization:**
   ```vue
   {{ cartStore.itemCount }} {{ $t(cartStore.itemCount === 1 ? 'cart.item' : 'cart.items') }}
   ```

3. **Button States:**
   ```vue
   {{ $t(isRemoving(item) ? 'cart.removing' : 'cart.removeItem') }}
   ```

4. **Aria Labels:**
   ```vue
   :aria-label="$t('cart.closeCart')"
   ```

5. **Nested Keys:**
   ```vue
   {{ $t('cart.security.title') }}
   {{ $t('cart.security.description') }}
   ```

## Files to Update

### Priority 1 - Core User Flow (High Priority)
- [ ] `pages/checkout.vue` - Use `checkout.*` keys
- [ ] `components/CheckoutForm.vue` - Use `checkout.form.*` and `checkout.validation.*` keys
- [ ] `pages/product/[collection]/[...product].vue` - Use `product.*` keys
- [ ] `components/AppNavigation.vue` - Use `nav.*` keys
- [ ] `components/AppFooter.vue` - Use `footer.*` keys

### Priority 2 - Information Pages
- [ ] `pages/contact.vue` - Use `contact.*` keys
- [ ] `pages/faq.vue` - Use `faq.*` keys
- [ ] `pages/size-guide.vue` - Use `sizeGuide.*` keys
- [ ] `pages/delivery-returns.vue` - Use `deliveryReturns.*` keys

### Priority 3 - Payment & Confirmation
- [ ] `pages/payment/card.vue` - Use `payment.card.*` keys
- [ ] `pages/payment/paypal/success.vue` - Use `payment.paypal.*` keys
- [ ] `pages/payment/paypal/cancel.vue` - Use `payment.paypal.*` keys
- [ ] `pages/thank-you.vue` - Use `thankYou.*` keys

### Priority 4 - Additional Components
- [ ] `components/MobileMenu.vue` - Use `mobileMenu.*` and `nav.*` keys
- [ ] `components/FilterPanel.vue` - Use `filterPanel.*` keys
- [ ] `components/Newsletter.vue` - Use `newsletter.*` keys
- [ ] `components/CookieControl.vue` - Use `cookieControl.*` keys
- [ ] `components/AppToastContainer.vue` - Use `toast.*` keys

### Priority 5 - Shop & Collections
- [ ] `pages/shop/index.vue` - Use `shop.*` keys
- [ ] `pages/collections/index.vue` - Use `collections.*` keys
- [ ] `pages/collections/[...slug].vue` - Use `shop.genderFilter.*` keys

## Tips

1. **Search for Keys**: Use your IDE's find function to locate the translation key path. For example, search `en.json` for "Shopping Cart" to find `cart.title`.

2. **Nested Keys**: Use dot notation to access nested translation objects:
   ```vue
   {{ $t('cart.security.title') }}  // "Secure payment"
   {{ $t('cart.security.description') }}  // Full description
   ```

3. **Keep Structure**: Maintain the same HTML structure, only replace text content.

4. **Test As You Go**: Test each component after updating to ensure translations render correctly.

5. **Breadcrumbs**: Most pages have breadcrumbs - use the specific breadcrumb keys:
   ```vue
   {{ $t('checkout.breadcrumb.home') }}
   {{ $t('checkout.breadcrumb.shop') }}
   {{ $t('checkout.breadcrumb.checkout') }}
   ```

## Testing

After implementing i18n in components:

1. **Visual Check**: Load the page and verify all text displays correctly
2. **Check Interpolation**: Verify dynamic values (prices, counts, names) render properly
3. **Check States**: Test loading states, error states, and conditional text
4. **Check Accessibility**: Verify aria-labels and other accessibility attributes work

## Future: Adding More Languages

When ready to add more languages (e.g., Croatian, German):

1. Copy `i18n/locales/en.json` to `i18n/locales/hr.json` (or de.json, etc.)
2. Translate all values in the new file
3. Update `nuxt.config.ts` i18n.locales array:
   ```ts
   locales: [
     { code: 'en', name: 'English', file: 'en.json' },
     { code: 'hr', name: 'Hrvatski', file: 'hr.json' },
   ],
   ```
4. Add language switcher component (optional)

## Questions?

Refer to:
- [@nuxtjs/i18n documentation](https://i18n.nuxtjs.org/)
- `components/CartPanel.vue` - Complete working example
- `i18n/locales/en.json` - All available translation keys
