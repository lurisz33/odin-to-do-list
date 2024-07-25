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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.header {\r\n    font-size: 30px;\r\n    font-weight: 600;\r\n}\r\n\r\np {\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n}\r\n\r\n#new-task-form {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 10px;\r\n}\r\n\r\nli.supertitle-item, li.task-item {\r\n    list-style-type: none;\r\n    padding: 10px;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.supertitle-item {\r\n    font-weight: bold;\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.task-row {\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n.task-title {\r\n    font-weight: bold;\r\n}\r\n\r\n.task-description {\r\n    margin-top: 10px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.toggle-description {\r\n    width: 120px;\r\n    padding: 5px;\r\n}\r\n\r\n.delete-task {\r\n    width: 120px;\r\n    padding: 5px;\r\n}\r\n\r\n.delete-task:hover {\r\n    background-color: indianred;\r\n}\r\n\r\n.action-buttons {\r\n    gap: 30px;\r\n}\r\n\r\n.edit-task {\r\n    width: 120px;\r\n    padding: 5px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addNewProject.js":
/*!******************************!*\
  !*** ./src/addNewProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newProject: () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\r\n\r\n\r\nlet id = 0;\r\n\r\nfunction newProject(project) {\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.push(new _project__WEBPACK_IMPORTED_MODULE_1__.Project(project, id++));\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/addNewProject.js?");

/***/ }),

/***/ "./src/addNewTask.js":
/*!***************************!*\
  !*** ./src/addNewTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTask: () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _checkProjectExistence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkProjectExistence */ \"./src/checkProjectExistence.js\");\n/* harmony import */ var _addNewProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNewProject */ \"./src/addNewProject.js\");\n\r\n\r\n\r\n\r\n\r\nlet id = 0;\r\n\r\nfunction newTask() {\r\n    const title = document.getElementById(\"title\").value;\r\n    const description = document.getElementById(\"description\").value;\r\n    const dueDate = document.getElementById(\"due-date\").value;\r\n    const priority = document.getElementById(\"priority\").value;\r\n    const projectTitle = document.getElementById(\"project\").value;\r\n\r\n    const currentTask = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority, projectTitle, id++);\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.push(currentTask);\r\n\r\n    if (!(0,_checkProjectExistence__WEBPACK_IMPORTED_MODULE_2__.projectExists)(projectTitle)) {\r\n        (0,_addNewProject__WEBPACK_IMPORTED_MODULE_3__.newProject)(projectTitle);\r\n    }\r\n    const currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.title === projectTitle);\r\n    currentProject.addTaskToProject(currentTask.id);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/addNewTask.js?");

/***/ }),

/***/ "./src/checkProjectExistence.js":
/*!**************************************!*\
  !*** ./src/checkProjectExistence.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectExists: () => (/* binding */ projectExists)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction projectExists(project) {\r\n    return _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.includes(project);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/checkProjectExistence.js?");

/***/ }),

/***/ "./src/clearInputFields.js":
/*!*********************************!*\
  !*** ./src/clearInputFields.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInputFields: () => (/* binding */ clearInputFields)\n/* harmony export */ });\nfunction clearInputFields() {\r\n    document.getElementById(\"title\").value = \"\";\r\n    document.getElementById(\"description\").value = \"\";\r\n    document.getElementById(\"due-date\").value = \"\";\r\n    document.getElementById(\"priority\").value = \"\";\r\n    document.getElementById(\"project\").value = \"\";\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/clearInputFields.js?");

/***/ }),

