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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/mutations */ \"./graphql/mutations.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menubar */ \"./components/menubar.js\");\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/pages/new-incident.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar newIncident = function newIncident() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_6__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var departments = [\"HR\", \"Admin\", \"Finance\"];\n  var priorities = ['LOW', 'MEDIUM', 'HIGH'];\n  var status = 'OPEN';\n  var creation_date = '2021-08-08';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      description = _useState[0],\n      setDescription = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      department = _useState2[0],\n      setDepartment = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      priority = _useState3[0],\n      setPriority = _useState3[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.ADD_INCIDENT),\n      _useMutation2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),\n      addIncident = _useMutation2[0],\n      addedIncident = _useMutation2[1];\n\n  var incidentId = function incidentId() {\n    var randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10);\n    return randomInteger;\n  };\n\n  var onSubmit = function onSubmit() {\n    addIncident({\n      variables: {\n        incidentId: incidentId(),\n        description: description,\n        department: department,\n        priority: priority,\n        initiator: initiator,\n        status: status,\n        creation_date: creation_date\n      }\n    });\n    alert('Your incident has been created. Redirecting to incidents page.');\n    window.location.replace('/incidents');\n  };\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    onSubmit({\n      incidentId: incidentId,\n      description: description,\n      department: department,\n      priority: priority,\n      initiator: initiator,\n      status: status,\n      creation_date: creation_date\n    });\n  };\n\n  if (addedIncident.loading) {\n    return \"loading\";\n  }\n\n  if (addedIncident.error) {\n    return \"error\";\n  }\n\n  if (currentUser === null) {\n    console.log(currentUser);\n\n    var goToLogin = function goToLogin() {\n      window.location.reload('/incidents');\n    };\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menubar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: submit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Create Incident Report\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n          required: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.TextareaAutosize, {\n            minRows: 5,\n            style: {\n              minWidth: '20vw'\n            },\n            placeholder: \"* Describe Your Problem *\",\n            value: description,\n            onInput: function onInput(e) {\n              return setDescription(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n            id: \"department-label\",\n            children: \"Your Department\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"departments-label\",\n            id: \"departments\",\n            value: department,\n            onChange: function onChange(e) {\n              return setDepartment(e.target.value);\n            },\n            children: departments.map(function (dept, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                value: dept,\n                children: dept\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n            id: \"priority-label\",\n            children: \"Priority\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"priorities-label\",\n            id: \"priorities\",\n            value: priority,\n            onChange: function onChange(e) {\n              return setPriority(e.target.value);\n            },\n            children: priorities.map(function (priority, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                value: priority,\n                children: priority\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 130\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(newIncident, \"v3UymY4Cjf+EhQuACN5lT5DYO4M=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newIncident);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LWluY2lkZW50LmpzPzJjMzgiXSwibmFtZXMiOlsibmV3SW5jaWRlbnQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZGVwYXJ0bWVudHMiLCJwcmlvcml0aWVzIiwic3RhdHVzIiwiY3JlYXRpb25fZGF0ZSIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImRlcGFydG1lbnQiLCJzZXREZXBhcnRtZW50IiwicHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsInVzZU11dGF0aW9uIiwiQUREX0lOQ0lERU5UIiwiYWRkSW5jaWRlbnQiLCJhZGRlZEluY2lkZW50IiwiaW5jaWRlbnRJZCIsInJhbmRvbUludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvblN1Ym1pdCIsInZhcmlhYmxlcyIsImluaXRpYXRvciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9hZGluZyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImdvVG9Mb2dpbiIsInJlbG9hZCIsImRpc3BsYXkiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmQiLCJhbGlnbkl0ZW1zIiwidGV4dEFsaWduIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJvcmRlcldpZHRoIiwiYm9yZGVyU3R5bGUiLCJtaW5XaWR0aCIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJtYXAiLCJkZXB0IiwiaW5kZXgiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLG9CQUNrQkMsaURBQVUsQ0FBQ0MsaUVBQUQsQ0FENUI7QUFBQSxNQUNkQyxXQURjLGVBQ2RBLFdBRGM7QUFBQSxNQUNEQyxjQURDLGVBQ0RBLGNBREM7O0FBRXRCLE1BQU1DLFdBQVcsR0FBRyxDQUFDLElBQUQsRUFBTyxPQUFQLEVBQWdCLFNBQWhCLENBQXBCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsQ0FBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsTUFBZjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxZQUF0Qjs7QUFMc0Isa0JBTWdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FOeEI7QUFBQSxNQU1mQyxXQU5lO0FBQUEsTUFNRkMsY0FORTs7QUFBQSxtQkFPY0YsK0NBQVEsQ0FBQyxFQUFELENBUHRCO0FBQUEsTUFPZkcsVUFQZTtBQUFBLE1BT0hDLGFBUEc7O0FBQUEsbUJBUVVKLCtDQUFRLENBQUMsRUFBRCxDQVJsQjtBQUFBLE1BUWZLLFFBUmU7QUFBQSxNQVFMQyxXQVJLOztBQUFBLHFCQVNlQywyREFBVyxDQUFDQyw0REFBRCxDQVQxQjtBQUFBO0FBQUEsTUFTZkMsV0FUZTtBQUFBLE1BU0ZDLGFBVEU7O0FBVXRCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCLFlBQVksRUFBN0IsSUFBbUMsRUFBOUMsQ0FBdEI7QUFDQSxXQUFPSCxhQUFQO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CUCxlQUFXLENBQUM7QUFDUlEsZUFBUyxFQUFFO0FBQ1BOLGtCQUFVLEVBQUVBLFVBQVUsRUFEZjtBQUVQVixtQkFBVyxFQUFFQSxXQUZOO0FBR1BFLGtCQUFVLEVBQUVBLFVBSEw7QUFJUEUsZ0JBQVEsRUFBRUEsUUFKSDtBQUtQYSxpQkFBUyxFQUFFQSxTQUxKO0FBTVBwQixjQUFNLEVBQUVBLE1BTkQ7QUFPUEMscUJBQWEsRUFBRUE7QUFQUjtBQURILEtBQUQsQ0FBWDtBQVdBb0IsU0FBSyxDQUFDLGdFQUFELENBQUw7QUFDQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixZQUF4QjtBQUNILEdBZEQ7O0FBZ0JBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FULFlBQVEsQ0FBQztBQUFFTCxnQkFBVSxFQUFWQSxVQUFGO0FBQWNWLGlCQUFXLEVBQVhBLFdBQWQ7QUFBMkJFLGdCQUFVLEVBQVZBLFVBQTNCO0FBQXVDRSxjQUFRLEVBQVJBLFFBQXZDO0FBQWlEYSxlQUFTLEVBQVRBLFNBQWpEO0FBQTREcEIsWUFBTSxFQUFOQSxNQUE1RDtBQUFvRUMsbUJBQWEsRUFBYkE7QUFBcEUsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFHVyxhQUFhLENBQUNnQixPQUFqQixFQUF5QjtBQUNyQixXQUFPLFNBQVA7QUFDSDs7QUFFRCxNQUFHaEIsYUFBYSxDQUFDaUIsS0FBakIsRUFBdUI7QUFDbkIsV0FBTyxPQUFQO0FBQ0g7O0FBRUQsTUFBR2pDLFdBQVcsS0FBSyxJQUFuQixFQUF5QjtBQUNyQmtDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbkMsV0FBWjs7QUFDQSxRQUFNb0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQlYsWUFBTSxDQUFDQyxRQUFQLENBQWdCVSxNQUFoQixDQUF1QixZQUF2QjtBQUNILEtBRkQ7QUFHSDs7QUFFRCxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFQyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsWUFBTSxFQUFFLE9BQTNCO0FBQW9DQyxvQkFBYyxFQUFFLFFBQXBEO0FBQThEQyxnQkFBVSxFQUFFLFdBQTFFO0FBQXVGQyxnQkFBVSxFQUFFO0FBQW5HLEtBQVo7QUFBQSw0QkFDSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxnQkFBaEI7QUFBaUMsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUUsUUFBWjtBQUFzQkYsa0JBQVUsRUFBRSxPQUFsQztBQUEyQ0csZUFBTyxFQUFFLFdBQXBEO0FBQWlFQyxvQkFBWSxFQUFFLE1BQS9FO0FBQXVGQyxtQkFBVyxFQUFFLEtBQXBHO0FBQTJHQyxtQkFBVyxFQUFFO0FBQXhILE9BQXhDO0FBQTJLLGNBQVEsRUFBRWxCLE1BQXJMO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsK0JBQ0ksOERBQUMsMERBQUQ7QUFBYSxrQkFBUSxNQUFyQjtBQUFBLGlDQUNJLDhEQUFDLCtEQUFEO0FBQWtCLG1CQUFPLEVBQUUsQ0FBM0I7QUFBOEIsaUJBQUssRUFBRTtBQUFFbUIsc0JBQVEsRUFBRTtBQUFaLGFBQXJDO0FBQTJELHVCQUFXLEVBQUMsMkJBQXZFO0FBQW1HLGlCQUFLLEVBQUV6QyxXQUExRztBQUF1SCxtQkFBTyxFQUFFLGlCQUFDdUIsQ0FBRDtBQUFBLHFCQUFPdEIsY0FBYyxDQUFDc0IsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUE7QUFBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFPSTtBQUFBLCtCQUNJLDhEQUFDLDBEQUFEO0FBQWEsa0JBQVEsTUFBckI7QUFBQSxrQ0FDSSw4REFBQyx5REFBRDtBQUFZLGNBQUUsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLHFEQUFEO0FBQ0ksaUJBQUssRUFBRTtBQUFDQyxtQkFBSyxFQUFFO0FBQVIsYUFEWDtBQUVJLG1CQUFPLEVBQUMsbUJBRlo7QUFHSSxjQUFFLEVBQUMsYUFIUDtBQUlJLGlCQUFLLEVBQUUxQyxVQUpYO0FBS0ksb0JBQVEsRUFBRSxrQkFBQ3FCLENBQUQ7QUFBQSxxQkFBT3BCLGFBQWEsQ0FBQ29CLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLGFBTGQ7QUFBQSxzQkFPS2hELFdBQVcsQ0FBQ2tELEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsa0NBQ2IsOERBQUMsdURBQUQ7QUFBc0IscUJBQUssRUFBRUQsSUFBN0I7QUFBQSwwQkFBb0NBO0FBQXBDLGlCQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGE7QUFBQSxhQUFoQjtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBdUJJO0FBQUEsK0JBQ0ksOERBQUMsMERBQUQ7QUFBYSxrQkFBUSxNQUFyQjtBQUFBLGtDQUNJLDhEQUFDLHlEQUFEO0FBQVksY0FBRSxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMscURBQUQ7QUFDSSxpQkFBSyxFQUFFO0FBQUNILG1CQUFLLEVBQUU7QUFBUixhQURYO0FBRUksbUJBQU8sRUFBQyxrQkFGWjtBQUdJLGNBQUUsRUFBQyxZQUhQO0FBSUksaUJBQUssRUFBRXhDLFFBSlg7QUFLSSxvQkFBUSxFQUFFLGtCQUFDbUIsQ0FBRDtBQUFBLHFCQUFPbEIsV0FBVyxDQUFDa0IsQ0FBQyxDQUFDbUIsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsYUFMZDtBQUFBLHNCQU9LL0MsVUFBVSxDQUFDaUQsR0FBWCxDQUFlLFVBQUN6QyxRQUFELEVBQVcyQyxLQUFYO0FBQUEsa0NBQ1osOERBQUMsdURBQUQ7QUFBc0IscUJBQUssRUFBRTNDLFFBQTdCO0FBQUEsMEJBQXdDQTtBQUF4QyxpQkFBZTJDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEWTtBQUFBLGFBQWY7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUF1Q0ksOERBQUMscURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLHlCQUFlLEVBQUUsV0FBbkM7QUFBZ0RDLGdCQUFNLEVBQUU7QUFBeEQsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0osZUF1Q3FIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q3JILGVBd0NJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZSw4REFBQyxxREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFRixpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDJCQUFlLEVBQUU7QUFBbkMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQ0gsQ0FsR0Q7O0dBQU0zRCxXO1VBU21DZ0IsdUQ7OztBQTJGekMsK0RBQWVoQixXQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbmV3LWluY2lkZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQUREX0lOQ0lERU5UIH0gZnJvbSAnLi4vZ3JhcGhxbC9tdXRhdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRMYWJlbCwgVGV4dGFyZWFBdXRvc2l6ZSwgRm9ybUNvbnRyb2wsIFNlbGVjdCwgTWVudUl0ZW0sIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IE1lbnViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZW51YmFyJztcblxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9wcm92aWRlcnMvdXNlci5wcm92aWRlcic7XG5cbmNvbnN0IG5ld0luY2lkZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgICBjb25zdCBkZXBhcnRtZW50cyA9IFtcIkhSXCIsIFwiQWRtaW5cIiwgXCJGaW5hbmNlXCJdO1xuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddO1xuICAgIGNvbnN0IHN0YXR1cyA9ICdPUEVOJztcbiAgICBjb25zdCBjcmVhdGlvbl9kYXRlID0gJzIwMjEtMDgtMDgnO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXBhcnRtZW50LCBzZXREZXBhcnRtZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYWRkSW5jaWRlbnQsIGFkZGVkSW5jaWRlbnRdID0gdXNlTXV0YXRpb24oQUREX0lOQ0lERU5UKTtcbiAgICBjb25zdCBpbmNpZGVudElkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21JbnRlZ2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDk5OTk5OTk5OSAtIDEwKSArIDEwKVxuICAgICAgICByZXR1cm4gcmFuZG9tSW50ZWdlclxuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgYWRkSW5jaWRlbnQoe1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICAgICAgICAgIGluY2lkZW50SWQ6IGluY2lkZW50SWQoKSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgaW5pdGlhdG9yOiBpbml0aWF0b3IsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgY3JlYXRpb25fZGF0ZTogY3JlYXRpb25fZGF0ZVxuICAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYWxlcnQoJ1lvdXIgaW5jaWRlbnQgaGFzIGJlZW4gY3JlYXRlZC4gUmVkaXJlY3RpbmcgdG8gaW5jaWRlbnRzIHBhZ2UuJylcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJy9pbmNpZGVudHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgb25TdWJtaXQoeyBpbmNpZGVudElkLCBkZXNjcmlwdGlvbiwgZGVwYXJ0bWVudCwgcHJpb3JpdHksIGluaXRpYXRvciwgc3RhdHVzLCBjcmVhdGlvbl9kYXRlIH0pXG4gICAgfVxuXG4gICAgaWYoYWRkZWRJbmNpZGVudC5sb2FkaW5nKXtcbiAgICAgICAgcmV0dXJuIFwibG9hZGluZ1wiXG4gICAgfVxuXG4gICAgaWYoYWRkZWRJbmNpZGVudC5lcnJvcil7XG4gICAgICAgIHJldHVybiBcImVycm9yXCJcbiAgICB9XG5cbiAgICBpZihjdXJyZW50VXNlciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VXNlcilcbiAgICAgICAgY29uc3QgZ29Ub0xvZ2luID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgnL2luY2lkZW50cycpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwibGlnaHRHcmF5XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgIDxNZW51YmFyIC8+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogJzE1cHggMjBweCcsIGJvcmRlclJhZGl1czogJzEwcHgnLCBib3JkZXJXaWR0aDogJzJweCcsIGJvcmRlclN0eWxlOiAnZ3Jvb3ZlJ319IG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgSW5jaWRlbnQgUmVwb3J0PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBtaW5Sb3dzPXs1fSBzdHlsZT17eyBtaW5XaWR0aDogJzIwdncnIH19IHBsYWNlaG9sZGVyPVwiKiBEZXNjcmliZSBZb3VyIFByb2JsZW0gKlwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25JbnB1dD17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVwYXJ0bWVudC1sYWJlbFwiPllvdXIgRGVwYXJ0bWVudDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE2MHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlcGFydG1lbnRzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcGFydG1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBhcnRtZW50cy5tYXAoKGRlcHQsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtkZXB0fT57ZGVwdH08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInByaW9yaXR5LWxhYmVsXCI+UHJpb3JpdHk8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJwcmlvcml0aWVzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaW9yaXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmlvcml0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpb3JpdGllcy5tYXAoKHByaW9yaXR5LCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17cHJpb3JpdHl9Pntwcmlvcml0eX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAnc3RlZWxibHVlJywgbWFyZ2luOiAnMTBweCAwcHgnfX0+U3VibWl0PC9CdXR0b24+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnaXZvcnknLCBiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUnIH19PkJhY2s8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3SW5jaWRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-incident.js\n");

/***/ })

});