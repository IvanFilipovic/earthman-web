
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'AppFooter': typeof import("../../components/AppFooter.vue")['default']
    'AppHeader': typeof import("../../components/AppHeader.vue")['default']
    'AppNavigation': typeof import("../../components/AppNavigation.vue")['default']
    'BackgroundVideo': typeof import("../../components/BackgroundVideo.vue")['default']
    'CartPanel': typeof import("../../components/CartPanel.vue")['default']
    'Carusel': typeof import("../../components/Carusel.vue")['default']
    'CollectionHome': typeof import("../../components/CollectionHome.vue")['default']
    'CollectionListing': typeof import("../../components/CollectionListing.vue")['default']
    'CollectionShopListing': typeof import("../../components/CollectionShopListing.vue")['default']
    'CookieControl': typeof import("../../components/CookieControl.vue")['default']
    'Filter': typeof import("../../components/Filter.vue")['default']
    'FilterPanel': typeof import("../../components/FilterPanel.vue")['default']
    'HomePageListing': typeof import("../../components/HomePageListing.vue")['default']
    'InstagramGrid': typeof import("../../components/InstagramGrid.vue")['default']
    'MobileColorSlider': typeof import("../../components/MobileColorSlider.vue")['default']
    'MobileMenu': typeof import("../../components/MobileMenu.vue")['default']
    'Newsletter': typeof import("../../components/Newsletter.vue")['default']
    'ProductAccordion': typeof import("../../components/ProductAccordion.vue")['default']
    'ProductGallerySlider': typeof import("../../components/ProductGallerySlider.vue")['default']
    'ShopListing': typeof import("../../components/ShopListing.vue")['default']
    'ShopListingskeleton': typeof import("../../components/ShopListingskeleton.vue")['default']
    'Toast': typeof import("../../components/Toast.vue")['default']
    'Test': typeof import("../../components/test.vue")['default']
    'TestCollectionListing': typeof import("../../components/testCollectionListing.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtLinkLocale': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']
    'SwitchLocalePathLink': typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']
    'HeadlessCombobox': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']
    'HeadlessComboboxLabel': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']
    'HeadlessComboboxButton': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']
    'HeadlessComboboxInput': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']
    'HeadlessComboboxOptions': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']
    'HeadlessComboboxOption': typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']
    'HeadlessDialog': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']
    'HeadlessDialogOverlay': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']
    'HeadlessDialogBackdrop': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']
    'HeadlessDialogPanel': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']
    'HeadlessDialogTitle': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']
    'HeadlessDialogDescription': typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']
    'HeadlessDisclosure': typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']
    'HeadlessDisclosureButton': typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']
    'HeadlessDisclosurePanel': typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']
    'HeadlessFocusTrap': typeof import("../../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']
    'HeadlessListbox': typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']
    'HeadlessListboxLabel': typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']
    'HeadlessListboxButton': typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']
    'HeadlessListboxOptions': typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']
    'HeadlessListboxOption': typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']
    'HeadlessMenu': typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']
    'HeadlessMenuButton': typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']
    'HeadlessMenuItems': typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']
    'HeadlessMenuItem': typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']
    'HeadlessPopover': typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']
    'HeadlessPopoverButton': typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']
    'HeadlessPopoverOverlay': typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']
    'HeadlessPopoverPanel': typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']
    'HeadlessPopoverGroup': typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']
    'HeadlessPortal': typeof import("../../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']
    'HeadlessPortalGroup': typeof import("../../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']
    'HeadlessRadioGroup': typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']
    'HeadlessRadioGroupOption': typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']
    'HeadlessRadioGroupLabel': typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']
    'HeadlessRadioGroupDescription': typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']
    'HeadlessSwitchGroup': typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']
    'HeadlessSwitch': typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']
    'HeadlessSwitchLabel': typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']
    'HeadlessSwitchDescription': typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']
    'HeadlessTabGroup': typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']
    'HeadlessTabList': typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']
    'HeadlessTab': typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']
    'HeadlessTabPanels': typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']
    'HeadlessTabPanel': typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']
    'HeadlessTransitionChild': typeof import("../../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']
    'HeadlessTransitionRoot': typeof import("../../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']
    'ColorScheme': typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAppFooter': LazyComponent<typeof import("../../components/AppFooter.vue")['default']>
    'LazyAppHeader': LazyComponent<typeof import("../../components/AppHeader.vue")['default']>
    'LazyAppNavigation': LazyComponent<typeof import("../../components/AppNavigation.vue")['default']>
    'LazyBackgroundVideo': LazyComponent<typeof import("../../components/BackgroundVideo.vue")['default']>
    'LazyCartPanel': LazyComponent<typeof import("../../components/CartPanel.vue")['default']>
    'LazyCarusel': LazyComponent<typeof import("../../components/Carusel.vue")['default']>
    'LazyCollectionHome': LazyComponent<typeof import("../../components/CollectionHome.vue")['default']>
    'LazyCollectionListing': LazyComponent<typeof import("../../components/CollectionListing.vue")['default']>
    'LazyCollectionShopListing': LazyComponent<typeof import("../../components/CollectionShopListing.vue")['default']>
    'LazyCookieControl': LazyComponent<typeof import("../../components/CookieControl.vue")['default']>
    'LazyFilter': LazyComponent<typeof import("../../components/Filter.vue")['default']>
    'LazyFilterPanel': LazyComponent<typeof import("../../components/FilterPanel.vue")['default']>
    'LazyHomePageListing': LazyComponent<typeof import("../../components/HomePageListing.vue")['default']>
    'LazyInstagramGrid': LazyComponent<typeof import("../../components/InstagramGrid.vue")['default']>
    'LazyMobileColorSlider': LazyComponent<typeof import("../../components/MobileColorSlider.vue")['default']>
    'LazyMobileMenu': LazyComponent<typeof import("../../components/MobileMenu.vue")['default']>
    'LazyNewsletter': LazyComponent<typeof import("../../components/Newsletter.vue")['default']>
    'LazyProductAccordion': LazyComponent<typeof import("../../components/ProductAccordion.vue")['default']>
    'LazyProductGallerySlider': LazyComponent<typeof import("../../components/ProductGallerySlider.vue")['default']>
    'LazyShopListing': LazyComponent<typeof import("../../components/ShopListing.vue")['default']>
    'LazyShopListingskeleton': LazyComponent<typeof import("../../components/ShopListingskeleton.vue")['default']>
    'LazyToast': LazyComponent<typeof import("../../components/Toast.vue")['default']>
    'LazyTest': LazyComponent<typeof import("../../components/test.vue")['default']>
    'LazyTestCollectionListing': LazyComponent<typeof import("../../components/testCollectionListing.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtLinkLocale': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/NuxtLinkLocale")['default']>
    'LazySwitchLocalePathLink': LazyComponent<typeof import("../../node_modules/@nuxtjs/i18n/dist/runtime/components/SwitchLocalePathLink")['default']>
    'LazyHeadlessCombobox': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['Combobox']>
    'LazyHeadlessComboboxLabel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxLabel']>
    'LazyHeadlessComboboxButton': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxButton']>
    'LazyHeadlessComboboxInput': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxInput']>
    'LazyHeadlessComboboxOptions': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOptions']>
    'LazyHeadlessComboboxOption': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/combobox/combobox")['ComboboxOption']>
    'LazyHeadlessDialog': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['Dialog']>
    'LazyHeadlessDialogOverlay': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogOverlay']>
    'LazyHeadlessDialogBackdrop': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogBackdrop']>
    'LazyHeadlessDialogPanel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogPanel']>
    'LazyHeadlessDialogTitle': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogTitle']>
    'LazyHeadlessDialogDescription': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/dialog/dialog")['DialogDescription']>
    'LazyHeadlessDisclosure': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['Disclosure']>
    'LazyHeadlessDisclosureButton': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosureButton']>
    'LazyHeadlessDisclosurePanel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/disclosure/disclosure")['DisclosurePanel']>
    'LazyHeadlessFocusTrap': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap")['FocusTrap']>
    'LazyHeadlessListbox': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['Listbox']>
    'LazyHeadlessListboxLabel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxLabel']>
    'LazyHeadlessListboxButton': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxButton']>
    'LazyHeadlessListboxOptions': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOptions']>
    'LazyHeadlessListboxOption': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/listbox/listbox")['ListboxOption']>
    'LazyHeadlessMenu': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['Menu']>
    'LazyHeadlessMenuButton': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuButton']>
    'LazyHeadlessMenuItems': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItems']>
    'LazyHeadlessMenuItem': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/menu/menu")['MenuItem']>
    'LazyHeadlessPopover': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['Popover']>
    'LazyHeadlessPopoverButton': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverButton']>
    'LazyHeadlessPopoverOverlay': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverOverlay']>
    'LazyHeadlessPopoverPanel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverPanel']>
    'LazyHeadlessPopoverGroup': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/popover/popover")['PopoverGroup']>
    'LazyHeadlessPortal': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/portal/portal")['Portal']>
    'LazyHeadlessPortalGroup': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/portal/portal")['PortalGroup']>
    'LazyHeadlessRadioGroup': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroup']>
    'LazyHeadlessRadioGroupOption': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupOption']>
    'LazyHeadlessRadioGroupLabel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupLabel']>
    'LazyHeadlessRadioGroupDescription': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/radio-group/radio-group")['RadioGroupDescription']>
    'LazyHeadlessSwitchGroup': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchGroup']>
    'LazyHeadlessSwitch': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['Switch']>
    'LazyHeadlessSwitchLabel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchLabel']>
    'LazyHeadlessSwitchDescription': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/switch/switch")['SwitchDescription']>
    'LazyHeadlessTabGroup': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabGroup']>
    'LazyHeadlessTabList': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabList']>
    'LazyHeadlessTab': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['Tab']>
    'LazyHeadlessTabPanels': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanels']>
    'LazyHeadlessTabPanel': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/tabs/tabs")['TabPanel']>
    'LazyHeadlessTransitionChild': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionChild']>
    'LazyHeadlessTransitionRoot': LazyComponent<typeof import("../../node_modules/@headlessui/vue/dist/components/transitions/transition")['TransitionRoot']>
    'LazyColorScheme': LazyComponent<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