/***/ "./src/deleteTask.js":
/*!***************************!*\
  !*** ./src/deleteTask.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction deleteTask(id) {\r\n    //delete the task in the list of all tasks\r\n    const index = _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.findIndex(task => task.id === id);\r\n    const task = _index__WEBPACK_IMPORTED_MODULE_0__.myTasks[index];\r\n\r\n    const projectTitle = task.project;\r\n\r\n    //delete the task from its project array\r\n    const project = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(proj => proj.title === projectTitle)\r\n    const taskIndexInProject = project.tasks.indexOf(id);\r\n    project.tasks.slice(taskIndexInProject, 1);\r\n\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.splice(index, 1);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/deleteTask.js?");

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _deleteTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteTask */ \"./src/deleteTask.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n\r\nfunction displayTasks(tasks) {\r\n    const taskListContainer = document.getElementById('task-list');\r\n    taskListContainer.innerHTML = '';\r\n\r\n    // Add the supertitle row\r\n    const superTitleItem = document.createElement('li');\r\n    superTitleItem.className = 'supertitle-item';\r\n    superTitleItem.innerHTML = `\r\n        <div class=\"task-row\">\r\n            <span class=\"task-title\">Title</span>\r\n            <span>Due Date</span>\r\n            <span>Priority</span>\r\n            <span></span> <!-- Placeholder for the toggle button -->\r\n        </div>\r\n    `;\r\n    taskListContainer.appendChild(superTitleItem);\r\n\r\n    tasks.forEach((task, index) => {\r\n        const taskItem = document.createElement('li');\r\n        taskItem.className = 'task-item';\r\n        taskItem.style.backgroundColor = (index % 2 === 0) ? 'white' : 'lightgrey';\r\n        taskItem.innerHTML = `\r\n            <div class=\"task-row\">\r\n                <span class=\"task-title\">${task.title}</span>\r\n                <span>${task.dueDate}</span>\r\n                <span>${task.priority}</span>\r\n                <div class=\"action-buttons\">\r\n                    <button class=\"toggle-description\">Show Description</button>\r\n                    <button class=\"edit-task\">Edit</button>\r\n                    <button class=\"delete-task\" data-task-id=\"${task.id}\">Delete Task</button>\r\n                </div>\r\n            </div>\r\n            <p class=\"task-description\" style=\"display: none;\">${task.description}</p>\r\n        `;\r\n        taskListContainer.appendChild(taskItem);\r\n\r\n        const toggleButton = taskItem.querySelector('.toggle-description');\r\n        const description = taskItem.querySelector('.task-description');\r\n        const deleteButton = taskItem.querySelector('.delete-task');\r\n        const editButton = taskItem.querySelector('.edit-task');\r\n\r\n        toggleButton.addEventListener('click', () => {\r\n            const isHidden = description.style.display === 'none';\r\n            description.style.display = isHidden ? 'block' : 'none';\r\n            toggleButton.textContent = isHidden ? 'Hide Description' : 'Show Description';\r\n        });\r\n\r\n        deleteButton.addEventListener('click', () => {\r\n            const taskId = parseInt(deleteButton.getAttribute('data-task-id'), 10);\r\n            (0,_deleteTask__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId);\r\n            displayTasks(_index__WEBPACK_IMPORTED_MODULE_1__.myTasks);\r\n        });\r\n\r\n        editButton.addEventListener(\"click\", function () {\r\n            const taskId = parseInt(deleteButton.getAttribute('data-task-id'), 10);\r\n            const index = _index__WEBPACK_IMPORTED_MODULE_1__.myTasks.findIndex(task => task.id === taskId);\r\n            const task = _index__WEBPACK_IMPORTED_MODULE_1__.myTasks[index];\r\n\r\n            const dialog = document.getElementById('edit-task-dialog');\r\n            dialog.querySelector('.edit-title').value = task.title;\r\n            dialog.querySelector('.edit-description').value = task.description;\r\n            dialog.querySelector('.edit-due-date').value = task.dueDate;\r\n            dialog.querySelector('.edit-priority').value = task.priority;\r\n\r\n            dialog.showModal();\r\n\r\n            dialog.querySelector('form').onsubmit = function () {\r\n                task.title = dialog.querySelector('.edit-title').value;\r\n                task.description = dialog.querySelector('.edit-description').value;\r\n                task.dueDate = dialog.querySelector('.edit-due-date').value;\r\n                task.priority = dialog.querySelector('.edit-priority').value;\r\n\r\n                dialog.close();\r\n                displayTasks(_index__WEBPACK_IMPORTED_MODULE_1__.myTasks);\r\n            }\r\n\r\n            document.getElementById('cancel-edit').onclick = function () {\r\n                dialog.close();\r\n            }\r\n\r\n        })\r\n\r\n    });\r\n    console.log(tasks.map(task => task.title));\r\n}\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/displayTasks.js?");

/***/ }),

/***/ "./src/getTasksWithNearestDueDate.js":
/*!*******************************************!*\
  !*** ./src/getTasksWithNearestDueDate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTasksWithNearestDueDate: () => (/* binding */ getTasksWithNearestDueDate)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction getTasksWithNearestDueDate(count) {\r\n    const sortedTasks = _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));\r\n    return sortedTasks.slice(0, _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.length >= count ? count : _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.length);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/getTasksWithNearestDueDate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myProjects: () => (/* binding */ myProjects),\n/* harmony export */   myTasks: () => (/* binding */ myTasks)\n/* harmony export */ });\n/* harmony import */ var _updateTaskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTaskList */ \"./src/updateTaskList.js\");\n/* harmony import */ var _clearInputFields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearInputFields */ \"./src/clearInputFields.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _checkProjectExistence__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkProjectExistence */ \"./src/checkProjectExistence.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addNewTask */ \"./src/addNewTask.js\");\n\r\n\r\n\r\n\r\nconst myProjects = [];\r\nconst myTasks = [];\r\nmyProjects.push(\"default\");\r\n\r\n\r\n\r\n\r\nconst submitNewTaskButton = document.getElementById(\"submit-new-task\");\r\nsubmitNewTaskButton.addEventListener(\"click\", function (event) {\r\n    event.preventDefault();\r\n\r\n    const form = document.getElementById(\"new-task-form\");\r\n    if (form.checkValidity()) {\r\n        (0,_addNewTask__WEBPACK_IMPORTED_MODULE_4__.newTask)();\r\n        (0,_updateTaskList__WEBPACK_IMPORTED_MODULE_0__.updateTaskList)();\r\n        (0,_clearInputFields__WEBPACK_IMPORTED_MODULE_1__.clearInputFields)();\r\n    } else {\r\n        form.reportValidity(); \r\n    }\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(title, id) {\r\n        this.title = title;\r\n        this.id = id;\r\n        this.tasks = [];\r\n    }\r\n\r\n    addTaskToProject(id) {\r\n        this.tasks.push(id);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, description, dueDate, priority, project, id) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.project = project;\r\n        this.id = id;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/task.js?");

/***/ }),

/***/ "./src/updateTaskList.js":
/*!*******************************!*\
  !*** ./src/updateTaskList.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateTaskList: () => (/* binding */ updateTaskList)\n/* harmony export */ });\n/* harmony import */ var _getTasksWithNearestDueDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTasksWithNearestDueDate */ \"./src/getTasksWithNearestDueDate.js\");\n/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ \"./src/displayTasks.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nfunction updateTaskList() {\r\n    const nearestTasks = (0,_getTasksWithNearestDueDate__WEBPACK_IMPORTED_MODULE_0__.getTasksWithNearestDueDate)(_index__WEBPACK_IMPORTED_MODULE_2__.myTasks, 15);\r\n    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(nearestTasks);\r\n}\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/updateTaskList.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;