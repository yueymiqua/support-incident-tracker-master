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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/mutations */ \"./graphql/mutations.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_menubar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/menubar */ \"./components/menubar.js\");\n/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Snackbar */ \"./node_modules/@material-ui/core/esm/Snackbar/index.js\");\n/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/Alert */ \"./node_modules/@material-ui/lab/esm/Alert/index.js\");\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/pages/new-incident.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar newIncident = function newIncident() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_7__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var departments = [\"HR\", \"Admin\", \"Finance\"];\n  var priorities = ['LOW', 'MEDIUM', 'HIGH'];\n  var status = 'OPEN';\n  var creation_date = '2021-08-08';\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      description = _useState2[0],\n      setDescription = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      department = _useState3[0],\n      setDepartment = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      priority = _useState4[0],\n      setPriority = _useState4[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_4__.ADD_INCIDENT),\n      _useMutation2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useMutation, 2),\n      addIncident = _useMutation2[0],\n      addedIncident = _useMutation2[1];\n\n  var incidentId = function incidentId() {\n    var randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10);\n    return randomInteger;\n  };\n\n  var onSubmit = function onSubmit() {\n    addIncident({\n      variables: {\n        incidentId: incidentId(),\n        description: description,\n        department: department,\n        priority: priority,\n        initiator: currentUser,\n        status: status,\n        creation_date: creation_date\n      }\n    });\n    setOpen(true);\n    window.location.replace('/incidents');\n  };\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    onSubmit({\n      incidentId: incidentId,\n      description: description,\n      department: department,\n      priority: priority,\n      currentUser: currentUser,\n      status: status,\n      creation_date: creation_date\n    });\n  };\n\n  var Alert = function Alert(props) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_9__.default, _objectSpread({\n      elevation: 6,\n      variant: \"filled\"\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 16\n    }, _this);\n  };\n\n  var handleClose = function handleClose(event) {\n    setOpen(false);\n  };\n\n  var goToLogin = function goToLogin() {\n    window.location.replace('/incidents');\n  };\n\n  if (addedIncident.loading) {\n    return \"loading\";\n  }\n\n  if (addedIncident.error) {\n    return \"error\";\n  }\n\n  if (!currentUser) {\n    goToLogin();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      height: \"100vh\",\n      justifyContent: \"center\",\n      background: \"lightGray\",\n      alignItems: \"center\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_menubar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n      className: \"form-container\",\n      style: {\n        textAlign: \"center\",\n        background: 'white',\n        padding: '15px 20px',\n        borderRadius: '10px',\n        borderWidth: '2px',\n        borderStyle: 'groove'\n      },\n      onSubmit: submit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n        children: \"Create Incident Report\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.TextareaAutosize, {\n            minRows: 5,\n            style: {\n              minWidth: '20vw'\n            },\n            placeholder: \"* Describe Your Problem *\",\n            value: description,\n            onInput: function onInput(e) {\n              return setDescription(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {\n            id: \"department-label\",\n            children: \"Your Department\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"departments-label\",\n            id: \"departments\",\n            value: department,\n            onChange: function onChange(e) {\n              return setDepartment(e.target.value);\n            },\n            children: departments.map(function (dept, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.MenuItem, {\n                value: dept,\n                children: dept\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 94,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.FormControl, {\n          required: true,\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.InputLabel, {\n            id: \"priority-label\",\n            children: \"Priority\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Select, {\n            style: {\n              width: '160px'\n            },\n            labelId: \"priorities-label\",\n            id: \"priorities\",\n            value: priority,\n            onChange: function onChange(e) {\n              return setPriority(e.target.value);\n            },\n            children: priorities.map(function (priority, index) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.MenuItem, {\n                value: priority,\n                children: priority\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 33\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n        type: \"submit\",\n        style: {\n          color: 'ivory',\n          backgroundColor: 'steelblue',\n          margin: '10px 0px'\n        },\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 130\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Button, {\n          style: {\n            color: 'ivory',\n            backgroundColor: 'purple'\n          },\n          children: \"Back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 32\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_11__.default, {\n      open: open,\n      autoHideDuration: 6000,\n      onClose: handleClose,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Alert, {\n        onClose: handleClose,\n        severity: \"success\",\n        children: \"Incident successfully created!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(newIncident, \"yYhvBLa9l0LOOUaGP2tnjs/avko=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newIncident);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LWluY2lkZW50LmpzPzJjMzgiXSwibmFtZXMiOlsibmV3SW5jaWRlbnQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImRlcGFydG1lbnRzIiwicHJpb3JpdGllcyIsInN0YXR1cyIsImNyZWF0aW9uX2RhdGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZGVwYXJ0bWVudCIsInNldERlcGFydG1lbnQiLCJwcmlvcml0eSIsInNldFByaW9yaXR5IiwidXNlTXV0YXRpb24iLCJBRERfSU5DSURFTlQiLCJhZGRJbmNpZGVudCIsImFkZGVkSW5jaWRlbnQiLCJpbmNpZGVudElkIiwicmFuZG9tSW50ZWdlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm9uU3VibWl0IiwidmFyaWFibGVzIiwiaW5pdGlhdG9yIiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiQWxlcnQiLCJwcm9wcyIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJnb1RvTG9naW4iLCJsb2FkaW5nIiwiZXJyb3IiLCJkaXNwbGF5IiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYWxpZ25JdGVtcyIsInRleHRBbGlnbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwibWluV2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwibWFwIiwiZGVwdCIsImluZGV4IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxvQkFDa0JDLGlEQUFVLENBQUNDLGlFQUFELENBRDVCO0FBQUEsTUFDZEMsV0FEYyxlQUNkQSxXQURjO0FBQUEsTUFDREMsY0FEQyxlQUNEQSxjQURDOztBQUFBLGtCQUVFQywrQ0FBUSxDQUFDLEtBQUQsQ0FGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUd0QixNQUFNQyxXQUFXLEdBQUcsQ0FBQyxJQUFELEVBQU8sT0FBUCxFQUFnQixTQUFoQixDQUFwQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxDQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLE1BQWxCLENBQW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLE1BQWY7QUFDQSxNQUFNQyxhQUFhLEdBQUcsWUFBdEI7O0FBTnNCLG1CQU9nQk4sK0NBQVEsQ0FBQyxFQUFELENBUHhCO0FBQUEsTUFPZk8sV0FQZTtBQUFBLE1BT0ZDLGNBUEU7O0FBQUEsbUJBUWNSLCtDQUFRLENBQUMsRUFBRCxDQVJ0QjtBQUFBLE1BUWZTLFVBUmU7QUFBQSxNQVFIQyxhQVJHOztBQUFBLG1CQVNVViwrQ0FBUSxDQUFDLEVBQUQsQ0FUbEI7QUFBQSxNQVNmVyxRQVRlO0FBQUEsTUFTTEMsV0FUSzs7QUFBQSxxQkFVZUMsMkRBQVcsQ0FBQ0MsNERBQUQsQ0FWMUI7QUFBQTtBQUFBLE1BVWZDLFdBVmU7QUFBQSxNQVVGQyxhQVZFOztBQVd0QixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFFBQU1DLGFBQWEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxNQUFpQixZQUFZLEVBQTdCLElBQW1DLEVBQTlDLENBQXRCO0FBQ0EsV0FBT0gsYUFBUDtBQUNILEdBSEQ7O0FBS0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQlAsZUFBVyxDQUFDO0FBQ1JRLGVBQVMsRUFBRTtBQUNQTixrQkFBVSxFQUFFQSxVQUFVLEVBRGY7QUFFUFYsbUJBQVcsRUFBRUEsV0FGTjtBQUdQRSxrQkFBVSxFQUFFQSxVQUhMO0FBSVBFLGdCQUFRLEVBQUVBLFFBSkg7QUFLUGEsaUJBQVMsRUFBRTFCLFdBTEo7QUFNUE8sY0FBTSxFQUFFQSxNQU5EO0FBT1BDLHFCQUFhLEVBQUVBO0FBUFI7QUFESCxLQUFELENBQVg7QUFXQUosV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBdUIsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixZQUF4QjtBQUNILEdBZEQ7O0FBZ0JBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLENBQUQsRUFBTztBQUNsQkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FSLFlBQVEsQ0FBQztBQUFFTCxnQkFBVSxFQUFWQSxVQUFGO0FBQWNWLGlCQUFXLEVBQVhBLFdBQWQ7QUFBMkJFLGdCQUFVLEVBQVZBLFVBQTNCO0FBQXVDRSxjQUFRLEVBQVJBLFFBQXZDO0FBQWlEYixpQkFBVyxFQUFYQSxXQUFqRDtBQUE4RE8sWUFBTSxFQUFOQSxNQUE5RDtBQUFzRUMsbUJBQWEsRUFBYkE7QUFBdEUsS0FBRCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxNQUFNeUIsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3JCLHdCQUFPLDhEQUFDLDJEQUFEO0FBQVUsZUFBUyxFQUFFLENBQXJCO0FBQXdCLGFBQU8sRUFBQztBQUFoQyxPQUE2Q0EsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFDM0JoQyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0gsR0FGRDs7QUFJQSxNQUFNaUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQlYsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixZQUF4QjtBQUNILEdBRkQ7O0FBSUEsTUFBR1gsYUFBYSxDQUFDb0IsT0FBakIsRUFBeUI7QUFDckIsV0FBTyxTQUFQO0FBQ0g7O0FBRUQsTUFBR3BCLGFBQWEsQ0FBQ3FCLEtBQWpCLEVBQXVCO0FBQ25CLFdBQU8sT0FBUDtBQUNIOztBQUVELE1BQUcsQ0FBQ3ZDLFdBQUosRUFBaUI7QUFDYnFDLGFBQVM7QUFDWjs7QUFFRCxzQkFDSTtBQUFLLFNBQUssRUFBRTtBQUFFRyxhQUFPLEVBQUUsTUFBWDtBQUFtQkMsWUFBTSxFQUFFLE9BQTNCO0FBQW9DQyxvQkFBYyxFQUFFLFFBQXBEO0FBQThEQyxnQkFBVSxFQUFFLFdBQTFFO0FBQXVGQyxnQkFBVSxFQUFFO0FBQW5HLEtBQVo7QUFBQSw0QkFDSSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFNLGVBQVMsRUFBQyxnQkFBaEI7QUFBaUMsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUUsUUFBWjtBQUFzQkYsa0JBQVUsRUFBRSxPQUFsQztBQUEyQ0csZUFBTyxFQUFFLFdBQXBEO0FBQWlFQyxvQkFBWSxFQUFFLE1BQS9FO0FBQXVGQyxtQkFBVyxFQUFFLEtBQXBHO0FBQTJHQyxtQkFBVyxFQUFFO0FBQXhILE9BQXhDO0FBQTJLLGNBQVEsRUFBRW5CLE1BQXJMO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBYSxrQkFBUSxNQUFyQjtBQUFBLGlDQUNJLDhEQUFDLGdFQUFEO0FBQWtCLG1CQUFPLEVBQUUsQ0FBM0I7QUFBOEIsaUJBQUssRUFBRTtBQUFFb0Isc0JBQVEsRUFBRTtBQUFaLGFBQXJDO0FBQTJELHVCQUFXLEVBQUMsMkJBQXZFO0FBQW1HLGlCQUFLLEVBQUV6QyxXQUExRztBQUF1SCxtQkFBTyxFQUFFLGlCQUFDc0IsQ0FBRDtBQUFBLHFCQUFPckIsY0FBYyxDQUFDcUIsQ0FBQyxDQUFDb0IsTUFBRixDQUFTQyxLQUFWLENBQXJCO0FBQUE7QUFBaEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFPSTtBQUFBLCtCQUNJLDhEQUFDLDJEQUFEO0FBQWEsa0JBQVEsTUFBckI7QUFBQSxrQ0FDSSw4REFBQywwREFBRDtBQUFZLGNBQUUsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLHNEQUFEO0FBQ0ksaUJBQUssRUFBRTtBQUFDQyxtQkFBSyxFQUFFO0FBQVIsYUFEWDtBQUVJLG1CQUFPLEVBQUMsbUJBRlo7QUFHSSxjQUFFLEVBQUMsYUFIUDtBQUlJLGlCQUFLLEVBQUUxQyxVQUpYO0FBS0ksb0JBQVEsRUFBRSxrQkFBQ29CLENBQUQ7QUFBQSxxQkFBT25CLGFBQWEsQ0FBQ21CLENBQUMsQ0FBQ29CLE1BQUYsQ0FBU0MsS0FBVixDQUFwQjtBQUFBLGFBTGQ7QUFBQSxzQkFPSy9DLFdBQVcsQ0FBQ2lELEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsa0NBQ2IsOERBQUMsd0RBQUQ7QUFBc0IscUJBQUssRUFBRUQsSUFBN0I7QUFBQSwwQkFBb0NBO0FBQXBDLGlCQUFlQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGE7QUFBQSxhQUFoQjtBQVBMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBdUJJO0FBQUEsK0JBQ0ksOERBQUMsMkRBQUQ7QUFBYSxrQkFBUSxNQUFyQjtBQUFBLGtDQUNJLDhEQUFDLDBEQUFEO0FBQVksY0FBRSxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsc0RBQUQ7QUFDSSxpQkFBSyxFQUFFO0FBQUNILG1CQUFLLEVBQUU7QUFBUixhQURYO0FBRUksbUJBQU8sRUFBQyxrQkFGWjtBQUdJLGNBQUUsRUFBQyxZQUhQO0FBSUksaUJBQUssRUFBRXhDLFFBSlg7QUFLSSxvQkFBUSxFQUFFLGtCQUFDa0IsQ0FBRDtBQUFBLHFCQUFPakIsV0FBVyxDQUFDaUIsQ0FBQyxDQUFDb0IsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUEsYUFMZDtBQUFBLHNCQU9LOUMsVUFBVSxDQUFDZ0QsR0FBWCxDQUFlLFVBQUN6QyxRQUFELEVBQVcyQyxLQUFYO0FBQUEsa0NBQ1osOERBQUMsd0RBQUQ7QUFBc0IscUJBQUssRUFBRTNDLFFBQTdCO0FBQUEsMEJBQXdDQTtBQUF4QyxpQkFBZTJDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEWTtBQUFBLGFBQWY7QUFQTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2QkosZUF1Q0ksOERBQUMsc0RBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFLLEVBQUU7QUFBRUMsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLHlCQUFlLEVBQUUsV0FBbkM7QUFBZ0RDLGdCQUFNLEVBQUU7QUFBeEQsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q0osZUF1Q3FIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF2Q3JILGVBd0NJLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZSw4REFBQyxzREFBRDtBQUFRLGVBQUssRUFBRTtBQUFFRixpQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDJCQUFlLEVBQUU7QUFBbkMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUE0Q0ksOERBQUMsZ0VBQUQ7QUFBVSxVQUFJLEVBQUV2RCxJQUFoQjtBQUFzQixzQkFBZ0IsRUFBRSxJQUF4QztBQUE4QyxhQUFPLEVBQUVnQyxXQUF2RDtBQUFBLDZCQUNJLDhEQUFDLEtBQUQ7QUFBTyxlQUFPLEVBQUVBLFdBQWhCO0FBQTZCLGdCQUFRLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBb0RILENBakhEOztHQUFNdEMsVztVQVVtQ2tCLHVEOzs7QUF5R3pDLCtEQUFlbEIsV0FBZiIsImZpbGUiOiIuL3BhZ2VzL25ldy1pbmNpZGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IEFERF9JTkNJREVOVCB9IGZyb20gJy4uL2dyYXBocWwvbXV0YXRpb25zJztcbmltcG9ydCB7IElucHV0TGFiZWwsIFRleHRhcmVhQXV0b3NpemUsIEZvcm1Db250cm9sLCBTZWxlY3QsIE1lbnVJdGVtLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBNZW51YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvbWVudWJhcic7XG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInO1xuaW1wb3J0IE11aUFsZXJ0IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQWxlcnQnO1xuXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL3Byb3ZpZGVycy91c2VyLnByb3ZpZGVyJztcblxuY29uc3QgbmV3SW5jaWRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBkZXBhcnRtZW50cyA9IFtcIkhSXCIsIFwiQWRtaW5cIiwgXCJGaW5hbmNlXCJdO1xuICAgIGNvbnN0IHByaW9yaXRpZXMgPSBbJ0xPVycsICdNRURJVU0nLCAnSElHSCddO1xuICAgIGNvbnN0IHN0YXR1cyA9ICdPUEVOJztcbiAgICBjb25zdCBjcmVhdGlvbl9kYXRlID0gJzIwMjEtMDgtMDgnO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXBhcnRtZW50LCBzZXREZXBhcnRtZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJpb3JpdHksIHNldFByaW9yaXR5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbYWRkSW5jaWRlbnQsIGFkZGVkSW5jaWRlbnRdID0gdXNlTXV0YXRpb24oQUREX0lOQ0lERU5UKTtcbiAgICBjb25zdCBpbmNpZGVudElkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21JbnRlZ2VyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDk5OTk5OTk5OSAtIDEwKSArIDEwKVxuICAgICAgICByZXR1cm4gcmFuZG9tSW50ZWdlclxuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgYWRkSW5jaWRlbnQoe1xuICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxuICAgICAgICAgICAgICAgIGluY2lkZW50SWQ6IGluY2lkZW50SWQoKSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZGVwYXJ0bWVudDogZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgaW5pdGlhdG9yOiBjdXJyZW50VXNlcixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBjcmVhdGlvbl9kYXRlOiBjcmVhdGlvbl9kYXRlXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBzZXRPcGVuKHRydWUpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCcvaW5jaWRlbnRzJyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIG9uU3VibWl0KHsgaW5jaWRlbnRJZCwgZGVzY3JpcHRpb24sIGRlcGFydG1lbnQsIHByaW9yaXR5LCBjdXJyZW50VXNlciwgc3RhdHVzLCBjcmVhdGlvbl9kYXRlIH0pXG4gICAgfVxuXG4gICAgY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuIDxNdWlBbGVydCBlbGV2YXRpb249ezZ9IHZhcmlhbnQ9XCJmaWxsZWRcIiB7Li4ucHJvcHN9IC8+O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ29Ub0xvZ2luID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2luY2lkZW50cycpO1xuICAgIH1cblxuICAgIGlmKGFkZGVkSW5jaWRlbnQubG9hZGluZyl7XG4gICAgICAgIHJldHVybiBcImxvYWRpbmdcIlxuICAgIH1cblxuICAgIGlmKGFkZGVkSW5jaWRlbnQuZXJyb3Ipe1xuICAgICAgICByZXR1cm4gXCJlcnJvclwiXG4gICAgfVxuXG4gICAgaWYoIWN1cnJlbnRVc2VyKSB7XG4gICAgICAgIGdvVG9Mb2dpbigpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgaGVpZ2h0OiBcIjEwMHZoXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBiYWNrZ3JvdW5kOiBcImxpZ2h0R3JheVwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwifX0+XG4gICAgICAgICAgICA8TWVudWJhciAvPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lcicgc3R5bGU9e3t0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6ICd3aGl0ZScsIHBhZGRpbmc6ICcxNXB4IDIwcHgnLCBib3JkZXJSYWRpdXM6ICcxMHB4JywgYm9yZGVyV2lkdGg6ICcycHgnLCBib3JkZXJTdHlsZTogJ2dyb292ZSd9fSBvblN1Ym1pdD17c3VibWl0fT5cbiAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEluY2lkZW50IFJlcG9ydDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemUgbWluUm93cz17NX0gc3R5bGU9e3sgbWluV2lkdGg6ICcyMHZ3JyB9fSBwbGFjZWhvbGRlcj1cIiogRGVzY3JpYmUgWW91ciBQcm9ibGVtICpcIiB2YWx1ZT17ZGVzY3JpcHRpb259IG9uSW5wdXQ9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlcGFydG1lbnQtbGFiZWxcIj5Zb3VyIERlcGFydG1lbnQ8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZXBhcnRtZW50cy1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlcGFydG1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXBhcnRtZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGVwYXJ0bWVudHMubWFwKChkZXB0LCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17ZGVwdH0+e2RlcHR9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJwcmlvcml0eS1sYWJlbFwiPlByaW9yaXR5PC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTYwcHgnfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwicHJpb3JpdGllcy1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmlvcml0aWVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpb3JpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmlvcml0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ByaW9yaXRpZXMubWFwKChwcmlvcml0eSwgaW5kZXgpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXtpbmRleH0gdmFsdWU9e3ByaW9yaXR5fT57cHJpb3JpdHl9PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3R5bGU9e3sgY29sb3I6ICdpdm9yeScsIGJhY2tncm91bmRDb2xvcjogJ3N0ZWVsYmx1ZScsIG1hcmdpbjogJzEwcHggMHB4J319PlN1Ym1pdDwvQnV0dG9uPjxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PEJ1dHRvbiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAncHVycGxlJyB9fT5CYWNrPC9CdXR0b24+PC9MaW5rPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPFNuYWNrYmFyIG9wZW49e29wZW59IGF1dG9IaWRlRHVyYXRpb249ezYwMDB9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICA8QWxlcnQgb25DbG9zZT17aGFuZGxlQ2xvc2V9IHNldmVyaXR5PVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICBJbmNpZGVudCBzdWNjZXNzZnVsbHkgY3JlYXRlZCFcbiAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgPC9TbmFja2Jhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdJbmNpZGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-incident.js\n");

/***/ })

});