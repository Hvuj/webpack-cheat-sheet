/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.js */ \"./src/print.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ \"./src/math.js\");\n// import _ from 'lodash'\r\n\r\n// import Icon from './icon.png'\r\n// import Data from './data.xml'\r\n\r\n\r\n\r\nif (true) {\r\n  console.log('Looks like we are in development mode')\r\n}\r\n\r\nfunction component() {\r\n  const element = document.createElement('div')\r\n  const btn = document.createElement('button')\r\n\r\n  // Lodash, now imported by this script\r\n  // element.innerHTML = _.join(['Hello', 'webpack'], ' ')\r\n  // element.classList.add('hello')\r\n\r\n  btn.innerHTML = 'Click me and check the console!'\r\n  btn.onclick = _print_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\r\n  element.appendChild(btn)\r\n\r\n  // Add the image to our existing div.\r\n  // const myIcon = new Image()\r\n  // myIcon.src = Icon\r\n\r\n  // element.appendChild(myIcon)\r\n\r\n  // console.log(Data)\r\n\r\n  return element\r\n}\r\n\r\nfunction component2() {\r\n  const element2 = document.createElement('pre')\r\n\r\n  element2.innerHTML = ['hello webpack!', '5 cubed is equal to' + Object(_math_js__WEBPACK_IMPORTED_MODULE_2__[\"cube\"])(5)].join(\r\n    '\\n\\n'\r\n  )\r\n  return element2\r\n}\r\nlet element = component()\r\nlet element2 = component2()\r\ndocument.body.appendChild(element)\r\ndocument.body.appendChild(element2)\r\n\r\nif (false) {}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\r\n  console.log('webpack zero config works')\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: square, cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"square\", function() { return square; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cube\", function() { return cube; });\nfunction square(x) {\r\n  return x * x\r\n}\r\n\r\nfunction cube(x) {\r\n  return x * x * x\r\n}\r\n\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return printMe; });\nfunction printMe() {\r\n  console.log('I get called from print.js-it has  what?dfghd changed!')\r\n}\r\n\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @font-face {\\n|   font-family: 'MyFont';\\n|   src: url('./my-font.woff2') format(woff2),\");\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });