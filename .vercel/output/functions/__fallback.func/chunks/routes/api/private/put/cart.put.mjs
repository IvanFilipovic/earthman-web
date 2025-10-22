import { d as defineEventHandler, u as useRuntimeConfig, g as getCookie, r as readBody, c as createError } from '../../../../nitro/nitro.mjs';
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
import 'node:url';
import 'ipx';

const cart_put = defineEventHandler(async (event) => {
  const { apiBase, cartSessionCookie } = useRuntimeConfig().public;
  const cookieName = cartSessionCookie || "cart_session_id";
  let sessionId = getCookie(event, cookieName) || "none";
  const cookieHeader = `${cookieName}=${encodeURIComponent(sessionId)}`;
  const body = await readBody(event);
  if (!(body == null ? void 0 : body.product_variant_slug)) {
    throw createError({ statusCode: 400, statusMessage: "Missing product_variant_slug" });
  }
  if (!(body == null ? void 0 : body.quantity) || body.quantity < 1) {
    throw createError({ statusCode: 400, statusMessage: "Quantity must be 1 or more" });
  }
  try {
    const data = await $fetch(`${apiBase}/public/cart/item/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieHeader
      },
      body
    });
    return data;
  } catch (err) {
    throw createError({
      statusCode: (err == null ? void 0 : err.status) || 500,
      statusMessage: (err == null ? void 0 : err.statusText) || "Add to cart failed",
      data: (err == null ? void 0 : err.data) || null
    });
  }
});

export { cart_put as default };
//# sourceMappingURL=cart.put.mjs.map
