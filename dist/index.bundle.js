"use strict";
(self["webpackChunkodin_todoList"] = self["webpackChunkodin_todoList"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  --dark-gray1: #424963;\n  --dark-gray2: #646c77;\n  --grass: #9ed36a;\n  --sunflower: #f5ba45;\n  --light-gray: #cbd0d8;\n  --lavender: #4b89da;\n  --lavender2: #967ada;\n  --bitter-sweet: #e8563f;\n}\n\nbody {\n  background-color: #31344a;\n  margin: 0;\n}\n\n\n\n\n/***************** Header Styles *****************/\nheader,\nmain {\n  transition: opacity .6s ease-in-out .1s;\n}\n\nheader > section {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  background-color: var(--dark-gray1);\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--lavender);\n}\n\n/* Custom hamburger menu styling */\nheader > section .menu {\n  margin: 0.8rem;\n  background-color: #313852;\n  padding: 0.4rem 0.4rem 0.2rem;\n  border-radius: 0.3rem;\n}\n\nheader > section .menu > div {\n  border-radius: 4px;\n  width: 1.8rem;\n  height: 0.3rem;\n  margin-bottom: 0.25rem;\n  background-color: var(--lavender);\n  box-shadow: 3px 3px 4px #323, inset -1px -1px 4px var(--lavender2);\n}\n\nheader > section h1 {\n  margin: 0.8rem 0.9rem;\n  font-family: sans-serif;\n  font-size: 2em;\n  color: var(--light-gray);\n}\n\n.design {\n  color: gold;\n  font-size: 1em;\n}\n\n.add-btn {\n  font-size: 3.7rem;\n  font-weight: 700;\n  width: 2.8rem;\n  height: 2.8rem;\n  padding: 2px;\n  border-radius: 1.9rem;\n  position: fixed;\n  right: 1.2rem;\n  bottom: 1.2rem;\n  background-color: var(--lavender);\n  color: var(--dark-gray1);\n  font-family: serif;\n}\n\n.exit-nav,\n.add-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n/***************** Header form inputs *****************/\nform {\n  visibility: hidden;\n  height: 0;\n  text-align: center;\n  margin-top: 0.6rem;\n  transition: height .6s ease-in-out .3s,\n              visibility .3s ease-in-out .1s;\n}\n\n#todo-form {\n\tmargin-bottom: 2em;\n}\n\nform li { list-style-type: none; }\n\nform *:is(input, textarea, select) {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--dark-gray1);\n  border: 1px solid var(--dark-gray2);\n  border-radius: 0.4rem;\n  color: var(--light-gray);\n  box-sizing: border-box;\n  font-size: 1em;\n  margin: 0.2rem;\n  padding: 0.7rem 1.2rem;\n  text-align: center;\n  width: 18.2rem;\n}\n\ninput[type=\"date\"] { padding-left: 6.4em; }\n\nheader form :is(input, textarea, select):is(:focus, :active) {\n  outline-color: var(--lavender);\n  border: none;\n}\n\nheader form :is(input, textarea)::placeholder { color: #3bc; }\n\nheader form input[type='submit'] {\n  border: none;\n  font-weight: 400;\n  color: snow;\n  background-color: var(--lavender);\n  padding: 0.5rem 0.8rem;\n  width: 7rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n\n\n\n/***************** Todo list items & container styling *****************/\nmain {\n  margin: 1rem 0.4rem 0;\n  padding: 0.2rem;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-columns: repeat(auto-fit, minmax(365px, 400px));\n  justify-content: center;\n}\n\n.task {\n  background-color: #42496a;\n  border-radius: 0.5rem;\n  padding: 0.3rem;\n  box-sizing: border-box;\n}\n\n.task > section:first-child,\n.task > .task-details > section:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task > section:first-child > div {\n  display: flex;\n}\n\n.task:hover,\n.task:active {\n  border: 2px solid var(--lavender2);\n}\n\n.task-status {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0.15rem solid var(--light-gray);\n  border-radius: 1rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  padding: 0;\n  margin-top: 0.3rem;\n}\n\n.task-status:checked,\n.task-status:visited {\n  background-color: #9ed36a;\n  border-color: #9ed36a;\n  outline: none;\n}\n\n.task-status:checked:before {\n  content: \"✓\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: 600;\n}\n\n.task-title {\n  font-size: 0.9em;\n  font-weight: 600;\n  font-family: sans-serif;\n  margin-left: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16.2rem;\n  min-width: 13rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  color: var(--light-gray);\n}\n\n.task-priority {\n  font-size: 0.8em;\n  font-family: sans-serif;\n}\n\n.task-due-date {\n  margin: 0 0.4rem 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.3rem;\n  background-color: #42496a;\n  border: 0;\n  border-bottom: 0.2rem solid #434;\n  color: var(--light-gray);\n}\n\n.edit-task {\n  margin-right: 0.6rem;\n  padding: 0.3rem 1.2rem;\n  background-color: var(--lavender);\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 500;\n}\n\n.remove-todo {\n  padding: 0 0.6rem;\n  color: var(--lavender);\n  font-size: 2.1em;\n}\n\n.task-note {\n  margin: 0.4rem 0rem 0rem;\n  padding: 0.4rem;\n  color: var(--light-gray);\n  font-family: sans-serif;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n}\n\n.task-note h3 {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.task-note p {\n  margin: 0.4rem;\n  font-style: italic;\n}\n\n.finished-task {\n  text-decoration: line-through;\n  color: #bbb;\n}\n\n\n\n/************** Side navigation menu ***************/\naside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: .5rem;\n  background-color: var(--dark-gray1);\n  color: var(--light-gray);\n  z-index: 1;\n  margin-right: 4rem;\n  visibility: hidden;\n  font-family: sans-serif;\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem;\n  height: 100%;\n  overflow-y: scroll;\n  transition: visibility .5s ease-in-out .1s,\n              width .5s ease-in-out .2s;\n}\n\n.exit-nav {\n  width: 1.9rem;\n  height: 1.9rem;\n  margin: 0.8rem 0.8rem;\n  font-weight: 500;\n  font-size: 1.9rem;\n  border: 3px solid var(--lavender);\n  color: var(--lavender);\n  background-color: transparent;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n}\n\naside > section:first-child {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin: 0.2rem 0 0.2rem 0.6rem;\n}\n\n.nav {\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  padding: 0.2rem 0 0 0.6rem;\n}\n\n.side-nav > div:nth-last-child(2) { padding-bottom: 0.8rem; }\n\n.projects-list > li#default { padding: 0.60rem 0.5rem; }\n\n.projects-list > li:nth-child(1n + 2) { padding: 0.15rem 0.5rem; }\n\n.projects-list > li {\n  list-style-type: none;\n  margin: 0.2rem 0.8rem;\n  /* padding: 0.15rem 1rem 0.6rem 1rem; */\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 1.1rem;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap:  nowrap;\n}\n\n.projects-list > li .delete-project {\n  margin: 0 0.3rem 0 0;\n  font-size: 1.8rem;\n  color: var(--lavender);\n  background: none;\n  border: none;\n}\n\n.projects-list > li div {\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.manage-tasks {\n  text-align: center;\n  padding: 1rem 0;\n  box-shadow: 0 3px 6px #434;\n  margin-bottom: 1rem;\n  border-top: 1px solid #434;\n}\n\n.manage-tasks > div {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.manage-tasks > div button {\n  padding: 0.7rem 0.6rem;\n  width: 8rem;\n}\n\n.manage-tasks button {\n  background-color: var(--lavender);\n  text-align: center;\n  border: none;\n  border-radius: 0.4rem;\n  margin: 0 0.4rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #fff;\n}\n\n.confirmation {\n  display: none;\n  margin: 0.8rem 0.9rem;\n  text-align: center;\n  border-radius: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16rem;\n}\n\n.confirmation button {\n  margin-top: 0.4rem;\n  padding: 0.4rem 0.4rem;\n  width: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-size: 16px;\n  --dark-gray1: #424963;\n  --dark-gray2: #646c77;\n  --grass: #9ed36a;\n  --sunflower: #f5ba45;\n  --light-gray: #cbd0d8;\n  --lavender: #4b89da;\n  --lavender2: #967ada;\n  --bitter-sweet: #e8563f;\n}\n\nbody {\n  background-color: #31344a;\n  margin: 0;\n}\n\n\n\n\n/***************** Header Styles *****************/\nheader,\nmain {\n  transition: opacity .6s ease-in-out .1s;\n}\n\nheader > section {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  background-color: var(--dark-gray1);\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--lavender);\n}\n\n/* Custom hamburger menu styling */\nheader > section .menu {\n  margin: 0.8rem;\n  background-color: #313852;\n  padding: 0.4rem 0.4rem 0.2rem;\n  border-radius: 0.3rem;\n}\n\nheader > section .menu > div {\n  border-radius: 4px;\n  width: 1.8rem;\n  height: 0.3rem;\n  margin-bottom: 0.25rem;\n  background-color: var(--lavender);\n  box-shadow: 3px 3px 4px #323, inset -1px -1px 4px var(--lavender2);\n}\n\nheader > section h1 {\n  margin: 0.8rem 0.9rem;\n  font-family: sans-serif;\n  font-size: 2em;\n  color: var(--light-gray);\n}\n\n.design {\n  color: gold;\n  font-size: 1em;\n}\n\n.add-btn {\n  font-size: 3.7rem;\n  font-weight: 700;\n  width: 2.8rem;\n  height: 2.8rem;\n  padding: 2px;\n  border-radius: 1.9rem;\n  position: fixed;\n  right: 1.2rem;\n  bottom: 1.2rem;\n  background-color: var(--lavender);\n  color: var(--dark-gray1);\n  font-family: serif;\n}\n\n.exit-nav,\n.add-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n/***************** Header form inputs *****************/\nform {\n  visibility: hidden;\n  height: 0;\n  text-align: center;\n  margin-top: 0.6rem;\n  transition: height .6s ease-in-out .3s,\n              visibility .3s ease-in-out .1s;\n}\n\n#todo-form {\n\tmargin-bottom: 2em;\n}\n\nform li { list-style-type: none; }\n\nform *:is(input, textarea, select) {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--dark-gray1);\n  border: 1px solid var(--dark-gray2);\n  border-radius: 0.4rem;\n  color: var(--light-gray);\n  box-sizing: border-box;\n  font-size: 1em;\n  margin: 0.2rem;\n  padding: 0.7rem 1.2rem;\n  text-align: center;\n  width: 18.2rem;\n}\n\ninput[type=\"date\"] { padding-left: 6.4em; }\n\nheader form :is(input, textarea, select):is(:focus, :active) {\n  outline-color: var(--lavender);\n  border: none;\n}\n\nheader form :is(input, textarea)::placeholder { color: #3bc; }\n\nheader form input[type='submit'] {\n  border: none;\n  font-weight: 400;\n  color: snow;\n  background-color: var(--lavender);\n  padding: 0.5rem 0.8rem;\n  width: 7rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n\n\n\n/***************** Todo list items & container styling *****************/\nmain {\n  margin: 1rem 0.4rem 0;\n  padding: 0.2rem;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-columns: repeat(auto-fit, minmax(365px, 400px));\n  justify-content: center;\n}\n\n.task {\n  background-color: #42496a;\n  border-radius: 0.5rem;\n  padding: 0.3rem;\n  box-sizing: border-box;\n}\n\n.task > section:first-child,\n.task > .task-details > section:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task > section:first-child > div {\n  display: flex;\n}\n\n.task:hover,\n.task:active {\n  border: 2px solid var(--lavender2);\n}\n\n.task-status {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0.15rem solid var(--light-gray);\n  border-radius: 1rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  padding: 0;\n  margin-top: 0.3rem;\n}\n\n.task-status:checked,\n.task-status:visited {\n  background-color: #9ed36a;\n  border-color: #9ed36a;\n  outline: none;\n}\n\n.task-status:checked:before {\n  content: \"✓\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: 600;\n}\n\n.task-title {\n  font-size: 0.9em;\n  font-weight: 600;\n  font-family: sans-serif;\n  margin-left: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16.2rem;\n  min-width: 13rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  color: var(--light-gray);\n}\n\n.task-priority {\n  font-size: 0.8em;\n  font-family: sans-serif;\n}\n\n.task-due-date {\n  margin: 0 0.4rem 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.3rem;\n  background-color: #42496a;\n  border: 0;\n  border-bottom: 0.2rem solid #434;\n  color: var(--light-gray);\n}\n\n.edit-task {\n  margin-right: 0.6rem;\n  padding: 0.3rem 1.2rem;\n  background-color: var(--lavender);\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 500;\n}\n\n.remove-todo {\n  padding: 0 0.6rem;\n  color: var(--lavender);\n  font-size: 2.1em;\n}\n\n.task-note {\n  margin: 0.4rem 0rem 0rem;\n  padding: 0.4rem;\n  color: var(--light-gray);\n  font-family: sans-serif;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n}\n\n.task-note h3 {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.task-note p {\n  margin: 0.4rem;\n  font-style: italic;\n}\n\n.finished-task {\n  text-decoration: line-through;\n  color: #bbb;\n}\n\n\n\n/************** Side navigation menu ***************/\naside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: .5rem;\n  background-color: var(--dark-gray1);\n  color: var(--light-gray);\n  z-index: 1;\n  margin-right: 4rem;\n  visibility: hidden;\n  font-family: sans-serif;\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem;\n  height: 100%;\n  overflow-y: scroll;\n  transition: visibility .5s ease-in-out .1s,\n              width .5s ease-in-out .2s;\n}\n\n.exit-nav {\n  width: 1.9rem;\n  height: 1.9rem;\n  margin: 0.8rem 0.8rem;\n  font-weight: 500;\n  font-size: 1.9rem;\n  border: 3px solid var(--lavender);\n  color: var(--lavender);\n  background-color: transparent;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n}\n\naside > section:first-child {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin: 0.2rem 0 0.2rem 0.6rem;\n}\n\n.nav {\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  padding: 0.2rem 0 0 0.6rem;\n}\n\n.side-nav > div:nth-last-child(2) { padding-bottom: 0.8rem; }\n\n.projects-list > li#default { padding: 0.60rem 0.5rem; }\n\n.projects-list > li:nth-child(1n + 2) { padding: 0.15rem 0.5rem; }\n\n.projects-list > li {\n  list-style-type: none;\n  margin: 0.2rem 0.8rem;\n  /* padding: 0.15rem 1rem 0.6rem 1rem; */\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 1.1rem;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap:  nowrap;\n}\n\n.projects-list > li .delete-project {\n  margin: 0 0.3rem 0 0;\n  font-size: 1.8rem;\n  color: var(--lavender);\n  background: none;\n  border: none;\n}\n\n.projects-list > li div {\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.manage-tasks {\n  text-align: center;\n  padding: 1rem 0;\n  box-shadow: 0 3px 6px #434;\n  margin-bottom: 1rem;\n  border-top: 1px solid #434;\n}\n\n.manage-tasks > div {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.manage-tasks > div button {\n  padding: 0.7rem 0.6rem;\n  width: 8rem;\n}\n\n.manage-tasks button {\n  background-color: var(--lavender);\n  text-align: center;\n  border: none;\n  border-radius: 0.4rem;\n  margin: 0 0.4rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #fff;\n}\n\n.confirmation {\n  display: none;\n  margin: 0.8rem 0.9rem;\n  text-align: center;\n  border-radius: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16rem;\n}\n\n.confirmation button {\n  margin-top: 0.4rem;\n  padding: 0.4rem 0.4rem;\n  width: 3rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style2.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style2.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "aside.show-menu {\n  visibility: visible;\n  width: clamp(1rem, 20rem, 25rem);\n}\n\n.show-todo-form {\n  visibility: visible;\n  height: 17rem;\n}\n\n.show-project-form {\n  visibility: visible;\n  height: 5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style2.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,YAAY;AACd","sourcesContent":["aside.show-menu {\n  visibility: visible;\n  width: clamp(1rem, 20rem, 25rem);\n}\n\n.show-todo-form {\n  visibility: visible;\n  height: 17rem;\n}\n\n.show-project-form {\n  visibility: visible;\n  height: 5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style2.css":
/*!*******************************!*\
  !*** ./src/styles/style2.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style2.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/projects */ "./src/scripts/projects.ts");
/* harmony import */ var _scripts_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ui */ "./src/scripts/ui.ts");
/* harmony import */ var _scripts_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/lib */ "./src/scripts/lib.ts");
/* harmony import */ var _scripts_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/storage */ "./src/scripts/storage.ts");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style2_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/style2.css */ "./src/styles/style2.css");

