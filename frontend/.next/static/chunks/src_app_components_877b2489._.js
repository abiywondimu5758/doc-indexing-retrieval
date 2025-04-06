(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_877b2489._.js", {

"[project]/src/app/components/embedding.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)"); // added axios import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/line.js [app-client] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-axis/src/axis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const EmbeddingComponent = ()=>{
    _s();
    const [embedding, setEmbedding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Updated mutation using axios.post and improved error handling
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "EmbeddingComponent.useMutation[mutation]": async (text)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/embedding/bert', {
                    text
                });
                return response.data;
            }
        }["EmbeddingComponent.useMutation[mutation]"],
        onSuccess: {
            "EmbeddingComponent.useMutation[mutation]": (data)=>{
                setEmbedding(data.embedding);
            }
        }["EmbeddingComponent.useMutation[mutation]"],
        onError: {
            "EmbeddingComponent.useMutation[mutation]": (error)=>{
                console.error('Error fetching embedding:', error);
            }
        }["EmbeddingComponent.useMutation[mutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmbeddingComponent.useEffect": ()=>{
            if (!embedding || !svgRef.current) return;
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgRef.current);
            svg.selectAll("*").remove(); // clear previous drawing
            const width = 600, height = 300;
            svg.attr("width", width).attr("height", height);
            // X scale: index of each embedding value
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
                0,
                embedding.length - 1
            ]).range([
                40,
                width - 20
            ]);
            // Y scale: embedding value range
            const yExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])(embedding);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain(yExtent).range([
                height - 30,
                20
            ]);
            // Generate line path
            const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x({
                "EmbeddingComponent.useEffect.line": (d, i)=>xScale(i)
            }["EmbeddingComponent.useEffect.line"]).y({
                "EmbeddingComponent.useEffect.line": (d)=>yScale(d)
            }["EmbeddingComponent.useEffect.line"]);
            svg.append("path").datum(embedding).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 2).attr("d", line);
            // Add x-axis
            svg.append("g").attr("transform", `translate(0, ${height - 30})`).call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisBottom"])(xScale));
            // Add y-axis
            svg.append("g").attr("transform", "translate(40,0)").call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisLeft"])(yScale));
        }
    }["EmbeddingComponent.useEffect"], [
        embedding
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Generate Embedding using BERT"
            }, void 0, false, {
                fileName: "[project]/src/app/components/embedding.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        placeholder: "Enter your text here",
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/embedding.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>mutation.mutate(inputText),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Send Request"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/embedding.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/embedding.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            mutation.isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/embedding.tsx",
                lineNumber: 85,
                columnNumber: 36
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-red-500",
                children: "Error fetching embedding."
            }, void 0, false, {
                fileName: "[project]/src/app/components/embedding.tsx",
                lineNumber: 86,
                columnNumber: 34
            }, this),
            embedding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "border",
                    ref: svgRef
                }, void 0, false, {
                    fileName: "[project]/src/app/components/embedding.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/embedding.tsx",
                lineNumber: 88,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/embedding.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
_s(EmbeddingComponent, "W14PCGTUvI4xziJkPF3muL3bzEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = EmbeddingComponent;
const __TURBOPACK__default__export__ = EmbeddingComponent;
var _c;
__turbopack_context__.k.register(_c, "EmbeddingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/FTEmbedding.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/line.js [app-client] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-axis/src/axis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// New inline component to render a chart for a given word vector
const WordChart = ({ label, vector })=>{
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WordChart.useEffect": ()=>{
            if (!vector || !chartRef.current) return;
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(chartRef.current);
            svg.selectAll("*").remove();
            const width = 600, height = 300;
            svg.attr("width", width).attr("height", height);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
                0,
                vector.length - 1
            ]).range([
                40,
                width - 20
            ]);
            const yExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])(vector);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain(yExtent).range([
                height - 30,
                20
            ]);
            const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x({
                "WordChart.useEffect.line": (d, i)=>xScale(i)
            }["WordChart.useEffect.line"]).y({
                "WordChart.useEffect.line": (d)=>yScale(d)
            }["WordChart.useEffect.line"]);
            svg.append("path").datum(vector).attr("fill", "none").attr("stroke", "teal").attr("stroke-width", 2).attr("d", line);
            svg.append("g").attr("transform", `translate(0, ${height - 30})`).call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisBottom"])(xScale));
            svg.append("g").attr("transform", "translate(40,0)").call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisLeft"])(yScale));
        }
    }["WordChart.useEffect"], [
        vector
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-center",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "border",
                ref: chartRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/FTEmbedding.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
};
_s(WordChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = WordChart;
const FTEmbeddingComponent = ()=>{
    _s1();
    // Change state to hold embeddings mapping (word -> vector)
    const [embeddings, setEmbeddings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "FTEmbeddingComponent.useMutation[mutation]": async (text)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/embedding/fasttext', {
                    text
                });
                return response.data;
            }
        }["FTEmbeddingComponent.useMutation[mutation]"],
        // Store the entire embeddings object rather than a single key
        onSuccess: {
            "FTEmbeddingComponent.useMutation[mutation]": (data)=>{
                setEmbeddings(data.embeddings);
            // console.log('Word2Vec Embeddings:', data.embeddings);
            }
        }["FTEmbeddingComponent.useMutation[mutation]"],
        onError: {
            "FTEmbeddingComponent.useMutation[mutation]": (error)=>{
                console.error('Error fetching FastText embedding:', error);
            }
        }["FTEmbeddingComponent.useMutation[mutation]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Generate Embedding using FastText"
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        placeholder: "Enter your text here",
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FTEmbedding.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>mutation.mutate(inputText),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Send Request"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/FTEmbedding.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            mutation.isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 87,
                columnNumber: 36
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-red-500",
                children: "Error fetching embedding."
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 88,
                columnNumber: 34
            }, this),
            embeddings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: Object.entries(embeddings).map(([word, vector])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WordChart, {
                        label: word,
                        vector: vector
                    }, word, false, {
                        fileName: "[project]/src/app/components/FTEmbedding.tsx",
                        lineNumber: 93,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/FTEmbedding.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/FTEmbedding.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
_s1(FTEmbeddingComponent, "8ANv7dPyBiSrY0RazoFIlD+vq1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = FTEmbeddingComponent;
const __TURBOPACK__default__export__ = FTEmbeddingComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "WordChart");
__turbopack_context__.k.register(_c1, "FTEmbeddingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Gembedding.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/line.js [app-client] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-axis/src/axis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// New inline component to render a chart for a given word vector
const WordChart = ({ label, vector })=>{
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WordChart.useEffect": ()=>{
            if (!vector || !chartRef.current) return;
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(chartRef.current);
            svg.selectAll("*").remove();
            const width = 600, height = 300;
            svg.attr("width", width).attr("height", height);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
                0,
                vector.length - 1
            ]).range([
                40,
                width - 20
            ]);
            const yExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])(vector);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain(yExtent).range([
                height - 30,
                20
            ]);
            const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x({
                "WordChart.useEffect.line": (d, i)=>xScale(i)
            }["WordChart.useEffect.line"]).y({
                "WordChart.useEffect.line": (d)=>yScale(d)
            }["WordChart.useEffect.line"]);
            svg.append("path").datum(vector).attr("fill", "none").attr("stroke", "teal").attr("stroke-width", 2).attr("d", line);
            svg.append("g").attr("transform", `translate(0, ${height - 30})`).call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisBottom"])(xScale));
            svg.append("g").attr("transform", "translate(40,0)").call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisLeft"])(yScale));
        }
    }["WordChart.useEffect"], [
        vector
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-center",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "border",
                ref: chartRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Gembedding.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
};
_s(WordChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = WordChart;
const GEmbeddingComponent = ()=>{
    _s1();
    // Change state to hold embeddings mapping (word -> vector)
    const [embeddings, setEmbeddings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "GEmbeddingComponent.useMutation[mutation]": async (text)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/embedding/glove', {
                    text
                });
                return response.data;
            }
        }["GEmbeddingComponent.useMutation[mutation]"],
        // Store the entire embeddings object rather than a single key
        onSuccess: {
            "GEmbeddingComponent.useMutation[mutation]": (data)=>{
                setEmbeddings(data.embeddings);
            // console.log('Word2Vec Embeddings:', data.embeddings);
            }
        }["GEmbeddingComponent.useMutation[mutation]"],
        onError: {
            "GEmbeddingComponent.useMutation[mutation]": (error)=>{
                console.error('Error fetching GloVe embedding:', error);
            }
        }["GEmbeddingComponent.useMutation[mutation]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Generate Embedding using GloVe"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        placeholder: "Enter your text here",
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Gembedding.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>mutation.mutate(inputText),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Send Request"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Gembedding.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            mutation.isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 87,
                columnNumber: 36
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-red-500",
                children: "Error fetching embedding."
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 88,
                columnNumber: 34
            }, this),
            embeddings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: Object.entries(embeddings).map(([word, vector])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WordChart, {
                        label: word,
                        vector: vector
                    }, word, false, {
                        fileName: "[project]/src/app/components/Gembedding.tsx",
                        lineNumber: 93,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/Gembedding.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Gembedding.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
_s1(GEmbeddingComponent, "8ANv7dPyBiSrY0RazoFIlD+vq1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = GEmbeddingComponent;
const __TURBOPACK__default__export__ = GEmbeddingComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "WordChart");
__turbopack_context__.k.register(_c1, "GEmbeddingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/GPTembedding.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)"); // added axios import
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/line.js [app-client] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-axis/src/axis.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const GPTEmbeddingComponent = ()=>{
    _s();
    const [embedding, setEmbedding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Updated mutation using axios.post and improved error handling
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "GPTEmbeddingComponent.useMutation[mutation]": async (text)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/embedding/gpt', {
                    text
                });
                return response.data;
            }
        }["GPTEmbeddingComponent.useMutation[mutation]"],
        onSuccess: {
            "GPTEmbeddingComponent.useMutation[mutation]": (data)=>{
                setEmbedding(data.embedding);
            }
        }["GPTEmbeddingComponent.useMutation[mutation]"],
        onError: {
            "GPTEmbeddingComponent.useMutation[mutation]": (error)=>{
                console.error('Error fetching embedding:', error);
            }
        }["GPTEmbeddingComponent.useMutation[mutation]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GPTEmbeddingComponent.useEffect": ()=>{
            if (!embedding || !svgRef.current) return;
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(svgRef.current);
            svg.selectAll("*").remove(); // clear previous drawing
            const width = 600, height = 300;
            svg.attr("width", width).attr("height", height);
            // X scale: index of each embedding value
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
                0,
                embedding.length - 1
            ]).range([
                40,
                width - 20
            ]);
            // Y scale: embedding value range
            const yExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])(embedding);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain(yExtent).range([
                height - 30,
                20
            ]);
            // Generate line path
            const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x({
                "GPTEmbeddingComponent.useEffect.line": (d, i)=>xScale(i)
            }["GPTEmbeddingComponent.useEffect.line"]).y({
                "GPTEmbeddingComponent.useEffect.line": (d)=>yScale(d)
            }["GPTEmbeddingComponent.useEffect.line"]);
            svg.append("path").datum(embedding).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-width", 2).attr("d", line);
            // Add x-axis
            svg.append("g").attr("transform", `translate(0, ${height - 30})`).call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisBottom"])(xScale));
            // Add y-axis
            svg.append("g").attr("transform", "translate(40,0)").call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisLeft"])(yScale));
        }
    }["GPTEmbeddingComponent.useEffect"], [
        embedding
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Generate Embedding using GPT"
            }, void 0, false, {
                fileName: "[project]/src/app/components/GPTembedding.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        placeholder: "Enter your text here",
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/GPTembedding.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>mutation.mutate(inputText),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Send Request"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/GPTembedding.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/GPTembedding.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            mutation.isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/components/GPTembedding.tsx",
                lineNumber: 85,
                columnNumber: 36
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-red-500",
                children: "Error fetching embedding."
            }, void 0, false, {
                fileName: "[project]/src/app/components/GPTembedding.tsx",
                lineNumber: 86,
                columnNumber: 34
            }, this),
            embedding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "border",
                    ref: svgRef
                }, void 0, false, {
                    fileName: "[project]/src/app/components/GPTembedding.tsx",
                    lineNumber: 89,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/GPTembedding.tsx",
                lineNumber: 88,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/GPTembedding.tsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
};
_s(GPTEmbeddingComponent, "W14PCGTUvI4xziJkPF3muL3bzEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = GPTEmbeddingComponent;
const __TURBOPACK__default__export__ = GPTEmbeddingComponent;
var _c;
__turbopack_context__.k.register(_c, "GPTEmbeddingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Search.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Search = ()=>{
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    const [searchType, setSearchType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('vector');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [termDocumentMatrix, setTermDocumentMatrix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // added state
    // Compute unique documents and terms for the matrix view
    const docs = Array.from(new Set(Object.values(termDocumentMatrix).flatMap((docMap)=>Object.keys(docMap))));
    const terms = Object.keys(termDocumentMatrix);
    const handleSearch = async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:8000/api/documents/vector?q=${query}&lang=${language}`);
        console.log(response.data.results);
        setResults(response.data.results);
        console.log(response.data.term_document_matrix); // log matrix
        setTermDocumentMatrix(response.data.term_document_matrix); // store matrix data
    };
    const handleSearchBool = async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:8000/api/documents/boolean?q=${query}&lang=${language}`);
        console.log(response.data.results);
        setResults(response.data.results);
        // Optionally, clear or set the term matrix if returned from boolean search
        setTermDocumentMatrix({});
    };
    const handleSearchClick = ()=>{
        if (searchType === 'bool') {
            handleSearchBool();
        } else {
            handleSearch();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Search Documents"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search...",
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: language,
                                onChange: (e)=>setLanguage(e.target.value),
                                className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "en",
                                        children: "English"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "am",
                                        children: "Amharic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: searchType,
                                onChange: (e)=>setSearchType(e.target.value),
                                className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "vector",
                                        children: "Vector"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "bool",
                                        children: "Bool"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSearchClick,
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-700 mb-4",
                        children: "Results"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: results.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-4 rounded hover:shadow-lg transition-shadow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-semibold text-gray-800",
                                        children: doc.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: doc.original_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: doc.similarity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this),
            terms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-700 mb-4",
                        children: "Document Term Matrix"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border px-4 py-2 bg-gray-200",
                                            children: "Term"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Search.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        docs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border px-4 py-2 bg-gray-200",
                                                children: doc
                                            }, doc, false, {
                                                fileName: "[project]/src/app/components/Search.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/Search.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: terms.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border px-4 py-2 font-semibold",
                                                children: term
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Search.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this),
                                            docs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border px-4 py-2 text-center",
                                                    children: termDocumentMatrix[term][doc] !== undefined ? termDocumentMatrix[term][doc].toFixed(2) : '0'
                                                }, doc, false, {
                                                    fileName: "[project]/src/app/components/Search.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this))
                                        ]
                                    }, term, true, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Search.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_s(Search, "aoGmBjn71Sesg5fierdqcofLQb8=");
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/UploadDocument.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const UploadDocument = ()=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    // Remove old title and text states
    // New state for number of documents and their inputs
    const [docCount, setDocCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [documents, setDocuments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            title: '',
            original_text: '',
            language: 'en'
        }
    ]);
    const [tokenizeData, setTokenizeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stopwordData, setStopwordData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stemData, setStemData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileCount, setFileCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        null
    ]);
    const [uploadMode, setUploadMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("text");
    const tokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopwordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shortenedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const punctuationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const renderTable = (containerRef, data, headerLabel)=>{
        const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(containerRef.current);
        container.selectAll('*').remove();
        const table = container.append('table').style('border-collapse', 'collapse').style('width', '100%');
        const thead = table.append('thead');
        const tbody = table.append('tbody');
        thead.append('tr').selectAll('th').data([
            'Word',
            headerLabel
        ]).enter().append('th').text((d)=>d).style('border', '1px solid #ccc').style('padding', '8px').style('background-color', '#f2f2f2');
        const rows = tbody.selectAll('tr').data(Object.entries(data)).enter().append('tr');
        rows.selectAll('td').data((d)=>d).enter().append('td').text((d)=>d).style('border', '1px solid #ccc').style('padding', '8px');
    };
    // Update tokenizeMutation to send documents array instead of a single document
    const tokenizeMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "UploadDocument.useMutation[tokenizeMutation]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/documents/tokenize', {
                    documents
                });
                return response.data;
            }
        }["UploadDocument.useMutation[tokenizeMutation]"],
        onSuccess: {
            "UploadDocument.useMutation[tokenizeMutation]": (data)=>{
                setTokenizeData(data);
            }
        }["UploadDocument.useMutation[tokenizeMutation]"]
    });
    // Modify stopwordMutation to send the proper payload using the tokenize response's results
    const stopwordMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "UploadDocument.useMutation[stopwordMutation]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/documents/stopword', {
                    results: tokenizeData?.results
                });
                return response.data;
            }
        }["UploadDocument.useMutation[stopwordMutation]"],
        onSuccess: {
            "UploadDocument.useMutation[stopwordMutation]": (data)=>{
                setStopwordData(data);
            }
        }["UploadDocument.useMutation[stopwordMutation]"]
    });
    const stemMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "UploadDocument.useMutation[stemMutation]": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/documents/stem', {
                    results: stopwordData?.results
                });
                return response.data;
            }
        }["UploadDocument.useMutation[stemMutation]"],
        onSuccess: {
            "UploadDocument.useMutation[stemMutation]": (data)=>{
                setStemData(data);
            }
        }["UploadDocument.useMutation[stemMutation]"]
    });
    // Handler to update individual file fields
    const handleFileChange = (index, e)=>{
        const newFiles = [
            ...files
        ];
        newFiles[index] = e.target.files ? e.target.files[0] : null;
        setFiles(newFiles);
    };
    // Update file upload handler to iterate over the files array
    const handleFileUpload = ()=>{
        if (files.some((f)=>f !== null)) {
            // Reset state before uploading new files
            setTokenizeData(null);
            setStopwordData(null);
            setStemData(null);
            const formData = new FormData();
            files.forEach((f)=>{
                if (f) {
                    formData.append('file', f);
                    formData.append('title', f.name);
                    formData.append('language', language); // Use the selected language
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/documents/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((response)=>{
                setTokenizeData(response.data);
            }).catch((error)=>{
                console.error(error);
            });
        } else {
            console.error("No files selected.");
        }
    };
    // Update handleSubmit to use documents array
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Reset state before uploading new text
        setTokenizeData(null);
        setStopwordData(null);
        setStemData(null);
        // Set language for every document
        const documentsWithLanguage = documents.map((doc)=>({
                ...doc,
                language
            }));
        // Send documentsWithLanguage instead of documents
        tokenizeMutation.mutate({
            documents: documentsWithLanguage
        });
    };
    // Add a handler for updating document fields
    const handleDocumentChange = (index, field, value)=>{
        const newDocs = [
            ...documents
        ];
        newDocs[index] = {
            ...newDocs[index],
            [field]: value,
            language
        };
        setDocuments(newDocs);
    };
    // Handle changing the number of documents
    const handleDocCountChange = (e)=>{
        const count = parseInt(e.target.value, 10);
        setDocCount(count);
        const currentCount = documents.length;
        if (count > currentCount) {
            setDocuments([
                ...documents,
                ...Array(count - currentCount).fill({
                    title: '',
                    original_text: '',
                    language
                })
            ]);
        } else {
            setDocuments(documents.slice(0, count));
        }
    };
    // Update handler to change number of file inputs
    const handleFileCountChange = (e)=>{
        const count = parseInt(e.target.value, 10);
        setFileCount(count);
        setFiles(Array(count).fill(null));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadDocument.useEffect": ()=>{
            if (tokenizeData && tokenRef.current) {
                const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(tokenRef.current);
                container.selectAll("*").remove();
                const docsContainer = container.append("div").attr("class", "flex space-x-4 overflow-x-auto").style("padding", "8px");
                tokenizeData.results.forEach({
                    "UploadDocument.useEffect": (result)=>{
                        const docDiv = docsContainer.append("div").attr("class", "border p-4 rounded").style("min-width", "300px");
                        docDiv.append("h4").text(`Tokenized: ${result.title}`).style("font-weight", "bold").style("margin-bottom", "8px");
                        const table = docDiv.append("table").style("border-collapse", "collapse").style("width", "100%");
                        const thead = table.append("thead");
                        const tbody = table.append("tbody");
                        thead.append("tr").selectAll("th").data([
                            "Token",
                            "Count"
                        ]).enter().append("th").text({
                            "UploadDocument.useEffect": (d)=>d
                        }["UploadDocument.useEffect"]).style("border", "1px solid #ccc").style("padding", "4px").style("background-color", "#f2f2f2");
                        Object.entries(result.tokens).forEach({
                            "UploadDocument.useEffect": ([word, count])=>{
                                const row = tbody.append("tr");
                                row.append("td").text(word).style("border", "1px solid #ccc").style("padding", "4px");
                                row.append("td").text(count).style("border", "1px solid #ccc").style("padding", "4px");
                            }
                        }["UploadDocument.useEffect"]);
                    }
                }["UploadDocument.useEffect"]);
            }
        }
    }["UploadDocument.useEffect"], [
        tokenizeData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadDocument.useEffect": ()=>{
            if (stopwordData && stopwordRef.current) {
                const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(stopwordRef.current);
                container.selectAll("*").remove();
                const docsContainer = container.append("div").attr("class", "flex space-x-4 overflow-x-auto").style("padding", "8px");
                stopwordData.results.forEach({
                    "UploadDocument.useEffect": (result)=>{
                        const docDiv = docsContainer.append("div").attr("class", "border p-4 rounded").style("min-width", "300px");
                        docDiv.append("h4").text(`Stopword: ${result.title}`).style("font-weight", "bold").style("margin-bottom", "8px");
                        const table = docDiv.append("table").style("border-collapse", "collapse").style("width", "100%");
                        const thead = table.append("thead");
                        const tbody = table.append("tbody");
                        thead.append("tr").selectAll("th").data([
                            "Word",
                            "Count"
                        ]).enter().append("th").text({
                            "UploadDocument.useEffect": (d)=>d
                        }["UploadDocument.useEffect"]).style("border", "1px solid #ccc").style("padding", "4px").style("background-color", "#f2f2f2");
                        Object.entries(result.words).forEach({
                            "UploadDocument.useEffect": ([word, count])=>{
                                const row = tbody.append("tr");
                                row.append("td").text(word).style("border", "1px solid #ccc").style("padding", "4px");
                                row.append("td").text(count).style("border", "1px solid #ccc").style("padding", "4px");
                            }
                        }["UploadDocument.useEffect"]);
                    }
                }["UploadDocument.useEffect"]);
            }
        }
    }["UploadDocument.useEffect"], [
        stopwordData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadDocument.useEffect": ()=>{
            if (stemData && wordsRef.current) {
                const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(wordsRef.current);
                container.selectAll("*").remove();
                // Create a horizontally scrollable container for each document's stem tables
                const docsContainer = container.append("div").attr("class", "flex space-x-4 overflow-x-auto").style("padding", "8px");
                stemData.results.forEach({
                    "UploadDocument.useEffect": (result)=>{
                        const docDiv = docsContainer.append("div").attr("class", "border p-4 rounded").style("min-width", "300px");
                        docDiv.append("h4").text(`Stem: ${result.title}`).style("font-weight", "bold").style("margin-bottom", "8px");
                        const properties = [
                            {
                                key: "words",
                                label: "Words",
                                data: result.words
                            },
                            {
                                key: "labialized",
                                label: "Labialized",
                                data: result.labialized
                            },
                            {
                                key: "shortened",
                                label: "Shortened",
                                data: result.shortened
                            },
                            {
                                key: "punctuation",
                                label: "Punctuation",
                                data: result.punctuation
                            }
                        ];
                        properties.forEach({
                            "UploadDocument.useEffect": (prop)=>{
                                if (Object.keys(prop.data).length) {
                                    const tableDiv = docDiv.append("div").style("margin-bottom", "8px");
                                    tableDiv.append("h5").text(prop.label).style("font-weight", "600").style("margin-bottom", "4px");
                                    const table = tableDiv.append("table").style("border-collapse", "collapse").style("width", "100%");
                                    const thead = table.append("thead");
                                    const tbody = table.append("tbody");
                                    thead.append("tr").selectAll("th").data([
                                        "Token",
                                        "Count"
                                    ]).enter().append("th").text({
                                        "UploadDocument.useEffect": (d)=>d
                                    }["UploadDocument.useEffect"]).style("border", "1px solid #ccc").style("padding", "4px").style("background-color", "#f2f2f2");
                                    Object.entries(prop.data).forEach({
                                        "UploadDocument.useEffect": ([word, count])=>{
                                            const row = tbody.append("tr");
                                            row.append("td").text(word).style("border", "1px solid #ccc").style("padding", "4px");
                                            row.append("td").text(count).style("border", "1px solid #ccc").style("padding", "4px");
                                        }
                                    }["UploadDocument.useEffect"]);
                                }
                            }
                        }["UploadDocument.useEffect"]);
                    }
                }["UploadDocument.useEffect"]);
                // Render posting list in a separate section below with clear formatting
                const postingContainer = container.append("div").style("margin-top", "24px");
                postingContainer.append("h3").text("Posting List").style("font-weight", "bold").style("margin-bottom", "8px");
                const postingTable = postingContainer.append("table").style("border-collapse", "collapse").style("width", "100%");
                const postingThead = postingTable.append("thead");
                const postingTbody = postingTable.append("tbody");
                postingThead.append("tr").selectAll("th").data([
                    "Word",
                    "Documents"
                ]).enter().append("th").text({
                    "UploadDocument.useEffect": (d)=>d
                }["UploadDocument.useEffect"]).style("border", "1px solid #ccc").style("padding", "4px").style("background-color", "#f2f2f2");
                Object.entries(stemData.posting_list).forEach({
                    "UploadDocument.useEffect": ([word, details])=>{
                        const row = postingTbody.append("tr");
                        row.append("td").text(`${word}(${details.frequency})`).style("border", "1px solid #ccc").style("padding", "4px");
                        row.append("td").text(details.titles.join(", ")).style("border", "1px solid #ccc").style("padding", "4px");
                    }
                }["UploadDocument.useEffect"]);
            }
        }
    }["UploadDocument.useEffect"], [
        stemData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadDocument.useEffect": ()=>{
            setDocuments({
                "UploadDocument.useEffect": (prevDocs)=>prevDocs.map({
                        "UploadDocument.useEffect": (doc)=>({
                                ...doc,
                                language
                            })
                    }["UploadDocument.useEffect"])
            }["UploadDocument.useEffect"]);
        }
    }["UploadDocument.useEffect"], [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Upload Document"
            }, void 0, false, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mr-4 font-semibold text-gray-700",
                        children: "Select Mode:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 423,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: uploadMode,
                        onChange: (e)=>setUploadMode(e.target.value),
                        className: "border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "text",
                                children: "Text"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "doc",
                                children: "Doc"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 424,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mr-4 font-semibold text-gray-700",
                        children: "Language:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: language,
                        onChange: (e)=>setLanguage(e.target.value),
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "en",
                                children: "English"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "am",
                                children: "Amharic"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 437,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            uploadMode === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mr-4 font-semibold text-gray-700",
                                children: "Number of Documents:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: docCount,
                                onChange: handleDocCountChange,
                                className: "border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                children: Array.from({
                                    length: 5
                                }, (_, i)=>i + 1).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: num,
                                        children: num
                                    }, num, false, {
                                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 450,
                        columnNumber: 11
                    }, this),
                    documents.map((doc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 border p-2 rounded",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: `Title for Document ${index + 1}`,
                                    value: doc.title,
                                    onChange: (e)=>handleDocumentChange(index, 'title', e.target.value),
                                    required: true,
                                    className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/UploadDocument.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: `Enter text for Document ${index + 1}`,
                                    value: doc.original_text,
                                    onChange: (e)=>handleDocumentChange(index, 'original_text', e.target.value),
                                    required: true,
                                    className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/UploadDocument.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/app/components/UploadDocument.tsx",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Upload and Tokenize"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 484,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 448,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 p-4 bg-white border border-gray-200 rounded shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold text-gray-700 mb-4",
                        children: "Upload File Directly"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 493,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mr-4 font-semibold text-gray-700",
                                children: "Number of Files:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 496,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: fileCount,
                                onChange: handleFileCountChange,
                                className: "border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                children: Array.from({
                                    length: 5
                                }, (_, i)=>i + 1).map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: num,
                                        children: num
                                    }, num, false, {
                                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 497,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 495,
                        columnNumber: 11
                    }, this),
                    Array.from({
                        length: fileCount
                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                onChange: (e)=>handleFileChange(index, e),
                                className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 510,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/app/components/UploadDocument.tsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleFileUpload,
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Upload File"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 492,
                columnNumber: 9
            }, this),
            (tokenizeData || stopwordData || stemData) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-semibold text-gray-700 mb-10",
                        children: "Results"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 528,
                        columnNumber: 11
                    }, this),
                    tokenizeData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-600",
                                children: "Tokenized"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 530,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: tokenRef,
                                className: "overflow-x-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 531,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 530,
                        columnNumber: 13
                    }, this),
                    stopwordData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-600",
                                children: "Stop words Removes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 534,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: stopwordRef,
                                className: "overflow-x-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 535,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 534,
                        columnNumber: 13
                    }, this),
                    stemData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-semibold text-gray-600",
                                children: "Stemmed"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 538,
                                columnNumber: 36
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: wordsRef,
                                className: "overflow-x-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/UploadDocument.tsx",
                                lineNumber: 539,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/UploadDocument.tsx",
                        lineNumber: 538,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 527,
                columnNumber: 9
            }, this),
            tokenizeData && !stopwordData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>stopwordMutation.mutate(),
                className: "mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                children: "Remove Stop Word"
            }, void 0, false, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 544,
                columnNumber: 9
            }, this),
            stopwordData && !stemData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>stemMutation.mutate(),
                className: "mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                children: "Stem and Normalize"
            }, void 0, false, {
                fileName: "[project]/src/app/components/UploadDocument.tsx",
                lineNumber: 552,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/UploadDocument.tsx",
        lineNumber: 418,
        columnNumber: 5
    }, this);
};
_s(UploadDocument, "u9xZGOCX3R8P4v5f0PpLbomffjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = UploadDocument;
const __TURBOPACK__default__export__ = UploadDocument;
var _c;
__turbopack_context__.k.register(_c, "UploadDocument");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/WVembedding.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-selection/src/select.js [app-client] (ecmascript) <export default as select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-array/src/extent.js [app-client] (ecmascript) <export default as extent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/line.js [app-client] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-axis/src/axis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__ = __turbopack_context__.i("[project]/node_modules/react-spinners/esm/ClipLoader.js [app-client] (ecmascript) <export default as ClipLoader>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// New inline component to render a chart for a given word vector
const WordChart = ({ label, vector })=>{
    _s();
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WordChart.useEffect": ()=>{
            if (!vector || !chartRef.current) return;
            const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$selection$2f$src$2f$select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__select$3e$__["select"])(chartRef.current);
            svg.selectAll("*").remove();
            const width = 600, height = 300;
            svg.attr("width", width).attr("height", height);
            const xScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain([
                0,
                vector.length - 1
            ]).range([
                40,
                width - 20
            ]);
            const yExtent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$array$2f$src$2f$extent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__extent$3e$__["extent"])(vector);
            const yScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])().domain(yExtent).range([
                height - 30,
                20
            ]);
            const line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x({
                "WordChart.useEffect.line": (d, i)=>xScale(i)
            }["WordChart.useEffect.line"]).y({
                "WordChart.useEffect.line": (d)=>yScale(d)
            }["WordChart.useEffect.line"]);
            svg.append("path").datum(vector).attr("fill", "none").attr("stroke", "teal").attr("stroke-width", 2).attr("d", line);
            svg.append("g").attr("transform", `translate(0, ${height - 30})`).call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisBottom"])(xScale));
            svg.append("g").attr("transform", "translate(40,0)").call((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$axis$2f$src$2f$axis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["axisLeft"])(yScale));
        }
    }["WordChart.useEffect"], [
        vector
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-bold text-center",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "border",
                ref: chartRef
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WVembedding.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
};
_s(WordChart, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c = WordChart;
const WVEmbeddingComponent = ()=>{
    _s1();
    // Change state to hold embeddings mapping (word -> vector)
    const [embeddings, setEmbeddings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [inputText, setInputText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "WVEmbeddingComponent.useMutation[mutation]": async (text)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('http://127.0.0.1:8000/api/embedding/word2vec', {
                    text
                });
                return response.data;
            }
        }["WVEmbeddingComponent.useMutation[mutation]"],
        // Store the entire embeddings object rather than a single key
        onSuccess: {
            "WVEmbeddingComponent.useMutation[mutation]": (data)=>{
                setEmbeddings(data.embeddings);
            // console.log('Word2Vec Embeddings:', data.embeddings);
            }
        }["WVEmbeddingComponent.useMutation[mutation]"],
        onError: {
            "WVEmbeddingComponent.useMutation[mutation]": (error)=>{
                console.error('Error fetching word2vec embedding:', error);
            }
        }["WVEmbeddingComponent.useMutation[mutation]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-center text-gray-800 mb-6",
                children: "Generate Embedding using Word2Vec"
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 70,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: inputText,
                        onChange: (e)=>setInputText(e.target.value),
                        placeholder: "Enter your text here",
                        className: "w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WVembedding.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>mutation.mutate(inputText),
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Send Request"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/WVembedding.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            mutation.isPending && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$spinners$2f$esm$2f$ClipLoader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipLoader$3e$__["ClipLoader"], {
                    color: "#3b82f6",
                    size: 50
                }, void 0, false, {
                    fileName: "[project]/src/app/components/WVembedding.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 90,
                columnNumber: 17
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center mt-4 text-red-500",
                children: "Error fetching embedding."
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 94,
                columnNumber: 34
            }, this),
            embeddings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: Object.entries(embeddings).map(([word, vector])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WordChart, {
                        label: word,
                        vector: vector
                    }, word, false, {
                        fileName: "[project]/src/app/components/WVembedding.tsx",
                        lineNumber: 99,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/WVembedding.tsx",
                lineNumber: 96,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/WVembedding.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
};
_s1(WVEmbeddingComponent, "8ANv7dPyBiSrY0RazoFIlD+vq1U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = WVEmbeddingComponent;
const __TURBOPACK__default__export__ = WVEmbeddingComponent;
var _c, _c1;
__turbopack_context__.k.register(_c, "WordChart");
__turbopack_context__.k.register(_c1, "WVEmbeddingComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_877b2489._.js.map