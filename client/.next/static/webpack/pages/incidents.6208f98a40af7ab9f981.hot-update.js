/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/incidents",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.js\");\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/components/login.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar login = function login(_ref) {\n  _s();\n\n  var setUserAuthenticated = _ref.setUserAuthenticated,\n      setCurrentUsername = _ref.setCurrentUsername;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_5__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      open = _useState3[0],\n      setOpen = _useState3[1];\n\n  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_4__.GET_USER_BY_USERNAME, {\n    variables: {\n      username: username,\n      password: password\n    },\n    refetchOnWindowFocus: false,\n    enabled: false\n  }),\n      data = _useQuery.data,\n      refetch = _useQuery.refetch;\n\n  var Alert = function Alert(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_7__.default, _objectSpread({\n      elevation: 6,\n      variant: \"filled\"\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 16\n    }, _this);\n  };\n\n  var handleClose = function handleClose(event) {\n    setOpen(false);\n  };\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    refetch();\n\n    if (!data.getUserByUsername) {\n      return setOpen(true);\n    } else {\n      if (data.getUserByUsername.password === password) {\n        setUserAuthenticated(true);\n        setCurrentUser(username);\n      } else {\n        setOpen(true);\n      }\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: onSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Login to Account\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n            id: \"username-label\",\n            children: \"Username\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Input, {\n            id: \"username\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"username\",\n            value: username,\n            onInput: function onInput(e) {\n              return setUsername(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n            id: \"password-label\",\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Input, {\n            id: \"password\",\n            \"aria-describedby\": \"my-helper-text\",\n            placeholder: \"password\",\n            type: \"password\",\n            value: password,\n            onInput: function onInput(e) {\n              return setPassword(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 129\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__.default, {\n      open: open,\n      autoHideDuration: 6000,\n      onClose: handleClose,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Alert, {\n        onClose: handleClose,\n        severity: \"error\",\n        children: \"Error: Wrong username or password. Please try again.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(login, \"wdhjiFvChD2RhZDTmRILRWl2+s4=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sb2dpbi5qcz80ZjliIl0sIm5hbWVzIjpbImxvZ2luIiwic2V0VXNlckF1dGhlbnRpY2F0ZWQiLCJzZXRDdXJyZW50VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsIm9wZW4iLCJzZXRPcGVuIiwidXNlUXVlcnkiLCJHRVRfVVNFUl9CWV9VU0VSTkFNRSIsInZhcmlhYmxlcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZW5hYmxlZCIsImRhdGEiLCJyZWZldGNoIiwiQWxlcnQiLCJwcm9wcyIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldFVzZXJCeVVzZXJuYW1lIiwiZGlzcGxheSIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsInRhcmdldCIsInZhbHVlIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFrRDtBQUFBOztBQUFBLE1BQS9DQyxvQkFBK0MsUUFBL0NBLG9CQUErQztBQUFBLE1BQXpCQyxrQkFBeUIsUUFBekJBLGtCQUF5Qjs7QUFBQSxrQkFDNUJDLCtDQUFRLENBQUMsRUFBRCxDQURvQjtBQUFBLE1BQ3JEQyxRQURxRDtBQUFBLE1BQzNDQyxXQUQyQzs7QUFBQSxt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Zko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFrQkksOERBQUMsK0RBQUQ7QUFBVSxVQUFJLEVBQUU5QixJQUFoQjtBQUFzQixzQkFBZ0IsRUFBRSxJQUF4QztBQUE4QyxhQUFPLEVBQUVXLFdBQXZEO0FBQUEsNkJBQ0ksOERBQUMsS0FBRDtBQUFPLGVBQU8sRUFBRUEsV0FBaEI7QUFBNkIsZ0JBQVEsRUFBQyxPQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0E5REQ7O0dBQU12QixLO1VBS3dCYyxvRDs7O0FBMkQ5QiwrREFBZWQsS0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbG9naW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBJbnB1dCwgSW5wdXRMYWJlbCwgRm9ybUNvbnRyb2wsIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuXG5pbXBvcnQgeyBHRVRfVVNFUl9CWV9VU0VSTkFNRSB9IGZyb20gJy4uL2dyYXBocWwvcXVlcmllcyc7XG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9wcm92aWRlcnMvdXNlci5wcm92aWRlcidcblxuY29uc3QgbG9naW4gPSAoeyBzZXRVc2VyQXV0aGVudGljYXRlZCwgc2V0Q3VycmVudFVzZXJuYW1lIH0pID0+IHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoR0VUX1VTRVJfQllfVVNFUk5BTUUsIHsgXG4gICAgICAgIHZhcmlhYmxlczogeyBcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH0sXG4gICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBjb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gLz47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmVmZXRjaCgpO1xuICAgICAgICBpZighZGF0YS5nZXRVc2VyQnlVc2VybmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gc2V0T3Blbih0cnVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYoZGF0YS5nZXRVc2VyQnlVc2VybmFtZS5wYXNzd29yZCA9PT0gcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICBzZXRVc2VyQXV0aGVudGljYXRlZCh0cnVlKVxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXJuYW1lKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRPcGVuKHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcImxpZ2h0R3JheVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogJzE1cHggMjBweCcsIGJvcmRlclJhZGl1czogJzEwcHgnLCBib3JkZXJXaWR0aDogJzJweCcsIGJvcmRlclN0eWxlOiAnZ3Jvb3ZlJ319IG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luIHRvIEFjY291bnQ8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwidXNlcm5hbWUtbGFiZWxcIj5Vc2VybmFtZTwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIHZhbHVlPXt1c2VybmFtZX0gb25JbnB1dD17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicGFzc3dvcmQtbGFiZWxcIj5QYXNzd29yZDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBpZD1cInBhc3N3b3JkXCIgYXJpYS1kZXNjcmliZWRieT1cIm15LWhlbHBlci10ZXh0XCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25JbnB1dD17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3sgY29sb3I6ICdpdm9yeScsIGJhY2tncm91bmRDb2xvcjogJ3N0ZWVsYmx1ZScsIG1hcmdpbjogJzEwcHggMHB4J319PkxvZ2luPC9CdXR0b24+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnaXZvcnknLCBiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUnIH19PkJhY2s8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8U25hY2tiYXIgb3Blbj17b3Blbn0gYXV0b0hpZGVEdXJhdGlvbj17NjAwMH0gb25DbG9zZT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgIDxBbGVydCBvbkNsb3NlPXtoYW5kbGVDbG9zZX0gc2V2ZXJpdHk9XCJlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICBFcnJvcjogV3JvbmcgdXNlcm5hbWUgb3IgcGFzc3dvcmQuIFBsZWFzZSB0cnkgYWdhaW4uXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgIDwvU25hY2tiYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});