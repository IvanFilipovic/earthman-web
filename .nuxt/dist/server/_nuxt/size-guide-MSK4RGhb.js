import { _ as __nuxt_component_0 } from "./AppNavigation-lCU69XCi.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BeJz8Y8C.js";
import { _ as __nuxt_component_0$2 } from "./index-DSJLL3Jq.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { a as useSeoMeta } from "../server.mjs";
import "./virtual_public-Dgbfu3-q.js";
import "#internal/nuxt/paths";
import "pinia";
import "@iconify/vue";
import "@iconify/utils/lib/css/icon";
import "/home/kai/Projekti/webshop/node_modules/nuxt/node_modules/perfect-debounce/dist/index.mjs";
import "ofetch";
import "/home/kai/Projekti/webshop/node_modules/hookable/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/unctx/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/h3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/kai/Projekti/webshop/node_modules/radix3/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/klona/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/@unhead/vue/dist/index.mjs";
import "@intlify/utils";
import "/home/kai/Projekti/webshop/node_modules/cookie-es/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/destr/dist/index.mjs";
import "/home/kai/Projekti/webshop/node_modules/ohash/dist/index.mjs";
import "@vue/devtools-api";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "size-guide",
  __ssrInlineRender: true,
  setup(__props) {
    const womenSizes = [
      { size: "XS", chest: "80-84", waist: "62-66", hips: "88-92" },
      { size: "S", chest: "84-88", waist: "66-70", hips: "92-96" },
      { size: "M", chest: "88-92", waist: "70-74", hips: "96-100" },
      { size: "L", chest: "92-97", waist: "74-79", hips: "100-105" },
      { size: "XL", chest: "97-102", waist: "79-84", hips: "105-110" },
      { size: "XXL", chest: "102-108", waist: "84-90", hips: "110-116" }
    ];
    const menSizes = [
      { size: "XS", chest: "86-89", waist: "73-76", hips: "89-92" },
      { size: "S", chest: "89-94", waist: "76-81", hips: "92-97" },
      { size: "M", chest: "94-99", waist: "81-86", hips: "97-102" },
      { size: "L", chest: "99-104", waist: "86-91", hips: "102-107" },
      { size: "XL", chest: "104-111", waist: "91-98", hips: "107-114" },
      { size: "XXL", chest: "111-118", waist: "98-105", hips: "114-121" }
    ];
    const kidsSizes = [
      { size: "XS (4-5Y)", chest: "56-58", waist: "52-54", hips: "60-62" },
      { size: "S (6-7Y)", chest: "60-63", waist: "55-58", hips: "64-67" },
      { size: "M (8-9Y)", chest: "64-67", waist: "59-62", hips: "68-71" },
      { size: "L (10-11Y)", chest: "71-74", waist: "63-66", hips: "74-77" },
      { size: "XL (12-13Y)", chest: "78-82", waist: "67-70", hips: "82-86" }
    ];
    const categories = [
      { name: "Women", sizes: womenSizes },
      { name: "Men", sizes: menSizes },
      { name: "Kids", sizes: kidsSizes }
    ];
    const selectedIndex = ref(0);
    useSeoMeta({
      title: "Size Guide - Earthman",
      description: "Find your perfect fit with our comprehensive size guide for women, men, and kids clothing."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-background_color" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="px-4 md:px-8 pt-4"><nav class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest" aria-label="Breadcrumb">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HOME`);
          } else {
            return [
              createTextVNode("HOME")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2" aria-hidden="true">/</span><span class="pr-2" aria-current="page">SIZE GUIDE</span></nav></div><div class="max-w-6xl mx-auto px-4 md:px-8 py-12"><div class="text-center mb-12"><h1 class="text-3xl md:text-4xl uppercase tracking-widest mb-4">Size Guide</h1><p class="text-text_color/70 max-w-2xl mx-auto"> Find your perfect fit. All measurements are in centimeters (cm). </p></div>`);
      _push(ssrRenderComponent(unref(TabGroup), {
        modelValue: unref(selectedIndex),
        "onUpdate:modelValue": ($event) => isRef(selectedIndex) ? selectedIndex.value = $event : null,
        as: "div"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabList), { class: "flex gap-2 border-b border-text_color/30 mb-8 overflow-x-auto" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories, (category) => {
                    _push3(ssrRenderComponent(unref(Tab), {
                      key: category.name,
                      as: "template"
                    }, {
                      default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class="${ssrRenderClass([[
                            selected ? "border-b-2 border-text_color font-medium -mb-[2px]" : "text-text_color/60 hover:text-text_color"
                          ], "px-6 py-3 text-sm md:text-base uppercase tracking-widest whitespace-nowrap transition-colors focus:outline-none"])}"${_scopeId3}>${ssrInterpolate(category.name)}</button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: ["px-6 py-3 text-sm md:text-base uppercase tracking-widest whitespace-nowrap transition-colors focus:outline-none", [
                                selected ? "border-b-2 border-text_color font-medium -mb-[2px]" : "text-text_color/60 hover:text-text_color"
                              ]]
                            }, toDisplayString(category.name), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                      return createVNode(unref(Tab), {
                        key: category.name,
                        as: "template"
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: ["px-6 py-3 text-sm md:text-base uppercase tracking-widest whitespace-nowrap transition-colors focus:outline-none", [
                              selected ? "border-b-2 border-text_color font-medium -mb-[2px]" : "text-text_color/60 hover:text-text_color"
                            ]]
                          }, toDisplayString(category.name), 3)
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanels), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(categories, (category, idx) => {
                    _push3(ssrRenderComponent(unref(TabPanel), {
                      key: idx,
                      class: "focus:outline-none"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="mb-12 bg-text_color/5 border border-text_color/20 p-6 md:p-8"${_scopeId3}><h2 class="text-xl uppercase tracking-widest mb-6"${_scopeId3}>How to Measure</h2><p class="text-text_color/80 mb-8"${_scopeId3}> Take the measurements close to your body to find the right size. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-8"${_scopeId3}><div class="flex items-center justify-center bg-white p-8 border border-text_color/10"${_scopeId3}><div class="relative"${_scopeId3}><svg width="200" height="300" viewBox="0 0 200 300" class="text-text_color/20"${_scopeId3}><circle cx="100" cy="30" r="25" fill="currentColor"${_scopeId3}></circle><rect x="75" y="55" width="50" height="120" rx="8" fill="currentColor"${_scopeId3}></rect><rect x="35" y="60" width="40" height="15" rx="7" fill="currentColor"${_scopeId3}></rect><rect x="125" y="60" width="40" height="15" rx="7" fill="currentColor"${_scopeId3}></rect><rect x="80" y="175" width="15" height="90" rx="7" fill="currentColor"${_scopeId3}></rect><rect x="105" y="175" width="15" height="90" rx="7" fill="currentColor"${_scopeId3}></rect><g class="text-text_color" stroke="currentColor" stroke-width="1.5"${_scopeId3}><line x1="30" y1="80" x2="170" y2="80"${_scopeId3}></line><text x="10" y="85" font-size="16" font-weight="bold"${_scopeId3}>1</text><line x1="30" y1="130" x2="170" y2="130"${_scopeId3}></line><text x="10" y="135" font-size="16" font-weight="bold"${_scopeId3}>2</text><line x1="30" y1="170" x2="170" y2="170"${_scopeId3}></line><text x="10" y="175" font-size="16" font-weight="bold"${_scopeId3}>3</text></g></svg></div></div><div class="space-y-6"${_scopeId3}><div class="flex gap-4"${_scopeId3}><div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0"${_scopeId3}> 1 </div><div${_scopeId3}><h3 class="font-medium mb-1"${_scopeId3}>${ssrInterpolate(category.name === "Kids" ? "Chest" : "Bust/Chest circumference")}</h3><p class="text-sm text-text_color/80"${_scopeId3}> Measure around the fullest part of the chest </p></div></div><div class="flex gap-4"${_scopeId3}><div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0"${_scopeId3}> 2 </div><div${_scopeId3}><h3 class="font-medium mb-1"${_scopeId3}>Waist circumference</h3><p class="text-sm text-text_color/80"${_scopeId3}> Measure where you want the waistband to sit </p></div></div><div class="flex gap-4"${_scopeId3}><div class="w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0"${_scopeId3}> 3 </div><div${_scopeId3}><h3 class="font-medium mb-1"${_scopeId3}>Hip circumference</h3><p class="text-sm text-text_color/80"${_scopeId3}> Measure at the widest part of the hip </p></div></div></div></div></div><div class="overflow-x-auto"${_scopeId3}><table class="w-full border-collapse"${_scopeId3}><thead${_scopeId3}><tr class="bg-text_color text-background_color"${_scopeId3}><th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium"${_scopeId3}> Size </th><th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium"${_scopeId3}> Chest (cm) </th><th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium"${_scopeId3}> Waist (cm) </th><th class="px-4 py-3 text-left text-sm uppercase tracking-widest font-medium"${_scopeId3}> Hips (cm) </th></tr></thead><tbody${_scopeId3}><!--[-->`);
                          ssrRenderList(category.sizes, (size, sizeIdx) => {
                            _push4(`<tr class="border-b border-text_color/20 hover:bg-text_color/5 transition-colors"${_scopeId3}><td class="px-4 py-4 font-medium"${_scopeId3}>${ssrInterpolate(size.size)}</td><td class="px-4 py-4"${_scopeId3}>${ssrInterpolate(size.chest)}</td><td class="px-4 py-4"${_scopeId3}>${ssrInterpolate(size.waist)}</td><td class="px-4 py-4"${_scopeId3}>${ssrInterpolate(size.hips)}</td></tr>`);
                          });
                          _push4(`<!--]--></tbody></table></div><div class="mt-8 bg-blue-50 border border-blue-200 p-6"${_scopeId3}><div class="flex items-start gap-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "lucide:info",
                            class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="text-sm text-blue-900"${_scopeId3}><p class="font-medium mb-2"${_scopeId3}>Sizing Tips:</p><ul class="space-y-1 text-blue-800"${_scopeId3}><li${_scopeId3}>• If you&#39;re between sizes, we recommend sizing up for a more comfortable fit</li><li${_scopeId3}>• All measurements are body measurements, not garment measurements</li><li${_scopeId3}>• For the most accurate measurement, have someone help you</li><li${_scopeId3}>• Wear fitted clothing or underwear when measuring</li></ul></div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "mb-12 bg-text_color/5 border border-text_color/20 p-6 md:p-8" }, [
                              createVNode("h2", { class: "text-xl uppercase tracking-widest mb-6" }, "How to Measure"),
                              createVNode("p", { class: "text-text_color/80 mb-8" }, " Take the measurements close to your body to find the right size. "),
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                                createVNode("div", { class: "flex items-center justify-center bg-white p-8 border border-text_color/10" }, [
                                  createVNode("div", { class: "relative" }, [
                                    (openBlock(), createBlock("svg", {
                                      width: "200",
                                      height: "300",
                                      viewBox: "0 0 200 300",
                                      class: "text-text_color/20"
                                    }, [
                                      createVNode("circle", {
                                        cx: "100",
                                        cy: "30",
                                        r: "25",
                                        fill: "currentColor"
                                      }),
                                      createVNode("rect", {
                                        x: "75",
                                        y: "55",
                                        width: "50",
                                        height: "120",
                                        rx: "8",
                                        fill: "currentColor"
                                      }),
                                      createVNode("rect", {
                                        x: "35",
                                        y: "60",
                                        width: "40",
                                        height: "15",
                                        rx: "7",
                                        fill: "currentColor"
                                      }),
                                      createVNode("rect", {
                                        x: "125",
                                        y: "60",
                                        width: "40",
                                        height: "15",
                                        rx: "7",
                                        fill: "currentColor"
                                      }),
                                      createVNode("rect", {
                                        x: "80",
                                        y: "175",
                                        width: "15",
                                        height: "90",
                                        rx: "7",
                                        fill: "currentColor"
                                      }),
                                      createVNode("rect", {
                                        x: "105",
                                        y: "175",
                                        width: "15",
                                        height: "90",
                                        rx: "7",
                                        fill: "currentColor"
                                      }),
                                      createVNode("g", {
                                        class: "text-text_color",
                                        stroke: "currentColor",
                                        "stroke-width": "1.5"
                                      }, [
                                        createVNode("line", {
                                          x1: "30",
                                          y1: "80",
                                          x2: "170",
                                          y2: "80"
                                        }),
                                        createVNode("text", {
                                          x: "10",
                                          y: "85",
                                          "font-size": "16",
                                          "font-weight": "bold"
                                        }, "1"),
                                        createVNode("line", {
                                          x1: "30",
                                          y1: "130",
                                          x2: "170",
                                          y2: "130"
                                        }),
                                        createVNode("text", {
                                          x: "10",
                                          y: "135",
                                          "font-size": "16",
                                          "font-weight": "bold"
                                        }, "2"),
                                        createVNode("line", {
                                          x1: "30",
                                          y1: "170",
                                          x2: "170",
                                          y2: "170"
                                        }),
                                        createVNode("text", {
                                          x: "10",
                                          y: "175",
                                          "font-size": "16",
                                          "font-weight": "bold"
                                        }, "3")
                                      ])
                                    ]))
                                  ])
                                ]),
                                createVNode("div", { class: "space-y-6" }, [
                                  createVNode("div", { class: "flex gap-4" }, [
                                    createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 1 "),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "font-medium mb-1" }, toDisplayString(category.name === "Kids" ? "Chest" : "Bust/Chest circumference"), 1),
                                      createVNode("p", { class: "text-sm text-text_color/80" }, " Measure around the fullest part of the chest ")
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-4" }, [
                                    createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 2 "),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "font-medium mb-1" }, "Waist circumference"),
                                      createVNode("p", { class: "text-sm text-text_color/80" }, " Measure where you want the waistband to sit ")
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-4" }, [
                                    createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 3 "),
                                    createVNode("div", null, [
                                      createVNode("h3", { class: "font-medium mb-1" }, "Hip circumference"),
                                      createVNode("p", { class: "text-sm text-text_color/80" }, " Measure at the widest part of the hip ")
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "overflow-x-auto" }, [
                              createVNode("table", { class: "w-full border-collapse" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", { class: "bg-text_color text-background_color" }, [
                                    createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Size "),
                                    createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Chest (cm) "),
                                    createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Waist (cm) "),
                                    createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Hips (cm) ")
                                  ])
                                ]),
                                createVNode("tbody", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(category.sizes, (size, sizeIdx) => {
                                    return openBlock(), createBlock("tr", {
                                      key: sizeIdx,
                                      class: "border-b border-text_color/20 hover:bg-text_color/5 transition-colors"
                                    }, [
                                      createVNode("td", { class: "px-4 py-4 font-medium" }, toDisplayString(size.size), 1),
                                      createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.chest), 1),
                                      createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.waist), 1),
                                      createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.hips), 1)
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "mt-8 bg-blue-50 border border-blue-200 p-6" }, [
                              createVNode("div", { class: "flex items-start gap-3" }, [
                                createVNode(_component_Icon, {
                                  name: "lucide:info",
                                  class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                                }),
                                createVNode("div", { class: "text-sm text-blue-900" }, [
                                  createVNode("p", { class: "font-medium mb-2" }, "Sizing Tips:"),
                                  createVNode("ul", { class: "space-y-1 text-blue-800" }, [
                                    createVNode("li", null, "• If you're between sizes, we recommend sizing up for a more comfortable fit"),
                                    createVNode("li", null, "• All measurements are body measurements, not garment measurements"),
                                    createVNode("li", null, "• For the most accurate measurement, have someone help you"),
                                    createVNode("li", null, "• Wear fitted clothing or underwear when measuring")
                                  ])
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(categories, (category, idx) => {
                      return createVNode(unref(TabPanel), {
                        key: idx,
                        class: "focus:outline-none"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-12 bg-text_color/5 border border-text_color/20 p-6 md:p-8" }, [
                            createVNode("h2", { class: "text-xl uppercase tracking-widest mb-6" }, "How to Measure"),
                            createVNode("p", { class: "text-text_color/80 mb-8" }, " Take the measurements close to your body to find the right size. "),
                            createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                              createVNode("div", { class: "flex items-center justify-center bg-white p-8 border border-text_color/10" }, [
                                createVNode("div", { class: "relative" }, [
                                  (openBlock(), createBlock("svg", {
                                    width: "200",
                                    height: "300",
                                    viewBox: "0 0 200 300",
                                    class: "text-text_color/20"
                                  }, [
                                    createVNode("circle", {
                                      cx: "100",
                                      cy: "30",
                                      r: "25",
                                      fill: "currentColor"
                                    }),
                                    createVNode("rect", {
                                      x: "75",
                                      y: "55",
                                      width: "50",
                                      height: "120",
                                      rx: "8",
                                      fill: "currentColor"
                                    }),
                                    createVNode("rect", {
                                      x: "35",
                                      y: "60",
                                      width: "40",
                                      height: "15",
                                      rx: "7",
                                      fill: "currentColor"
                                    }),
                                    createVNode("rect", {
                                      x: "125",
                                      y: "60",
                                      width: "40",
                                      height: "15",
                                      rx: "7",
                                      fill: "currentColor"
                                    }),
                                    createVNode("rect", {
                                      x: "80",
                                      y: "175",
                                      width: "15",
                                      height: "90",
                                      rx: "7",
                                      fill: "currentColor"
                                    }),
                                    createVNode("rect", {
                                      x: "105",
                                      y: "175",
                                      width: "15",
                                      height: "90",
                                      rx: "7",
                                      fill: "currentColor"
                                    }),
                                    createVNode("g", {
                                      class: "text-text_color",
                                      stroke: "currentColor",
                                      "stroke-width": "1.5"
                                    }, [
                                      createVNode("line", {
                                        x1: "30",
                                        y1: "80",
                                        x2: "170",
                                        y2: "80"
                                      }),
                                      createVNode("text", {
                                        x: "10",
                                        y: "85",
                                        "font-size": "16",
                                        "font-weight": "bold"
                                      }, "1"),
                                      createVNode("line", {
                                        x1: "30",
                                        y1: "130",
                                        x2: "170",
                                        y2: "130"
                                      }),
                                      createVNode("text", {
                                        x: "10",
                                        y: "135",
                                        "font-size": "16",
                                        "font-weight": "bold"
                                      }, "2"),
                                      createVNode("line", {
                                        x1: "30",
                                        y1: "170",
                                        x2: "170",
                                        y2: "170"
                                      }),
                                      createVNode("text", {
                                        x: "10",
                                        y: "175",
                                        "font-size": "16",
                                        "font-weight": "bold"
                                      }, "3")
                                    ])
                                  ]))
                                ])
                              ]),
                              createVNode("div", { class: "space-y-6" }, [
                                createVNode("div", { class: "flex gap-4" }, [
                                  createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 1 "),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "font-medium mb-1" }, toDisplayString(category.name === "Kids" ? "Chest" : "Bust/Chest circumference"), 1),
                                    createVNode("p", { class: "text-sm text-text_color/80" }, " Measure around the fullest part of the chest ")
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-4" }, [
                                  createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 2 "),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "font-medium mb-1" }, "Waist circumference"),
                                    createVNode("p", { class: "text-sm text-text_color/80" }, " Measure where you want the waistband to sit ")
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-4" }, [
                                  createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 3 "),
                                  createVNode("div", null, [
                                    createVNode("h3", { class: "font-medium mb-1" }, "Hip circumference"),
                                    createVNode("p", { class: "text-sm text-text_color/80" }, " Measure at the widest part of the hip ")
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "overflow-x-auto" }, [
                            createVNode("table", { class: "w-full border-collapse" }, [
                              createVNode("thead", null, [
                                createVNode("tr", { class: "bg-text_color text-background_color" }, [
                                  createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Size "),
                                  createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Chest (cm) "),
                                  createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Waist (cm) "),
                                  createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Hips (cm) ")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(category.sizes, (size, sizeIdx) => {
                                  return openBlock(), createBlock("tr", {
                                    key: sizeIdx,
                                    class: "border-b border-text_color/20 hover:bg-text_color/5 transition-colors"
                                  }, [
                                    createVNode("td", { class: "px-4 py-4 font-medium" }, toDisplayString(size.size), 1),
                                    createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.chest), 1),
                                    createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.waist), 1),
                                    createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.hips), 1)
                                  ]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "mt-8 bg-blue-50 border border-blue-200 p-6" }, [
                            createVNode("div", { class: "flex items-start gap-3" }, [
                              createVNode(_component_Icon, {
                                name: "lucide:info",
                                class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                              }),
                              createVNode("div", { class: "text-sm text-blue-900" }, [
                                createVNode("p", { class: "font-medium mb-2" }, "Sizing Tips:"),
                                createVNode("ul", { class: "space-y-1 text-blue-800" }, [
                                  createVNode("li", null, "• If you're between sizes, we recommend sizing up for a more comfortable fit"),
                                  createVNode("li", null, "• All measurements are body measurements, not garment measurements"),
                                  createVNode("li", null, "• For the most accurate measurement, have someone help you"),
                                  createVNode("li", null, "• Wear fitted clothing or underwear when measuring")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabList), { class: "flex gap-2 border-b border-text_color/30 mb-8 overflow-x-auto" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(categories, (category) => {
                    return createVNode(unref(Tab), {
                      key: category.name,
                      as: "template"
                    }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: ["px-6 py-3 text-sm md:text-base uppercase tracking-widest whitespace-nowrap transition-colors focus:outline-none", [
                            selected ? "border-b-2 border-text_color font-medium -mb-[2px]" : "text-text_color/60 hover:text-text_color"
                          ]]
                        }, toDisplayString(category.name), 3)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              }),
              createVNode(unref(TabPanels), null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(categories, (category, idx) => {
                    return createVNode(unref(TabPanel), {
                      key: idx,
                      class: "focus:outline-none"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "mb-12 bg-text_color/5 border border-text_color/20 p-6 md:p-8" }, [
                          createVNode("h2", { class: "text-xl uppercase tracking-widest mb-6" }, "How to Measure"),
                          createVNode("p", { class: "text-text_color/80 mb-8" }, " Take the measurements close to your body to find the right size. "),
                          createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                            createVNode("div", { class: "flex items-center justify-center bg-white p-8 border border-text_color/10" }, [
                              createVNode("div", { class: "relative" }, [
                                (openBlock(), createBlock("svg", {
                                  width: "200",
                                  height: "300",
                                  viewBox: "0 0 200 300",
                                  class: "text-text_color/20"
                                }, [
                                  createVNode("circle", {
                                    cx: "100",
                                    cy: "30",
                                    r: "25",
                                    fill: "currentColor"
                                  }),
                                  createVNode("rect", {
                                    x: "75",
                                    y: "55",
                                    width: "50",
                                    height: "120",
                                    rx: "8",
                                    fill: "currentColor"
                                  }),
                                  createVNode("rect", {
                                    x: "35",
                                    y: "60",
                                    width: "40",
                                    height: "15",
                                    rx: "7",
                                    fill: "currentColor"
                                  }),
                                  createVNode("rect", {
                                    x: "125",
                                    y: "60",
                                    width: "40",
                                    height: "15",
                                    rx: "7",
                                    fill: "currentColor"
                                  }),
                                  createVNode("rect", {
                                    x: "80",
                                    y: "175",
                                    width: "15",
                                    height: "90",
                                    rx: "7",
                                    fill: "currentColor"
                                  }),
                                  createVNode("rect", {
                                    x: "105",
                                    y: "175",
                                    width: "15",
                                    height: "90",
                                    rx: "7",
                                    fill: "currentColor"
                                  }),
                                  createVNode("g", {
                                    class: "text-text_color",
                                    stroke: "currentColor",
                                    "stroke-width": "1.5"
                                  }, [
                                    createVNode("line", {
                                      x1: "30",
                                      y1: "80",
                                      x2: "170",
                                      y2: "80"
                                    }),
                                    createVNode("text", {
                                      x: "10",
                                      y: "85",
                                      "font-size": "16",
                                      "font-weight": "bold"
                                    }, "1"),
                                    createVNode("line", {
                                      x1: "30",
                                      y1: "130",
                                      x2: "170",
                                      y2: "130"
                                    }),
                                    createVNode("text", {
                                      x: "10",
                                      y: "135",
                                      "font-size": "16",
                                      "font-weight": "bold"
                                    }, "2"),
                                    createVNode("line", {
                                      x1: "30",
                                      y1: "170",
                                      x2: "170",
                                      y2: "170"
                                    }),
                                    createVNode("text", {
                                      x: "10",
                                      y: "175",
                                      "font-size": "16",
                                      "font-weight": "bold"
                                    }, "3")
                                  ])
                                ]))
                              ])
                            ]),
                            createVNode("div", { class: "space-y-6" }, [
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 1 "),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "font-medium mb-1" }, toDisplayString(category.name === "Kids" ? "Chest" : "Bust/Chest circumference"), 1),
                                  createVNode("p", { class: "text-sm text-text_color/80" }, " Measure around the fullest part of the chest ")
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 2 "),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "font-medium mb-1" }, "Waist circumference"),
                                  createVNode("p", { class: "text-sm text-text_color/80" }, " Measure where you want the waistband to sit ")
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-4" }, [
                                createVNode("div", { class: "w-8 h-8 flex items-center justify-center bg-text_color text-background_color font-bold shrink-0" }, " 3 "),
                                createVNode("div", null, [
                                  createVNode("h3", { class: "font-medium mb-1" }, "Hip circumference"),
                                  createVNode("p", { class: "text-sm text-text_color/80" }, " Measure at the widest part of the hip ")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "overflow-x-auto" }, [
                          createVNode("table", { class: "w-full border-collapse" }, [
                            createVNode("thead", null, [
                              createVNode("tr", { class: "bg-text_color text-background_color" }, [
                                createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Size "),
                                createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Chest (cm) "),
                                createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Waist (cm) "),
                                createVNode("th", { class: "px-4 py-3 text-left text-sm uppercase tracking-widest font-medium" }, " Hips (cm) ")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(category.sizes, (size, sizeIdx) => {
                                return openBlock(), createBlock("tr", {
                                  key: sizeIdx,
                                  class: "border-b border-text_color/20 hover:bg-text_color/5 transition-colors"
                                }, [
                                  createVNode("td", { class: "px-4 py-4 font-medium" }, toDisplayString(size.size), 1),
                                  createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.chest), 1),
                                  createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.waist), 1),
                                  createVNode("td", { class: "px-4 py-4" }, toDisplayString(size.hips), 1)
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-8 bg-blue-50 border border-blue-200 p-6" }, [
                          createVNode("div", { class: "flex items-start gap-3" }, [
                            createVNode(_component_Icon, {
                              name: "lucide:info",
                              class: "w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                            }),
                            createVNode("div", { class: "text-sm text-blue-900" }, [
                              createVNode("p", { class: "font-medium mb-2" }, "Sizing Tips:"),
                              createVNode("ul", { class: "space-y-1 text-blue-800" }, [
                                createVNode("li", null, "• If you're between sizes, we recommend sizing up for a more comfortable fit"),
                                createVNode("li", null, "• All measurements are body measurements, not garment measurements"),
                                createVNode("li", null, "• For the most accurate measurement, have someone help you"),
                                createVNode("li", null, "• Wear fitted clothing or underwear when measuring")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-16 text-center bg-text_color/5 border border-text_color/20 p-8 md:p-12">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:ruler",
        class: "w-12 h-12 mx-auto mb-4"
      }, null, _parent));
      _push(`<h2 class="text-2xl uppercase tracking-widest mb-4"> Need Help Finding Your Size? </h2><p class="text-text_color/80 mb-6 max-w-xl mx-auto"> Still unsure about sizing? Our customer service team is here to help you find the perfect fit. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn--primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="btn__text"${_scopeId}>Contact Us</span><span class="btn__fill"${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "btn__text" }, "Contact Us"),
              createVNode("span", { class: "btn__fill" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-12"><h2 class="text-xl uppercase tracking-widest mb-6 text-center">International Size Conversions</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div class="bg-white border border-text_color/20 p-6"><h3 class="font-medium uppercase tracking-wider mb-4 text-center">Women</h3><table class="w-full text-sm"><thead><tr class="border-b border-text_color/20"><th class="py-2 text-left">EU</th><th class="py-2 text-left">UK</th><th class="py-2 text-left">US</th></tr></thead><tbody><tr class="border-b border-text_color/10"><td class="py-2">XS</td><td class="py-2">6</td><td class="py-2">2</td></tr><tr class="border-b border-text_color/10"><td class="py-2">S</td><td class="py-2">8-10</td><td class="py-2">4-6</td></tr><tr class="border-b border-text_color/10"><td class="py-2">M</td><td class="py-2">12</td><td class="py-2">8</td></tr><tr class="border-b border-text_color/10"><td class="py-2">L</td><td class="py-2">14</td><td class="py-2">10</td></tr><tr class="border-b border-text_color/10"><td class="py-2">XL</td><td class="py-2">16</td><td class="py-2">12</td></tr><tr><td class="py-2">XXL</td><td class="py-2">18</td><td class="py-2">14</td></tr></tbody></table></div><div class="bg-white border border-text_color/20 p-6"><h3 class="font-medium uppercase tracking-wider mb-4 text-center">Men</h3><table class="w-full text-sm"><thead><tr class="border-b border-text_color/20"><th class="py-2 text-left">EU</th><th class="py-2 text-left">UK</th><th class="py-2 text-left">US</th></tr></thead><tbody><tr class="border-b border-text_color/10"><td class="py-2">XS</td><td class="py-2">34</td><td class="py-2">XS</td></tr><tr class="border-b border-text_color/10"><td class="py-2">S</td><td class="py-2">36</td><td class="py-2">S</td></tr><tr class="border-b border-text_color/10"><td class="py-2">M</td><td class="py-2">38-40</td><td class="py-2">M</td></tr><tr class="border-b border-text_color/10"><td class="py-2">L</td><td class="py-2">42</td><td class="py-2">L</td></tr><tr class="border-b border-text_color/10"><td class="py-2">XL</td><td class="py-2">44</td><td class="py-2">XL</td></tr><tr><td class="py-2">XXL</td><td class="py-2">46</td><td class="py-2">XXL</td></tr></tbody></table></div><div class="bg-white border border-text_color/20 p-6"><h3 class="font-medium uppercase tracking-wider mb-4 text-center">Kids</h3><table class="w-full text-sm"><thead><tr class="border-b border-text_color/20"><th class="py-2 text-left">Age</th><th class="py-2 text-left">Height</th><th class="py-2 text-left">Size</th></tr></thead><tbody><tr class="border-b border-text_color/10"><td class="py-2">4-5Y</td><td class="py-2">104-110</td><td class="py-2">XS</td></tr><tr class="border-b border-text_color/10"><td class="py-2">6-7Y</td><td class="py-2">116-122</td><td class="py-2">S</td></tr><tr class="border-b border-text_color/10"><td class="py-2">8-9Y</td><td class="py-2">128-134</td><td class="py-2">M</td></tr><tr class="border-b border-text_color/10"><td class="py-2">10-11Y</td><td class="py-2">140-146</td><td class="py-2">L</td></tr><tr><td class="py-2">12-13Y</td><td class="py-2">152-158</td><td class="py-2">XL</td></tr></tbody></table></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/size-guide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=size-guide-MSK4RGhb.js.map
