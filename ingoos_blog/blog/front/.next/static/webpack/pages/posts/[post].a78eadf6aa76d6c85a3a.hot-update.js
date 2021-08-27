self["webpackHotUpdate_N_E"]("pages/posts/[post]",{

/***/ "./pages/posts/[post].jsx":
/*!********************************!*\
  !*** ./pages/posts/[post].jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/BlogLayout */ "./components/BlogLayout.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\KGA_07\\Desktop\\\uC0C8 \uD3F4\uB354 (2)\\ingoos_blog\\blog\\front\\pages\\posts\\[post].jsx",
    _this = undefined,
    _s = $RefreshSig$();

// /admin/:menu/



var data = [{
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}, {
  id: '1',
  subject: 'ingoos blog',
  content: 'html ',
  date: '2021-07-28',
  hit: '5'
}];

var Post = function Post() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var post = router.query.post; // 카테고리 번호 DB idx id
  //server 요청해서 id 관련된 게시물들을 가져올수있도록

  /*
  게시번호
  제목
  날짜
  조회수
  */

  var list = data.map(function (v) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.subject
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: v.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Blog | \uB9AC\uC2A4\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogLayout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [post, " \uB9AC\uC2A4\uD2B8", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW3Bvc3RdLmpzeCJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJzdWJqZWN0IiwiY29udGVudCIsImRhdGUiLCJoaXQiLCJQb3N0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicG9zdCIsInF1ZXJ5IiwibGlzdCIsIm1hcCIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRSxDQUNSO0FBQ0lDLElBQUUsRUFBQyxHQURQO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFNBQU8sRUFBQyxPQUhaO0FBSUlDLE1BQUksRUFBQyxZQUpUO0FBS0lDLEtBQUcsRUFBQztBQUxSLENBRFEsRUFRUjtBQUNJSixJQUFFLEVBQUMsR0FEUDtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxTQUFPLEVBQUMsT0FIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQVJRLEVBZVI7QUFDSUosSUFBRSxFQUFDLEdBRFA7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsU0FBTyxFQUFDLE9BSFo7QUFJSUMsTUFBSSxFQUFDLFlBSlQ7QUFLSUMsS0FBRyxFQUFDO0FBTFIsQ0FmUSxFQXNCUjtBQUNJSixJQUFFLEVBQUMsR0FEUDtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxTQUFPLEVBQUMsT0FIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQXRCUSxFQTZCUjtBQUNJSixJQUFFLEVBQUMsR0FEUDtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxTQUFPLEVBQUMsT0FIWjtBQUlJQyxNQUFJLEVBQUMsWUFKVDtBQUtJQyxLQUFHLEVBQUM7QUFMUixDQTdCUSxDQUFaOztBQXVDQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURlLE1BRVJDLElBRlEsR0FFQUYsTUFBTSxDQUFDRyxLQUZQLENBRVJELElBRlEsRUFHZjtBQUNBOztBQUNBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFSSxNQUFNRSxJQUFJLEdBQUdYLElBQUksQ0FBQ1ksR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBSztBQUN2Qix3QkFDSTtBQUFBLDZCQUNJO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0EsQ0FBQyxDQUFDWDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFLVyxDQUFDLENBQUNWO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUtVLENBQUMsQ0FBQ1Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQVNILEdBVlksQ0FBYjtBQVlBLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlJLDhEQUFDLDJEQUFEO0FBQUEsaUJBQ0tLLElBREwsc0NBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFhSCxDQXJDRDs7R0FBTUgsSTtVQUNhRSxrRDs7O0tBRGJGLEk7QUF1Q04sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdHMvW3Bvc3RdLmE3OGVhZGY2YWE3NmQ2Yzg1YTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYWRtaW4vOm1lbnUvXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEJsb2dMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmxvZ0xheW91dFwiXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmNvbnN0IGRhdGEgPVtcclxuICAgIHtcclxuICAgICAgICBpZDonMScsXHJcbiAgICAgICAgc3ViamVjdDonaW5nb29zIGJsb2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6J2h0bWwgJyxcclxuICAgICAgICBkYXRlOicyMDIxLTA3LTI4JyxcclxuICAgICAgICBoaXQ6JzUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOicxJyxcclxuICAgICAgICBzdWJqZWN0Oidpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgY29udGVudDonaHRtbCAnLFxyXG4gICAgICAgIGRhdGU6JzIwMjEtMDctMjgnLFxyXG4gICAgICAgIGhpdDonNSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6JzEnLFxyXG4gICAgICAgIHN1YmplY3Q6J2luZ29vcyBibG9nJyxcclxuICAgICAgICBjb250ZW50OidodG1sICcsXHJcbiAgICAgICAgZGF0ZTonMjAyMS0wNy0yOCcsXHJcbiAgICAgICAgaGl0Oic1J1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDonMScsXHJcbiAgICAgICAgc3ViamVjdDonaW5nb29zIGJsb2cnLFxyXG4gICAgICAgIGNvbnRlbnQ6J2h0bWwgJyxcclxuICAgICAgICBkYXRlOicyMDIxLTA3LTI4JyxcclxuICAgICAgICBoaXQ6JzUnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOicxJyxcclxuICAgICAgICBzdWJqZWN0Oidpbmdvb3MgYmxvZycsXHJcbiAgICAgICAgY29udGVudDonaHRtbCAnLFxyXG4gICAgICAgIGRhdGU6JzIwMjEtMDctMjgnLFxyXG4gICAgICAgIGhpdDonNSdcclxuICAgIH0sXHJcbl1cclxuXHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtwb3N0fSA9IHJvdXRlci5xdWVyeVxyXG4gICAgLy8g7Lm07YWM6rOg66asIOuyiO2YuCBEQiBpZHggaWRcclxuICAgIC8vc2VydmVyIOyalOyyre2VtOyEnCBpZCDqtIDroKjrkJwg6rKM7Iuc66y865Ok7J2EIOqwgOyguOyYrOyImOyeiOuPhOuhnVxyXG4gICAgLypcclxuICAgIOqyjOyLnOuyiO2YuFxyXG4gICAg7KCc66qpXHJcbiAgICDrgqDsp5xcclxuICAgIOyhsO2ajOyImFxyXG4gICAgKi9cclxuXHJcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5tYXAoKHYpPT57XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT57di5zdWJqZWN0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPnt2LmNvbnRlbnR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+e3YuZGF0ZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIHwg66as7Iqk7Yq4PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QmxvZ0xheW91dD5cclxuICAgICAgICAgICAgICAgIHtwb3N0fSDrpqzsiqTtirhcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CbG9nTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sInNvdXJjZVJvb3QiOiIifQ==