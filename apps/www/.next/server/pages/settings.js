"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/settings";
exports.ids = ["pages/settings"];
exports.modules = {

/***/ "./src/core/theme-context.tsx":
/*!************************************!*\
  !*** ./src/core/theme-context.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CurrentThemeProvider\": () => (/* binding */ CurrentThemeProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"useCurrentTheme\": () => (/* binding */ useCurrentTheme)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react95_dist_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react95/dist/themes */ \"react95/dist/themes\");\n/* harmony import */ var react95_dist_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react95_dist_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! usehooks-ts */ \"usehooks-ts\");\n/* harmony import */ var usehooks_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(usehooks_ts__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst themeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction CurrentThemeProvider({ children  }) {\n    const [theme, setTheme] = (0,usehooks_ts__WEBPACK_IMPORTED_MODULE_3__.useLocalStorage)(\"theme\", \"original\");\n    const config = (react95_dist_themes__WEBPACK_IMPORTED_MODULE_2___default())[theme];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(themeContext.Provider, {\n        value: {\n            theme,\n            setTheme,\n            config\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/azamat/Documents/Programming/ogswap/apps/www/src/core/theme-context.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\nconst useCurrentTheme = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(themeContext);\n    if (context === null) {\n        throw new Error(\"useCurrentTheme must be used within a CurrentThemeProvider\");\n    }\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentThemeProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS90aGVtZS1jb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZEO0FBQ3BCO0FBQ0s7QUFLOUMsTUFBTUksNkJBQWVKLG9EQUFhQSxDQUkvQixJQUFJO0FBRUEsU0FBU0sscUJBQXFCLEVBQUVDLFNBQVEsRUFBMkIsRUFBRTtJQUMxRSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsNERBQWVBLENBQVksU0FBUztJQUU5RCxNQUFNTSxTQUFTUCw0REFBTSxDQUFDSyxNQUFNO0lBRTVCLHFCQUNFLDhEQUFDSCxhQUFhTSxRQUFRO1FBQUNDLE9BQU87WUFBRUo7WUFBT0M7WUFBVUM7UUFBTztrQkFDckRIOzs7Ozs7QUFHUCxDQUFDO0FBRU0sTUFBTU0sa0JBQWtCLElBQU07SUFDbkMsTUFBTUMsVUFBVVosaURBQVVBLENBQUNHO0lBRTNCLElBQUlTLFlBQVksSUFBSSxFQUFFO1FBQ3BCLE1BQU0sSUFBSUMsTUFDUiw4REFDQTtJQUNKLENBQUM7SUFFRCxPQUFPRDtBQUNULEVBQUU7QUFFRixpRUFBZVIsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQG9nc3dhcC93d3cvLi9zcmMvY29yZS90aGVtZS1jb250ZXh0LnRzeD81ZjAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHRoZW1lcyBmcm9tIFwicmVhY3Q5NS9kaXN0L3RoZW1lc1wiO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSBcInVzZWhvb2tzLXRzXCI7XG5cbmV4cG9ydCB0eXBlIFRoZW1lQ29uZmlnID0gdHlwZW9mIHRoZW1lc1trZXlvZiB0eXBlb2YgdGhlbWVzXTtcbmV4cG9ydCB0eXBlIFRoZW1lTmFtZSA9IGtleW9mIHR5cGVvZiB0aGVtZXM7XG5cbmNvbnN0IHRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IHtcbiAgdGhlbWU6IFRoZW1lTmFtZTtcbiAgY29uZmlnOiBUaGVtZUNvbmZpZztcbiAgc2V0VGhlbWU6ICh0aGVtZTogVGhlbWVOYW1lKSA9PiB2b2lkO1xufT4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDdXJyZW50VGhlbWVQcm92aWRlcih7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlTG9jYWxTdG9yYWdlPFRoZW1lTmFtZT4oXCJ0aGVtZVwiLCBcIm9yaWdpbmFsXCIpO1xuXG4gIGNvbnN0IGNvbmZpZyA9IHRoZW1lc1t0aGVtZV07XG5cbiAgcmV0dXJuIChcbiAgICA8dGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCBzZXRUaGVtZSwgY29uZmlnIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgdXNlQ3VycmVudFRoZW1lID0gKCkgPT4ge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dCh0aGVtZUNvbnRleHQpO1xuXG4gIGlmIChjb250ZXh0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJ1c2VDdXJyZW50VGhlbWUgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEN1cnJlbnRUaGVtZVByb3ZpZGVyXCJcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50VGhlbWVQcm92aWRlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInRoZW1lcyIsInVzZUxvY2FsU3RvcmFnZSIsInRoZW1lQ29udGV4dCIsIkN1cnJlbnRUaGVtZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aGVtZSIsInNldFRoZW1lIiwiY29uZmlnIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUN1cnJlbnRUaGVtZSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/theme-context.tsx\n");

/***/ }),