// Libraries and modules 




// Stylesheet


(function () {
    var todoInputForm = document.getElementById('todo-form');
    var projectInputForm = document.getElementById('project-form');
    // Toggle side menu display when menu button clicked 
    document.querySelector('.menu')
        .addEventListener('click', function () { return _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].showMenu(); });
    // Hide Side menu when exit button is clicked 
    document.querySelector('.exit-nav')
        .addEventListener('click', function () { return _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].hideMenu(); });
    // Change visibility of todo input form
    document.querySelector('.add-btn').addEventListener('click', function () {
        // UI.setDisplay(todoInputForm, 'block')
        // UI.setDisplay(projectInputForm, 'none')
        todoInputForm.classList.toggle('show-todo-form');
        projectInputForm.classList.remove('show-project-form');
        document.getElementById('save-changes').style.display = 'none';
        document.getElementById('create-todo').style.display = 'inline';
    });
    // Show project input form when 'new project' button is clicked 
    document.getElementById('new-project').addEventListener('click', function () {
        todoInputForm.classList.remove('show-todo-form');
        projectInputForm.classList.toggle('show-project-form');
        // UI.setDisplay(projectInputForm, 'block')
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].hideMenu();
    });
    // Create a new todo task from information given by user
    document.getElementById('create-todo').addEventListener('click', function (event) {
        event.preventDefault();
        if (_scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].createTodo()) {
            _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].clearFormInput();
            _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showTasks(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].get(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject));
        }
    });
    // Show form input to create new project
    document.getElementById('create-project').addEventListener('click', function (event) {
        todoInputForm.classList.remove('show-todo-form');
        projectInputForm.classList.toggle('show-project-form');
        event.preventDefault();
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].showMenu();
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].newProject();
    });
    // Whow confirmation menu when project deletion is triggered
    document.getElementById('delete-project').addEventListener('click', function () {
        var confirmation = document.querySelector('.confirmation');
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].setDisplay(confirmation, 'block');
    });
    // Close popup if user selects 'no' to deletion of current project
    document.querySelector('.confirmation #no').addEventListener('click', function () {
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].setDisplay(document.querySelector('.confirmation'), 'none');
    });
    // Delete project if user selects 'yes' to deletion of current projectdeleteProjec
    document.querySelector('.confirmation #yes').addEventListener('click', function () {
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].deleteCurrentProject();
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].setDisplay(document.querySelector('.confirmation'), 'none');
    });
    // Show default tasks when default project is clicked
    document.querySelector('.projects-list #default').addEventListener('click', function () {
        _scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject = 'default';
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showTasks(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].get());
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].hideMenu();
    });
    // Show tasks for today
    document.getElementById('today-tasks').addEventListener('click', function () {
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showTasks(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].getTodayTasks());
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].hideMenu();
    });
    // Show user a checklist
    document.getElementById('checklist').addEventListener('click', function () {
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showTasks(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].getChecklist());
        _scripts_ui__WEBPACK_IMPORTED_MODULE_1__["default"].hideMenu();
    });
    // Save changes to task
    document.getElementById('save-changes').addEventListener('click', function (e) {
        e.preventDefault();
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].editTask();
    });
    // Set form date input value to current date 
    var dateInput = document.querySelector('#todo-form #due-date');
    dateInput.value = new Date().toISOString().slice(0, 10);
    // Initialize todo memory
    _scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].initializeData();
    // Show all available projects
    _scripts_storage__WEBPACK_IMPORTED_MODULE_3__["default"].getKeys().forEach(function (project) {
        _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showProjects(project);
    });
    // Show the default projects
    _scripts_lib__WEBPACK_IMPORTED_MODULE_2__["default"].showTasks(_scripts_projects__WEBPACK_IMPORTED_MODULE_0__["default"].get());
})();


/***/ }),

