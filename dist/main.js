/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=PT+Serif&family=Playfair+Display&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::after,\\r\\n*::before {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Playfair Display\\\", serif;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  gap: 2rem;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: relative;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  background-color: bisque;\\r\\n  padding: 1rem 0;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  gap: 3em;\\r\\n  flex-direction: column;\\r\\n  padding: 1em;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.show-thanks {\\r\\n  display: none;\\r\\n  padding: 3rem;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\ntextarea,\\r\\ninput,\\r\\nbutton {\\r\\n  margin-top: 1em;\\r\\n  padding: 0.5em;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nsummary {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 50px;\\r\\n}\\r\\n\\r\\n.center-txt {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.item-image {\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n#items {\\r\\n  display: grid;\\r\\n  margin-top: 4rem;\\r\\n  grid-template-columns: 1fr;\\r\\n}\\r\\n#items li {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n#items li a {\\r\\n  margin: 0.5rem 0;\\r\\n  align-self: center;\\r\\n  border: 1px solid black;\\r\\n  padding: 2px;\\r\\n  box-shadow: 3px 3px;\\r\\n}\\r\\n\\r\\n.name-like {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: none;\\r\\n  background-color: rgba(253, 253, 253, 0.8);\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.popup-close {\\r\\n  cursor: pointer;\\r\\n  position: absolute;\\r\\n  right: 2rem;\\r\\n  top: 2rem;\\r\\n  font-size: xx-large;\\r\\n}\\r\\n\\r\\n.body-popup-show header,\\r\\n.body-popup-show main,\\r\\n.body-popup-show footer {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.popup_container {\\r\\n  background-color: fff;\\r\\n  color: #000;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-top: 4rem;\\r\\n  min-height: calc(100vh - 6rem);\\r\\n}\\r\\n.popup_container ul {\\r\\n  flex-direction: column;\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n.popup_container ul *:not(.comment) {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n#popup-title {\\r\\n  color: brown;\\r\\n}\\r\\n\\r\\n.popup_title-sub {\\r\\n  text-decoration: underline wavy;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#popup-idbm {\\r\\n  text-align: center;\\r\\n  margin-top: 1rem;\\r\\n}\\r\\n\\r\\n#popup-summary p {\\r\\n  margin: 2rem auto;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\n#popup-img {\\r\\n  margin: 2.5rem;\\r\\n}\\r\\n\\r\\n.comments_title {\\r\\n  text-align: center;\\r\\n  margin-top: 2em;\\r\\n}\\r\\n\\r\\n.comment_list {\\r\\n  width: 100vw;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 1em;\\r\\n  flex-direction: row;\\r\\n  padding: 1em;\\r\\n  border-bottom: 1px solid black;\\r\\n  width: 80%;\\r\\n}\\r\\n.comment span {\\r\\n  width: 25%;\\r\\n}\\r\\n.comment span:nth-of-type(1) {\\r\\n  width: 10%;\\r\\n  color: blueviolet;\\r\\n}\\r\\n.comment p {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n#empty-comment {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@media (min-width: 632px) {\\r\\n  #items {\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    margin: 4rem 1rem;\\r\\n  }\\r\\n}\\r\\n@media (min-width: 1024px) {\\r\\n  #items {\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    margin: 4rem 2rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* harmony import */ var _post_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-data.js */ \"./src/post-data.js\");\n/* eslint-disable linebreak-style */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst likes = JSON.parse(localStorage.getItem('likes') || '{}');\r\n\r\nwindow.onload = () => {\r\n  document.getElementById('logo').src = _images_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n  async function run() {\r\n    const hiddenLiEl = document.querySelector('#items li');\r\n    let likesCounts = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes');\r\n    likesCounts = await likesCounts.json();\r\n    let listMovie = await fetch('https://api.tvmaze.com/shows/1/episodes');\r\n    listMovie = await listMovie.json();\r\n    listMovie.forEach((movie, index) => {\r\n      const {\r\n        name,\r\n        image: { medium },\r\n      } = movie;\r\n      const newLiEl = hiddenLiEl.cloneNode(true);\r\n      newLiEl.style.display = 'flex';\r\n      newLiEl.querySelector('.item-image').src = medium;\r\n      newLiEl.querySelector('.name').innerText = name;\r\n      newLiEl.querySelector('.item_detail').id = index + 1;\r\n      if (likes[index + 1]) {\r\n        newLiEl.querySelector('.like-btn').classList.toggle('fas');\r\n        newLiEl.querySelector('.like-btn').classList.toggle('far');\r\n      }\r\n      const [likesCount] = likesCounts.filter((el) => el.item_id === `${index + 1}`);\r\n      newLiEl.querySelector('.likes-count').innerText = likesCount ? likesCount.likes : 0;\r\n      document.getElementById('items').appendChild(newLiEl);\r\n    });\r\n    Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn, index) => {\r\n      const listener = async () => {\r\n        if (likes[index]) return;\r\n        likes[index] = true;\r\n        // .likes-count element\r\n        likeBtn.nextElementSibling.innerText = +likeBtn.nextElementSibling.innerText + 1;\r\n        localStorage.setItem('likes', JSON.stringify(likes));\r\n        await (0,_post_data_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes', { item_id: `${index}` });\r\n        likeBtn.classList.toggle('fas');\r\n        likeBtn.classList.toggle('far');\r\n      };\r\n      likeBtn.addEventListener('click', listener);\r\n    });\r\n    const detailBtns = document.querySelectorAll('.item_detail');\r\n    detailBtns.forEach((detail) => {\r\n      detail.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        (0,_popup_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(detail.id);\r\n      });\r\n    });\r\n  }\r\n  run();\r\n};\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showDetails)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst popup = document.querySelector('.popup');\r\nconst popupImg = document.getElementById('popup-img');\r\nconst popupTitle = document.getElementById('popup-title');\r\nconst popupImdb = document.getElementById('popup-imdb');\r\nconst popupSummary = document.getElementById('popup-summary');\r\nconst popupClose = document.querySelector('.popup-close');\r\nconst commentList = document.querySelector('.comment_list');\r\nconst commentNumber = document.getElementById('comment-number');\r\nconst emptyComment = document.getElementById('empty-comment');\r\nconst userNameElement = document.getElementById('name');\r\nconst insightsElement = document.getElementById('insights');\r\nconst commentBtn = document.getElementById('comment-btn');\r\nconst form = document.querySelector('.form');\r\nconst showThanks = document.querySelector('.show-thanks');\r\n\r\nconst baseUrl = 'https://api.tvmaze.com/episodes/';\r\nconst involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/comments';\r\nasync function getDetails(item) {\r\n  let result = await fetch(`${baseUrl}${item}`);\r\n  result = await result.json();\r\n  return result;\r\n}\r\n\r\nasync function getComments(id) {\r\n  let result = await fetch(`${involvementUrl}?item_id=${id}`);\r\n  result = await result.json();\r\n  return result;\r\n}\r\n\r\nasync function showComment(name) {\r\n  const comments = await getComments(name);\r\n  commentList.innerHTML = '';\r\n  comments.forEach((commentItem, index) => {\r\n    const {\r\n      username,\r\n      comment,\r\n      creation_date: creationDate,\r\n    } = commentItem;\r\n    const li = document.createElement('li');\r\n    li.classList.add('comment');\r\n    const span = document.createElement('span');\r\n    const p = document.createElement('p');\r\n    const spanTwo = document.createElement('span');\r\n    span.innerText = `${username} : `;\r\n    p.innerText = comment;\r\n    spanTwo.innerText = creationDate;\r\n    li.appendChild(span);\r\n    li.appendChild(p);\r\n    li.appendChild(spanTwo);\r\n    commentList.insertAdjacentElement('beforeend', li);\r\n    commentNumber.innerText = index + 1;\r\n  });\r\n}\r\n\r\nasync function postComment(obj) {\r\n  const response = await fetch(involvementUrl, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify(obj),\r\n  });\r\n  return response.text();\r\n}\r\n\r\nasync function showDetails(item) {\r\n  document.body.classList.add('body-popup-show');\r\n  const data = await getDetails(item);\r\n  const {\r\n    name, image: { medium: image },\r\n    rating: { average: imdb },\r\n    summary,\r\n  } = data;\r\n  const comments = await getComments(name);\r\n\r\n  popup.style.display = 'block';\r\n  popupTitle.innerText = name;\r\n  popupImg.src = image;\r\n  popupImdb.innerText = imdb;\r\n  popupSummary.innerHTML = summary;\r\n  commentList.innerHTML = '';\r\n  form.style.display = 'flex';\r\n  showThanks.style.display = 'none';\r\n\r\n  if (comments.error) {\r\n    commentNumber.innerText = '0';\r\n    emptyComment.style.display = 'block';\r\n  } else {\r\n    showComment(name);\r\n  }\r\n\r\n  commentBtn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const userName = userNameElement.value;\r\n    const insights = insightsElement.value;\r\n    const commentObj = {\r\n      item_id: name,\r\n      username: userName,\r\n      comment: insights,\r\n    };\r\n    await postComment(commentObj);\r\n    await showComment(name);\r\n    userNameElement.value = '';\r\n    insightsElement.value = '';\r\n    form.style.display = 'none';\r\n    showThanks.style.display = 'block';\r\n    setTimeout(() => {\r\n      showThanks.style.display = 'none';\r\n    }, 5000);\r\n  });\r\n}\r\n\r\npopupClose.addEventListener('click', () => {\r\n  document.body.classList.remove('body-popup-show');\r\n\r\n  popup.style.display = 'none';\r\n});\n\n//# sourceURL=webpack://webpack-exercise/./src/popup.js?");

/***/ }),

/***/ "./src/post-data.js":
/*!**************************!*\
  !*** ./src/post-data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ postData)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nasync function postData(url = '', data = {}) {\r\n  const response = await fetch(url, {\r\n    method: 'POST',\r\n    mode: 'cors',\r\n    cache: 'no-cache',\r\n    credentials: 'same-origin',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    redirect: 'follow',\r\n    referrerPolicy: 'no-referrer',\r\n    body: JSON.stringify(data),\r\n  });\r\n  return response;\r\n}\n\n//# sourceURL=webpack://webpack-exercise/./src/post-data.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bcbea53b43bc26deaea.png\";\n\n//# sourceURL=webpack://webpack-exercise/./src/images/logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;