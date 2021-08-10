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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graphql/mutations */ \"./graphql/mutations.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_menubar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/menubar */ \"./components/menubar.js\");\n/* harmony import */ var _providers_user_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/user.provider */ \"./providers/user.provider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/janicehung/github/support-incident-tracker/client/pages/new-incident.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar newIncident = function newIncident() {\n  _s();\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_providers_user_provider__WEBPACK_IMPORTED_MODULE_6__.UserContext),\n      currentUser = _useContext.currentUser,\n      setCurrentUser = _useContext.setCurrentUser;\n\n  var departments = [\"HR\", \"Admin\", \"Finance\"];\n  var priorities = ['LOW', 'MEDIUM', 'HIGH'];\n  var status = 'OPEN';\n  var creation_date = '2021-08-08';\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      description = _useState[0],\n      setDescription = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      department = _useState2[0],\n      setDepartment = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),\n      priority = _useState3[0],\n      setPriority = _useState3[1];\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_graphql_mutations__WEBPACK_IMPORTED_MODULE_3__.ADD_INCIDENT),\n      _useMutation2 = (0,_Users_janicehung_github_support_incident_tracker_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),\n      addIncident = _useMutation2[0],\n      addedIncident = _useMutation2[1];\n\n  var incidentId = function incidentId() {\n    var randomInteger = Math.floor(Math.random() * (999999999 - 10) + 10);\n    return randomInteger;\n  };\n\n  var onSubmit = function onSubmit() {\n    addIncident({\n      variables: {\n        incidentId: incidentId(),\n        description: description,\n        department: department,\n        priority: priority,\n        initiator: initiator,\n        status: status,\n        creation_date: creation_date\n      }\n    });\n    alert('Your incident has been created. Redirecting to incidents page.');\n    window.location.replace('/incidents');\n  };\n\n  var submit = function submit(e) {\n    e.preventDefault();\n    onSubmit({\n      incidentId: incidentId,\n      description: description,\n      department: department,\n      priority: priority,\n      initiator: initiator,\n      status: status,\n      creation_date: creation_date\n    });\n  };\n\n  if (addedIncident.loading) {\n    return \"loading\";\n  }\n\n  if (addedIncident.error) {\n    return \"error\";\n  }\n\n  if (currentUser) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        display: \"flex\",\n        height: \"100vh\",\n        justifyContent: \"center\",\n        background: \"lightGray\",\n        alignItems: \"center\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_menubar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"form-container\",\n        style: {\n          textAlign: \"center\",\n          background: 'white',\n          padding: '15px 20px',\n          borderRadius: '10px',\n          borderWidth: '2px',\n          borderStyle: 'groove'\n        },\n        onSubmit: submit,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: \"Create Incident Report\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n            required: true,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.TextareaAutosize, {\n              minRows: 5,\n              style: {\n                minWidth: '20vw'\n              },\n              placeholder: \"* Describe Your Problem *\",\n              value: description,\n              onInput: function onInput(e) {\n                return setDescription(e.target.value);\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n            required: true,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n              id: \"department-label\",\n              children: \"Your Department\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n              style: {\n                width: '160px'\n              },\n              labelId: \"departments-label\",\n              id: \"departments\",\n              value: department,\n              onChange: function onChange(e) {\n                return setDepartment(e.target.value);\n              },\n              children: departments.map(function (dept, index) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                  value: dept,\n                  children: dept\n                }, index, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 33\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.FormControl, {\n            required: true,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.InputLabel, {\n              id: \"priority-label\",\n              children: \"Priority\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Select, {\n              style: {\n                width: '160px'\n              },\n              labelId: \"priorities-label\",\n              id: \"priorities\",\n              value: priority,\n              onChange: function onChange(e) {\n                return setPriority(e.target.value);\n              },\n              children: priorities.map(function (priority, index) {\n                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.MenuItem, {\n                  value: priority,\n                  children: priority\n                }, index, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 92,\n                  columnNumber: 33\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n          type: \"submit\",\n          style: {\n            color: 'ivory',\n            backgroundColor: 'steelblue',\n            margin: '10px 0px'\n          },\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 130\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n          href: \"/\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.Button, {\n            style: {\n              color: 'ivory',\n              backgroundColor: 'purple'\n            },\n            children: \"Back\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 32\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this);\n  } else {\n    window.location.replace('login');\n  }\n};\n\n_s(newIncident, \"v3UymY4Cjf+EhQuACN5lT5DYO4M=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newIncident);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LWluY2lkZW50LmpzPzJjMzgiXSwibmFtZXMiOlsibmV3SW5jaWRlbnQiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZGVwYXJ0bWVudHMiLCJwcmlvcml0aWVzIiwic3RhdHVzIiwiY3JlYXRpb25fZGF0ZSIsInVzZVN0YXRlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImRlcGFydG1lbnQiLCJzZXREZXBhcnRtZW50IiwicHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsInVzZU11dGF0aW9uIiwiQUREX0lOQ0lERU5UIiwiYWRkSW5jaWRlbnQiLCJhZGRlZEluY2lkZW50IiwiaW5jaWRlbnRJZCIsInJhbmRvbUludGVnZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJvblN1Ym1pdCIsInZhcmlhYmxlcyIsImluaXRpYXRvciIsImFsZXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibG9hZGluZyIsImVycm9yIiwiZGlzcGxheSIsImhlaWdodCIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZCIsImFsaWduSXRlbXMiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsIm1pbldpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsIm1hcCIsImRlcHQiLCJpbmRleCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsb0JBQ2tCQyxpREFBVSxDQUFDQyxpRUFBRCxDQUQ1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O0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkNKLGVBdUNxSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZDckgsZUF3Q0ksOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlLDhEQUFDLHFEQUFEO0FBQVEsaUJBQUssRUFBRTtBQUFFRixtQkFBSyxFQUFFLE9BQVQ7QUFBa0JDLDZCQUFlLEVBQUU7QUFBbkMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBZ0RDLEdBakRELE1BaURPO0FBQ0gxQixVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLE9BQXhCO0FBQ0g7QUFDSixDQWhHRDs7R0FBTS9CLFc7VUFTbUNnQix1RDs7O0FBeUZ6QywrREFBZWhCLFdBQWYiLCJmaWxlIjoiLi9wYWdlcy9uZXctaW5jaWRlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBBRERfSU5DSURFTlQgfSBmcm9tICcuLi9ncmFwaHFsL211dGF0aW9ucyc7XG5pbXBvcnQgeyBJbnB1dExhYmVsLCBUZXh0YXJlYUF1dG9zaXplLCBGb3JtQ29udHJvbCwgU2VsZWN0LCBNZW51SXRlbSwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTWVudWJhciBmcm9tICcuLi9jb21wb25lbnRzL21lbnViYXInO1xuXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL3Byb3ZpZGVycy91c2VyLnByb3ZpZGVyJztcblxuY29uc3QgbmV3SW5jaWRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIGNvbnN0IGRlcGFydG1lbnRzID0gW1wiSFJcIiwgXCJBZG1pblwiLCBcIkZpbmFuY2VcIl07XG4gICAgY29uc3QgcHJpb3JpdGllcyA9IFsnTE9XJywgJ01FRElVTScsICdISUdIJ107XG4gICAgY29uc3Qgc3RhdHVzID0gJ09QRU4nO1xuICAgIGNvbnN0IGNyZWF0aW9uX2RhdGUgPSAnMjAyMS0wOC0wOCc7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2RlcGFydG1lbnQsIHNldERlcGFydG1lbnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwcmlvcml0eSwgc2V0UHJpb3JpdHldID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFthZGRJbmNpZGVudCwgYWRkZWRJbmNpZGVudF0gPSB1c2VNdXRhdGlvbihBRERfSU5DSURFTlQpO1xuICAgIGNvbnN0IGluY2lkZW50SWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUludGVnZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOTk5OTk5OTk5IC0gMTApICsgMTApXG4gICAgICAgIHJldHVybiByYW5kb21JbnRlZ2VyXG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICBhZGRJbmNpZGVudCh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHsgXG4gICAgICAgICAgICAgICAgaW5jaWRlbnRJZDogaW5jaWRlbnRJZCgpLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBkZXBhcnRtZW50OiBkZXBhcnRtZW50LFxuICAgICAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgICAgICAgICBpbml0aWF0b3I6IGluaXRpYXRvcixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICBjcmVhdGlvbl9kYXRlOiBjcmVhdGlvbl9kYXRlXG4gICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBhbGVydCgnWW91ciBpbmNpZGVudCBoYXMgYmVlbiBjcmVhdGVkLiBSZWRpcmVjdGluZyB0byBpbmNpZGVudHMgcGFnZS4nKVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2luY2lkZW50cycpO1xuICAgIH1cblxuICAgIGNvbnN0IHN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBvblN1Ym1pdCh7IGluY2lkZW50SWQsIGRlc2NyaXB0aW9uLCBkZXBhcnRtZW50LCBwcmlvcml0eSwgaW5pdGlhdG9yLCBzdGF0dXMsIGNyZWF0aW9uX2RhdGUgfSlcbiAgICB9XG5cbiAgICBpZihhZGRlZEluY2lkZW50LmxvYWRpbmcpe1xuICAgICAgICByZXR1cm4gXCJsb2FkaW5nXCJcbiAgICB9XG5cbiAgICBpZihhZGRlZEluY2lkZW50LmVycm9yKXtcbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIlxuICAgIH1cblxuICAgIGlmKGN1cnJlbnRVc2VyKXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBoZWlnaHQ6IFwiMTAwdmhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGJhY2tncm91bmQ6IFwibGlnaHRHcmF5XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCJ9fT5cbiAgICAgICAgICAgIDxNZW51YmFyIC8+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2Zvcm0tY29udGFpbmVyJyBzdHlsZT17e3RleHRBbGlnbjogXCJjZW50ZXJcIiwgYmFja2dyb3VuZDogJ3doaXRlJywgcGFkZGluZzogJzE1cHggMjBweCcsIGJvcmRlclJhZGl1czogJzEwcHgnLCBib3JkZXJXaWR0aDogJzJweCcsIGJvcmRlclN0eWxlOiAnZ3Jvb3ZlJ319IG9uU3VibWl0PXtzdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgSW5jaWRlbnQgUmVwb3J0PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBtaW5Sb3dzPXs1fSBzdHlsZT17eyBtaW5XaWR0aDogJzIwdncnIH19IHBsYWNlaG9sZGVyPVwiKiBEZXNjcmliZSBZb3VyIFByb2JsZW0gKlwiIHZhbHVlPXtkZXNjcmlwdGlvbn0gb25JbnB1dD17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVwYXJ0bWVudC1sYWJlbFwiPllvdXIgRGVwYXJ0bWVudDwvSW5wdXRMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzE2MHB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlcGFydG1lbnRzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlcGFydG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0bWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcGFydG1lbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkZXBhcnRtZW50cy5tYXAoKGRlcHQsIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9IHZhbHVlPXtkZXB0fT57ZGVwdH08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInByaW9yaXR5LWxhYmVsXCI+UHJpb3JpdHk8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxNjBweCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJwcmlvcml0aWVzLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaW9yaXRpZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmlvcml0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaW9yaXR5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJpb3JpdGllcy5tYXAoKHByaW9yaXR5LCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSB2YWx1ZT17cHJpb3JpdHl9Pntwcmlvcml0eX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17eyBjb2xvcjogJ2l2b3J5JywgYmFja2dyb3VuZENvbG9yOiAnc3RlZWxibHVlJywgbWFyZ2luOiAnMTBweCAwcHgnfX0+U3VibWl0PC9CdXR0b24+PGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnaXZvcnknLCBiYWNrZ3JvdW5kQ29sb3I6ICdwdXJwbGUnIH19PkJhY2s8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKCdsb2dpbicpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXdJbmNpZGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-incident.js\n");

/***/ })

});