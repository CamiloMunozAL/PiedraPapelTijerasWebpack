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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playwrite+DE+Grund:wght@100..400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset y configuración global */\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Playwrite DE Grund\", sans-serif;\r\n}\r\n\r\n/* Variables globales */\r\n:root {\r\n  --color-1: #dff7f8;\r\n  --color-2: #82fdb1;\r\n  --color-3: rgb(186, 252, 246);\r\n}\r\n\r\n/* Estilos generales del cuerpo */\r\nbody {\r\n  background-color: var(--color-1);\r\n}\r\n\r\n/* Estilos de la cabecera */\r\n.header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--color-2);\r\n  padding: 1.5rem;\r\n}\r\n\r\n/* Estilos del contenido principal */\r\n.main {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n/* Contenedor del marcador */\r\n.container_score {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  background-color: var(--color-3);\r\n  font-size: 1.5rem;\r\n  width: 80%;\r\n  border-radius: 15px;\r\n}\r\n\r\n/* Contenedor de las manos */\r\n.container_hands {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* Estilos de las manos */\r\n.hand {\r\n  min-width: 100px;\r\n}\r\n\r\n/* Estilos de las imágenes */\r\nimg {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/* Estilo específico para la mano del jugador */\r\n.player_hand img {\r\n  transform: scaleX(-1);\r\n}\r\n\r\n/* Estilos de las opciones */\r\n.option {\r\n  width: 32%;\r\n  max-width: 100px;\r\n}\r\n\r\n/* Estilos de los botones */\r\nbutton {\r\n  padding: 0.5rem 1rem;\r\n  margin: 0.5rem;\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: 15px;\r\n  cursor: pointer;\r\n  background-color: var(--color-2);\r\n}\r\n\r\nbutton:hover {\r\n  background-color: var(--color-3);\r\n  transform: scale(1.2);\r\n}\r\n\r\n/* Contenedores adicionales */\r\n.container_input,\r\n.container_window_win {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255, 255, 255, 0.6); /* Fondo semitransparente */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  z-index: 10;\r\n}\r\n\r\n.container_window_win {\r\n  display: none;\r\n}\r\n\r\n/* Estilos específicos para los contenedores internos */\r\n.container_input div,\r\n.window_win {\r\n  background: white;\r\n  padding: 20px;\r\n  border-radius: 10px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.container_attempts {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 20px;\r\n}\r\n\r\n/* Animaciones */\r\n@keyframes shakeHandPlayer {\r\n  0% {\r\n    transform: scaleX(-1) rotate(0deg);\r\n  }\r\n  25% {\r\n    transform: scaleX(-1) rotate(10deg);\r\n  }\r\n  50% {\r\n    transform: scaleX(-1) rotate(-10deg);\r\n  }\r\n  75% {\r\n    transform: scaleX(-1) rotate(10deg);\r\n  }\r\n  100% {\r\n    transform: scaleX(-1) rotate(-10deg);\r\n  }\r\n}\r\n\r\n@keyframes shakeHandComputer {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  25% {\r\n    transform: rotate(10deg);\r\n  }\r\n  50% {\r\n    transform: rotate(-10deg);\r\n  }\r\n  75% {\r\n    transform: rotate(10deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-10deg);\r\n  }\r\n}\r\n\r\n/* Estilos de animación */\r\n.shake_player {\r\n  animation: shakeHandPlayer 2s infinite;\r\n}\r\n\r\n.shake_computer {\r\n  animation: shakeHandComputer 2s infinite;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n\r\n\r\n// Variables\r\nlet pointsPlayer = 0; // Puntos del jugador\r\nlet pointsComputer = 0; // Puntos de la computadora\r\nlet attempts = 3; // Intentos\r\nlet losesPlayer = 0;\r\nlet losesComputer = 0;\r\nlet ties = 0;\r\n\r\n// DOM elementos\r\nlet containerPlayerPoints = document.querySelector(\".player_points\"); // Puntos del jugador\r\nlet containerComputerPoints = document.querySelector(\".computer_points\"); // Puntos de la computadora\r\nlet containerTitleWinner = document.querySelector(\".title_winner\"); // Título del ganador\r\nlet containerInput = document.querySelector(\".container_input\"); // Contenedor de los intentos\r\nlet containerWindowWin = document.querySelector(\".container_window_win\"); // Ventana de ganador\r\nlet titleWin = document.querySelector(\".title_win\"); // Título de ganador\r\nlet imgPlayerHand = document.getElementById(\"player_hand_image\"); // Imagen de la mano del jugador\r\nlet selectionPlayer = imgPlayerHand.nextElementSibling; // Selección del jugador\r\nlet imgComputerHand = document.getElementById(\"computer_hand_image\"); // Imagen de la mano de la computadora\r\nlet selectionComputer = imgComputerHand.nextElementSibling; // Selección de la computadora\r\nlet buttonsOptions = document.querySelectorAll(\".option\"); // Botones de opciones del jugador retornados en un NodeList\r\nlet derrotasJugador = document.getElementById(\"p_loses_player\");\r\nlet derrotasComputador = document.getElementById(\"p_loses_computer\");\r\nlet tiesParagraph = document.getElementById(\"p_ties\");\r\nlet buttonResetGame = document.getElementById(\"button_reset_game\");\r\nlet buttonWinResetGame = document.getElementById(\"button_win_reset_game\");\r\nlet buttonStart = document.getElementById(\"button_start\");\r\n\r\nbuttonsOptions.forEach((button) => {\r\n  button.addEventListener(\"click\", startAttempt); // Agregamos un evento click a cada botón\r\n});\r\n\r\n// Función para deshabilitar los botones de opciones del jugador\r\nfunction disableOptionsButtons() {\r\n  buttonsOptions.forEach((button) => {\r\n    button.disabled = true; // Deshabilitamos el botón\r\n  });\r\n}\r\n\r\n// Función para habilitar los botones de opciones del jugador\r\nfunction enableOptionsButtons() {\r\n  buttonsOptions.forEach((button) => {\r\n    button.disabled = false; // Habilitamos el botón\r\n  });\r\n}\r\n\r\n// Función que retorna la opción de la computadora\r\nfunction computerPlay() {\r\n  let options = [\"rock\", \"paper\", \"scissors\"];\r\n  let randomOption = Math.floor(Math.random() * options.length);\r\n  return options[randomOption];\r\n}\r\n\r\n// Función que compara las opciones del jugador y la computadora y retorna el ganador\r\nfunction compareOptions(optionPlayer, optionComputer) {\r\n  if (optionPlayer === optionComputer) {\r\n    return \"draw\";\r\n  } else if (\r\n    (optionPlayer === \"rock\" && optionComputer === \"scissors\") ||\r\n    (optionPlayer === \"paper\" && optionComputer === \"rock\") ||\r\n    (optionPlayer === \"scissors\" && optionComputer === \"paper\")\r\n  ) {\r\n    return \"player\";\r\n  } else {\r\n    return \"computer\";\r\n  }\r\n}\r\n\r\n// Función que inicia la animación de las manos del jugador y la computadora\r\nfunction animationHands() {\r\n  // Deshabilitar botones durante la animación\r\n  disableOptionsButtons();\r\n\r\n  // Iniciar animación de las manos\r\n  imgPlayerHand.classList.add(\"shake_player\");\r\n  imgComputerHand.classList.add(\"shake_computer\");\r\n\r\n  // Después de 2 segundos, detener la animación y habilitar botones nuevamente\r\n  setTimeout(() => {\r\n    imgPlayerHand.classList.remove(\"shake_player\");\r\n    imgComputerHand.classList.remove(\"shake_computer\");\r\n\r\n    // Habilitar botones después de la animación\r\n    enableOptionsButtons();\r\n  }, 2000);\r\n}\r\n\r\n// Función que actualiza los puntos del jugador y la computadora\r\nfunction updatePoints(winner) {\r\n  if (winner === \"player\") {\r\n    pointsPlayer++;\r\n  } else if (winner === \"computer\") {\r\n    pointsComputer++;\r\n  }\r\n\r\n  containerPlayerPoints.textContent = pointsPlayer;\r\n  containerComputerPoints.textContent = pointsComputer;\r\n}\r\n\r\n// Funcion que escribe quien va ganando\r\nfunction whoIsWinning() {\r\n  if (pointsPlayer > pointsComputer) {\r\n    containerTitleWinner.textContent = \"Jugador va ganando!\";\r\n  } else if (pointsPlayer < pointsComputer) {\r\n    containerTitleWinner.textContent = \"Computador va ganando!\";\r\n  } else {\r\n    containerTitleWinner.textContent = \"Empate!\";\r\n  }\r\n}\r\n\r\n//funcion que cambia las imagenes de las manos\r\nfunction changeHandsImages(optionPlayer, optionComputer) {\r\n  imgPlayerHand.src = `assets/${optionPlayer}.png`;\r\n  selectionPlayer.textContent = `${optionPlayer}`;\r\n  imgComputerHand.src = `assets/${optionComputer}.png`;\r\n  selectionComputer.textContent = `${optionComputer}`;\r\n}\r\n\r\n//funcion que cambia el parrafo de los intentos\r\nfunction changeAttemptsParagraph() {\r\n  let paragraph = document.getElementById(\"p_attempts\");\r\n  paragraph.textContent = `Intentos restantes: ${attempts}`;\r\n}\r\n\r\n// Función que se ejecuta cuando se hace clic en un botón de opción del jugador para iniciar un intento\r\nfunction startAttempt(event) {\r\n  attempts--;\r\n  // Iniciamos animación de la mano del jugador y la computadora\r\n  animationHands();\r\n  let optionPlayer = event.currentTarget.id; // Obtenemos la opción del jugador (obteniendo el id del botón)\r\n  let optionComputer = computerPlay(); // Obtenemos la opción de la computadora\r\n  changeAttemptsParagraph();\r\n  // Esta función se ejecuta después de 2 segundos, recibe una función callback\r\n  setTimeout(() => {\r\n    let winner = compareOptions(optionPlayer, optionComputer); // Obtenemos el ganador del intento\r\n    console.log(winner);\r\n    if (winner === \"player\") {\r\n      addLosesComputer();\r\n    } else if (winner === \"computer\") {\r\n      addLosesPlayer();\r\n    } else {\r\n      addTies();\r\n    }\r\n    changeHandsImages(optionPlayer, optionComputer); // Cambiamos las imágenes de las manos\r\n    updatePoints(winner); // Actualizamos los puntos\r\n    whoIsWinning(); // Mostramos quien va ganando\r\n    checkWinnerFinish(); // Comprobamos si hay un ganador\r\n  }, 2000);\r\n}\r\n\r\n//funcion que obtiene el numero de intentos\r\nfunction getAttempts() {\r\n  let inputAttempts = document.getElementById(\"attempts\").value;\r\n  attempts = parseInt(inputAttempts);\r\n  console.log(attempts);\r\n  changeAttemptsParagraph();\r\n  if (attempts <= 0 || isNaN(attempts)) {\r\n    alert(\"El número de intentos debe ser mayor a 0\");\r\n  } else {\r\n    containerInput.style.display = \"none\";\r\n  }\r\n}\r\n\r\n//funcion que comprueba si hay un ganador\r\nfunction checkWinnerFinish() {\r\n  if (attempts === 0) {\r\n    if (pointsPlayer > pointsComputer) {\r\n      containerWindowWin.style.display = \"flex\";\r\n    } else if (pointsPlayer < pointsComputer) {\r\n      containerWindowWin.style.display = \"flex\";\r\n\r\n      titleWin.textContent = \"Computador ha ganado!\";\r\n    } else {\r\n      containerWindowWin.style.display = \"flex\";\r\n\r\n      titleWin.textContent = \"Empate!\";\r\n    }\r\n  }\r\n}\r\n\r\n//funcion que reinicia el juego\r\nfunction restartGame() {\r\n  window.location.reload();\r\n}\r\n\r\n//funcion aumenta las derrotas del jugador\r\nfunction addLosesPlayer() {\r\n  losesPlayer++;\r\n  derrotasJugador.textContent = `Derrotas: ${losesPlayer}`;\r\n}\r\n\r\n//funcion aumenta las derrotas del computador\r\nfunction addLosesComputer() {\r\n  losesComputer++;\r\n  derrotasComputador.textContent = `Derrotas: ${losesComputer}`;\r\n}\r\n\r\nfunction addTies() {\r\n  ties++;\r\n  tiesParagraph.textContent = `Empates: ${ties}`;\r\n}\r\n\r\n// eventos para los botones\r\nbuttonStart.addEventListener(\"click\", getAttempts);\r\nbuttonResetGame.addEventListener(\"click\", restartGame);\r\nbuttonWinResetGame.addEventListener(\"click\", restartGame);\r\n\n\n//# sourceURL=webpack://piedrapapeltijeraswp/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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