(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,_,t){"use strict";t.d(_,"a",(function(){return l}));var a=t(2),r=t(3),c=t(6),s=t(5),i=t(1),n=t(0),l=function(e){Object(c.a)(t,e);var _=Object(s.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"CalculatorDisplay",className:"item",children:[Object(n.jsx)("div",{id:"formula",children:this.props.total}),Object(n.jsx)("div",{id:"display",children:this.props.current})]})}}]),t}(i.Component)},15:function(e,_,t){},17:function(e,_,t){"use strict";t.r(_);var a=t(1),r=t.n(a),c=t(8),s=t.n(c),i=(t(15),t(9)),n=t(0);function l(){return Object(n.jsxs)("footer",{children:[Object(n.jsx)("p",{children:"Designed and developed by"}),Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:"https://nadiemedicejose.web.app",children:"Jose Estrada"})," \xa9 2021"]})]})}function o(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(i.a,{}),Object(n.jsx)(l,{})]})}s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(o,{})}),document.getElementById("root"))},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_calculator_CalculatorDisplay__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),Calculator=function(_Component){Object(D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_Component);var _super=Object(D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var _;return Object(D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(_=_super.call(this,e)).state={current:"0",total:""},_.handleButton=_.handleButton.bind(Object(D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(D_GitHub_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"handleClear",value:function(){this.setState({current:"0",total:""})}},{key:"handleComputation",value:function handleComputation(){var _this$state=this.state,current=_this$state.current,total=_this$state.total;/[+\-*/]/.test(current[current.length-1])||this.setState({current:Math.round(1e4*eval("".concat(total).concat(current)))/1e4,total:""})}},{key:"handleOperator",value:function handleOperator(operator){var _this$state2=this.state,current=_this$state2.current,total=_this$state2.total;/[+\-*/]/.test(current)?/[+\-*/]/.test(current[current.length-1])?"-"!==operator?this.setState({current:operator}):/-/.test(current)||this.setState({current:"".concat(current).concat(operator)}):this.setState({current:operator,total:Math.round(1e4*eval("".concat(total).concat(current)))/1e4}):this.setState({current:operator,total:current})}},{key:"handleDigit",value:function(e){var _=this.state.current;this.setState({current:"0"!==_?"".concat(_).concat(e):e})}},{key:"handleDecimal",value:function(){var e=this.state.current;/\./.test(e)||this.setState({current:"".concat(e,".")})}},{key:"handleButton",value:function(e){var _=e.target.textContent;switch(_){case"AC":this.handleClear();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.handleDigit(_);break;case"+":case"-":case"*":case"/":this.handleOperator(_);break;case"=":this.handleComputation();break;case".":this.handleDecimal();break;default:console.error("Technically, this should never happen.")}}},{key:"render",value:function(){var e=this.state,_=e.current,t=e.total,a=this.handleButton;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_calculator_CalculatorDisplay__WEBPACK_IMPORTED_MODULE_6__.a,{current:_,total:t}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"equals",className:"item",onClick:a,children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"seven",className:"item",onClick:a,children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"eight",className:"item",onClick:a,children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"nine",className:"item",onClick:a,children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"four",className:"item",onClick:a,children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"five",className:"item",onClick:a,children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"six",className:"item",onClick:a,children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"one",className:"item",onClick:a,children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"two",className:"item",onClick:a,children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"three",className:"item",onClick:a,children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"zero",className:"item",onClick:a,children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"add",className:"item operator",onClick:a,children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"subtract",className:"item operator",onClick:a,children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"multiply",className:"item operator",onClick:a,children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"divide",className:"item operator",onClick:a,children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"decimal",className:"item",onClick:a,children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{id:"clear",className:"item",onClick:a,children:"AC"})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component)}},[[17,1,2]]]);
//# sourceMappingURL=main.05290683.chunk.js.map