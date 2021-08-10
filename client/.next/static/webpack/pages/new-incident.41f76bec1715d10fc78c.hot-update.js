/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-incident",{

/***/ "./pages/new-incident.js":
/*!*******************************!*\
  !*** ./pages/new-incident.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations */ \"./graphql/mutations.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_menubar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/menubar */ \"./components/menubar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/pages/new-incident.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\nvar newIncident = function newIncident() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_8__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var departments = [\"HR\", \"Admin\", \"Finance\"];\n  var priorities = ['LOW', 'MEDIUM', 'HIGH'];\n  var status = 'OPEN';\n  var creation_date = '2021-08-08';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      description = _useState[0],\n      setDescription = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      department = _useState2[0],\n      setDepartment = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      priority = _useState3[0],\n      setPriority = _useState3[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.ADD_INCIDENT),\n      _useMutation2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 2),\n      addIncident = _useMutation2[0],\n      addedIncident = _useMutation2[1];\n\n  var incidentId = function incidentId() {\n    var randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10);\n    return randomInteger;\n  };\n\n  var onSubmit = function onSubmit() {\n    addIncident({\n      variables: {\n        incidentId: incidentId(),\n        description: description,\n        department: department,\n        priority: priority,\n        initiator: currentUser,\n        status: status,\n        creation_date: creation_date\n      }\n    });\n    setCurrentUser(currentUser);\n    router.push('/incidents');\n  };\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    onSubmit({\n      incidentId: incidentId,\n      description: description,\n      department: department,\n      priority: priority,\n      currentUser: currentUser,\n      status: status,\n      creation_date: creation_date\n    });\n  };\n\n  var Alert = function Alert(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MuiAlert, _objectSpread({\n      elevation: 6,\n      variant: \"filled\"\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 16\n    }, _this);\n  };\n\n  var handleClose = function handleClose(event) {\n    setOpen(false);\n  };\n\n  var goToLogin = function goToLogin() {\n    window.location.replace('/incidents');\n  };\n\n  if (addedIncident.loading) {\n    return \"loading\";\n  }\n\n  if (addedIncident.error) {\n    return \"error\";\n  }\n\n  if (!currentUser) {\n    goToLogin();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_menubar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: submit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Create Incident Report\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.TextareaAutosize, {\n            minRows: 5,\n            style: {\n              minWidth: '20vw'\n            },\n            placeholder: \"* Describe Your Problem *\",\n            value: description,\n            onInput: function onInput(e) {\n              return setDescription(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {\n            id: \"department-label\",\n            children: \"Your Department\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"departments-label\",\n            id: \"departments\",\n            value: department,\n            onChange: function onChange(e) {\n              return setDepartment(e.target.value);\n            },\n            children: departments.map(function (dept, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.MenuItem, {\n                value: dept,\n                children: dept\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {\n            id: \"priority-label\",\n            children: \"Priority\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"priorities-label\",\n            id: \"priorities\",\n            value: priority,\n            onChange: function onChange(e) {\n              return setPriority(e.target.value);\n            },\n            children: priorities.map(function (priority, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.MenuItem, {\n                value: priority,\n                children: priority\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 130\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(newIncident, \"NT/i/s41hZfXVtn4BGNtA+lNZOg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useMutation];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newIncident);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LWluY2lkZW50LmpzPzJjMzgiXSwibmFtZXMiOlsibmV3SW5jaWRlbnQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZGVwYXJ0bWVudHMiLCJwcmlvcml0aWVzIiwic3RhdHVzIiwiY3JlYXRpb25fZGF0ZSIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImRlcGFydG1lbnQiLCJzZXREZXBhcnRtZW50IiwicHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsInVzZU11dGF0aW9uIiwiQUREX0lOQ0lERU5UIiwiYWRkSW5jaWRlbnQiLCJhZGRlZEluY2lkZW50IiwiaW5jaWRlbnRJZCIsInJhbmRvbUludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvblN1Ym1pdCIsInZhcmlhYmxlcyIsImluaXRpYXRvciIsInB1c2giLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJBbGVydCIsInByb3BzIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsInNldE9wZW4iLCJnb1RvTG9naW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJsb2FkaW5nIiwiZXJyb3IiLCJkaXNwbGF5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwibWluV2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwibWFwIiwiZGVwdCIsImluZGV4IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRHNCLG9CQUVrQkMsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FGNUI7QUFBQSxNQUVkQyxXQUZjLGVBRWRBLFdBRmM7QUFBQSxNQUVEQyxjQUZDLGVBRURBLGNBRkM7O0FBR3RCLE1BQU1DLFdBQVcsR0FBRyxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFNBQWhCLENBQXBCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxZQUF0Qjs7QUFOc0Isa0JBT2dCQywrQ0FBUSxDQUFDLEVBQUQsQ0FQeEI7QUFBQSxNQU9mQyxXQVBlO0FBQUEsTUFPRkMsY0FQRTs7QUFBQSxtQkFRY0YsK0NBQVEsQ0FBQyxFQUFELENBUnRCO0FBQUEsTUFRZkcsVUFSZTtBQUFBLE1BUUhDLGFBUkc7O0FBQUEsbUJBU1VKLCtDQUFRLENBQUMsRUFBRCxDQVRsQjtBQUFBLE1BU2ZLLFFBVGU7QUFBQSxNQVNMQyxXQVRLOztBQUFBLHFCQVVlQywyREFBVyxDQUFDQyw0REFBRCxDQVYxQjtBQUFBO0FBQUEsTUFVZkMsV0FWZTtBQUFBLE1BVUZDLGFBVkU7O0FBV3RCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLFlBQVksRUFBN0IsSUFBbUMsRUFBOUMsQ0FBdEI7QUFDQSxXQUFPSCxhQUFQO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CUCxlQUFXLENBQUM7QUFDUlEsZUFBUyxFQUFFO0FBQ1BOLGtCQUFVLEVBQUVBLFVBQVUsRUFEZjtBQUVQVixtQkFBVyxFQUFFQSxXQUZOO0FBR1BFLGtCQUFVLEVBQUVBLFVBSEw7QUFJUEUsZ0JBQVEsRUFBRUEsUUFKSDtBQUtQYSxpQkFBUyxFQUFFeEIsV0FMSjtBQU1QSSxjQUFNLEVBQUVBLE1BTkQ7QUFPUEMscUJBQWEsRUFBRUE7QUFQUjtBQURILEtBQUQsQ0FBWDtBQVdBSixrQkFBYyxDQUFDRCxXQUFELENBQWQ7QUFDQUosVUFBTSxDQUFDNkIsSUFBUCxDQUFZLFlBQVo7QUFDSCxHQWREOztBQWdCQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxDQUFELEVBQU87QUFDbEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBTixZQUFRLENBQUM7QUFBRUwsZ0JBQVUsRUFBVkEsVUFBRjtBQUFjVixpQkFBVyxFQUFYQSxXQUFkO0FBQTJCRSxnQkFBVSxFQUFWQSxVQUEzQjtBQUF1Q0UsY0FBUSxFQUFSQSxRQUF2QztBQUFpRFgsaUJBQVcsRUFBWEEsV0FBakQ7QUFBOERJLFlBQU0sRUFBTkEsTUFBOUQ7QUFBc0VDLG1CQUFhLEVBQWJBO0FBQXRFLEtBQUQsQ0FBUjtBQUNILEdBSEQ7O0FBS0EsTUFBTXdCLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUNyQix3QkFBTyw4REFBQyxRQUFEO0FBQVUsZUFBUyxFQUFFLENBQXJCO0FBQXdCLGFBQU8sRUFBQztBQUFoQyxPQUE2Q0EsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0JDLFdBQU8sQ0FBQyxLQUFELENBQVA7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0IsWUFBeEI7QUFDSCxHQUZEOztBQUlBLE1BQUdyQixhQUFhLENBQUNzQixPQUFqQixFQUF5QjtBQUNyQixXQUFPLFNBQVA7QUFDSDs7QUFFRCxNQUFHdEIsYUFBYSxDQUFDdUIsS0FBakIsRUFBdUI7QUFDbkIsV0FBTyxPQUFQO0FBQ0g7O0FBRUQsTUFBRyxDQUFDdkMsV0FBSixFQUFpQjtBQUNia0MsYUFBUztBQUNaOztBQUVELHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVNLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxZQUFNLEVBQUUsT0FBM0I7QUFBb0NDLG9CQUFjLEVBQUUsUUFBcEQ7QUFBOERDLGdCQUFVLEVBQUUsV0FBMUU7QUFBdUZDLGdCQUFVLEVBQUU7QUFBbkcsS0FBWjtBQUFBLDRCQUNJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU0sZUFBUyxFQUFDLGdCQUFoQjtBQUFpQyxXQUFLLEVBQUU7QUFBQ0MsaUJBQVMsRUFBRSxRQUFaO0FBQXNCRixrQkFBVSxFQUFFLE9BQWxDO0FBQTJDRyxlQUFPLEVBQUUsV0FBcEQ7QUFBaUVDLG9CQUFZLEVBQUUsTUFBL0U7QUFBdUZDLG1CQUFXLEVBQUUsS0FBcEc7QUFBMkdDLG1CQUFXLEVBQUU7QUFBeEgsT0FBeEM7QUFBMkssY0FBUSxFQUFFdkIsTUFBckw7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUFhLGtCQUFRLE1BQXJCO0FBQUEsaUNBQ0ksOERBQUMsZ0VBQUQ7QUFBa0IsbUJBQU8sRUFBRSxDQUEzQjtBQUE4QixpQkFBSyxFQUFFO0FBQUV3QixzQkFBUSxFQUFFO0FBQVosYUFBckM7QUFBMkQsdUJBQVcsRUFBQywyQkFBdkU7QUFBbUcsaUJBQUssRUFBRTNDLFdBQTFHO0FBQXVILG1CQUFPLEVBQUUsaUJBQUNvQixDQUFEO0FBQUEscUJBQU9uQixjQUFjLENBQUNtQixDQUFDLENBQUN3QixNQUFGLENBQVNDLEtBQVYsQ0FBckI7QUFBQTtBQUFoSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQU9JO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBYSxrQkFBUSxNQUFyQjtBQUFBLGtDQUNJLDhEQUFDLDBEQUFEO0FBQVksY0FBRSxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsc0RBQUQ7QUFDSSxpQkFBSyxFQUFFO0FBQUNDLG1CQUFLLEVBQUU7QUFBUixhQURYO0FBRUksbUJBQU8sRUFBQyxtQkFGWjtBQUdJLGNBQUUsRUFBQyxhQUhQO0FBSUksaUJBQUssRUFBRTVDLFVBSlg7QUFLSSxvQkFBUSxFQUFFLGtCQUFDa0IsQ0FBRDtBQUFBLHFCQUFPakIsYUFBYSxDQUFDaUIsQ0FBQyxDQUFDd0IsTUFBRixDQUFTQyxLQUFWLENBQXBCO0FBQUEsYUFMZDtBQUFBLHNCQU9LbEQsV0FBVyxDQUFDb0QsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxrQ0FDYiw4REFBQyx3REFBRDtBQUFzQixxQkFBSyxFQUFFRCxJQUE3QjtBQUFBLDBCQUFvQ0E7QUFBcEMsaUJBQWVDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEYTtBQUFBLGFBQWhCO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosZUF1Qkk7QUFBQSwrQkFDSSw4REFBQywyREFBRDtBQUFhLGtCQUFRLE1BQXJCO0FBQUEsa0NBQ0ksOERBQUMsMERBQUQ7QUFBWSxjQUFFLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSSw4REFBQyxzREFBRDtBQUNJLGlCQUFLLEVBQUU7QUFBQ0gsbUJBQUssRUFBRTtBQUFSLGFBRFg7QUFFSSxtQkFBTyxFQUFDLGtCQUZaO0FBR0ksY0FBRSxFQUFDLFlBSFA7QUFJSSxpQkFBSyxFQUFFMUMsUUFKWDtBQUtJLG9CQUFRLEVBQUUsa0JBQUNnQixDQUFEO0FBQUEscUJBQU9mLFdBQVcsQ0FBQ2UsQ0FBQyxDQUFDd0IsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsYUFMZDtBQUFBLHNCQU9LakQsVUFBVSxDQUFDbUQsR0FBWCxDQUFlLFVBQUMzQyxRQUFELEVBQVc2QyxLQUFYO0FBQUEsa0NBQ1osOERBQUMsd0RBQUQ7QUFBc0IscUJBQUssRUFBRTdDLFFBQTdCO0FBQUEsMEJBQXdDQTtBQUF4QyxpQkFBZTZDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEWTtBQUFBLGFBQWY7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUF1Q0ksOERBQUMsc0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLHlCQUFlLEVBQUUsV0FBbkM7QUFBZ0RDLGdCQUFNLEVBQUU7QUFBeEQsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0osZUF1Q3FIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q3JILGVBd0NJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZSw4REFBQyxzREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFRixpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDJCQUFlLEVBQUU7QUFBbkMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQ0gsQ0E1R0Q7O0dBQU0vRCxXO1VBQ2FFLGtELEVBU3NCZ0IsdUQ7OztBQW9HekMsK0RBQWVsQixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3LWluY2lkZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQUREX0lOQ0lERU5UIH0gZnJvbSAnLi4vZ3JhcGhxbC9tdXRhdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRMYWJlbCwgVGV4dGFyZWFBdXRvc2l6ZSwgRm9ybUNvbnRyb2wsIFNlbGVjdCwgTWVudUl0ZW0sIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1lbnViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51YmFyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL3Byb3ZpZGVycy91c2VyLnByb3ZpZGVyJztcblxuY29uc3QgbmV3SW5jaWRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgY29uc3QgZGVwYXJ0bWVudHMgPSBbXCJIUlwiLCBcIkFkbWluXCIsIFwiRmluYW5jZVwiXTtcbiAgICBjb25zdCBwcmlvcml0aWVzID0gWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXTtcbiAgICBjb25zdCBzdGF0dXMgPSAnT1BFTic7XG4gICAgY29uc3QgY3JlYXRpb25fZGF0ZSA9ICcyMDIxLTA4LTA4JztcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGVwYXJ0bWVudCwgc2V0RGVwYXJ0bWVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3ByaW9yaXR5LCBzZXRQcmlvcml0eV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2FkZEluY2lkZW50LCBhZGRlZEluY2lkZW50XSA9IHVzZU11dGF0aW9uKEFERF9JTkNJREVOVCk7XG4gICAgY29uc3QgaW5jaWRlbnRJZCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcmFuZG9tSW50ZWdlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5OTk5OTk5OTkgLSAxMCkgKyAxMClcbiAgICAgICAgcmV0dXJuIHJhbmRvbUludGVnZXJcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgICAgIGFkZEluY2lkZW50KHtcbiAgICAgICAgICAgIHZhcmlhYmxlczogeyBcbiAgICAgICAgICAgICAgICBpbmNpZGVudElkOiBpbmNpZGVudElkKCksXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGRlcGFydG1lbnQ6IGRlcGFydG1lbnQsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICAgICAgICAgIGluaXRpYXRvcjogY3VycmVudFVzZXIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgY3JlYXRpb25fZGF0ZTogY3JlYXRpb25fZGF0ZVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgc2V0Q3VycmVudFVzZXIoY3VycmVudFVzZXIpXG4gICAgICAgIHJvdXRlci5wdXNoKCcvaW5jaWRlbnRzJylcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgb25TdWJtaXQoeyBpbmNpZGVudElkLCBkZXNjcmlwdGlvbiwgZGVwYXJ0bWVudCwgcHJpb3JpdHksIGN1cnJlbnRVc2VyLCBzdGF0dXMsIGNyZWF0aW9uX2RhdGUgfSlcbiAgICB9XG5cbiAgICBjb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gPE11aUFsZXJ0IGVsZXZhdGlvbj17Nn0gdmFyaWFudD1cImZpbGxlZFwiIHsuLi5wcm9wc30gLz47XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBnb1RvTG9naW4gPSAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvaW5jaWRlbnRzJyk7XG4gICAgfVxuXG4gICAgaWYoYWRkZWRJbmNpZGVudC5sb2FkaW5nKXtcbiAgICAgICAgcmV0dXJuIFwibG9hZGluZ1wiXG4gICAgfVxuXG4gICAgaWYoYWRkZWRJbmNpZGVudC5lcnJvcil7XG4gICAgICAgIHJldHVybiBcImVycm9yXCJcbiAgICB9XG5cbiAgICBpZighY3VycmVudFVzZXIpIHtcbiAgICAgICAgZ29Ub0xvZ2luKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwibGlnaHRHcmF5XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgIDxNZW51YmFyIC8+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogJzE1cHggMjBweCcsIGJvcmRlclJhZGl1czogJzEwcHgnLCBib3JkZXJXaWR0aDogJzJweCcsIGJvcmRlclN0eWxlOiAnZ3Jvb3ZlJ319IG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgSW5jaWRlbnQgUmVwb3J0PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBtaW5Sb3dzPXs1fSBzdHlsZT17eyBtaW5XaWR0aDogJzIwdncnIH19IHBsYWNlaG9sZGVyPVwiKiBEZXNjcmliZSBZb3VyIFByb2JsZW0gKlwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25JbnB1dD17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVwYXJ0bWVudC1sYWJlbFwiPllvdXIgRGVwYXJ0bWVudDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE2MHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlcGFydG1lbnRzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcGFydG1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBhcnRtZW50cy5tYXAoKGRlcHQsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtkZXB0fT57ZGVwdH08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInByaW9yaXR5LWxhYmVsXCI+UHJpb3JpdHk8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJwcmlvcml0aWVzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaW9yaXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmlvcml0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpb3JpdGllcy5tYXAoKHByaW9yaXR5LCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17cHJpb3JpdHl9Pntwcmlvcml0eX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAnc3RlZWxibHVlJywgbWFyZ2luOiAnMTBweCAwcHgnfX0+U3VibWl0PC9CdXR0b24+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnaXZvcnknLCBiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUnIH19PkJhY2s8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SW5jaWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-incident.js\n");

/***/ })

});