webpackHotUpdate("static/development/pages/get_param_result.js",{

/***/ "./pages/get_param_result.js":
/*!***********************************!*\
  !*** ./pages/get_param_result.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/sujinlove/Desktop/Ezen_react/react_study/react16_hello-nextjs/pages/get_param_result.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const getParamResult = props => {
  console.log(props);
  const {
    router
  } = props;
  console.log(router); //const { query } = props.url;

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, router.query.ans == 300 ? __jsx("h1", {
    style: {
      color: "green"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "\uC815\uB2F5\uC785\uB2C8\uB2E4.") : __jsx("h1", {
    style: {
      color: "red"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "\uC624\uB2F5\uC785\uB2C8\uB2E4."));
}; // Router로 컴포넌트를 Wrappering 처리


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(getParamResult));

/***/ })

})
//# sourceMappingURL=get_param_result.js.b0f243f3aae7fe3db079.hot-update.js.map