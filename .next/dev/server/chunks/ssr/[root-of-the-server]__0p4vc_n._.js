module.exports = [
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/i18n/request.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "localeNames",
    ()=>localeNames,
    "locales",
    ()=>locales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/use-intl/dist/esm/development/core.js [app-rsc] (ecmascript) <locals>");
;
;
const locales = [
    'en',
    'vi',
    'lo',
    'ja',
    'zh',
    'th',
    'hi'
];
const localeNames = {
    en: 'English',
    vi: 'Tiếng Việt',
    lo: 'ພາສາລາວ',
    ja: '日本語',
    zh: '中文',
    th: 'ไทย',
    hi: 'हिन्दी'
};
const messageImports = {
    en: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/en.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    vi: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/vi.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    lo: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/lo.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    ja: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/ja.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    zh: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/zh.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    th: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/th.json.[json].cjs [app-rsc] (ecmascript, async loader)"),
    hi: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/hi.json.[json].cjs [app-rsc] (ecmascript, async loader)")
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    const requested = await requestLocale;
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(locales, requested) ? requested : 'en';
    const messages = (await messageImports[locale]()).default;
    return {
        locale,
        messages
    };
});
}),
"[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_5972bc34-module__OU16Qa__className",
});
}),
"[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/i18n/routing.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "locales",
    ()=>locales,
    "routing",
    ()=>routing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-rsc] (ecmascript) <export default as defineRouting>");
;
const locales = [
    'en',
    'vi',
    'lo',
    'ja',
    'zh',
    'th',
    'hi'
];
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    locales,
    defaultLocale: 'en'
});
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Toaster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx <module evaluation>", "Toaster");
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Toaster = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx", "Toaster");
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevToolsProtection",
    ()=>DevToolsProtection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DevToolsProtection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DevToolsProtection() from the server but DevToolsProtection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx <module evaluation>", "DevToolsProtection");
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DevToolsProtection",
    ()=>DevToolsProtection
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DevToolsProtection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DevToolsProtection() from the server but DevToolsProtection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx", "DevToolsProtection");
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$DevToolsProtection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$DevToolsProtection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$DevToolsProtection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocaleLayout,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/use-intl/dist/esm/development/core.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next-intl/dist/esm/development/server/react-server/getMessages.js [app-rsc] (ecmascript) <export default as getMessages>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_5972bc34.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/ui/toaster.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$DevToolsProtection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/components/DevToolsProtection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"].map((locale)=>({
            locale
        }));
}
async function generateMetadata({ params }) {
    const { locale } = await params;
    // Import messages for metadata
    const messages = await __turbopack_context__.f({
        "../../../messages/en.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/en.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/en.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/hi.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/hi.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/hi.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/ja.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/ja.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/ja.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/lo.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/lo.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/lo.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/th.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/th.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/th.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/vi.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/vi.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/vi.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        },
        "../../../messages/zh.json": {
            id: ()=>"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/zh.json.[json].cjs [app-rsc] (ecmascript, async loader)",
            module: ()=>__turbopack_context__.A("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/messages/zh.json.[json].cjs [app-rsc] (ecmascript, async loader)")
        }
    }).import(`../../../messages/${locale}.json`);
    const t = messages.default.metadata;
    return {
        title: t.title,
        description: t.description,
        keywords: [
            'SL/TP Calculator',
            'Stop Loss',
            'Take Profit',
            'Forex',
            'Trading',
            'Risk Management'
        ],
        robots: {
            index: true,
            follow: true
        },
        openGraph: {
            title: t.title,
            description: t.description,
            type: 'website'
        }
    };
}
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["locales"], locale)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const messages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getMessages$3e$__["getMessages"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_5972bc34$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                    messages: messages,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$DevToolsProtection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DevToolsProtection"], {}, void 0, false, {
                            fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$FTECH_PROJECTS$2f$2026$2f$TradeSLTP$2f$src$2f$components$2f$ui$2f$toaster$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Toaster"], {}, void 0, false, {
                            fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/FTECH_PROJECTS/2026/TradeSLTP/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p4vc_n._.js.map