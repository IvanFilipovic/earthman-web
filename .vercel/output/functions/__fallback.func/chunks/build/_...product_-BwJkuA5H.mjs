import { _ as __nuxt_component_0 } from './AppNavigation-PSSArelZ.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-7pp3EPK3.mjs';
import { u as useAsyncData, _ as __nuxt_component_0$2 } from './index-qGNUStbk.mjs';
import { ref, isRef, watch, onMounted, onUnmounted, defineComponent, computed, withAsyncContext, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, mergeProps, resolveDynamicComponent, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';
import { TransitionRoot, Dialog, TransitionChild, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { u as useToast } from './useToast-pOzf8V9B.mjs';
import { c as useRoute, b as useRouter, e as useRuntimeConfig } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@intlify/utils';
import 'vue-router';
import '@iconify/utils';
import 'consola';
import 'node:module';
import 'node:url';
import 'ipx';
import 'pinia';
import 'gsap';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

var a=function(){return a=Object.assign||function(n){for(var t,i=1,e=arguments.length;i<e;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},a.apply(this,arguments)};function o(n,t,i){for(var e,r=0,a=t.length;r<a;r++)!e&&r in t||(e||(e=Array.prototype.slice.call(t,0,r)),e[r]=t[r]);return n.concat(e||Array.prototype.slice.call(t))}function u(n){return Array.prototype.slice.call(n)}function s(n,t){var i=Math.floor(n);return i===t||i+1===t?n:t}function c(){return Date.now()}function d(n,t,i){if(t="data-keen-slider-"+t,null===i)return n.removeAttribute(t);n.setAttribute(t,i||"");}function l(n,t){return t=t||document,"function"==typeof n&&(n=n(t)),Array.isArray(n)?n:"string"==typeof n?u(t.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?u(n):[]}function f(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault();}function p(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation();}function v(){var n=[];return {add:function(t,i,e,r){t.addListener?t.addListener(e):t.addEventListener(i,e,r),n.push([t,i,e,r]);},input:function(n,t,i,e){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var i=t.changedTouches||[],e=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:e[0]?e[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:e[0]?e[0].screenY:r?r.y:t.pageY})}}(i),e);},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3]);})),n=[];}}}function h(n,t,i){return Math.min(Math.max(n,t),i)}function m(n){return (n>0?1:0)-(n<0?1:0)||+n}function g(n){var t=n.getBoundingClientRect();return {height:s(t.height,n.offsetHeight),width:s(t.width,n.offsetWidth)}}function b(n,t,i,e){var r=n&&n[t];return null==r?i:e&&"function"==typeof r?r():r}function x(n){return Math.round(1e6*n)/1e6}function k(n){var t,i,e,r,a,o;function u(t){o||(o=t),s(true);var a=t-o;a>e&&(a=e);var l=r[i];if(l[3]<a)return i++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0, l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<e)return d();o=null,s(false),c(null),n.emit("animationEnded");}function s(n){t.active=n;}function c(n){t.targetIdx=n;}function d(){var n;n=u,a=window.requestAnimationFrame(n);}function l(){var t;t=a,window.cancelAnimationFrame(t),s(false),c(null),o&&n.emit("animationStopped"),o=null;}return t={active:false,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;i=0,e=0,r=t.map((function(n){var t,i=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,s=n.distance*u(r/n.duration)||0;o+=s;var c=e;return e+=r,a+=s,[i,n.distance,c,e,n.duration,u]})),c(n.track.distToIdx(a)),d(),n.emit("animationStarted");}},stop:l,targetIdx:null}}function y(n){var t,i,e,r,a,u,s,d,l,f,p,v,g,k,y=1/0,w=[],M=null,T=0;function C(n){_(T+n);}function E(n){var t=z(T+n).abs;return D(t)?t:null}function z(n){var t=Math.floor(Math.abs(x(n/i))),e=x((n%i+i)%i);e===i&&(e=0);var r=m(n),a=s.indexOf(o([],s).reduce((function(n,t){return Math.abs(t-e)<Math.abs(n-e)?t:n}))),c=a;return r<0&&t++,a===u&&(c=0,t+=r>0?1:-1),{abs:c+t*u*r,origin:a,rel:c}}function I(n,t,i){var e;if(t||!S())return A(n,i);if(!D(n))return null;var r=z(null!=i?i:T),a=r.abs,o=n-r.rel,s=a+o;e=A(s);var c=A(s-u*m(o));return (null!==c&&Math.abs(c)<Math.abs(e)||null===e)&&(e=c),x(e)}function A(n,t){if(null==t&&(t=x(T)),!D(n)||null===n)return null;n=Math.round(n);var e=z(t),r=e.abs,a=e.rel,o=e.origin,c=O(n),d=(t%i+i)%i,l=s[o],f=Math.floor((n-(r-a))/u)*i;return x(l-d-l+s[c]+f+(o===u?i:0))}function D(n){return L(n)===n}function L(n){return h(n,l,f)}function S(){return r.loop}function O(n){return (n%u+u)%u}function _(t){var i;i=t-T,w.push({distance:i,timestamp:c()}),w.length>6&&(w=w.slice(-6)),T=x(t);var e=H().abs;if(e!==M){var r=null!==M;M=e,r&&n.emit("slideChanged");}}function H(o){var s=o?null:function(){if(u){var n=S(),t=n?(T%i+i)%i:T,o=(n?T%i:T)-a[0][2],s=0-(o<0&&n?i-Math.abs(o):o),c=0,d=z(T),h=d.abs,b=d.rel,x=a[b][2],y=a.map((function(t,e){var a=s+c;(a<0-t[0]||a>1)&&(a+=(Math.abs(a)>i-1&&n?i:0)*m(-a));var o=e-b,d=m(o),l=o+h;n&&(-1===d&&a>x&&(l+=u),1===d&&a<x&&(l-=u),null!==p&&l<p&&(a+=i),null!==v&&l>v&&(a-=i));var f=a+t[0]+t[1],g=Math.max(a>=0&&f<=1?1:f<0||a>1?0:a<0?Math.min(1,(t[0]+a)/t[0]):(1-a)/t[0],0);return c+=t[0]+t[1],{abs:l,distance:r.rtl?-1*a+1-t[0]:a,portion:g,size:t[0]}}));return h=L(h),b=O(h),{abs:L(h),length:e,max:k,maxIdx:f,min:g,minIdx:l,position:T,progress:n?t/i:T/e,rel:b,slides:y,slidesLength:i}}}();return t.details=s,n.emit("detailsChanged"),s}return t={absToRel:O,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(r=n.options,a=(r.trackConfig||[]).map((function(n){return [b(n,"size",1),b(n,"spacing",0),b(n,"origin",0)]})),u=a.length){i=x(a.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,o=u-1;e=x(i+a[0][2]-a[o][0]-a[o][2]-a[o][1]),s=a.reduce((function(n,i){if(!n)return [0];var e=a[n.length-1],r=n[n.length-1]+(e[0]+e[2])+e[1];return r-=i[2],n[n.length-1]>r&&(r=n[n.length-1]),r=x(r),n.push(r),(!t||t<r)&&(d=n.length-1),t=r,n}),null),0===e&&(d=0),s.push(x(i));}}(),!u)return H(true);var o;!function(){var t=n.options.range,i=n.options.loop;p=l=i?b(i,"min",-1/0):0,v=f=i?b(i,"max",y):d;var e=b(t,"min",null),r=b(t,"max",null);null!==e&&(l=e),null!==r&&(f=r),g=l===-1/0?l:n.track.idxToDist(l||0,true,0),k=f===y?f:I(f,true,0),null===r&&(v=f),b(t,"align",false)&&f!==y&&0===a[O(f)][2]&&(k-=1-a[O(f)][0],f=E(k-T)),g=x(g),k=x(k);}(),o=t,Number(o)===o?C(A(L(t))):H();},to:_,velocity:function(){var n=c(),t=w.reduce((function(t,i){var e=i.distance,r=i.timestamp;return n-r>200||(m(e)!==m(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=e),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function w(n){var t,i,e,r,a,o,u,s;function c(n){return 2*n}function d(n){return h(n,u,s)}function l(n){return 1-Math.pow(1-n,3)}function f(){return e?n.track.velocity():0}function p(){b();var t="free-snap"===n.options.mode,i=n.track,e=f();r=m(e);var u=n.track.details,s=[];if(e||!t){var p=v(e),h=p.dist,g=p.dur;if(g=c(g),h*=r,t){var x=i.idxToDist(i.distToIdx(h),true);x&&(h=x);}s.push({distance:h,duration:g,easing:l});var k=u.position,y=k+h;if(y<a||y>o){var w=y<a?a-k:o-k,M=0,T=e;if(m(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;s[0].earlyExit=E,T=e*(1-C);}else s[0].earlyExit=0,M+=w;var z=v(T,100),I=z.dist*r;n.options.rubberband&&(s.push({distance:I,duration:c(z.dur),easing:l}),s.push({distance:-I+M,duration:500,easing:l}));}n.animator.start(s);}else n.moveToIdx(d(u.abs),true,{duration:500,easing:function(n){return 1+--n*n*n*n*n}});}function v(n,t){ void 0===t&&(t=1e3);var i=147e-9+(n=Math.abs(n))/t;return {dist:Math.pow(n,2)/i,dur:n/i}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,s=t.maxIdx);}function b(){n.animator.stop();}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){e=false,b(),t=i=n.track.details.abs;})),n.on("dragChecked",(function(){e=true;})),n.on("dragEnded",(function(){var e=n.options.mode;"snap"===e&&function(){var e=n.track,r=n.track.details,u=r.position,s=m(f());(u>o||u<a)&&(s=0);var c=t+s;0===r.slides[e.absToRel(c)].portion&&(c-=s),t!==i&&(c=i),m(e.idxToDist(c,true))!==s&&(c+=s),c=d(c);var l=e.idxToDist(c,true);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}]);}(),"free"!==e&&"free-snap"!==e||p();})),n.on("dragged",(function(){i=n.track.details.abs;}));}function M(n){var t,i,e,r,a,o,u,s,c,d,g,b,x,k,y,w,M,T,C=v();function E(t){if(o&&s===t.id){var l=D(t);if(c){if(!A(t))return I(t);d=l,c=false,n.emit("dragChecked");}if(w)return d=l;f(t);var v=function(t){if(M===-1/0&&T===1/0)return t;var e=n.track.details,o=e.length,u=e.position,s=h(t,M-u,T-u);if(0===o)return 0;if(!n.options.rubberband)return s;if(u<=T&&u>=M)return t;if(u<M&&i>0||u>T&&i<0)return t;var c=(u<M?u-M:u-T)/o,d=r*o,l=Math.abs(c*d),f=Math.max(0,1-l/a*2);return f*f*t}(u(d-l)/r*e);i=m(v);var x=n.track.details.position;(x>M&&x<T||x===M&&i>0||x===T&&i<0)&&p(t),g+=v,!b&&Math.abs(g*r)>5&&(b=true),n.track.add(v),d=l,n.emit("dragged");}}function z(t){!o&&n.track.details&&n.track.details.length&&(g=0,o=true,b=false,c=true,s=t.id,A(t),d=D(t),n.emit("dragStarted"));}function I(t){o&&s===t.idChanged&&(o=false,n.emit("dragEnded"));}function A(n){var t=L(),i=t?n.y:n.x,e=t?n.x:n.y,r=void 0!==x&&void 0!==k&&Math.abs(k-e)<=Math.abs(x-i);return x=i,k=e,r}function D(n){return L()?n.y:n.x}function L(){return n.options.vertical}function S(){r=n.size,a=L()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max);}function O(n){b&&(p(n),f(n));}function _(){if(C.purge(),n.options.drag&&!n.options.disabled){var i;i=n.options.dragSpeed||1,u="function"==typeof i?i:function(n){return n*i},e=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";l("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",p),C.add(n,"mousedown",p),C.add(n,"touchstart",p);}));}(),C.add(t,"dragstart",(function(n){f(n);})),C.add(t,"click",O,{capture:true}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:true}),C.input(t,"touchmove",E,{passive:false}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){o&&f(n);}));var r="data-keen-slider-scrollable";l("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=D(n),w=true,y=true;}),{passive:true}),C.input(n,"touchmove",(function(i){var e=L(),r=e?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-D(i),o=e?n.scrollTop:n.scrollLeft,u=e&&"scroll"===n.style.overflowY||!e&&"scroll"===n.style.overflowX;if(t=D(i),(a<0&&o>0||a>0&&o<r)&&y&&u)return w=true;y=false,f(i),w=false;})),C.input(n,"touchend",(function(){w=false;}));}(n)}));}}n.on("updated",S),n.on("optionsChanged",_),n.on("created",_),n.on("destroyed",C.purge);}function T(n){var t,i,e=null;function r(t,i,e){n.animator.active?o(t,i,e):requestAnimationFrame((function(){return o(t,i,e)}));}function a(){r(false,false,i);}function o(i,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(i)!e&&r&&s(n,null,a),c(n,null,a);else {if(!l[t])return;var d=l[t].size*u;!e&&r&&s(n,d,a),c(n,l[t].distance*u-o,a),o+=d;}}));}}function u(t){return "performance"===n.options.renderMode?Math.round(t):t}function s(n,t,i){var e=i?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+e]=t,n.style["max-"+e]=t;}function c(n,t,i){if(null!==t){t=u(t);var e=i?t:0;t="translate3d(".concat(i?0:t,"px, ").concat(e,"px, 0)");}n.style.transform=t,n.style["-webkit-transform"]=t;}function d(){t&&(o(true,true,i),t=null),n.on("detailsChanged",a,true);}function l(){r(false,true,i);}function f(){d(),i=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(e="auto"===b(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l());}n.on("created",f),n.on("optionsChanged",f),n.on("beforeOptionsChanged",(function(){d();})),n.on("updated",l),n.on("destroyed",d);}function C(n,t){return function(i){var e,r,o,u,c,f=v();function p(n){var t;d(i.container,"reverse","rtl"!==(t=i.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),d(i.container,"v",i.options.vertical&&!n?"":null),d(i.container,"disabled",i.options.disabled&&!n?"":null);}function h(){m()&&M();}function m(){var n=null;if(u.forEach((function(t){t.matches&&(n=t.__media);})),n===e)return  false;e||i.emit("beforeOptionsChanged"),e=n;var t=n?o.breakpoints[n]:o;return i.options=a(a({},o),t),p(),I(),A(),C(),true}function x(n){var t=g(n);return (i.options.vertical?t.height:t.width)/i.size||1}function k(){return i.options.trackConfig.length}function y(n){for(var s in e=false,o=a(a({},t),n),f.purge(),r=i.size,u=[],o.breakpoints||[]){var c=window.matchMedia(s);c.__media=s,u.push(c),f.add(c,"change",h);}f.add(window,"orientationchange",z),f.add(window,"resize",E),m();}function w(n){i.animator.stop();var t=i.track.details;i.track.init(null!=n?n:t?t.abs:0);}function M(n){w(n),i.emit("optionsChanged");}function T(n,t){if(n)return y(n),void M(t);I(),A();var e=k();C(),k()!==e?M(t):w(t),i.emit("updated");}function C(){var n=i.options.slides;if("function"==typeof n)return i.options.trackConfig=n(i.size,i.slides);for(var t=i.slides,e=t.length,r="number"==typeof n?n:b(n,"number",e,true),a=[],o=b(n,"perView",1,true),u=b(n,"spacing",0,true)/i.size||0,s="auto"===o?u:u/o,c=b(n,"origin","auto"),d=0,l=0;l<r;l++){var f="auto"===o?x(t[l]):1/o-u+s,p="center"===c?.5-f/2:"auto"===c?0:c;a.push({origin:p,size:f,spacing:u}),d+=f;}if(d+=u*(r-1),"auto"===c&&!i.options.loop&&1!==o){var v=0;a.map((function(n){var t=d-v;return v+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}));}i.options.trackConfig=a;}function E(){I();var n=i.size;i.options.disabled||n===r||(r=n,T());}function z(){E(),setTimeout(E,500),setTimeout(E,2e3);}function I(){var n=g(i.container);i.size=(i.options.vertical?n.height:n.width)||1;}function A(){i.slides=l(i.options.selector,i.container);}i.container=(c=l(n,document)).length?c[0]:null,i.destroy=function(){f.purge(),i.emit("destroyed"),p(true);},i.prev=function(){i.moveToIdx(i.track.details.abs-1,true);},i.next=function(){i.moveToIdx(i.track.details.abs+1,true);},i.update=T,y(i.options);}}var E=function(n,t,i){try{return function(n,t){var i,e={};return i={emit:function(n){e[n]&&e[n].forEach((function(n){n(i);}));var t=i.options&&i.options[n];t&&t(i);},moveToIdx:function(n,t,e){var r=i.track.idxToDist(n,t);if(r){var a=i.options.defaultAnimation;i.animator.start([{distance:r,duration:b(e||a,"duration",500),easing:b(e||a,"easing",(function(n){return 1+--n*n*n*n*n}))}]);}},on:function(n,t,i){void 0===i&&(i=!1),e[n]||(e[n]=[]);var r=e[n].indexOf(t);r>-1?i&&delete e[n][r]:i||e[n].push(t);},options:n},function(){if(i.track=y(i),i.animator=k(i),t)for(var n=0,e=t;n<e.length;n++)(0,e[n])(i);i.track.init(i.options.initial||0),i.emit("created");}(),i}(t,o([C(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),T,M,w],i||[],!0))}catch(n){console.error(n);}};function z(a,o){var u=ref(),s=ref();return isRef(a)&&watch(a,(function(n,t){s.value&&s.value.update(n);})),onMounted((function(){u.value&&(s.value=new E(u.value,isRef(a)?a.value:a,o));})),onUnmounted((function(){s.value&&s.value.destroy();})),[u,s]}

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProductAccordion",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-inherit text-text_color max-w-2xl mx-auto py-10 md:py-[150px]" }, _attrs))}><ul class="divide-y divide-text_color/30"><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<li class="py-4">`);
        _push(ssrRenderComponent(unref(Disclosure), { as: "div" }, {
          default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(DisclosureButton), { class: "w-full flex items-center justify-between gap-4 text-left" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h3 class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate(item.title)}</h3>`);
                    if (!open) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:plus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (open) {
                      _push3(ssrRenderComponent(_component_Icon, {
                        name: "lucide:minus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(item.title), 1),
                      !open ? (openBlock(), createBlock(_component_Icon, {
                        key: 0,
                        name: "lucide:plus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true),
                      open ? (openBlock(), createBlock(_component_Icon, {
                        key: 1,
                        name: "lucide:minus",
                        class: "h-4 w-4 transition-transform duration-200 ease-out",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        "aria-hidden": "true"
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(``);
              if (open) {
                _push2(ssrRenderComponent(unref(DisclosurePanel), null, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="pt-4 text-sm leading-6 text-text_color/90 space-y-4"${_scopeId2}>`);
                      if (typeof item.content === "string") {
                        _push3(`<p${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                      } else {
                        ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.content), null, null), _parent3, _scopeId2);
                      }
                      if (item.link) {
                        _push3(`<div class="pt-1"${_scopeId2}><a${ssrRenderAttr("href", item.link.href)} class="underline underline-offset-2 hover:opacity-80"${_scopeId2}>${ssrInterpolate(item.link.label)}</a></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "pt-4 text-sm leading-6 text-text_color/90 space-y-4" }, [
                          typeof item.content === "string" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.content), 1)) : (openBlock(), createBlock(resolveDynamicComponent(item.content), { key: 1 })),
                          item.link ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "pt-1"
                          }, [
                            createVNode("a", {
                              href: item.link.href,
                              class: "underline underline-offset-2 hover:opacity-80"
                            }, toDisplayString(item.link.label), 9, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(unref(DisclosureButton), { class: "w-full flex items-center justify-between gap-4 text-left" }, {
                  default: withCtx(() => [
                    createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(item.title), 1),
                    !open ? (openBlock(), createBlock(_component_Icon, {
                      key: 0,
                      name: "lucide:plus",
                      class: "h-4 w-4 transition-transform duration-200 ease-out",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true),
                    open ? (openBlock(), createBlock(_component_Icon, {
                      key: 1,
                      name: "lucide:minus",
                      class: "h-4 w-4 transition-transform duration-200 ease-out",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      "aria-hidden": "true"
                    })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "opacity-0 -translate-y-1",
                  "enter-to-class": "opacity-100 translate-y-0",
                  "leave-active-class": "transition duration-200 ease-in",
                  "leave-from-class": "opacity-100 translate-y-0",
                  "leave-to-class": "opacity-0 -translate-y-1"
                }, {
                  default: withCtx(() => [
                    open ? (openBlock(), createBlock(unref(DisclosurePanel), { key: 0 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "pt-4 text-sm leading-6 text-text_color/90 space-y-4" }, [
                          typeof item.content === "string" ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(item.content), 1)) : (openBlock(), createBlock(resolveDynamicComponent(item.content), { key: 1 })),
                          item.link ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "pt-1"
                          }, [
                            createVNode("a", {
                              href: item.link.href,
                              class: "underline underline-offset-2 hover:opacity-80"
                            }, toDisplayString(item.link.label), 9, ["href"])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...product]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const mobilePanelOpen = ref(false);
    z({ loop: true });
    const config = useRuntimeConfig();
    const route = useRoute();
    const collectionParam = computed(() => {
      var _a;
      return String((_a = route.params.collection) != null ? _a : "");
    });
    const variantParam = computed(() => {
      var _a;
      return String((_a = route.params.product) != null ? _a : "");
    });
    const { success, error } = useToast();
    const activeColorIndex = ref(0);
    const selectedVariantSlug = ref("");
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => `product:${collectionParam.value}:${variantParam.value}`,
      async () => {
        const url = `${config.public.apiBase}/public/products/${collectionParam.value}/${variantParam.value}/`;
        return await $fetch(url);
      },
      { watch: [collectionParam, variantParam] }
    )), __temp = await __temp, __restore(), __temp);
    const product = computed(() => {
      var _a;
      return (_a = data.value) != null ? _a : null;
    });
    const productName = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.name) != null ? _b : "";
    });
    const productCategory = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.category) != null ? _b : "";
    });
    const variantGroups = computed(() => {
      var _a, _b;
      return (_b = (_a = product.value) == null ? void 0 : _a.variant_groups) != null ? _b : [];
    });
    const activeSizes = computed(() => {
      var _a, _b;
      return (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.sizes) != null ? _b : [];
    });
    const inStock = computed(() => activeSizes.value.some((s) => s == null ? void 0 : s.available));
    const activeColorName = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.color) == null ? void 0 : _b.name) != null ? _c : "";
    });
    const imagesToShow = computed(
      () => {
        var _a, _b;
        return (_b = (_a = variantGroups.value[activeColorIndex.value]) == null ? void 0 : _a.gallery) != null ? _b : [];
      }
    );
    watch(
      () => product.value,
      (p) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        if (!p) return;
        const groupIndex = (_b = (_a = p.variant_groups) == null ? void 0 : _a.findIndex(
          (g) => {
            var _a2;
            return ((_a2 = g == null ? void 0 : g.sizes) != null ? _a2 : []).some((s) => (s == null ? void 0 : s.slug) === variantParam.value);
          }
        )) != null ? _b : -1;
        activeColorIndex.value = groupIndex >= 0 ? groupIndex : 0;
        const match = ((_e = (_d = (_c = p.variant_groups) == null ? void 0 : _c[activeColorIndex.value]) == null ? void 0 : _d.sizes) != null ? _e : []).find((s) => (s == null ? void 0 : s.slug) === variantParam.value && (s == null ? void 0 : s.available));
        if (match) {
          selectedVariantSlug.value = match.slug;
        } else {
          const firstAvail = ((_h = (_g = (_f = p.variant_groups) == null ? void 0 : _f[activeColorIndex.value]) == null ? void 0 : _g.sizes) != null ? _h : []).find((s) => s == null ? void 0 : s.available);
          selectedVariantSlug.value = (_i = firstAvail == null ? void 0 : firstAvail.slug) != null ? _i : "";
        }
      },
      { immediate: true }
    );
    useRouter();
    function selectSize(s) {
      if (!(s == null ? void 0 : s.available)) return;
      selectedVariantSlug.value = s.slug;
    }
    async function addToCart() {
      var _a;
      if (!selectedVariantSlug.value) {
        error("Please select a size");
        return;
      }
      try {
        await $fetch(`${config.public.apiBase}/public/cart/item/`, {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: {
            product_variant_slug: selectedVariantSlug.value,
            quantity: 1
          }
        });
        if (false) ;
        success("Added to cart");
      } catch (e) {
        const msg = ((_a = e == null ? void 0 : e.data) == null ? void 0 : _a.detail) || "Could not add to cart";
        error(msg);
        console.error("Add to cart failed", e);
      }
    }
    function swatchBg(hex) {
      if (!hex) return "#e5e7eb";
      return `#${hex}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_AppNavigation = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductAccordion = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_AppNavigation, { dark: false }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-8 pt-4 gap-6"><div class="flex justify-start w-full"><div class="flex items-center py-1 text-xs md:text-sm text-text_color uppercase tracking-widest">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/shop",
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop`);
          } else {
            return [
              createTextVNode("Shop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2">/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/collections/${(_a = unref(product)) == null ? void 0 : _a.collection_slug}`,
        class: "hover:underline pr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`${ssrInterpolate((_a2 = unref(product)) == null ? void 0 : _a2.collection_slug)}`);
          } else {
            return [
              createTextVNode(toDisplayString((_b2 = unref(product)) == null ? void 0 : _b2.collection_slug), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="pr-2">/</span><span class="pr-2">${ssrInterpolate(unref(productName))}</span></div></div></div><div class="hidden md:block"><div class="relative grid grid-cols-12 gap-8 pt-8 mt-2 md:mt-6 px-4 md:px-8 product-grid"><div class="col-span-12 lg:col-span-8">`);
      if (unref(imagesToShow).length > 0) {
        _push(`<div class="grid grid-cols-2 gap-y-7 pr-2 place-content-between"><!--[-->`);
        ssrRenderList(unref(variantGroups)[unref(activeColorIndex)].gallery, (g, i) => {
          _push(`<img${ssrRenderAttr("src", g.image)} class="h-auto object-none bg-background_color mx-auto max-w-auto border border-text_color/30"${ssrRenderAttr("alt", g.alt_text || unref(productName))} loading="lazy">`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<div class="w-full aspect-[4/3] bg-background_color animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div><aside class="col-span-12 lg:col-span-4 product-sticky"><div class="bg-background_color border border-text_color/30 p-5 align-self:start"><div class="flex items-start justify-between"><div><h1 class="text-sm font-light leading-tight text-text_color">${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color">${ssrInterpolate(unref(productName))}</h1>`);
      if (unref(activeColorName)) {
        _push(`<p class="mt-1 text-sm text-text_color">Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="text-right">`);
      if ((_b = unref(product)) == null ? void 0 : _b.discount) {
        _push(`<div class="space-x-2"><span class="text-lg font-semibold text-text_color">\u20AC${ssrInterpolate((_c = unref(product)) == null ? void 0 : _c.discount_price)}</span><span class="line-through text-text_color">\u20AC${ssrInterpolate((_d = unref(product)) == null ? void 0 : _d.price)}</span></div>`);
      } else {
        _push(`<div class="text-lg font-semibold text-text_color">\u20AC${ssrInterpolate((_e = unref(product)) == null ? void 0 : _e.price)}</div>`);
      }
      _push(`</div></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="mt-4"><div class="text-xs uppercase tracking-widest mb-2">Color</div><div class="flex gap-3"><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          var _a2, _b2, _c2;
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border relative"])}"${ssrRenderAttr("title", (_a2 = vg.color) == null ? void 0 : _a2.name)} style="${ssrRenderStyle({ backgroundColor: swatchBg((_b2 = vg.color) == null ? void 0 : _b2.image) })}"><span class="sr-only">${ssrInterpolate((_c2 = vg.color) == null ? void 0 : _c2.name)}</span></button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(activeSizes).length) {
        _push(`<div class="mt-6"><div class="flex items-center justify-between"><div class="text-xs uppercase tracking-widest">Size</div><div class="text-xs text-text_color/70">`);
        if (unref(inStock)) {
          _push(`<span>In Stock</span>`);
        } else {
          _push(`<span>Unavailable</span>`);
        }
        _push(`</div></div><div class="mt-2 grid grid-cols-5 gap-2"><!--[-->`);
        ssrRenderList(unref(activeSizes), (s) => {
          var _a2;
          _push(`<button class="${ssrRenderClass([[
            s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
            unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
          ], "border px-2 py-2 text-sm text-text_color"])}"${ssrIncludeBooleanAttr(!s.available) ? " disabled" : ""}>${ssrInterpolate((_a2 = s.size) == null ? void 0 : _a2.name)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mt-6 space-y-3"><button class="primary-btn sweep group w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""}><span class="btn-label">ADD TO CART</span><span class="sweep-overlay" aria-hidden="true"></span></button></div><ul class="mt-5 space-y-2 text-sm text-text_color/80"><li>\u2713 Free delivery over \u20AC250,-</li><li>\u2713 Easy returns within 14 days</li></ul></div></aside></div>`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          {
            title: "Description",
            content: ((_f = unref(product)) == null ? void 0 : _f.description) || "No additional description."
          },
          {
            title: "Size & Fit",
            content: "Coming soon \u2013 sizing guidance for this product."
          },
          {
            title: "Shipping & Returns",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. Final prices are calculated at checkout and exclude import duties which will be charged by UPS after clearing customs.

      We accept returns within 14 days. We kindly remind you that sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="block md:hidden mt-2 pt-8" id="mobile-product-wrap"><div class="keen-slider"><!--[-->`);
      ssrRenderList(((_g = unref(variantGroups)[unref(activeColorIndex)]) == null ? void 0 : _g.gallery) || [], (img, i) => {
        _push(`<div class="keen-slider__slide"><img${ssrRenderAttr("src", img.image)} class="w-full h-auto object-cover border-t border-b border-text_color/30"${ssrRenderAttr("alt", img.alt_text || unref(productName))}></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(variantGroups).length) {
        _push(`<div class="pt-4 px-4"><div class="text-xs uppercase tracking-widest mb-2">Color</div><div class="flex gap-3"><!--[-->`);
        ssrRenderList(unref(variantGroups), (vg, idx) => {
          var _a2;
          _push(`<button class="${ssrRenderClass([unref(activeColorIndex) === idx ? "ring-2 ring-text_color" : "", "w-8 h-8 border"])}" style="${ssrRenderStyle({ backgroundColor: swatchBg((_a2 = vg.color) == null ? void 0 : _a2.image) })}"></button>`);
        });
        _push(`<!--]--></div>`);
        if (unref(activeColorName)) {
          _push(`<p class="mt-1 text-sm text-text_color">Color: ${ssrInterpolate(unref(activeColorName))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="px-4 mt-4">`);
      _push(ssrRenderComponent(_component_ProductAccordion, {
        items: [
          { title: "Description", content: ((_h = unref(product)) == null ? void 0 : _h.description) || "No additional description." },
          { title: "Size & Fit", content: "Coming soon \u2013 sizing guidance for this product." },
          {
            title: "Shipping & Return",
            content: `We offer UPS Standard, Express Saver, and Express shipping options. 
Final prices are calculated at checkout and exclude import duties.
We accept returns within 14 days. Sale items can only be refunded as store credit.`,
            link: { href: "#", label: "More info" }
          }
        ]
      }, null, _parent));
      _push(`</div><div class="sticky bottom-0 left-0 w-full bg-background_color z-40"><div class="flex flex-col items-start py-6 px-4 gap-4"><div><h1 class="text-sm font-light leading-tight text-text_color">${ssrInterpolate(unref(productCategory))}</h1><h1 class="text-xl font-medium leading-tight text-text_color">${ssrInterpolate(unref(productName))}</h1></div><div class="text-right">`);
      if ((_i = unref(product)) == null ? void 0 : _i.discount) {
        _push(`<div class="space-x-2"><span class="text-base font-semibold text-text_color">\u20AC${ssrInterpolate((_j = unref(product)) == null ? void 0 : _j.discount_price)}</span><span class="line-through text-text_color">\u20AC${ssrInterpolate((_k = unref(product)) == null ? void 0 : _k.price)}</span></div>`);
      } else {
        _push(`<div class="text-base font-semibold text-text_color">\u20AC${ssrInterpolate((_l = unref(product)) == null ? void 0 : _l.price)}</div>`);
      }
      _push(`</div><button class="w-full py-2 text-center text-base font-medium tracking-wider bg-text_color text-background_color" style="${ssrRenderStyle({ "padding-bottom": "calc(env(safe-area-inset-bottom) + 1rem)" })}"> ADD </button></div></div>`);
      _push(ssrRenderComponent(unref(TransitionRoot), { show: unref(mobilePanelOpen) }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              class: "relative z-50",
              onClose: ($event) => mobilePanelOpen.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="fixed inset-0 bg-text_color/30" aria-hidden="true"${_scopeId2}></div><div class="fixed bottom-0 w-screen"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "transform transition ease-out duration-300",
                    "enter-from": "translate-y-full",
                    "enter-to": "translate-y-0",
                    leave: "transform transition ease-in duration-200",
                    "leave-from": "translate-y-0",
                    "leave-to": "translate-y-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex justify-between items-center mb-4"${_scopeId4}><h2 class="text-base uppercase tracking-wider font-medium"${_scopeId4}>Select Size</h2></div>`);
                              if (unref(activeSizes).length) {
                                _push5(`<div class="mt-4"${_scopeId4}><div class="text-xs uppercase tracking-widest mb-2"${_scopeId4}>Size</div><div class="flex flex-col justify-center gap-3 items-center"${_scopeId4}><!--[-->`);
                                ssrRenderList(unref(activeSizes), (s) => {
                                  var _a2;
                                  _push5(`<button class="${ssrRenderClass([[
                                    s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                    unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                  ], "border px-3 py-2 text-sm w-fit"])}"${_scopeId4}>${ssrInterpolate((_a2 = s.size) == null ? void 0 : _a2.name)}</button>`);
                                });
                                _push5(`<!--]--></div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<button class="mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed"${ssrIncludeBooleanAttr(!unref(selectedVariantSlug)) ? " disabled" : ""}${_scopeId4}> ADD TO CART </button>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                  createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                                ]),
                                unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "mt-4"
                                }, [
                                  createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                  createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                      var _a2;
                                      return openBlock(), createBlock("button", {
                                        key: s.slug,
                                        onClick: ($event) => selectSize(s),
                                        class: ["border px-3 py-2 text-sm w-fit", [
                                          s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                          unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                        ]]
                                      }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick"]);
                                    }), 128))
                                  ])
                                ])) : createCommentVNode("", true),
                                createVNode("button", {
                                  class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                  disabled: !unref(selectedVariantSlug),
                                  onClick: addToCart
                                }, " ADD TO CART ", 8, ["disabled"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    var _a2;
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]]
                                    }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
                                class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: !unref(selectedVariantSlug),
                                onClick: addToCart
                              }, " ADD TO CART ", 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "fixed inset-0 bg-text_color/30",
                      "aria-hidden": "true"
                    }),
                    createVNode("div", { class: "fixed bottom-0 w-screen" }, [
                      createVNode(unref(TransitionChild), {
                        enter: "transform transition ease-out duration-300",
                        "enter-from": "translate-y-full",
                        "enter-to": "translate-y-0",
                        leave: "transform transition ease-in duration-200",
                        "leave-from": "translate-y-0",
                        "leave-to": "translate-y-full"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                                createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                              ]),
                              unref(activeSizes).length ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mt-4"
                              }, [
                                createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                                createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                    var _a2;
                                    return openBlock(), createBlock("button", {
                                      key: s.slug,
                                      onClick: ($event) => selectSize(s),
                                      class: ["border px-3 py-2 text-sm w-fit", [
                                        s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                        unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                      ]]
                                    }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick"]);
                                  }), 128))
                                ])
                              ])) : createCommentVNode("", true),
                              createVNode("button", {
                                class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                                disabled: !unref(selectedVariantSlug),
                                onClick: addToCart
                              }, " ADD TO CART ", 8, ["disabled"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                class: "relative z-50",
                onClose: ($event) => mobilePanelOpen.value = false
              }, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "fixed inset-0 bg-text_color/30",
                    "aria-hidden": "true"
                  }),
                  createVNode("div", { class: "fixed bottom-0 w-screen" }, [
                    createVNode(unref(TransitionChild), {
                      enter: "transform transition ease-out duration-300",
                      "enter-from": "translate-y-full",
                      "enter-to": "translate-y-0",
                      leave: "transform transition ease-in duration-200",
                      "leave-from": "translate-y-0",
                      "leave-to": "translate-y-full"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DialogPanel), { class: "w-full bg-background_color p-6" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex justify-between items-center mb-4" }, [
                              createVNode("h2", { class: "text-base uppercase tracking-wider font-medium" }, "Select Size")
                            ]),
                            unref(activeSizes).length ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "mt-4"
                            }, [
                              createVNode("div", { class: "text-xs uppercase tracking-widest mb-2" }, "Size"),
                              createVNode("div", { class: "flex flex-col justify-center gap-3 items-center" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(activeSizes), (s) => {
                                  var _a2;
                                  return openBlock(), createBlock("button", {
                                    key: s.slug,
                                    onClick: ($event) => selectSize(s),
                                    class: ["border px-3 py-2 text-sm w-fit", [
                                      s.available ? "cursor-pointer" : "opacity-40 cursor-not-allowed",
                                      unref(selectedVariantSlug) === s.slug ? "border-text_color" : "border-project_gray/50"
                                    ]]
                                  }, toDisplayString((_a2 = s.size) == null ? void 0 : _a2.name), 11, ["onClick"]);
                                }), 128))
                              ])
                            ])) : createCommentVNode("", true),
                            createVNode("button", {
                              class: "mt-6 w-full py-3 text-base font-medium tracking-wider bg-text_color text-background_color disabled:opacity-50 disabled:cursor-not-allowed",
                              disabled: !unref(selectedVariantSlug),
                              onClick: addToCart
                            }, " ADD TO CART ", 8, ["disabled"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[collection]/[...product].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...product_-BwJkuA5H.mjs.map
