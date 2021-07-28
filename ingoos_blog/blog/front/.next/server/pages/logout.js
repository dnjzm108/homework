(function() {
var exports = {};
exports.id = "pages/logout";
exports.ids = ["pages/logout"];
exports.modules = {

/***/ "./pages/logout.jsx":
/*!**************************!*\
  !*** ./pages/logout.jsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/context */ "./pages/store/context.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);






const logout = () => {
  const {
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_context__WEBPACK_IMPORTED_MODULE_1__.default);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch({
      type: 'LOGOUT'
    });
    setTimeout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().back();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: "logout...."
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (logout);

/***/ }),

/***/ "./pages/store/context.jsx":
/*!*********************************!*\
  !*** ./pages/store/context.jsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initalState": function() { return /* binding */ initalState; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const initalState = {
  IsLogin: true
};
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initalState);
/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/logout.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC8uL3BhZ2VzL2xvZ291dC5qc3giLCJ3ZWJwYWNrOi8vZnJvbnQvLi9wYWdlcy9zdG9yZS9jb250ZXh0LmpzeCIsIndlYnBhY2s6Ly9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibG9nb3V0IiwiZGlzcGF0Y2giLCJ1c2VDb250ZXh0IiwiU3RvcmUiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwic2V0VGltZW91dCIsIlJvdXRlciIsImluaXRhbFN0YXRlIiwiSXNMb2dpbiIsImNyZWF0ZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBRWpCLFFBQU07QUFBQ0M7QUFBRCxNQUFhQyxpREFBVSxDQUFDQyxtREFBRCxDQUE3QjtBQUVBQyxrREFBUyxDQUFDLE1BQUk7QUFDVkgsWUFBUSxDQUFDO0FBQUNJLFVBQUksRUFBQztBQUFOLEtBQUQsQ0FBUjtBQUVBQyxjQUFVLENBQUMsTUFBSTtBQUNYQyw2REFBQTtBQUNILEtBRlMsRUFFUixJQUZRLENBQVY7QUFHSCxHQU5RLEVBTVAsRUFOTyxDQUFUO0FBUUEsc0JBQ0k7QUFBQTtBQUFBLG1CQURKO0FBS0gsQ0FqQkQ7O0FBbUJBLCtEQUFlUCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBRU8sTUFBTVEsV0FBVyxHQUFHO0FBQ3ZCQyxTQUFPLEVBQUM7QUFEZSxDQUFwQjtBQUdQLE1BQU1OLEtBQUssZ0JBQUdPLG9EQUFhLENBQUNGLFdBQUQsQ0FBM0I7QUFFQSwrREFBZUwsS0FBZixFOzs7Ozs7Ozs7OztBQ1BBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlL2NvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHVzZUNvbnRleHQoU3RvcmUpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6J0xPR09VVCd9KVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIFJvdXRlci5iYWNrKClcclxuICAgICAgICB9LDEwMDApXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgbG9nb3V0Li4uLlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dvdXQiLCJpbXBvcnQge2NyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgSXNMb2dpbjp0cnVlLFxyXG59XHJcbmNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dChpbml0YWxTdGF0ZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=