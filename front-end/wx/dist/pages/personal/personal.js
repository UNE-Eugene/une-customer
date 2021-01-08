require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/personal/personal"],{

/***/ "./src/pages/personal/personal.css?modules":
/*!*************************************************!*\
  !*** ./src/pages/personal/personal.css?modules ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"div":"div___2icZ0","personHeader":"personHeader___PyNiv","personBackground":"personBackground___33Wj7","personImg":"personImg___3Kjna","workerNumber":"workerNumber___ZyyTN","personContent":"personContent___BPd3Y","personText":"personText___3CgsG","icon":"icon___IiVpN"};

/***/ }),

/***/ "./src/pages/personal/personal.entry.js":
/*!**********************************************!*\
  !*** ./src/pages/personal/personal.entry.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ "./src/pages/personal/personal.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_personal_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/personal/personal'));

/***/ }),

/***/ "./src/pages/personal/personal.js":
/*!****************************************!*\
  !*** ./src/pages/personal/personal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _personal_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal.css?modules */ "./src/pages/personal/personal.css?modules");
/* harmony import */ var _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_personal_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_lock_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/lock.png */ "./src/pages/static/lock.png");
/* harmony import */ var _static_settings_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/settings.png */ "./src/pages/static/settings.png");
/* harmony import */ var _static_quit_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/quit.png */ "./src/pages/static/quit.png");
/* harmony import */ var _static_log_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/log.png */ "./src/pages/static/log.png");
/* harmony import */ var _static_mine_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/mine.png */ "./src/pages/static/mine.png");
/* harmony import */ var _static_personal_background_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/personal-background.png */ "./src/pages/static/personal-background.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](520),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      number = _React$useState2[0],
      setNumber = _React$useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.div
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personBackground
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    style: {
      width: '100%',
      height: '100%'
    },
    src: _static_personal_background_png__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personImg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "https://test-1301787690.cos.ap-shanghai.myqcloud.com/%E9%85%92%E5%BA%97%E8%B5%84%E6%96%99/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97/%E4%B8%8A%E6%B5%B7%E4%B8%87%E8%BE%BE%E7%91%9E%E5%8D%8E%E9%85%92%E5%BA%97_2.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.workerNumber
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, number)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '35%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: _static_settings_png__WEBPACK_IMPORTED_MODULE_4__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u6743\u9650\u7BA1\u7406")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '45%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: _static_log_png__WEBPACK_IMPORTED_MODULE_6__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u65E5\u5FD7\u7BA1\u7406")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '55%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: _static_lock_png__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u4FEE\u6539\u5BC6\u7801")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '65%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: _static_mine_png__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u4E2A\u4EBA\u4FE1\u606F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '75%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: _static_quit_png__WEBPACK_IMPORTED_MODULE_5__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u9000\u51FA\u767B\u5F55")));
});

/***/ }),

/***/ "./src/pages/static/lock.png":
/*!***********************************!*\
  !*** ./src/pages/static/lock.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b644da7b72b58161a4cfa0c6c9c5704f.png");

/***/ }),

/***/ "./src/pages/static/log.png":
/*!**********************************!*\
  !*** ./src/pages/static/log.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1b849917f36c09dfef236869d002d97e.png");

/***/ }),

/***/ "./src/pages/static/mine.png":
/*!***********************************!*\
  !*** ./src/pages/static/mine.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8c9574a120cd2df42042694dbeab8f1b.png");

/***/ }),

/***/ "./src/pages/static/personal-background.png":
/*!**************************************************!*\
  !*** ./src/pages/static/personal-background.png ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f3e2e08a824f2c606e1e57ceed6a727.png");

/***/ }),

/***/ "./src/pages/static/quit.png":
/*!***********************************!*\
  !*** ./src/pages/static/quit.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "194babfc378c9fa5b88c1ce4733f7a2c.png");

/***/ }),

/***/ "./src/pages/static/settings.png":
/*!***************************************!*\
  !*** ./src/pages/static/settings.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "40860da852217604c25b44c591a753eb.png");

/***/ }),

/***/ 2:
/*!****************************************************!*\
  !*** multi ./src/pages/personal/personal.entry.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\UNE\Desktop\code\front-end\wx\src\pages\personal\personal.entry.js */"./src/pages/personal/personal.entry.js");


/***/ })

},[[2,"runtime","remax-vendors"]]]);