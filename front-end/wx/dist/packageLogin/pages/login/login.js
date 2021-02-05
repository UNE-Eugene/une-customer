require('./../../../runtime.js');
require('./../../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["packageLogin/pages/login/login"],{

/***/ "./src/packageLogin/pages/login/login.css?modules":
/*!********************************************************!*\
  !*** ./src/packageLogin/pages/login/login.css?modules ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___1V997","header":"header___pnzhQ","background":"background___2iBlX","content":"content___3EGi6","card":"card___3WcJ9","logo":"logo___mgP1K","title":"title___2uVCs","username":"username___3O334","password":"password___1_mAP","placeholder":"placeholder___1Mi8t","button":"button___3WBqx"};

/***/ }),

/***/ "./src/packageLogin/pages/login/login.entry.js":
/*!*****************************************************!*\
  !*** ./src/packageLogin/pages/login/login.entry.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ "./src/packageLogin/pages/login/login.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_login_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'packageLogin/pages/login/login'));

/***/ }),

/***/ "./src/packageLogin/pages/login/login.js":
/*!***********************************************!*\
  !*** ./src/packageLogin/pages/login/login.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _login_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.css?modules */ "./src/packageLogin/pages/login/login.css?modules");
/* harmony import */ var _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_css_modules__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/bg.png",
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/logo.png",
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
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/icon1.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "\u7528\u6237\u540D",
    placeholderClassName: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.placeholder,
    "confirm-type": "\u767B\u5F55",
    type: "text"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("view", {
    className: _login_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.password
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/icon2.png"
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

/***/ 3:
/*!***********************************************************!*\
  !*** multi ./src/packageLogin/pages/login/login.entry.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\UNE\une-customer\front-end\wx\src\packageLogin\pages\login\login.entry.js */"./src/packageLogin/pages/login/login.entry.js");


/***/ })

},[[3,"runtime","remax-vendors"]]]);