/***/ "./src/scripts/lib.ts":
/*!****************************!*\
  !*** ./src/scripts/lib.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/scripts/ui.ts");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/scripts/projects.ts");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.ts");




var todoForm = document.querySelector('#todo-form');
var title = todoForm.querySelector('#title');
var dueDate = todoForm.querySelector('#due-date');
var priority = todoForm.querySelector('#priority');
var note = todoForm.querySelector('#note');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    // Holder for tasks to edit
    taskToEdit: _todo__WEBPACK_IMPORTED_MODULE_2__["default"],
    // Add todo actions to it's UI
    addTaskEvents: function (task, taskData) {
        var _this = this;
        var taskId = parseInt(task.getAttribute('data-todo-id'));
        // Show details of the task when title is clicked
        task.querySelector('.task-title').addEventListener('click', function () {
            var taskDetails = task.querySelector('.task-details');
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].setDisplay(taskDetails, 'block');
        });
        // Toggle status and show changes when status is clicked
        task.querySelector('.task-status').addEventListener('change', function () {
            task.querySelector('.task-title')
                .classList.toggle('finished-task');
            _projects__WEBPACK_IMPORTED_MODULE_1__["default"].toggleTodoStatus(taskData.project, taskId);
        });
        // Delete task
        task.querySelector('.remove-todo').addEventListener('click', function () {
            _projects__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject, taskId);
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.removeChild(task);
        });
        // Edit task
        task.querySelector('.edit-task').addEventListener('click', function () {
            _this.taskToEdit = taskData;
            var changeTodoBtn = document.getElementById('save-changes');
            todoForm.classList.toggle('show-todo-form');
            // UI.setDisplay(todoForm, 'block')
            changeTodoBtn.style.display = 'inline';
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].setDisplay(document.getElementById('create-todo'), 'none');
            // document.getElementById('project-form').style.display = 'none'
            document.getElementById('project-form').classList.remove('show-project-form');
            title.value = taskData.title;
            dueDate.value = taskData.dueDate;
            title.value = taskData.title;
            note.value = taskData.note;
            priority.value = "".concat(taskData.priority);
        });
        return task;
    },
    // Edit a task
    editTask: function () {
        todoForm.style.display = 'none';
        _ui__WEBPACK_IMPORTED_MODULE_0__["default"].setDisplay(document.getElementById('create-todo'), 'inline');
        _ui__WEBPACK_IMPORTED_MODULE_0__["default"].setDisplay(document.getElementById('save-changes'), 'none');
        var task = _todo__WEBPACK_IMPORTED_MODULE_2__["default"]["new"](title.value, dueDate.value, parseInt(priority.value), this.taskToEdit.isComplete, note.value, this.taskToEdit.id);
        task.project = this.taskToEdit.project;
        _projects__WEBPACK_IMPORTED_MODULE_1__["default"].updateTodo(task);
        this.clearFormInput();
        this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(task.project));
    },
    // Display a collection of todo to user
    showTasks: function (tasks) {
        var _this = this;
        _ui__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.textContent = '';
        tasks.forEach(function (task) {
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].taskList.appendChild(_this.addTaskEvents(_ui__WEBPACK_IMPORTED_MODULE_0__["default"].newTask(task), task));
        });
    },
    // Using user defined values, add new todo to projects
    createTodo: function () {
        if (title.value.length < 1)
            return false;
        _projects__WEBPACK_IMPORTED_MODULE_1__["default"].addTodo(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject, _todo__WEBPACK_IMPORTED_MODULE_2__["default"]["new"](title.value, dueDate.value, Number.parseInt(priority.value), false, note.value, _projects__WEBPACK_IMPORTED_MODULE_1__["default"].nextTaskId++));
        return true;
    },
    // Erase values entered into form by user
    clearFormInput: function () {
        var today = new Date().toISOString();
        title.value = '';
        dueDate.value = today.slice(0, 10);
        priority.value = 'Priority';
        note.value = '';
    },
    // Create new project
    newProject: function () {
        var projectNameElement = document.querySelector('#project-form #title');
        var projectName = projectNameElement.value;
        var projectExists = _projects__WEBPACK_IMPORTED_MODULE_1__["default"].hasProject(projectName);
        projectNameElement.value = '';
        if (projectName.length > 0 && !projectExists) {
            this.showProjects(projectName);
            _projects__WEBPACK_IMPORTED_MODULE_1__["default"].add(projectName);
            if (_projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject !== projectName)
                _projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject = projectName;
            this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(projectName));
        }
        else if (projectExists) {
            alert('Caution: Project already exists!!');
            this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(projectName));
        }
        else if (projectName.length < 3)
            alert('Error: Project name must be above two characters');
    },
    // Delete the current project
    deleteCurrentProject: function () {
        var project = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.getElementsByTagName('li');
        for (var i = 0; i < project.length; ++i) {
            var projectName = project[i].getAttribute('data-project-name');
            if (projectName === _projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject)
                _ui__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project[i]);
        }
        _projects__WEBPACK_IMPORTED_MODULE_1__["default"].del(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject);
        _projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject = 'default';
        this.showProjects('default');
        this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get());
    },
    showProjects: function (projectName) {
        var _this = this;
        if (projectName == 'default')
            return;
        var projectUI = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(projectName);
        projectUI.addEventListener('click', function (event) {
            event.stopPropagation();
            _this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get(projectName));
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].hideMenu();
        });
        projectUI.querySelector('.delete-project')
            .addEventListener('click', function (event) {
            event.stopPropagation();
            _projects__WEBPACK_IMPORTED_MODULE_1__["default"].del(projectName);
            _ui__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(projectUI);
            _projects__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject = 'default';
            _this.showTasks(_projects__WEBPACK_IMPORTED_MODULE_1__["default"].get());
        });
        _ui__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projectUI);
    }
});


/***/ }),

/***/ "./src/scripts/projects.ts":
/*!*********************************!*\
  !*** ./src/scripts/projects.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/scripts/todo.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/scripts/storage.ts");



var Project = /** @class */ (function () {
    function Project() {
    }
    // Get project 
    Project.get = function (projectName) {
        if (projectName === void 0) { projectName = 'default'; }
        if (projectName in this.data)
            return this.data[projectName].map(function (t) { return t; });
        return [];
    };
    // Add project
    Project.add = function (projectName) {
        if (!(projectName in this.data))
            this.data[projectName] = [];
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodoData(projectName, this.get(projectName));
    };
    // Delete project
    Project.del = function (projectName) {
        if (projectName !== 'default')
            delete this.data[projectName];
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].remove(projectName);
    };
    // Add todo item to a project
    Project.addTodo = function (projectName, task) {
        task.project = projectName;
        if (!(projectName in this.data))
            this.add(projectName);
        this.data[projectName].push(task);
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodoData(projectName, this.get(projectName));
    };
    // (Un)check todo task 
    Project.toggleTodoStatus = function (projectName, taskId) {
        this.data[projectName].forEach(function (task) {
            if (task.id === taskId)
                task.isComplete = !task.isComplete;
        });
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodoData(projectName, this.get(projectName));
    };
    // Change todo task information
    Project.updateTodo = function (newTask) {
        this.data[newTask.project] =
            this.data[newTask.project].map(function (task) {
                if (task.id === newTask.id)
                    return newTask;
                return task;
            });
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodoData(newTask.project, this.get(newTask.project));
    };
    // Delete todo item 
    Project.deleteTodo = function (projectName, taskId) {
        this.data[projectName] =
            this.data[projectName].map(function (task) {
                if (taskId != task.id)
                    return task;
            });
        _storage__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodoData(projectName, this.get(projectName));
    };
    // Check existence of a project
    Project.hasProject = function (projectName) {
        return projectName in this.data;
    };
    // Get tasks with today's date
    Project.getTodayTasks = function () {
        var _this = this;
        var todayTasks = [];
        var today = new Date().toISOString().slice(0, 10);
        Object.keys(this.data).forEach(function (project) {
            _this.data[project].forEach(function (task) {
                if (task.dueDate === today)
                    todayTasks.push(task);
            });
        });
        return todayTasks;
    };
    // Get a checklist of all todo tasks
    Project.getChecklist = function () {
        var _this = this;
        var checklist = [];
        Object.keys(this.data).forEach(function (project) {
            _this.data[project].forEach(function (task) {
                if (task.isComplete === false)
                    checklist.push(task);
            });
        });
        Object.keys(this.data).forEach(function (project) {
            _this.data[project].forEach(function (task) {
                if (task.isComplete === true)
                    checklist.push(task);
            });
        });
        return checklist;
    };
    Project.initializeData = function () {
        var _this = this;
        if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].checkStorage('localStorage'))
            if (_storage__WEBPACK_IMPORTED_MODULE_1__["default"].getSize() > 0) {
                _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getKeys().forEach(function (project) {
                    if (project === 'default')
                        _this.data['default'] = [];
                    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].getTodoData(project).forEach(function (task) {
                        _this.addTodo(project, task);
                    });
                });
            }
    };
    var _a;
    _a = Project;
    Project.currentProject = 'default';
    Project.nextTaskId = 1202301;
    Project.data = {
        'default': [
            _todo__WEBPACK_IMPORTED_MODULE_0__["default"]["new"]('Click/Tap todo title to see more...', '2023-04-19', 1, true, '-_- Ha! You\'re now in my b·_·by trap! :)', _a.nextTaskId++),
            _todo__WEBPACK_IMPORTED_MODULE_0__["default"]["new"]('Take a stroll', '2020-11-15', 2, false, 'Testing your limits doesn\'t break you. Does it?', _a.nextTaskId++),
            _todo__WEBPACK_IMPORTED_MODULE_0__["default"]["new"]('Buy Rick a new Quantum physics textbook from the mall', '2023-07-28', 2, true, 'Oh heavens! My UI sucks! -_- Don\'t even talk about the logic', _a.nextTaskId++),
        ],
    };
    return Project;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/scripts/storage.ts":
/*!********************************!*\
  !*** ./src/scripts/storage.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    storeTodoData: function (key, data) {
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(data));
    },
    getTodoData: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    getKeys: function () {
        var keys = [];
        for (var i = 0; i < localStorage.length; ++i)
            keys.push(localStorage.key(i));
        return keys;
    },
    getSize: function () { return localStorage.length; },
    remove: function (key) { localStorage.removeItem(key); },
    checkStorage: function (key) {
        var storage;
        try {
            storage = window[key];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch (e) {
            e instanceof DOMException &&
                (e.code === 22 ||
                    e.code === 1014 ||
                    e.name === 'QuotaExceededError' ||
                    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
        }
    },
});


/***/ }),

