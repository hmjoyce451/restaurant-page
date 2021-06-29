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

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n    font-family: 'Roboto Condensed', sans-serif;\\n}\\n.nav-container {\\n    height: 15vh;\\n    display: flex;\\n    background-color: #009B72;\\n    justify-content: space-between;\\n}\\n.nav-logo {\\n    height: 5rem;\\n    margin-left: 3rem;\\n    width: 5rem;\\n}\\n.nav-links {\\n    display: flex;\\n    justify-content: space-around;\\n    width: 20rem;\\n    margin-right: 10rem;\\n    align-items: center;\\n    text-align: center;\\n}\\n.nav-links a {\\n    text-decoration: none;\\n    color: #fff;\\n}\\n.nav-links a:hover {\\n    color: #000;\\n    border-bottom: 1px solid #000;\\n    transition: 0.3s ease;\\n}\\n.bg-img {\\n    -webkit-background-size: cover;\\n    -moz-background-size: cover;\\n    -o-background-size: cover;\\n    background-size: cover;\\n    width: 100vw;\\n    height: 84vh;\\n    position: fixed;\\n    z-index: -1;\\n}\\n.home-logo {\\n    display: flex;\\n    margin: 0 auto;\\n    justify-content: center;\\n    padding-top: 5rem;\\n}\\n.home-text {\\n    color: #fff;\\n    display: flex;\\n    margin: 0 auto;\\n    justify-content: center;\\n}\\n\\n.contact-container {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    margin: 0 auto;\\n    text-align: center;\\n}\\n\\n.contact-title, .location-container, .hours-container {\\n    padding: 1rem;\\n}\\n.social-container {\\n    width: 20rem;\\n    justify-content: space-around;\\n}\\n.social-title {\\n    padding: 2rem;\\n}\\n.social-container a {\\n    padding: 2rem;\\n    height: 1rem;\\n    width: 1rem;\\n}\\n\\n.fab {\\n    color: #000;\\n    padding: 0.5rem;\\n    border: 1px solid #fff;\\n}\\n.fab:hover {\\n    border: 1px solid #000;\\n    border-radius: 50%;\\n    transition: 0.4s ease-in-out;\\n}\\n.menu-container {\\n    width: 80vw;\\n    height: 80vh;\\n    margin: 0 auto;\\n}\\n.menu-item {\\n    display: flex;\\n    padding: 1rem;\\n}\\n.menu-title {\\n    font-size: 3rem;\\n}\\n.menu-description {\\n    font-size: 1rem;\\n    font-weight: 100;\\n    color: rgb(83, 83, 83);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayContact() {\n    //declare variables (grab #content);\n    const content = document.getElementById('content');\n    const contactContainer = document.createElement('div');\n    contactContainer.classList.add('contact-container');\n    contactContainer.classList.add('content');\n\n    const contactTitle = document.createElement('h1');\n    contactTitle.classList.add('contact-title');\n    contactTitle.innerText = 'CONTACT';\n\n    //hours\n    const hoursContainer = document.createElement('div');\n    hoursContainer.classList.add('hours-container');\n\n    const hoursTitle = document.createElement('h3');\n    hoursTitle.classList.add('hours-title');\n    hoursTitle.innerText  = 'HOURS:';\n    hoursContainer.appendChild(hoursTitle);\n\n    const wed = document.createElement('p');\n    wed.classList.add('day');\n    wed.innerText = 'WED: 4PM - 9PM';\n    hoursContainer.appendChild(wed);\n\n    const thurs = document.createElement('p');\n    thurs.classList.add('day');\n    thurs.innerText = 'THURS: 4PM - 9PM';\n    hoursContainer.appendChild(thurs);\n\n    const fri = document.createElement('p');\n    fri.classList.add('day');\n    fri.innerText = 'FRI: 12PM - 10PM';\n    hoursContainer.appendChild(fri);\n\n    const sat = document.createElement('p');\n    sat.classList.add('day');\n    sat.innerText = 'SAT: 12PM - 10PM';\n    hoursContainer.appendChild(sat);\n\n    const sun = document.createElement('p');\n    sun.classList.add('day');\n    sun.innerText = 'SUN: 12PM - 9PM';\n    hoursContainer.appendChild(sun);\n\n    const beerGarden = document.createElement('p');\n    beerGarden.classList.add('day');\n    beerGarden.innerText = '3RD ST. PROMENADE BEER GARDEN OPEN SATURDAY, SUNDAY 2PM - 7PM';\n    hoursContainer.appendChild(beerGarden);\n\n    //location\n    const locationContainer = document.createElement('div');\n    locationContainer.classList.add('location-container');\n\n    const locationTitle = document.createElement('h3');\n    locationTitle.classList.add('location-title');\n    locationTitle.innerText = 'LOCATION:';\n    locationContainer.appendChild(locationTitle);\n    const address = document.createElement('p');\n    address.classList.add('address');\n    address.innerText = '1432A 4th Street Santa Monica, CA 90401';\n    locationContainer.appendChild(address);\n    const phoneNumber = document.createElement('p');\n    const email = document.createElement('p');\n    email.classList.add('email');\n    email.innerText = 'info@west4thjane.com';\n    phoneNumber.classList.add('phone-number');\n    phoneNumber.innerText = '310.395.6765';\n    locationContainer.appendChild(phoneNumber);\n    locationContainer.appendChild(email);\n    \n\n    //social media\n    const socialContainer = document.createElement('div');\n    socialContainer.classList.add('social-container');\n\n    const socialTitle = document.createElement('h3');\n    socialTitle.innerText = 'FIND US ON SOCIAL MEDIA:';\n    socialTitle.classList.add('social-title');\n    socialContainer.appendChild(socialTitle);\n\n    const fbLink = document.createElement('a');\n    const facebook = document.createElement('i');\n    facebook.classList.add('fab');\n    facebook.classList.add('fa-facebook');\n    fbLink.setAttribute('href', 'https://www.facebook.com/west4thjane/');\n    fbLink.appendChild(facebook);\n    socialContainer.appendChild(fbLink);\n\n    const instaLink = document.createElement('a');\n    const instagram = document.createElement('i');\n    instagram.classList.add('fab');\n    instagram.classList.add('fa-instagram');\n    instaLink.setAttribute('href', 'https://www.instagram.com/west4thandjane/');\n    instaLink.appendChild(instagram);\n    socialContainer.appendChild(instaLink);\n\n    const twitterLink = document.createElement('a');\n    const twitter = document.createElement('i');\n    twitter.classList.add('fab');\n    twitter.classList.add('fa-twitter');\n    twitterLink.setAttribute('href', 'https://twitter.com/west4thjane');\n    twitterLink.appendChild(twitter);\n    socialContainer.appendChild(twitterLink);\n\n\n    //append to main container\n    contactContainer.appendChild(contactTitle);\n    contactContainer.appendChild(hoursContainer);\n    contactContainer.appendChild(locationContainer);\n    contactContainer.appendChild(socialContainer);\n    \n    content.appendChild(contactContainer);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHomepage () {\n    //declare variables (grab #content);\n    const content = document.getElementById('content');\n    //homepage main content\n    const homeContainer = document.createElement('div');\n    homeContainer.classList.add('home-container');\n    homeContainer.classList.add('content');\n    content.appendChild(homeContainer);\n    \n    //background image\n    const bgImg = document.createElement('img');\n    bgImg.setAttribute('src', 'https://a.1stdibscdn.com/ellen-bradshaw-paintings-winter-west-4th-jane-st-8th-ave-painting-oil-on-canvas-for-sale-picture-3/12330573/a_34232511539668535218/15084_000bd65f11f05af8d7de9d87dde5c26e61bf2de1_V611cx570ZC7n0Dg_3_master.jpg?width=1500');\n    bgImg.classList.add('bg-img');\n    homeContainer.appendChild(bgImg);\n\n    //home logo\n    const homeLogo = document.createElement('img');\n    homeLogo.classList.add('home-logo');\n    homeLogo.src = '/w4th-logo.png';\n    homeContainer.appendChild(homeLogo);\n\n    //home text ///////////////\n    const homeText = document.createElement('h3');\n    homeText.classList.add('home-text');\n    homeContainer.appendChild(homeText);\n    homeText.textContent = 'Brewing friendships since 2009';\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomepage);\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _removeContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeContent */ \"./src/removeContent.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../style.css */ \"./style.css\");\n\n\n\n\n\n\n\n(0,_navBar__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//declare buttons for event listening /////////////////////////////\nconst homeButton = document.querySelector('.home-btn');\nconst menuButton = document.querySelector('.menu-btn');\nconst contactButton = document.querySelector('.contact-btn');\n\n\n//events/////////////////////////////////////////////////////////\nhomeButton.addEventListener('click', (e) => {\n    homeButton.classList.add('clicked');\n    menuButton.classList.remove('clicked');\n    contactButton.classList.remove('clicked');\n    (0,_removeContent__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)();\n});\n\nmenuButton.addEventListener('click', (e) => {\n    menuButton.classList.add('clicked');\n    contactButton.classList.remove('clicked');\n    homeButton.classList.remove('clicked');\n    (0,_removeContent__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n});\n\ncontactButton.addEventListener('click', (e) => {\n    contactButton.classList.add('clicked');\n    menuButton.classList.remove('clicked');\n    homeButton.classList.remove('clicked');\n    (0,_removeContent__WEBPACK_IMPORTED_MODULE_4__.default)();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\n});\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayMenu () {\n//declare variables (grab #content);\n  const content = document.getElementById('content');\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menu-container');\n  menuContainer.classList.add('content');\n\n    //starters////////////////////////\n  const starters = document.createElement('div');\n  starters.classList.add('starters');\n  const startersTitle = document.createElement('h3');\n  startersTitle.classList.add('menu-title');\n  startersTitle.innerText = 'Starters';\n\n  const starterOne = document.createElement('div');\n  starterOne.classList.add('menu-item');\n  const wings = document.createElement('h4');\n  wings.classList.add('menu-item-title');\n  wings.innerText = '12 Wings';\n  const wingsDesc = document.createElement('p');\n  wingsDesc.classList.add('menu-description');\n  wingsDesc.innerText = 'choice of 1: buffalo, mango-habanero, sriracha-ginger, smokey bbq, garlic parmesan or honey apple bacon. also available as gluten-free boneless bites.';\n\n  const starterTwo = document.createElement('div');\n  starterTwo.classList.add('menu-item');\n  const pretzel = document.createElement('h4');\n  pretzel.classList.add('menu-item-title');\n  pretzel.innerText = 'House Pretzel';\n  const pretzelDesc = document.createElement('p');\n  pretzelDesc.classList.add('menu-description');\n  pretzelDesc.innerText = 'with pimento cheese and West 4th mustard';\n\n  //end starters///////////////////////////\n\n  //salads//////////////////////////////////\n  const salads = document.createElement('div');\n  salads.classList.add('salads');\n  const saladsTitle = document.createElement('h3');\n  saladsTitle.classList.add('menu-title');\n  saladsTitle.innerText = 'Salads';\n  \n  const kaleSalad = document.createElement('div');\n  kaleSalad.classList.add('menu-item');\n  const kaleSaladTitle = document.createElement('h4');\n  kaleSaladTitle.classList.add('menu-item-title');\n  kaleSaladTitle.innerText = 'Kale Caesar Salad';\n  const kaleDesc = document.createElement('p');\n  kaleDesc.classList.add('menu-description');\n  kaleDesc.innerText = 'with housemade caesar dressing and pretzel croutons';\n\n  const greekSalad = document.createElement('div');\n  greekSalad.classList.add('menu-item');\n  const greekSaladTitle = document.createElement('h4');\n  greekSaladTitle.classList.add('menu-item-title');\n  greekSaladTitle.innerText = 'Greek Salad';\n  const greekDesc = document.createElement('p');\n  greekDesc.classList.add('menu-description');\n  greekDesc.innerText = 'romaine lettuce, red & green bell peppers, red onions, black olives, cucumbers, feta cheese and greek dressing';\n\n  //end salads //////////////////////////////////\n\n  //sandwiches //////////////////////////////////\n\n  const sandwiches = document.createElement('div');\n  sandwiches.classList.add('sandwiches');\n  const sandwichesTitle = document.createElement('h4');\n  sandwichesTitle.classList.add('menu-title');\n  sandwichesTitle.innerText = 'Sandwiches';\n\n  const beefSliders = document.createElement('div');\n  beefSliders.classList.add('menu-item');\n  const beefSlidersTitle = document.createElement('h4');\n  beefSlidersTitle.classList.add('menu-item-title');\n  beefSlidersTitle.innerText = 'Beef Sliders Trio';\n  const beefDesc = document.createElement('p');\n  beefDesc.classList.add('menu-description');\n  beefDesc.innerText = 'try one of each above burger in slider form on hawaiian sweet rolls';\n\n  const porkSliders = document.createElement('div');\n  porkSliders.classList.add('menu-item');\n  const porkSlidersTitle = document.createElement('h4');\n  porkSlidersTitle.classList.add('menu-item-title');\n  porkSlidersTitle.innerText = 'Pork Sliders Trio';\n  const porkDesc = document.createElement('p');\n  porkDesc.classList.add('menu-description');\n  porkDesc.innerText = 'bbq sauce + crispy onion, mango-habanero sauce + homemade pickles and honey apple sauce + bacon';\n\n  //end sandwiches ////////////////////\n\n  //sides ////////////////////////////\n\n  const sides = document.createElement('div');\n  sides.classList.add('sides');\n  const sidesTitle = document.createElement('h3');\n  sidesTitle.classList.add('menu-title');\n  sidesTitle.innerText = 'Sides';\n\n  const fries = document.createElement('div');\n  fries.classList.add('menu-item');\n  const friesTitle = document.createElement('h4');\n  friesTitle.classList.add('menu-item-title');\n  friesTitle.innerText = 'Fries, Tots, Sweet Potato Fries';\n  const friesDesc = document.createElement('p');\n  friesDesc.classList.add('menu-item-description');\n  friesDesc.innerText = 'All sides made in house';\n\n\n\n\n  menuContainer.appendChild(starters);\n  starters.appendChild(startersTitle);\n  starters.appendChild(starterOne);\n  starterOne.appendChild(wings);\n  wings.appendChild(wingsDesc);\n  starters.appendChild(starterTwo);\n  starterTwo.appendChild(pretzel);\n  pretzel.appendChild(pretzelDesc);\n\n  menuContainer.appendChild(salads);\n  salads.appendChild(saladsTitle);\n  salads.appendChild(kaleSalad);\n  kaleSalad.appendChild(kaleSaladTitle);\n  kaleSaladTitle.appendChild(kaleDesc);\n  salads.appendChild(greekSalad);\n  greekSalad.appendChild(greekSaladTitle);\n  greekSaladTitle.appendChild(greekDesc);\n\n  menuContainer.appendChild(sandwiches);\n  sandwiches.appendChild(sandwichesTitle);\n  sandwiches.appendChild(beefSliders);\n  beefSliders.appendChild(beefSlidersTitle);\n  beefSlidersTitle.appendChild(beefDesc);\n  sandwiches.appendChild(porkSliders);\n  porkSliders.appendChild(porkSlidersTitle);\n  porkSlidersTitle.appendChild(porkDesc);\n\n  menuContainer.appendChild(sides);\n  sides.appendChild(sidesTitle);\n  sides.appendChild(fries);\n  fries.appendChild(friesTitle);\n  friesTitle.appendChild(friesDesc);\n\n  content.appendChild(menuContainer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayNav() {\n    const navContainer = document.createElement('div');\n    navContainer.classList.add('nav-container');\n\n    //nav logo\n    const navLogo = document.createElement('img');\n    navLogo.setAttribute('src', 'https://images.squarespace-cdn.com/content/58bf4468e58c62f78442496e/1497046206852-R3LTJMI4XYL4HNY62C7H/W4-Badge-Final-White.png?content-type=image%2Fpng');\n    navLogo.classList.add('nav-logo');\n    navContainer.appendChild(navLogo);\n    //nav options\n    const navLinks = document.createElement('ul');\n    navLinks.classList.add('nav-links');\n\n    const homeButton = document.createElement('a');\n    homeButton.classList.add('home-btn');\n    homeButton.setAttribute('href', '#');\n    homeButton.innerText = 'HOME';\n\n    const menuButton = document.createElement('a');\n    menuButton.classList.add('menu-btn');\n    menuButton.setAttribute('href', '#');\n    menuButton.innerText = 'MENU';\n\n    const contactButton = document.createElement('a');\n    contactButton.classList.add('contact-btn');\n    contactButton.setAttribute('href', '#');\n    contactButton.innerText = 'CONTACT';\n\n    navLinks.appendChild(homeButton);\n    navLinks.appendChild(menuButton);\n    navLinks.appendChild(contactButton);\n    navContainer.appendChild(navLinks);\n    content.appendChild(navContainer);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayNav);\n\n//# sourceURL=webpack://restaurant-page/./src/navBar.js?");

/***/ }),

/***/ "./src/removeContent.js":
/*!******************************!*\
  !*** ./src/removeContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction removeContent() {\n    const innerContent = document.querySelector('.content');\n    innerContent.remove();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeContent);\n\n//# sourceURL=webpack://restaurant-page/./src/removeContent.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;