/***/ "./src/pages/settings.tsx":
/*!********************************!*\
  !*** ./src/pages/settings.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react95 */ \"react95\");\n/* harmony import */ var react95__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react95__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react95_dist_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react95/dist/themes */ \"react95/dist/themes\");\n/* harmony import */ var react95_dist_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react95_dist_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _core_theme_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/theme-context */ \"./src/core/theme-context.tsx\");\n\n\n\n\n\nconst themeOptions = Object.keys((react95_dist_themes__WEBPACK_IMPORTED_MODULE_2___default())).map((theme)=>({\n        value: theme,\n        label: theme\n    }));\nconst StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react95__WEBPACK_IMPORTED_MODULE_1__.Select).withConfig({\n    displayName: \"settings__StyledSelect\",\n    componentId: \"sc-40ebed45-0\"\n})`\n  min-width: 24ch;\n`;\nfunction ThemeSwitcher() {\n    const { theme , setTheme  } = (0,_core_theme_context__WEBPACK_IMPORTED_MODULE_4__.useCurrentTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react95__WEBPACK_IMPORTED_MODULE_1__.GroupBox, {\n        label: \"Theme\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledSelect, {\n            menuMaxHeight: 160,\n            value: theme,\n            onChange: (option)=>{\n                setTheme(option.value);\n            },\n            options: themeOptions\n        }, void 0, false, {\n            fileName: \"/Users/azamat/Documents/Programming/ogswap/apps/www/src/pages/settings.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/azamat/Documents/Programming/ogswap/apps/www/src/pages/settings.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\nfunction Settings() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ThemeSwitcher, {}, void 0, false, {\n            fileName: \"/Users/azamat/Documents/Programming/ogswap/apps/www/src/pages/settings.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/azamat/Documents/Programming/ogswap/apps/www/src/pages/settings.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2V0dGluZ3MudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEyQztBQUNGO0FBQ0Y7QUFDNEI7QUFFbkUsTUFBTUssZUFBZUMsT0FBT0MsSUFBSSxDQUFDTCw0REFBTUEsRUFBRU0sR0FBRyxDQUFDLENBQUNDLFFBQVc7UUFDdkRDLE9BQU9EO1FBQ1BFLE9BQU9GO0lBQ1Q7QUFFQSxNQUFNRyxlQUFlVCx3REFBTUEsQ0FBQ0YsMkNBQU1BOzs7RUFBQyxDQUFDOztBQUVwQyxDQUFDO0FBRUQsU0FBU1ksZ0JBQWdCO0lBQ3ZCLE1BQU0sRUFBRUosTUFBSyxFQUFFSyxTQUFRLEVBQUUsR0FBR1Ysb0VBQWVBO0lBRTNDLHFCQUNFLDhEQUFDSiw2Q0FBUUE7UUFBQ1csT0FBTTtrQkFDZCw0RUFBQ0M7WUFDQ0csZUFBZTtZQUNmTCxPQUFPRDtZQUNQTyxVQUFVLENBQUNDLFNBQVc7Z0JBQ3BCSCxTQUFTRyxPQUFPUCxLQUFLO1lBQ3ZCO1lBQ0FRLFNBQVNiOzs7Ozs7Ozs7OztBQUlqQjtBQUVlLFNBQVNjLFdBQVc7SUFDakMscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDUDs7Ozs7Ozs7OztBQUdQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ab2dzd2FwL3d3dy8uL3NyYy9wYWdlcy9zZXR0aW5ncy50c3g/MThlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcm91cEJveCwgU2VsZWN0IH0gZnJvbSBcInJlYWN0OTVcIjtcbmltcG9ydCB0aGVtZXMgZnJvbSBcInJlYWN0OTUvZGlzdC90aGVtZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBUaGVtZU5hbWUsIHVzZUN1cnJlbnRUaGVtZSB9IGZyb20gXCIuLi9jb3JlL3RoZW1lLWNvbnRleHRcIjtcblxuY29uc3QgdGhlbWVPcHRpb25zID0gT2JqZWN0LmtleXModGhlbWVzKS5tYXAoKHRoZW1lKSA9PiAoe1xuICB2YWx1ZTogdGhlbWUsXG4gIGxhYmVsOiB0aGVtZSxcbn0pKTtcblxuY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkKFNlbGVjdClgXG4gIG1pbi13aWR0aDogMjRjaDtcbmA7XG5cbmZ1bmN0aW9uIFRoZW1lU3dpdGNoZXIoKSB7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VDdXJyZW50VGhlbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxHcm91cEJveCBsYWJlbD1cIlRoZW1lXCI+XG4gICAgICA8U3R5bGVkU2VsZWN0XG4gICAgICAgIG1lbnVNYXhIZWlnaHQ9ezE2MH1cbiAgICAgICAgdmFsdWU9e3RoZW1lfVxuICAgICAgICBvbkNoYW5nZT17KG9wdGlvbikgPT4ge1xuICAgICAgICAgIHNldFRoZW1lKG9wdGlvbi52YWx1ZSBhcyBUaGVtZU5hbWUpO1xuICAgICAgICB9fVxuICAgICAgICBvcHRpb25zPXt0aGVtZU9wdGlvbnN9XG4gICAgICAvPlxuICAgIDwvR3JvdXBCb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGhlbWVTd2l0Y2hlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkdyb3VwQm94IiwiU2VsZWN0IiwidGhlbWVzIiwic3R5bGVkIiwidXNlQ3VycmVudFRoZW1lIiwidGhlbWVPcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInRoZW1lIiwidmFsdWUiLCJsYWJlbCIsIlN0eWxlZFNlbGVjdCIsIlRoZW1lU3dpdGNoZXIiLCJzZXRUaGVtZSIsIm1lbnVNYXhIZWlnaHQiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIm9wdGlvbnMiLCJTZXR0aW5ncyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/settings.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react95":
/*!**************************!*\
  !*** external "react95" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("react95");

/***/ }),

/***/ "react95/dist/themes":
/*!**************************************!*\
  !*** external "react95/dist/themes" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react95/dist/themes");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "usehooks-ts":
/*!******************************!*\
  !*** external "usehooks-ts" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("usehooks-ts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/settings.tsx"));
module.exports = __webpack_exports__;

})();