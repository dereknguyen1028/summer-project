(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/useGyroscope.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useGyroscope = (options = {}, callback)=>{
    _s();
    const [angularVelocity, setAngularVelocity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: null,
        y: null,
        z: null
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGyroscope.useEffect": ()=>{
            let sensor;
            // @ts-ignore: Gyroscope may not exist on window in all browsers
            if ('Gyroscope' in window) {
                // @ts-ignore: Gyroscope may not exist on window in all browsers
                sensor = new window.Gyroscope(options);
                sensor.start();
                sensor.onreading = ({
                    "useGyroscope.useEffect": ()=>{
                        const readings = {
                            x: sensor.x,
                            y: sensor.y,
                            z: sensor.z
                        };
                        setAngularVelocity(readings);
                        if (typeof callback === 'function') {
                            callback(readings);
                        }
                    }
                })["useGyroscope.useEffect"];
                sensor.onerror = ({
                    "useGyroscope.useEffect": (event)=>{
                        console.log(event.error.name, event.error.message);
                        setAngularVelocity({
                            x: null,
                            y: null,
                            z: null
                        });
                    }
                })["useGyroscope.useEffect"];
            } else {
                console.warn('Gyroscope is not supported by this browser.');
            }
            return ({
                "useGyroscope.useEffect": ()=>{
                    if (sensor) {
                        sensor.stop();
                    }
                }
            })["useGyroscope.useEffect"];
        }
    }["useGyroscope.useEffect"], [
        callback,
        options
    ]);
    return angularVelocity;
};
_s(useGyroscope, "Aq8NVBV7YxXPbNAwVUAeuGLQG+U=");
const __TURBOPACK__default__export__ = useGyroscope;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/gyroscopetable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GyroTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGyroscope$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useGyroscope.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GyroTable() {
    _s();
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGyroscope$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Gyroscope Data"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/gyroscopetable.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "X: ",
                    state.x ?? "N/A"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/gyroscopetable.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Y: ",
                    state.y ?? "N/A"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/gyroscopetable.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Z: ",
                    state.z ?? "N/A"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/gyroscopetable.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/gyroscopetable.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(GyroTable, "srxoNUNrIwUq8IRMfCstQ3woQ7k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useGyroscope$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = GyroTable;
var _c;
__turbopack_context__.k.register(_c, "GyroTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/gyroscopetable.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ui/gyroscopetable.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_018ea842._.js.map