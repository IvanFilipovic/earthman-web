import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie } from '../../../../nitro/nitro.mjs';
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

const cart_get = defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public;
  const cookieName = cartSessionCookie || "cart_session_id";
  const sessionId = getCookie(event, cookieName) || "none";
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`;
  const data = await $fetch(`${apiBase}/public/cart/`, {
    method: "GET",
    headers: {
      cookie: cookieHeader
      // ← single cookie only
    }
  });
  return data;
});

export { cart_get as default };
//# sourceMappingURL=cart.get.mjs.map