/***/ "./src/scripts/todo.ts":
/*!*****************************!*\
  !*** ./src/scripts/todo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

var todo = /** @class */ (function () {
    function todo(title, dueDate, priority, isComplete, note, id) {
        if (priority === void 0) { priority = 0; }
        if (isComplete === void 0) { isComplete = false; }
        if (note === void 0) { note = ''; }
        this.project = 'default';
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = isComplete;
        this.note = note;
        this.id = id;
    }
    todo.new = function (title, dueDate, priority, isComplete, note, id) {
        if (priority === void 0) { priority = 0; }
        if (isComplete === void 0) { isComplete = false; }
        if (note === void 0) { note = ''; }
        return new todo(title, dueDate, priority, isComplete, note, id);
    };
    return todo;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/scripts/ui.ts":
/*!***************************!*\
  !*** ./src/scripts/ui.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_style2_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style2.css */ "./src/styles/style2.css");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    taskList: document.querySelector('main'),
    projectList: document.querySelector('.projects-list'),
    newTask: function (todo) {
        // Todo Element
        var task = document.createElement('section');
        task.classList.add('task');
        task.setAttribute('data-todo-id', "".concat(todo.id));
        // Container for task information shown by default
        var section = document.createElement('section');
        // Container for todo details not shown by default
        var details = document.createElement('section');
        details.style.display = 'none';
        details.classList.add('task-details');
        // Task status checkbox
        var taskStatus = document.createElement('input');
        taskStatus.type = 'checkbox';
        taskStatus.checked = todo.isComplete;
        taskStatus.classList.add('task-status');
        // Task title
        var taskTitle = document.createElement('div');
        taskTitle.classList.add('task-title');
        taskTitle.innerText = todo.title;
        taskTitle.title = todo.title;
        if (todo.isComplete)
            taskTitle.classList.toggle('finished-task');
        // Task due date
        var taskDue = document.createElement('p');
        taskDue.innerText = todo.dueDate.replace('-', ' · ').replace('-', ' · ');
        taskDue.classList.add('task-due-date');
        // Task deletion button
        var deleteTask = document.createElement('div');
        deleteTask.innerText = '×';
        deleteTask.classList.add('remove-todo');
        // Task Edit button
        var editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        editBtn.classList.add('edit-task');
        editBtn.setAttribute('href', 'todo-form');
        // Task note
        var taskNote = document.createElement('section');
        taskNote.classList.add('task-note');
        var noteLabel = document.createElement('h3');
        noteLabel.innerText = 'Note';
        var note = document.createElement('p');
        note.textContent = todo.note;
        taskNote.appendChild(noteLabel);
        taskNote.appendChild(note);
        var div1 = document.createElement('div');
        div1.appendChild(taskStatus);
        div1.appendChild(taskTitle);
        section.appendChild(div1);
        section.appendChild(deleteTask);
        task.appendChild(section);
        var container = document.createElement('section');
        container.appendChild(taskDue);
        container.appendChild(editBtn);
        details.appendChild(container);
        details.appendChild(taskNote);
        task.appendChild(details);
        return task;
    },
    removeTask: function (task) {
        this.taskList.removeChild(task);
    },
    addTask: function (task) {
        this.taskList.appendChild(this.newTaskUI(task));
    },
    createProject: function (title) {
        var projectTitle = document.createElement('div');
        projectTitle.textContent = ' ' + title;
        var deleteProject = document.createElement('button');
        deleteProject.textContent = '×';
        deleteProject.classList.add('delete-project');
        var project = document.createElement('li');
        project.setAttribute('data-project', title);
        project.appendChild(deleteProject);
        project.appendChild(projectTitle);
        return project;
    },
    addProject: function (project) {
        this.projectList.appendChild(project);
    },
    removeProject: function (project) {
        this.projectList.removeChild(project);
    },
    setDisplay: function (element, display) {
        if (display === void 0) { display = ''; }
        if (element.style.display === '' || element.style.display === 'none')
            element.style.display = display;
        else
            element.style.display = 'none';
    },
    showMenu: function () {
        var aside = document.querySelector('aside');
        // this.setDisplay(aside, 'block')
        document.querySelector('main').style.opacity = '0.2';
        document.querySelector('main').setAttribute('readonly', 'true');
        document.querySelector('header').style.opacity = '0.2';
        document.querySelector('header').setAttribute('readonly', 'true');
        aside.classList.toggle('show-menu');
    },
    hideMenu: function () {
        var aside = document.querySelector('aside');
        // this.setDisplay(aside, 'none')
        document.querySelector('main').style.opacity = '1';
        document.querySelector('main').setAttribute('readonly', 'false');
        document.querySelector('header').style.opacity = '1';
        document.querySelector('header').setAttribute('readonly', 'false');
        aside.classList.toggle('show-menu');
    },
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsVUFBVSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyx1QkFBdUIsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLHlCQUF5QixNQUFNLFlBQVksV0FBVyxNQUFNLHVCQUF1QixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxVQUFVLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsUUFBUSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFB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LEVBQUUsT0FBTyxDQUFDO1FBQ2xFLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUyLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUyLmNzcz83MzY3Iiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3NjcmlwdHMvbGliLnRzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9zcmMvc2NyaXB0cy9wcm9qZWN0cy50cyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3NjcmlwdHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3NjcmlwdHMvdG9kby50cyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3NjcmlwdHMvdWkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtLWRhcmstZ3JheTE6ICM0MjQ5NjM7XFxuICAtLWRhcmstZ3JheTI6ICM2NDZjNzc7XFxuICAtLWdyYXNzOiAjOWVkMzZhO1xcbiAgLS1zdW5mbG93ZXI6ICNmNWJhNDU7XFxuICAtLWxpZ2h0LWdyYXk6ICNjYmQwZDg7XFxuICAtLWxhdmVuZGVyOiAjNGI4OWRhO1xcbiAgLS1sYXZlbmRlcjI6ICM5NjdhZGE7XFxuICAtLWJpdHRlci1zd2VldDogI2U4NTYzZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNDRhO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiogSGVhZGVyIFN0eWxlcyAqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIsXFxubWFpbiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlLWluLW91dCAuMXM7XFxufVxcblxcbmhlYWRlciA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sYXZlbmRlcik7XFxufVxcblxcbi8qIEN1c3RvbSBoYW1idXJnZXIgbWVudSBzdHlsaW5nICovXFxuaGVhZGVyID4gc2VjdGlvbiAubWVudSB7XFxuICBtYXJnaW46IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM4NTI7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuaGVhZGVyID4gc2VjdGlvbiAubWVudSA+IGRpdiB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMS44cmVtO1xcbiAgaGVpZ2h0OiAwLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggIzMyMywgaW5zZXQgLTFweCAtMXB4IDRweCB2YXIoLS1sYXZlbmRlcjIpO1xcbn1cXG5cXG5oZWFkZXIgPiBzZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMC44cmVtIDAuOXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZXNpZ24ge1xcbiAgY29sb3I6IGdvbGQ7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgZm9udC1zaXplOiAzLjdyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDIuOHJlbTtcXG4gIGhlaWdodDogMi44cmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMS45cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDEuMnJlbTtcXG4gIGJvdHRvbTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbn1cXG5cXG4uZXhpdC1uYXYsXFxuLmFkZC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqIEhlYWRlciBmb3JtIGlucHV0cyAqKioqKioqKioqKioqKioqKi9cXG5mb3JtIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNnMgZWFzZS1pbi1vdXQgLjNzLFxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQgLjFzO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbmZvcm0gbGkgeyBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IH1cXG5cXG5mb3JtICo6aXMoaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QpIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkxKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstZ3JheTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luOiAwLjJyZW07XFxuICBwYWRkaW5nOiAwLjdyZW0gMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDE4LjJyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7IHBhZGRpbmctbGVmdDogNi40ZW07IH1cXG5cXG5oZWFkZXIgZm9ybSA6aXMoaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QpOmlzKDpmb2N1cywgOmFjdGl2ZSkge1xcbiAgb3V0bGluZS1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgZm9ybSA6aXMoaW5wdXQsIHRleHRhcmVhKTo6cGxhY2Vob2xkZXIgeyBjb2xvcjogIzNiYzsgfVxcblxcbmhlYWRlciBmb3JtIGlucHV0W3R5cGU9J3N1Ym1pdCddIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogc25vdztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjhyZW07XFxuICB3aWR0aDogN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiogVG9kbyBsaXN0IGl0ZW1zICYgY29udGFpbmVyIHN0eWxpbmcgKioqKioqKioqKioqKioqKiovXFxubWFpbiB7XFxuICBtYXJnaW46IDFyZW0gMC40cmVtIDA7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDAuMnJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzY1cHgsIDQwMHB4KSk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDk2YTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi50YXNrID4gc2VjdGlvbjpmaXJzdC1jaGlsZCxcXG4udGFzayA+IC50YXNrLWRldGFpbHMgPiBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrID4gc2VjdGlvbjpmaXJzdC1jaGlsZCA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udGFzazpob3ZlcixcXG4udGFzazphY3RpdmUge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbGF2ZW5kZXIyKTtcXG59XFxuXFxuLnRhc2stc3RhdHVzIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IDAuMTVyZW0gc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcXG59XFxuXFxuLnRhc2stc3RhdHVzOmNoZWNrZWQsXFxuLnRhc2stc3RhdHVzOnZpc2l0ZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllZDM2YTtcXG4gIGJvcmRlci1jb2xvcjogIzllZDM2YTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50YXNrLXN0YXR1czpjaGVja2VkOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi50YXNrLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMC40cmVtO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgbWF4LXdpZHRoOiAxNi4ycmVtO1xcbiAgbWluLXdpZHRoOiAxM3JlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLnRhc2stcHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGFzay1kdWUtZGF0ZSB7XFxuICBtYXJnaW46IDAgMC40cmVtIDA7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuNHJlbSAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0OTZhO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4ycmVtIHNvbGlkICM0MzQ7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5lZGl0LXRhc2sge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XFxuICBwYWRkaW5nOiAwLjNyZW0gMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLnJlbW92ZS10b2RvIHtcXG4gIHBhZGRpbmc6IDAgMC42cmVtO1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGZvbnQtc2l6ZTogMi4xZW07XFxufVxcblxcbi50YXNrLW5vdGUge1xcbiAgbWFyZ2luOiAwLjRyZW0gMHJlbSAwcmVtO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNDRhO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbn1cXG5cXG4udGFzay1ub3RlIGgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbi50YXNrLW5vdGUgcCB7XFxuICBtYXJnaW46IDAuNHJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmZpbmlzaGVkLXRhc2sge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqIFNpZGUgbmF2aWdhdGlvbiBtZW51ICoqKioqKioqKioqKioqKi9cXG5hc2lkZSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkxKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjRyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuNXMgZWFzZS1pbi1vdXQgLjFzLFxcbiAgICAgICAgICAgICAgd2lkdGggLjVzIGVhc2UtaW4tb3V0IC4ycztcXG59XFxuXFxuLmV4aXQtbmF2IHtcXG4gIHdpZHRoOiAxLjlyZW07XFxuICBoZWlnaHQ6IDEuOXJlbTtcXG4gIG1hcmdpbjogMC44cmVtIDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxhdmVuZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYXNpZGUgPiBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIG1hcmdpbjogMC4ycmVtIDAgMC4ycmVtIDAuNnJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwIDAgMC42cmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXY6bnRoLWxhc3QtY2hpbGQoMikgeyBwYWRkaW5nLWJvdHRvbTogMC44cmVtOyB9XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaSNkZWZhdWx0IHsgcGFkZGluZzogMC42MHJlbSAwLjVyZW07IH1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpOm50aC1jaGlsZCgxbiArIDIpIHsgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07IH1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMC4ycmVtIDAuOHJlbTtcXG4gIC8qIHBhZGRpbmc6IDAuMTVyZW0gMXJlbSAwLjZyZW0gMXJlbTsgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzQ0YTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiAgbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpIC5kZWxldGUtcHJvamVjdCB7XFxuICBtYXJnaW46IDAgMC4zcmVtIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGkgZGl2IHtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5tYW5hZ2UtdGFza3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4ICM0MzQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQ7XFxufVxcblxcbi5tYW5hZ2UtdGFza3MgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tYW5hZ2UtdGFza3MgPiBkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAwLjZyZW07XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLm1hbmFnZS10YXNrcyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgbWFyZ2luOiAwIDAuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW46IDAuOHJlbSAwLjlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXgtd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsU0FBUztBQUNYOzs7OztBQUtBLGtEQUFrRDtBQUNsRDs7RUFFRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7O0FBRUEsa0NBQWtDO0FBQ2xDO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyxrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsY0FBYztFQUNkLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7OztBQUtBLHVEQUF1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Q2IscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIC0tZGFyay1ncmF5MTogIzQyNDk2MztcXG4gIC0tZGFyay1ncmF5MjogIzY0NmM3NztcXG4gIC0tZ3Jhc3M6ICM5ZWQzNmE7XFxuICAtLXN1bmZsb3dlcjogI2Y1YmE0NTtcXG4gIC0tbGlnaHQtZ3JheTogI2NiZDBkODtcXG4gIC0tbGF2ZW5kZXI6ICM0Yjg5ZGE7XFxuICAtLWxhdmVuZGVyMjogIzk2N2FkYTtcXG4gIC0tYml0dGVyLXN3ZWV0OiAjZTg1NjNmO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM0NGE7XFxuICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKiBIZWFkZXIgU3R5bGVzICoqKioqKioqKioqKioqKioqL1xcbmhlYWRlcixcXG5tYWluIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjZzIGVhc2UtaW4tb3V0IC4xcztcXG59XFxuXFxuaGVhZGVyID4gc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5MSk7XFxuICBtYXJnaW46IDAuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxhdmVuZGVyKTtcXG59XFxuXFxuLyogQ3VzdG9tIGhhbWJ1cmdlciBtZW51IHN0eWxpbmcgKi9cXG5oZWFkZXIgPiBzZWN0aW9uIC5tZW51IHtcXG4gIG1hcmdpbjogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzg1MjtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbn1cXG5cXG5oZWFkZXIgPiBzZWN0aW9uIC5tZW51ID4gZGl2IHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxLjhyZW07XFxuICBoZWlnaHQ6IDAuM3JlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAjMzIzLCBpbnNldCAtMXB4IC0xcHggNHB4IHZhcigtLWxhdmVuZGVyMik7XFxufVxcblxcbmhlYWRlciA+IHNlY3Rpb24gaDEge1xcbiAgbWFyZ2luOiAwLjhyZW0gMC45cmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLmRlc2lnbiB7XFxuICBjb2xvcjogZ29sZDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICBmb250LXNpemU6IDMuN3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB3aWR0aDogMi44cmVtO1xcbiAgaGVpZ2h0OiAyLjhyZW07XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxLjlyZW07XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMS4ycmVtO1xcbiAgYm90dG9tOiAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBjb2xvcjogdmFyKC0tZGFyay1ncmF5MSk7XFxuICBmb250LWZhbWlseTogc2VyaWY7XFxufVxcblxcbi5leGl0LW5hdixcXG4uYWRkLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiogSGVhZGVyIGZvcm0gaW5wdXRzICoqKioqKioqKioqKioqKioqL1xcbmZvcm0ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IC42cyBlYXNlLWluLW91dCAuM3MsXFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5IC4zcyBlYXNlLWluLW91dCAuMXM7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcblxcdG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuZm9ybSBsaSB7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmZvcm0gKjppcyhpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTguMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHsgcGFkZGluZy1sZWZ0OiA2LjRlbTsgfVxcblxcbmhlYWRlciBmb3JtIDppcyhpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCk6aXMoOmZvY3VzLCA6YWN0aXZlKSB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmhlYWRlciBmb3JtIDppcyhpbnB1dCwgdGV4dGFyZWEpOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjM2JjOyB9XFxuXFxuaGVhZGVyIGZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBzbm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKiBUb2RvIGxpc3QgaXRlbXMgJiBjb250YWluZXIgc3R5bGluZyAqKioqKioqKioqKioqKioqKi9cXG5tYWluIHtcXG4gIG1hcmdpbjogMXJlbSAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMC4ycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNjVweCwgNDAwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0OTZhO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhc2sgPiBzZWN0aW9uOmZpcnN0LWNoaWxkLFxcbi50YXNrID4gLnRhc2stZGV0YWlscyA+IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2sgPiBzZWN0aW9uOmZpcnN0LWNoaWxkID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrOmhvdmVyLFxcbi50YXNrOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1sYXZlbmRlcjIpO1xcbn1cXG5cXG4udGFzay1zdGF0dXMge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMS40cmVtO1xcbiAgaGVpZ2h0OiAxLjRyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4udGFzay1zdGF0dXM6Y2hlY2tlZCxcXG4udGFzay1zdGF0dXM6dmlzaXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkMzZhO1xcbiAgYm9yZGVyLWNvbG9yOiAjOWVkMzZhO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2stc3RhdHVzOmNoZWNrZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXgtd2lkdGg6IDE2LjJyZW07XFxuICBtaW4td2lkdGg6IDEzcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbjogMCAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQ5NmE7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgIzQzNDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLmVkaXQtdGFzayB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG8ge1xcbiAgcGFkZGluZzogMCAwLjZyZW07XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgZm9udC1zaXplOiAyLjFlbTtcXG59XFxuXFxuLnRhc2stbm90ZSB7XFxuICBtYXJnaW46IDAuNHJlbSAwcmVtIDByZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM0NGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50YXNrLW5vdGUgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnRhc2stbm90ZSBwIHtcXG4gIG1hcmdpbjogMC40cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZmluaXNoZWQtdGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKiogU2lkZSBuYXZpZ2F0aW9uIG1lbnUgKioqKioqKioqKioqKioqL1xcbmFzaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNHJlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjRyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IC41cyBlYXNlLWluLW91dCAuMXMsXFxuICAgICAgICAgICAgICB3aWR0aCAuNXMgZWFzZS1pbi1vdXQgLjJzO1xcbn1cXG5cXG4uZXhpdC1uYXYge1xcbiAgd2lkdGg6IDEuOXJlbTtcXG4gIGhlaWdodDogMS45cmVtO1xcbiAgbWFyZ2luOiAwLjhyZW0gMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbGF2ZW5kZXIpO1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5hc2lkZSA+IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgbWFyZ2luOiAwLjJyZW0gMCAwLjJyZW0gMC42cmVtO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgcGFkZGluZzogMC4ycmVtIDAgMCAwLjZyZW07XFxufVxcblxcbi5zaWRlLW5hdiA+IGRpdjpudGgtbGFzdC1jaGlsZCgyKSB7IHBhZGRpbmctYm90dG9tOiAwLjhyZW07IH1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpI2RlZmF1bHQgeyBwYWRkaW5nOiAwLjYwcmVtIDAuNXJlbTsgfVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGk6bnRoLWNoaWxkKDFuICsgMikgeyBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTsgfVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC44cmVtO1xcbiAgLyogcGFkZGluZzogMC4xNXJlbSAxcmVtIDAuNnJlbSAxcmVtOyAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNDRhO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6ICBub3dyYXA7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGkgLmRlbGV0ZS1wcm9qZWN0IHtcXG4gIG1hcmdpbjogMCAwLjNyZW0gMCAwO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaSBkaXYge1xcbiAgbWF4LXdpZHRoOiAxNXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXFxuLm1hbmFnZS10YXNrcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBib3gtc2hhZG93OiAwIDNweCA2cHggIzQzNDtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzQzNDtcXG59XFxuXFxuLm1hbmFnZS10YXNrcyA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLm1hbmFnZS10YXNrcyA+IGRpdiBidXR0b24ge1xcbiAgcGFkZGluZzogMC43cmVtIDAuNnJlbTtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG5cXG4ubWFuYWdlLXRhc2tzIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBtYXJnaW46IDAgMC40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb25maXJtYXRpb24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMC44cmVtIDAuOXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIG1heC13aWR0aDogMTZyZW07XFxufVxcblxcbi5jb25maXJtYXRpb24gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW07XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYXNpZGUuc2hvdy1tZW51IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB3aWR0aDogY2xhbXAoMXJlbSwgMjByZW0sIDI1cmVtKTtcXG59XFxuXFxuLnNob3ctdG9kby1mb3JtIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBoZWlnaHQ6IDE3cmVtO1xcbn1cXG5cXG4uc2hvdy1wcm9qZWN0LWZvcm0ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZTIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImFzaWRlLnNob3ctbWVudSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIDIwcmVtLCAyNXJlbSk7XFxufVxcblxcbi5zaG93LXRvZG8tZm9ybSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgaGVpZ2h0OiAxN3JlbTtcXG59XFxuXFxuLnNob3ctcHJvamVjdC1mb3JtIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlMi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlMi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBMaWJyYXJpZXMgYW5kIG1vZHVsZXMgXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3NjcmlwdHMvcHJvamVjdHMnXG5pbXBvcnQgVUkgZnJvbSAnLi9zY3JpcHRzL3VpJ1xuaW1wb3J0IExpYiBmcm9tICcuL3NjcmlwdHMvbGliJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zY3JpcHRzL3N0b3JhZ2UnXG4vLyBTdHlsZXNoZWV0XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUyLmNzcydcblxuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZG9JbnB1dEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpXG4gIGNvbnN0IHByb2plY3RJbnB1dEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG5cbiAgLy8gVG9nZ2xlIHNpZGUgbWVudSBkaXNwbGF5IHdoZW4gbWVudSBidXR0b24gY2xpY2tlZCBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5zaG93TWVudSgpKVxuXG4gIC8vIEhpZGUgU2lkZSBtZW51IHdoZW4gZXhpdCBidXR0b24gaXMgY2xpY2tlZCBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQtbmF2JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuaGlkZU1lbnUoKSlcblxuICAvLyBDaGFuZ2UgdmlzaWJpbGl0eSBvZiB0b2RvIGlucHV0IGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIFVJLnNldERpc3BsYXkodG9kb0lucHV0Rm9ybSwgJ2Jsb2NrJylcbiAgICAgIC8vIFVJLnNldERpc3BsYXkocHJvamVjdElucHV0Rm9ybSwgJ25vbmUnKVxuICAgICAgdG9kb0lucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LXRvZG8tZm9ybScpXG4gICAgICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcHJvamVjdC1mb3JtJylcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICB9KVxuXG4gIC8vIFNob3cgcHJvamVjdCBpbnB1dCBmb3JtIHdoZW4gJ25ldyBwcm9qZWN0JyBidXR0b24gaXMgY2xpY2tlZCBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2RvSW5wdXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctdG9kby1mb3JtJylcbiAgICAgIHByb2plY3RJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1wcm9qZWN0LWZvcm0nKVxuICAgICAgLy8gVUkuc2V0RGlzcGxheShwcm9qZWN0SW5wdXRGb3JtLCAnYmxvY2snKVxuICAgICAgVUkuaGlkZU1lbnUoKVxuICAgIH0pXG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHRvZG8gdGFzayBmcm9tIGluZm9ybWF0aW9uIGdpdmVuIGJ5IHVzZXJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChMaWIuY3JlYXRlVG9kbygpKSB7XG4gICAgICAgIExpYi5jbGVhckZvcm1JbnB1dCgpXG4gICAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXQoUHJvamVjdC5jdXJyZW50UHJvamVjdCkpXG4gICAgICB9IFxuICAgIH0pXG5cbiAgLy8gU2hvdyBmb3JtIGlucHV0IHRvIGNyZWF0ZSBuZXcgcHJvamVjdFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdG9kb0lucHV0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXRvZG8tZm9ybScpXG4gICAgICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctcHJvamVjdC1mb3JtJylcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIFVJLnNob3dNZW51KClcbiAgICAgIExpYi5uZXdQcm9qZWN0KClcbiAgICB9KVxuXG4gIC8vIFdob3cgY29uZmlybWF0aW9uIG1lbnUgd2hlbiBwcm9qZWN0IGRlbGV0aW9uIGlzIHRyaWdnZXJlZFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbjogSFRNTEVsZW1lbnQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybWF0aW9uJylcbiAgICAgIFVJLnNldERpc3BsYXkoY29uZmlybWF0aW9uLCAnYmxvY2snKVxuICAgIH0pXG5cbiAgLy8gQ2xvc2UgcG9wdXAgaWYgdXNlciBzZWxlY3RzICdubycgdG8gZGVsZXRpb24gb2YgY3VycmVudCBwcm9qZWN0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24gI25vJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24nKSwgJ25vbmUnKVxuICAgIH0pXG5cbiAgLy8gRGVsZXRlIHByb2plY3QgaWYgdXNlciBzZWxlY3RzICd5ZXMnIHRvIGRlbGV0aW9uIG9mIGN1cnJlbnQgcHJvamVjdGRlbGV0ZVByb2plY1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybWF0aW9uICN5ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpYi5kZWxldGVDdXJyZW50UHJvamVjdCgpXG4gICAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24nKSwgJ25vbmUnKVxuICAgIH0pXG5cbiAgLy8gU2hvdyBkZWZhdWx0IHRhc2tzIHdoZW4gZGVmYXVsdCBwcm9qZWN0IGlzIGNsaWNrZWRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QgI2RlZmF1bHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSAnZGVmYXVsdCdcbiAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXQoKSlcbiAgICAgIFVJLmhpZGVNZW51KClcbiAgICB9KVxuICBcbiAgLy8gU2hvdyB0YXNrcyBmb3IgdG9kYXlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBMaWIuc2hvd1Rhc2tzKFByb2plY3QuZ2V0VG9kYXlUYXNrcygpKVxuICAgICAgVUkuaGlkZU1lbnUoKVxuICAgIH0pXG5cbiAgLy8gU2hvdyB1c2VyIGEgY2hlY2tsaXN0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXRDaGVja2xpc3QoKSlcbiAgICAgIFVJLmhpZGVNZW51KClcbiAgICB9KVxuXG4gIC8vIFNhdmUgY2hhbmdlcyB0byB0YXNrXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIExpYi5lZGl0VGFzaygpXG4gICAgfSlcblxuICAvLyBTZXQgZm9ybSBkYXRlIGlucHV0IHZhbHVlIHRvIGN1cnJlbnQgZGF0ZSBcbiAgY29uc3QgZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybSAjZHVlLWRhdGUnKVxuICBkYXRlSW5wdXQudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMClcblxuICAvLyBJbml0aWFsaXplIHRvZG8gbWVtb3J5XG4gIFByb2plY3QuaW5pdGlhbGl6ZURhdGEoKVxuXG4gIC8vIFNob3cgYWxsIGF2YWlsYWJsZSBwcm9qZWN0c1xuICBTdG9yYWdlLmdldEtleXMoKS5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICBMaWIuc2hvd1Byb2plY3RzKHByb2plY3QpXG4gIH0gKVxuXG4gIC8vIFNob3cgdGhlIGRlZmF1bHQgcHJvamVjdHNcbiAgTGliLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxufSkoKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBVSSBmcm9tICcuL3VpJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcblxuY29uc3QgdG9kb0Zvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpXG5jb25zdCB0aXRsZTogSFRNTElucHV0RWxlbWVudCA9IHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG5jb25zdCBkdWVEYXRlOiBIVE1MSW5wdXRFbGVtZW50ID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJylcbmNvbnN0IHByaW9yaXR5OiBIVE1MSW5wdXRFbGVtZW50ID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcbmNvbnN0IG5vdGU6IEhUTUxJbnB1dEVsZW1lbnQgPSB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcjbm90ZScpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gSG9sZGVyIGZvciB0YXNrcyB0byBlZGl0XG4gIHRhc2tUb0VkaXQ6IHRvZG8sXG5cblxuICAvLyBBZGQgdG9kbyBhY3Rpb25zIHRvIGl0J3MgVUlcbiAgYWRkVGFza0V2ZW50cyh0YXNrOiBIVE1MRWxlbWVudCwgdGFza0RhdGE6IHRvZG8pIHtcbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJykpXG5cbiAgICAvLyBTaG93IGRldGFpbHMgb2YgdGhlIHRhc2sgd2hlbiB0aXRsZSBpcyBjbGlja2VkXG4gICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0RldGFpbHM6IEhUTUxFbGVtZW50ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJylcbiAgICAgIFVJLnNldERpc3BsYXkodGFza0RldGFpbHMsICdibG9jaycpXG4gICAgfSlcbiAgICAvLyBUb2dnbGUgc3RhdHVzIGFuZCBzaG93IGNoYW5nZXMgd2hlbiBzdGF0dXMgaXMgY2xpY2tlZFxuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stc3RhdHVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2hlZC10YXNrJylcbiAgICAgIFByb2plY3QudG9nZ2xlVG9kb1N0YXR1cyh0YXNrRGF0YS5wcm9qZWN0LCB0YXNrSWQpXG4gICAgfSlcbiAgICAvLyBEZWxldGUgdGFza1xuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLnJlbW92ZS10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0LmRlbGV0ZVRvZG8oUHJvamVjdC5jdXJyZW50UHJvamVjdCwgdGFza0lkKVxuICAgICAgVUkudGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzaylcbiAgICB9KVxuICAgIC8vIEVkaXQgdGFza1xuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YXNrVG9FZGl0ID0gdGFza0RhdGFcbiAgICAgIGNvbnN0IGNoYW5nZVRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jaGFuZ2VzJylcbiAgICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctdG9kby1mb3JtJylcbiAgICAgIC8vIFVJLnNldERpc3BsYXkodG9kb0Zvcm0sICdibG9jaycpXG4gICAgICBjaGFuZ2VUb2RvQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgVUkuc2V0RGlzcGxheShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8nKSwgJ25vbmUnKVxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXByb2plY3QtZm9ybScpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gdGFza0RhdGEudGl0bGVcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrRGF0YS5kdWVEYXRlXG4gICAgICB0aXRsZS52YWx1ZSA9IHRhc2tEYXRhLnRpdGxlXG4gICAgICBub3RlLnZhbHVlID0gdGFza0RhdGEubm90ZVxuICAgICAgcHJpb3JpdHkudmFsdWUgPSBgJHt0YXNrRGF0YS5wcmlvcml0eX1gXG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tcbiAgfSxcblxuXG4gIC8vIEVkaXQgYSB0YXNrXG4gIGVkaXRUYXNrKCkge1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdG9kbycpLCAnaW5saW5lJylcbiAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKSwgJ25vbmUnKVxuICAgIGNvbnN0IHRhc2sgPSB0b2RvLm5ldyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIHBhcnNlSW50KHByaW9yaXR5LnZhbHVlKSxcbiAgICAgICAgdGhpcy50YXNrVG9FZGl0LmlzQ29tcGxldGUsXG4gICAgICAgIG5vdGUudmFsdWUsXG4gICAgICAgIHRoaXMudGFza1RvRWRpdC5pZCxcbiAgICAgIClcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzLnRhc2tUb0VkaXQucHJvamVjdFxuICAgIFByb2plY3QudXBkYXRlVG9kbyh0YXNrKVxuICAgIHRoaXMuY2xlYXJGb3JtSW5wdXQoKVxuICAgIHRoaXMuc2hvd1Rhc2tzKFByb2plY3QuZ2V0KHRhc2sucHJvamVjdCkpXG4gIH0sXG5cbiAgLy8gRGlzcGxheSBhIGNvbGxlY3Rpb24gb2YgdG9kbyB0byB1c2VyXG4gIHNob3dUYXNrcyh0YXNrczogdG9kb1tdKSB7XG4gICAgVUkudGFza0xpc3QudGV4dENvbnRlbnQgPSAnJ1xuICAgIHRhc2tzLmZvckVhY2goIHRhc2sgPT4ge1xuICAgICAgVUkudGFza0xpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMuYWRkVGFza0V2ZW50cyhVSS5uZXdUYXNrKHRhc2spLCB0YXNrKVxuICAgICAgKVxuICAgIH0pXG4gIH0sXG5cblxuICAvLyBVc2luZyB1c2VyIGRlZmluZWQgdmFsdWVzLCBhZGQgbmV3IHRvZG8gdG8gcHJvamVjdHNcbiAgY3JlYXRlVG9kbygpIHtcbiAgICBpZiAodGl0bGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIGZhbHNlXG5cbiAgICBQcm9qZWN0LmFkZFRvZG8oIFByb2plY3QuY3VycmVudFByb2plY3QsXG4gICAgICB0b2RvLm5ldyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIE51bWJlci5wYXJzZUludChwcmlvcml0eS52YWx1ZSksXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBub3RlLnZhbHVlLFxuICAgICAgICBQcm9qZWN0Lm5leHRUYXNrSWQrKyxcbiAgICAgICkgXG4gICAgKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSxcblxuXG4gIC8vIEVyYXNlIHZhbHVlcyBlbnRlcmVkIGludG8gZm9ybSBieSB1c2VyXG4gIGNsZWFyRm9ybUlucHV0KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xuICAgIGR1ZURhdGUudmFsdWUgPSB0b2RheS5zbGljZSgwLDEwKVxuICAgIHByaW9yaXR5LnZhbHVlID0gJ1ByaW9yaXR5J1xuICAgIG5vdGUudmFsdWUgPSAnJ1xuICB9LFxuXG5cbiAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0XG4gIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0gI3RpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBQcm9qZWN0Lmhhc1Byb2plY3QocHJvamVjdE5hbWUpXG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnZhbHVlID0gJydcblxuICAgIGlmIChwcm9qZWN0TmFtZS5sZW5ndGggPiAwICYmICFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICB0aGlzLnNob3dQcm9qZWN0cyhwcm9qZWN0TmFtZSlcbiAgICAgIFByb2plY3QuYWRkKHByb2plY3ROYW1lKVxuXG4gICAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdCAhPT0gcHJvamVjdE5hbWUpXG4gICAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZVxuXG4gICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldChwcm9qZWN0TmFtZSkpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICBhbGVydCgnQ2F1dGlvbjogUHJvamVjdCBhbHJlYWR5IGV4aXN0cyEhJylcbiAgICAgIHRoaXMuc2hvd1Rhc2tzKFByb2plY3QuZ2V0KHByb2plY3ROYW1lKSlcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA8IDMpXG4gICAgICBhbGVydCgnRXJyb3I6IFByb2plY3QgbmFtZSBtdXN0IGJlIGFib3ZlIHR3byBjaGFyYWN0ZXJzJylcbiAgfSxcblxuXG4gIC8vIERlbGV0ZSB0aGUgY3VycmVudCBwcm9qZWN0XG4gIGRlbGV0ZUN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBVSS5wcm9qZWN0TGlzdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKVxuICAgICAgaWYgKHByb2plY3ROYW1lID09PSBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBVSS5yZW1vdmVQcm9qZWN0KHByb2plY3RbaV0pXG4gICAgfVxuICAgIFByb2plY3QuZGVsKFByb2plY3QuY3VycmVudFByb2plY3QpXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc2hvd1Byb2plY3RzKCdkZWZhdWx0JylcbiAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxuICB9LFxuXG4gIHNob3dQcm9qZWN0cyhwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lID09ICdkZWZhdWx0JykgcmV0dXJuO1xuICAgIGNvbnN0IHByb2plY3RVSSA9IFVJLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpXG5cbiAgICBwcm9qZWN0VUkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldChwcm9qZWN0TmFtZSkpXG4gICAgICBVSS5oaWRlTWVudSgpXG4gICAgfSlcblxuICAgIHByb2plY3RVSS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3QnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIFByb2plY3QuZGVsKHByb2plY3ROYW1lKVxuICAgICAgICBVSS5yZW1vdmVQcm9qZWN0KHByb2plY3RVSSlcbiAgICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9ICdkZWZhdWx0J1xuICAgICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxuICAgICAgfSlcblxuICAgIFVJLmFkZFByb2plY3QocHJvamVjdFVJKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gJ2RlZmF1bHQnXG4gIHN0YXRpYyBuZXh0VGFza0lkID0gMTIwMjMwMVxuXG4gIHN0YXRpYyBkYXRhOiB7W2tleTogc3RyaW5nXTogdG9kb1tdfSA9IHtcbiAgICAnZGVmYXVsdCc6IFtcbiAgICAgIHRvZG8ubmV3KCdDbGljay9UYXAgdG9kbyB0aXRsZSB0byBzZWUgbW9yZS4uLicsXG4gICAgICAgICAgICAgICAnMjAyMy0wNC0xOScsXG4gICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICctXy0gSGEhIFlvdVxcJ3JlIG5vdyBpbiBteSBiwrdfwrdieSB0cmFwISA6KScsXG4gICAgICAgICAgICAgICB0aGlzLm5leHRUYXNrSWQrKyksXG4gICAgICB0b2RvLm5ldygnVGFrZSBhIHN0cm9sbCcsXG4gICAgICAgICAgICAgICAnMjAyMC0xMS0xNScsXG4gICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAnVGVzdGluZyB5b3VyIGxpbWl0cyBkb2VzblxcJ3QgYnJlYWsgeW91LiBEb2VzIGl0PycsXG4gICAgICAgICAgICAgICB0aGlzLm5leHRUYXNrSWQrKyksXG4gICAgICB0b2RvLm5ldygnQnV5IFJpY2sgYSBuZXcgUXVhbnR1bSBwaHlzaWNzIHRleHRib29rIGZyb20gdGhlIG1hbGwnLFxuICAgICAgICAgICAgICAgJzIwMjMtMDctMjgnLFxuICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAnT2ggaGVhdmVucyEgTXkgVUkgc3Vja3MhIC1fLSBEb25cXCd0IGV2ZW4gdGFsayBhYm91dCB0aGUgbG9naWMnLFxuICAgICAgICAgICAgICAgdGhpcy5uZXh0VGFza0lkKyspLFxuICAgIF0sXG4gIH1cblxuICAvLyBHZXQgcHJvamVjdCBcbiAgc3RhdGljIGdldChwcm9qZWN0TmFtZSA9ICdkZWZhdWx0Jyk6IHRvZG9bXSB7XG4gICAgaWYgKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSlcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbcHJvamVjdE5hbWVdLm1hcCh0ID0+IHQpXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuXG4gIC8vIEFkZCBwcm9qZWN0XG4gIHN0YXRpYyBhZGQocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIGlmICghKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSkpXG4gICAgICB0aGlzLmRhdGFbcHJvamVjdE5hbWVdID0gW11cbiAgICBTdG9yYWdlLnN0b3JlVG9kb0RhdGEocHJvamVjdE5hbWUsIHRoaXMuZ2V0KHByb2plY3ROYW1lKSlcbiAgfVxuXG5cbiAgLy8gRGVsZXRlIHByb2plY3RcbiAgc3RhdGljIGRlbChwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAnZGVmYXVsdCcpXG4gICAgICBkZWxldGUgdGhpcy5kYXRhW3Byb2plY3ROYW1lXVxuICAgIFN0b3JhZ2UucmVtb3ZlKHByb2plY3ROYW1lKVxuICB9XG5cbiAgXG4gIC8vIEFkZCB0b2RvIGl0ZW0gdG8gYSBwcm9qZWN0XG4gIHN0YXRpYyBhZGRUb2RvKHByb2plY3ROYW1lOiBzdHJpbmcsIHRhc2s6IHRvZG8pIHtcbiAgICB0YXNrLnByb2plY3QgPSBwcm9qZWN0TmFtZVxuICAgIGlmICghKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSkpXG4gICAgICB0aGlzLmFkZChwcm9qZWN0TmFtZSlcblxuICAgIHRoaXMuZGF0YVtwcm9qZWN0TmFtZV0ucHVzaCh0YXNrKVxuICAgIFN0b3JhZ2Uuc3RvcmVUb2RvRGF0YShwcm9qZWN0TmFtZSwgdGhpcy5nZXQocHJvamVjdE5hbWUpKVxuICB9XG5cblxuICAvLyAoVW4pY2hlY2sgdG9kbyB0YXNrIFxuICBzdGF0aWMgdG9nZ2xlVG9kb1N0YXR1cyhwcm9qZWN0TmFtZTogc3RyaW5nLCB0YXNrSWQ6IG51bWJlcikge1xuICAgIHRoaXMuZGF0YVtwcm9qZWN0TmFtZV0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZClcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gIXRhc2suaXNDb21wbGV0ZVxuICAgIH0pXG4gICAgU3RvcmFnZS5zdG9yZVRvZG9EYXRhKHByb2plY3ROYW1lLCB0aGlzLmdldChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICAvLyBDaGFuZ2UgdG9kbyB0YXNrIGluZm9ybWF0aW9uXG4gIHN0YXRpYyB1cGRhdGVUb2RvKG5ld1Rhc2s6IHRvZG8pIHtcbiAgICB0aGlzLmRhdGFbbmV3VGFzay5wcm9qZWN0XSA9IFxuICAgICAgdGhpcy5kYXRhW25ld1Rhc2sucHJvamVjdF0ubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmlkID09PSBuZXdUYXNrLmlkKVxuICAgICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgICAgIHJldHVybiB0YXNrXG4gICAgICB9KVxuICAgIFN0b3JhZ2Uuc3RvcmVUb2RvRGF0YShcbiAgICAgIG5ld1Rhc2sucHJvamVjdCxcbiAgICAgIHRoaXMuZ2V0KG5ld1Rhc2sucHJvamVjdClcbiAgICApXG4gIH1cbiAgXG4gIC8vIERlbGV0ZSB0b2RvIGl0ZW0gXG4gIHN0YXRpYyBkZWxldGVUb2RvKHByb2plY3ROYW1lOiBzdHJpbmcsIHRhc2tJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhW3Byb2plY3ROYW1lXSA9IFxuICAgICAgdGhpcy5kYXRhW3Byb2plY3ROYW1lXS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2tJZCAhPSB0YXNrLmlkKSByZXR1cm4gdGFza1xuICAgICAgfSlcbiAgICBTdG9yYWdlLnN0b3JlVG9kb0RhdGEocHJvamVjdE5hbWUsIHRoaXMuZ2V0KHByb2plY3ROYW1lKSlcbiAgfVxuXG5cbiAgLy8gQ2hlY2sgZXhpc3RlbmNlIG9mIGEgcHJvamVjdFxuICBzdGF0aWMgaGFzUHJvamVjdChwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByb2plY3ROYW1lIGluIHRoaXMuZGF0YVxuICB9XG5cbiAgLy8gR2V0IHRhc2tzIHdpdGggdG9kYXkncyBkYXRlXG4gIHN0YXRpYyBnZXRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IHRvZGF5VGFza3M6IHRvZG9bXSA9IFtdXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKCAocHJvamVjdCkgPT4ge1xuICAgICAgdGhpcy5kYXRhW3Byb2plY3RdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gdG9kYXlUYXNrc1xuICB9XG5cbiAgLy8gR2V0IGEgY2hlY2tsaXN0IG9mIGFsbCB0b2RvIHRhc2tzXG4gIHN0YXRpYyBnZXRDaGVja2xpc3QoKTogdG9kb1tdIHtcbiAgICBjb25zdCBjaGVja2xpc3Q6IHRvZG9bXSA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgdGhpcy5kYXRhW3Byb2plY3RdLmZvckVhY2goICh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgPT09IGZhbHNlKSBjaGVja2xpc3QucHVzaCh0YXNrKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YVtwcm9qZWN0XS5mb3JFYWNoKCAodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09PSB0cnVlKSBjaGVja2xpc3QucHVzaCh0YXNrKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNoZWNrbGlzdFxuICB9XG5cbiAgc3RhdGljIGluaXRpYWxpemVEYXRhKCkge1xuICAgIGlmIChTdG9yYWdlLmNoZWNrU3RvcmFnZSgnbG9jYWxTdG9yYWdlJykpXG4gICAgICBpZiAoU3RvcmFnZS5nZXRTaXplKCkgPiAwKSB7XG4gICAgICAgIFN0b3JhZ2UuZ2V0S2V5cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgaWYgKHByb2plY3QgPT09ICdkZWZhdWx0JykgdGhpcy5kYXRhWydkZWZhdWx0J10gPSBbXVxuXG4gICAgICAgICAgU3RvcmFnZS5nZXRUb2RvRGF0YShwcm9qZWN0KS5mb3JFYWNoKCh0YXNrOiB0b2RvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvZG8ocHJvamVjdCwgdGFzaylcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlVG9kb0RhdGEoa2V5OiBzdHJpbmcsIGRhdGE6IHRvZG9bXSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9LFxuXG5cbiAgZ2V0VG9kb0RhdGEoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9LFxuXG5cbiAgZ2V0S2V5cygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgKytpKVxuICAgICAga2V5cy5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgcmV0dXJuIGtleXNcbiAgfSxcblxuICBcbiAgZ2V0U2l6ZSgpIHsgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGggfSxcblxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykgeyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpIH0sXG5cblxuICBjaGVja1N0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgc3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W2tleSBhcyBrZXlvZiB0eXBlb2Ygd2luZG93XVxuICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJ1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAoXG4gICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCdcbiAgICAgICAgKSAmJiAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMClcbiAgICB9XG4gIH0sXG59XG4iLCIndXNlIHN0cmljdCdcblxuY2xhc3MgdG9kbyB7XG4gIHRpdGxlXG4gIGR1ZURhdGVcbiAgcHJpb3JpdHlcbiAgbm90ZVxuICBpc0NvbXBsZXRlXG4gIGlkOiBudW1iZXJcbiAgcHJvamVjdCA9ICdkZWZhdWx0J1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGR1ZURhdGU6IHN0cmluZyxcbiAgICBwcmlvcml0eSA9IDAsXG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlLFxuICAgIG5vdGUgPSAnJyxcbiAgICBpZDogbnVtYmVyXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlXG4gICAgdGhpcy5ub3RlID0gbm90ZVxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgc3RhdGljIG5ldyggdGl0bGU6IHN0cmluZyxcbiAgICAgICAgICAgICBkdWVEYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgcHJpb3JpdHkgPSAwLFxuICAgICAgICAgICAgIGlzQ29tcGxldGUgPSBmYWxzZSxcbiAgICAgICAgICAgICBub3RlID0gJycsXG4gICAgICAgICAgICAgaWQ6IG51bWJlclxuICAgICAgICAgICAgKTogdG9kbyB7XG4gICAgcmV0dXJuIG5ldyB0b2RvKCB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgICAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZTIuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRhc2tMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyksXG4gIHByb2plY3RMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpLFxuXG5cbiAgbmV3VGFzayh0b2RvOiB0b2RvKSB7XG4gICAgLy8gVG9kbyBFbGVtZW50XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIGAke3RvZG8uaWR9YClcbiAgICAvLyBDb250YWluZXIgZm9yIHRhc2sgaW5mb3JtYXRpb24gc2hvd24gYnkgZGVmYXVsdFxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICAvLyBDb250YWluZXIgZm9yIHRvZG8gZGV0YWlscyBub3Qgc2hvd24gYnkgZGVmYXVsdFxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBkZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpXG5cbiAgICAvLyBUYXNrIHN0YXR1cyBjaGVja2JveFxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGFza1N0YXR1cy50eXBlID0gJ2NoZWNrYm94J1xuICAgIHRhc2tTdGF0dXMuY2hlY2tlZCA9IHRvZG8uaXNDb21wbGV0ZVxuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKVxuICAgIC8vIFRhc2sgdGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcbiAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZVxuICAgIHRhc2tUaXRsZS50aXRsZSA9IHRvZG8udGl0bGVcbiAgICBpZiAodG9kby5pc0NvbXBsZXRlKSB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoZWQtdGFzaycpXG4gICAgLy8gVGFzayBkdWUgZGF0ZVxuICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0YXNrRHVlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZS5yZXBsYWNlKCctJywgJyDCtyAnKS5yZXBsYWNlKCctJywgJyDCtyAnKVxuICAgIHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpXG4gICAgLy8gVGFzayBkZWxldGlvbiBidXR0b25cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9ICfDlydcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS10b2RvJylcbiAgICAvLyBUYXNrIEVkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnRWRpdCdcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzaycpXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndG9kby1mb3JtJylcbiAgICAvLyBUYXNrIG5vdGVcbiAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIHRhc2tOb3RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZScpXG4gICAgY29uc3Qgbm90ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIG5vdGVMYWJlbC5pbm5lclRleHQgPSAnTm90ZSdcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbm90ZS50ZXh0Q29udGVudCA9IHRvZG8ubm90ZVxuICAgIHRhc2tOb3RlLmFwcGVuZENoaWxkKG5vdGVMYWJlbClcbiAgICB0YXNrTm90ZS5hcHBlbmRDaGlsZChub3RlKVxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2MSlcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXG4gICAgdGFzay5hcHBlbmRDaGlsZChzZWN0aW9uKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQodGFza05vdGUpXG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXRhaWxzKVxuXG4gICAgcmV0dXJuIHRhc2tcbiAgfSxcblxuXG4gIHJlbW92ZVRhc2sodGFzazogSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzaylcbiAgfSxcblxuXG4gIGFkZFRhc2sodGFzazogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhc2tMaXN0LmFwcGVuZENoaWxkKHRoaXMubmV3VGFza1VJKHRhc2spKVxuICB9LFxuXG5cbiAgY3JlYXRlUHJvamVjdCh0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnICcgKyB0aXRsZVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnw5cnXG4gICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgdGl0bGUpXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KVxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgcmV0dXJuIHByb2plY3RcbiAgfSxcblxuXG4gIGFkZFByb2plY3QocHJvamVjdDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH0sXG5cblxuICByZW1vdmVQcm9qZWN0KHByb2plY3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0KVxuICB9LFxuXG5cbiAgc2V0RGlzcGxheShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGlzcGxheSA9ICcnKSB7XG4gICAgaWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgZWxzZSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfSxcbiAgICBcblxuICBzaG93TWVudSgpIHtcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAvLyB0aGlzLnNldERpc3BsYXkoYXNpZGUsICdibG9jaycpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnN0eWxlLm9wYWNpdHkgPSAnMC4yJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAnMC4yJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpXG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51JylcbiAgfSxcblxuXG4gIGhpZGVNZW51KCkge1xuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC8vIHRoaXMuc2V0RGlzcGxheShhc2lkZSwgJ25vbmUnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnZmFsc2UnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ2ZhbHNlJylcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKVxuICB9LFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9