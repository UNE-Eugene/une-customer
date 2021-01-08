require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./public/logo.png":
/*!*************************!*\
  !*** ./public/logo.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a4be751fc49c9a0562e7e6f6662b27c7.png");

/***/ }),

/***/ "./src/pages/login/login.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/login/login.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___16S19","header":"header___3xx-5","background":"background___11hT3","content":"content___1JUrK","card":"card___1fhC-","logo":"logo___3VHVL","title":"title___1-YCX","username":"username___3WUH6","password":"password___3VTfK","placeholder":"placeholder___3NOmM","button":"button___kvhAU"};

/***/ }),

/***/ "./src/pages/login/login.entry.js":
/*!****************************************!*\
  !*** ./src/pages/login/login.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ "./src/pages/login/login.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_login_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/login/login'));

/***/ }),

/***/ "./src/pages/login/login.js":
/*!**********************************!*\
  !*** ./src/pages/login/login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _login_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.css?modules */ "./src/pages/login/login.css?modules");
/* harmony import */ var _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/bg.png */ "./src/pages/static/bg.png");
/* harmony import */ var _public_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/logo.png */ "./public/logo.png");
/* harmony import */ var _static_icon1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/icon1.png */ "./src/pages/static/icon1.png");
/* harmony import */ var _static_icon2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/icon2.png */ "./src/pages/static/icon2.png");







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _static_bg_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _public_logo_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.logo
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.card
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "\u767B \u5F55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.username
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _static_icon1_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "\u7528\u6237\u540D",
    placeholderClassName: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.placeholder,
    "confirm-type": "\u767B\u5F55",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.password
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _static_icon2_png__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "\u5BC6\u7801",
    placeholderClassName: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.placeholder,
    "confirm-type": "\u767B\u5F55",
    type: "password"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.button
  }, "\u767B\u5F55"))));
});

/***/ }),

/***/ "./src/pages/static/bg.png":
/*!*********************************!*\
  !*** ./src/pages/static/bg.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "6316091b4cf4c16062d83fb2c05a7aeb.png");

/***/ }),

/***/ "./src/pages/static/icon1.png":
/*!************************************!*\
  !*** ./src/pages/static/icon1.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "2a3b490cd6aecdfa52c8fc278e10f0d5.png");

/***/ }),

/***/ "./src/pages/static/icon2.png":
/*!************************************!*\
  !*** ./src/pages/static/icon2.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "aa90e1febb9f25a49e4e70b1aa503fe1.png");

/***/ }),

/***/ 3:
/*!**********************************************!*\
  !*** multi ./src/pages/login/login.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\UNE\Desktop\code\front-end\wx\src\pages\login\login.entry.js */"./src/pages/login/login.entry.js");


/***/ })

},[[3,"runtime","remax-vendors"]]]);