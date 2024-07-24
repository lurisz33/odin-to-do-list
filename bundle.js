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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTask: () => (/* binding */ newTask)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _checkProjectExistence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkProjectExistence */ \"./src/checkProjectExistence.js\");\n/* harmony import */ var _addNewProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addNewProject */ \"./src/addNewProject.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst title = document.querySelector(\"#title\").value;\r\nconst description = document.querySelector(\"#description\").value;\r\nconst dueDate = document.querySelector(\"#due-date\").value;\r\nconst priority = document.querySelector(\"#priority\").value;\r\nconst projectTitle = document.querySelector(\"#project\").value;\r\n\r\nlet id = 0;\r\n\r\nfunction newTask() {\r\n    const currentTask = new _task__WEBPACK_IMPORTED_MODULE_1__.Task(title, description, dueDate, priority, project, id++);\r\n    _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.push(currentTask);\r\n\r\n    if (!(0,_checkProjectExistence__WEBPACK_IMPORTED_MODULE_2__.projectExists)(projectTitle)) {\r\n        (0,_addNewProject__WEBPACK_IMPORTED_MODULE_3__.newProject)(projectTitle);\r\n    }\r\n    const currentProject = _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.find(project => project.title === projectTitle);\r\n    currentProject.tasks.push(currentTask.id);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/addNewTask.js?");

/***/ }),

/***/ "./src/checkProjectExistence.js":
/*!**************************************!*\
  !*** ./src/checkProjectExistence.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectExists: () => (/* binding */ projectExists)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction projectExists(project) {\r\n    return _index__WEBPACK_IMPORTED_MODULE_0__.myProjects.includes(project);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/checkProjectExistence.js?");

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\nfunction displayTasks(tasks) {\r\n    const taskListContainer = document.getElementById('task-list');\r\n    taskListContainer.innerHTML = '';\r\n\r\n    tasks.forEach(task => {\r\n        const taskItem = document.createElement('li');\r\n        taskItem.textContent = `Title: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`;\r\n        taskListContainer.appendChild(taskItem);\r\n    });\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/displayTasks.js?");

/***/ }),

/***/ "./src/getTasksWithNearestDueDate.js":
/*!*******************************************!*\
  !*** ./src/getTasksWithNearestDueDate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTasksWithNearestDueDate: () => (/* binding */ getTasksWithNearestDueDate)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nfunction getTasksWithNearestDueDate(count) {\r\n    // Sort tasks by due date\r\n    const sortedTasks = _index__WEBPACK_IMPORTED_MODULE_0__.myTasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));\r\n    // Get the first 'count' tasks\r\n    return sortedTasks.slice(0, count);\r\n}\n\n//# sourceURL=webpack://odin-to-do-list/./src/getTasksWithNearestDueDate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myProjects: () => (/* binding */ myProjects),\n/* harmony export */   myTasks: () => (/* binding */ myTasks)\n/* harmony export */ });\n/* harmony import */ var _updateTaskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateTaskList */ \"./src/updateTaskList.js\");\n/* harmony import */ var _checkProjectExistence__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkProjectExistence */ \"./src/checkProjectExistence.js\");\n/* harmony import */ var _addNewTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addNewTask */ \"./src/addNewTask.js\");\n\r\n\r\nconst myProjects = [];\r\nconst myTasks = [];\r\nmyProjects.push(\"default\");\r\n\r\n\r\n\r\n\r\nconst submitNewTaskButton = document.querySelector(\"#submit-new-task\");\r\nsubmitNewTaskButton.addEventListener(\"click\", function () {\r\n    (0,_addNewTask__WEBPACK_IMPORTED_MODULE_2__.newTask)();\r\n    (0,_updateTaskList__WEBPACK_IMPORTED_MODULE_0__.updateTaskList)();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://odin-to-do-list/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;