(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_components_19621db3._.js", {

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
    const handleSearch = async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:8000/api/documents/vector?q=${query}&lang=${language}`);
        console.log(response.data.results);
        setResults(response.data.results);
    };
    const handleSearchBool = async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`http://localhost:8000/api/documents/boolean?q=${query}&lang=${language}`);
        console.log(response.data.results);
        setResults(response.data.results);
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
                lineNumber: 43,
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
                        lineNumber: 47,
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
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "am",
                                        children: "Amharic"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 55,
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
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "bool",
                                        children: "Bool"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSearchClick,
                        className: "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
                        children: "Search"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 46,
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
                        lineNumber: 81,
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
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: doc.original_text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: doc.similarity
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Search.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/app/components/Search.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Search.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Search.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Search.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_s(Search, "rNVlGDtWHmlr0Wja0Ub3qy8XEQk=");
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
}]);

//# sourceMappingURL=src_app_components_19621db3._.js.map