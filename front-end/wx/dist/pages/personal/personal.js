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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('点击登录'),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      Username = _React$useState4[0],
      setUsername = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__["useState"]('https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/logo.png'),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      UserAvatar = _React$useState6[0],
      setUserAvatar = _React$useState6[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.div
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personBackground
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    style: {
      width: '100%',
      height: '100%'
    },
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/personal-background.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personHeader,
    "open-type": "getUserInfo",
    onClick: function onClick() {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(res) {
                setUsername(res.userInfo.nickName);
                setUserAvatar(res.userInfo.avatarUrl);
              }
            });
          }
        }
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personImg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: UserAvatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.workerNumber
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, Username)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personContent,
    onClick: function onClick() {
      setNumber(Math.ceil(Math.random() * 10));
    },
    style: {
      top: '35%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.icon,
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/settings.png"
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
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/log.png"
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
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/lock.png"
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
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/mine.png"
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
    src: "https://rac-1300807146.cos.ap-nanjing.myqcloud.com/UNE-WX/quit.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _personal_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.personText
  }, "\u9000\u51FA\u767B\u5F55")));
});

/***/ }),

/***/ 2:
/*!****************************************************!*\
  !*** multi ./src/pages/personal/personal.entry.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Desktop\UNE\une-customer\front-end\wx\src\pages\personal\personal.entry.js */"./src/pages/personal/personal.entry.js");


/***/ })

},[[2,"runtime","remax-vendors"]]]);