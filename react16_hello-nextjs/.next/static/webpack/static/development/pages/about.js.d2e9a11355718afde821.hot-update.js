webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "/Users/sujinlove/Desktop/Ezen_react/react_study/react16_hello-nextjs/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const about = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "About.js")));
}; // 모든 pages 폴더 내의 함수들은 getInitialProps 라는 하위 함수를 갖는다.
// 이 함수를 통해 각 페이지가 웹 프로그램으로 동작할 수 있는 기능을 넘겨받는다.
// ex) 브라우저의 요청을 받기 위한 request 객체 등..


about.getInitialProps = async props => {
  console.log(props);
  let from = "client";

  if (props.req) {
    from = "server";
  }

  return {
    a: 123,
    b: 234,
    from: from
  };
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ })

})
//# sourceMappingURL=about.js.d2e9a11355718afde821.hot-update.js.map