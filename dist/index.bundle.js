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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  font-size: 16px;\n  --dark-gray1: #424963;\n  --dark-gray2: #646c77;\n  --grass: #9ed36a;\n  --sunflower: #f5ba45;\n  --light-gray: #cbd0d8;\n  --lavender: #4b89da;\n  --lavender2: #967ada;\n  --bitter-sweet: #e8563f;\n}\n\nbody {\n  background-color: #31344a;\n  margin: 0;\n}\n\n\n\n\n/***************** Header Styles *****************/\nheader,\nmain {\n  transition: opacity .6s ease-in-out .1s;\n}\n\nheader > section {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  background-color: var(--dark-gray1);\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--lavender);\n}\n\n/* Custom hamburger menu styling */\nheader > section .menu {\n  margin: 0.8rem;\n  background-color: #313852;\n  padding: 0.4rem 0.4rem 0.2rem;\n  border-radius: 0.3rem;\n}\n\nheader > section .menu > div {\n  border-radius: 4px;\n  width: 1.8rem;\n  height: 0.3rem;\n  margin-bottom: 0.25rem;\n  background-color: var(--lavender);\n  box-shadow: 3px 3px 4px #323, inset -1px -1px 4px var(--lavender2);\n}\n\nheader > section h1 {\n  margin: 0.8rem 0.9rem;\n  font-family: sans-serif;\n  font-size: 2em;\n  color: var(--light-gray);\n}\n\n.design {\n  color: gold;\n  font-size: 1em;\n}\n\n.add-btn {\n  font-size: 3.7rem;\n  font-weight: 700;\n  width: 2.8rem;\n  height: 2.8rem;\n  padding: 2px;\n  border-radius: 1.9rem;\n  position: fixed;\n  right: 1.2rem;\n  bottom: 1.2rem;\n  background-color: var(--lavender);\n  color: var(--dark-gray1);\n  font-family: serif;\n}\n\n.exit-nav,\n.add-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n/***************** Header form inputs *****************/\nform {\n  visibility: hidden;\n  height: 0;\n  text-align: center;\n  margin-top: 0.6rem;\n  transition: height .6s ease-in-out .3s,\n              visibility .3s ease-in-out .1s;\n}\n\nform li { list-style-type: none; }\n\nform *:is(input, textarea, select) {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--dark-gray1);\n  border: 1px solid var(--dark-gray2);\n  border-radius: 0.4rem;\n  color: var(--light-gray);\n  box-sizing: border-box;\n  font-size: 1em;\n  margin: 0.2rem;\n  padding: 0.7rem 1.2rem;\n  text-align: center;\n  width: 18.2rem;\n}\n\ninput[type=\"date\"] { padding-left: 6.4em; }\n\nheader form :is(input, textarea, select):is(:focus, :active) {\n  outline-color: var(--lavender);\n  border: none;\n}\n\nheader form :is(input, textarea)::placeholder { color: #3bc; }\n\nheader form input[type='submit'] {\n  border: none;\n  font-weight: 400;\n  color: snow;\n  background-color: var(--lavender);\n  padding: 0.5rem 0.8rem;\n  width: 7rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n\n\n\n/***************** Todo list items & container styling *****************/\nmain {\n  margin: 1rem 0.4rem 0;\n  padding: 0.2rem;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-columns: repeat(auto-fit, minmax(365px, 400px));\n  justify-content: center;\n}\n\n.task {\n  background-color: #42496a;\n  border-radius: 0.5rem;\n  padding: 0.3rem;\n  box-sizing: border-box;\n}\n\n.task > section:first-child,\n.task > .task-details > section:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task > section:first-child > div {\n  display: flex;\n}\n\n.task:hover,\n.task:active {\n  border: 2px solid var(--lavender2);\n}\n\n.task-status {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0.15rem solid var(--light-gray);\n  border-radius: 1rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  padding: 0;\n  margin-top: 0.3rem;\n}\n\n.task-status:checked,\n.task-status:visited {\n  background-color: #9ed36a;\n  border-color: #9ed36a;\n  outline: none;\n}\n\n.task-status:checked:before {\n  content: \"✓\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: 600;\n}\n\n.task-title {\n  font-size: 0.9em;\n  font-weight: 600;\n  font-family: sans-serif;\n  margin-left: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16.2rem;\n  min-width: 13rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  color: var(--light-gray);\n}\n\n.task-priority {\n  font-size: 0.8em;\n  font-family: sans-serif;\n}\n\n.task-due-date {\n  margin: 0 0.4rem 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.3rem;\n  background-color: #42496a;\n  border: 0;\n  border-bottom: 0.2rem solid #434;\n  color: var(--light-gray);\n}\n\n.edit-task {\n  margin-right: 0.6rem;\n  padding: 0.3rem 1.2rem;\n  background-color: var(--lavender);\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 500;\n}\n\n.remove-todo {\n  padding: 0 0.6rem;\n  color: var(--lavender);\n  font-size: 2.1em;\n}\n\n.task-note {\n  margin: 0.4rem 0rem 0rem;\n  padding: 0.4rem;\n  color: var(--light-gray);\n  font-family: sans-serif;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n}\n\n.task-note h3 {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.task-note p {\n  margin: 0.4rem;\n  font-style: italic;\n}\n\n.finished-task {\n  text-decoration: line-through;\n  color: #bbb;\n}\n\n\n\n/************** Side navigation menu ***************/\naside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 1rem;\n  background-color: var(--dark-gray1);\n  color: var(--light-gray);\n  z-index: 1;\n  margin-right: 4rem;\n  visibility: hidden;\n  font-family: sans-serif;\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem;\n  height: 100%;\n  overflow-y: scroll;\n  transition: visibility .5s ease-in-out .1s,\n              width .5s ease-in-out .2s;\n}\n\n.exit-nav {\n  width: 1.9rem;\n  height: 1.9rem;\n  margin: 0.8rem 0.8rem;\n  font-weight: 500;\n  font-size: 1.9rem;\n  border: 3px solid var(--lavender);\n  color: var(--lavender);\n  background-color: transparent;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n}\n\naside > section:first-child {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin: 0.2rem 0 0.2rem 0.6rem;\n}\n\n.nav {\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  padding: 0.2rem 0 0 0.6rem;\n}\n\n.side-nav > div:nth-last-child(2) { padding-bottom: 0.8rem; }\n\n.projects-list > li#default { padding: 0.60rem 0.5rem; }\n\n.projects-list > li:nth-child(1n + 2) { padding: 0.15rem 0.5rem; }\n\n.projects-list > li {\n  list-style-type: none;\n  margin: 0.2rem 0.8rem;\n  /* padding: 0.15rem 1rem 0.6rem 1rem; */\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 1.1rem;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap:  nowrap;\n}\n\n.projects-list > li .delete-project {\n  margin: 0 0.3rem 0 0;\n  font-size: 1.8rem;\n  color: var(--lavender);\n  background: none;\n  border: none;\n}\n\n.projects-list > li div {\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.manage-tasks {\n  text-align: center;\n  padding: 1rem 0;\n  box-shadow: 0 3px 6px #434;\n  margin-bottom: 1rem;\n  border-top: 1px solid #434;\n}\n\n.manage-tasks > div {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.manage-tasks > div button {\n  padding: 0.7rem 0.6rem;\n  width: 8rem;\n}\n\n.manage-tasks button {\n  background-color: var(--lavender);\n  text-align: center;\n  border: none;\n  border-radius: 0.4rem;\n  margin: 0 0.4rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #fff;\n}\n\n.confirmation {\n  display: none;\n  margin: 0.8rem 0.9rem;\n  text-align: center;\n  border-radius: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16rem;\n}\n\n.confirmation button {\n  margin-top: 0.4rem;\n  padding: 0.4rem 0.4rem;\n  width: 3rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  font-size: 16px;\n  --dark-gray1: #424963;\n  --dark-gray2: #646c77;\n  --grass: #9ed36a;\n  --sunflower: #f5ba45;\n  --light-gray: #cbd0d8;\n  --lavender: #4b89da;\n  --lavender2: #967ada;\n  --bitter-sweet: #e8563f;\n}\n\nbody {\n  background-color: #31344a;\n  margin: 0;\n}\n\n\n\n\n/***************** Header Styles *****************/\nheader,\nmain {\n  transition: opacity .6s ease-in-out .1s;\n}\n\nheader > section {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  background-color: var(--dark-gray1);\n  margin: 0.5rem;\n  border-radius: 0.5rem;\n  border: 1px solid var(--lavender);\n}\n\n/* Custom hamburger menu styling */\nheader > section .menu {\n  margin: 0.8rem;\n  background-color: #313852;\n  padding: 0.4rem 0.4rem 0.2rem;\n  border-radius: 0.3rem;\n}\n\nheader > section .menu > div {\n  border-radius: 4px;\n  width: 1.8rem;\n  height: 0.3rem;\n  margin-bottom: 0.25rem;\n  background-color: var(--lavender);\n  box-shadow: 3px 3px 4px #323, inset -1px -1px 4px var(--lavender2);\n}\n\nheader > section h1 {\n  margin: 0.8rem 0.9rem;\n  font-family: sans-serif;\n  font-size: 2em;\n  color: var(--light-gray);\n}\n\n.design {\n  color: gold;\n  font-size: 1em;\n}\n\n.add-btn {\n  font-size: 3.7rem;\n  font-weight: 700;\n  width: 2.8rem;\n  height: 2.8rem;\n  padding: 2px;\n  border-radius: 1.9rem;\n  position: fixed;\n  right: 1.2rem;\n  bottom: 1.2rem;\n  background-color: var(--lavender);\n  color: var(--dark-gray1);\n  font-family: serif;\n}\n\n.exit-nav,\n.add-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n\n\n/***************** Header form inputs *****************/\nform {\n  visibility: hidden;\n  height: 0;\n  text-align: center;\n  margin-top: 0.6rem;\n  transition: height .6s ease-in-out .3s,\n              visibility .3s ease-in-out .1s;\n}\n\nform li { list-style-type: none; }\n\nform *:is(input, textarea, select) {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: var(--dark-gray1);\n  border: 1px solid var(--dark-gray2);\n  border-radius: 0.4rem;\n  color: var(--light-gray);\n  box-sizing: border-box;\n  font-size: 1em;\n  margin: 0.2rem;\n  padding: 0.7rem 1.2rem;\n  text-align: center;\n  width: 18.2rem;\n}\n\ninput[type=\"date\"] { padding-left: 6.4em; }\n\nheader form :is(input, textarea, select):is(:focus, :active) {\n  outline-color: var(--lavender);\n  border: none;\n}\n\nheader form :is(input, textarea)::placeholder { color: #3bc; }\n\nheader form input[type='submit'] {\n  border: none;\n  font-weight: 400;\n  color: snow;\n  background-color: var(--lavender);\n  padding: 0.5rem 0.8rem;\n  width: 7rem;\n  text-transform: capitalize;\n  text-align: center;\n}\n\n\n\n\n/***************** Todo list items & container styling *****************/\nmain {\n  margin: 1rem 0.4rem 0;\n  padding: 0.2rem;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-columns: repeat(auto-fit, minmax(365px, 400px));\n  justify-content: center;\n}\n\n.task {\n  background-color: #42496a;\n  border-radius: 0.5rem;\n  padding: 0.3rem;\n  box-sizing: border-box;\n}\n\n.task > section:first-child,\n.task > .task-details > section:first-child {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task > section:first-child > div {\n  display: flex;\n}\n\n.task:hover,\n.task:active {\n  border: 2px solid var(--lavender2);\n}\n\n.task-status {\n  -webkit-appearance: none;\n  appearance: none;\n  border: 0.15rem solid var(--light-gray);\n  border-radius: 1rem;\n  width: 1.4rem;\n  height: 1.4rem;\n  padding: 0;\n  margin-top: 0.3rem;\n}\n\n.task-status:checked,\n.task-status:visited {\n  background-color: #9ed36a;\n  border-color: #9ed36a;\n  outline: none;\n}\n\n.task-status:checked:before {\n  content: \"✓\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  font-weight: 600;\n}\n\n.task-title {\n  font-size: 0.9em;\n  font-weight: 600;\n  font-family: sans-serif;\n  margin-left: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16.2rem;\n  min-width: 13rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  color: var(--light-gray);\n}\n\n.task-priority {\n  font-size: 0.8em;\n  font-family: sans-serif;\n}\n\n.task-due-date {\n  margin: 0 0.4rem 0;\n  padding: 0.4rem 0.4rem 0.4rem 0.3rem;\n  background-color: #42496a;\n  border: 0;\n  border-bottom: 0.2rem solid #434;\n  color: var(--light-gray);\n}\n\n.edit-task {\n  margin-right: 0.6rem;\n  padding: 0.3rem 1.2rem;\n  background-color: var(--lavender);\n  border: none;\n  border-radius: 0.4rem;\n  font-weight: 500;\n}\n\n.remove-todo {\n  padding: 0 0.6rem;\n  color: var(--lavender);\n  font-size: 2.1em;\n}\n\n.task-note {\n  margin: 0.4rem 0rem 0rem;\n  padding: 0.4rem;\n  color: var(--light-gray);\n  font-family: sans-serif;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n}\n\n.task-note h3 {\n  margin: 0;\n  text-align: center;\n  font-size: 1.2em;\n}\n\n.task-note p {\n  margin: 0.4rem;\n  font-style: italic;\n}\n\n.finished-task {\n  text-decoration: line-through;\n  color: #bbb;\n}\n\n\n\n/************** Side navigation menu ***************/\naside {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 1rem;\n  background-color: var(--dark-gray1);\n  color: var(--light-gray);\n  z-index: 1;\n  margin-right: 4rem;\n  visibility: hidden;\n  font-family: sans-serif;\n  border-top-right-radius: 0.4rem;\n  border-bottom-right-radius: 0.4rem;\n  height: 100%;\n  overflow-y: scroll;\n  transition: visibility .5s ease-in-out .1s,\n              width .5s ease-in-out .2s;\n}\n\n.exit-nav {\n  width: 1.9rem;\n  height: 1.9rem;\n  margin: 0.8rem 0.8rem;\n  font-weight: 500;\n  font-size: 1.9rem;\n  border: 3px solid var(--lavender);\n  color: var(--lavender);\n  background-color: transparent;\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n}\n\naside > section:first-child {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  margin: 0.2rem 0 0.2rem 0.6rem;\n}\n\n.nav {\n  font-size: 1.2em;\n  font-weight: 600;\n  font-family: sans-serif;\n  text-transform: uppercase;\n  padding: 0.2rem 0 0 0.6rem;\n}\n\n.side-nav > div:nth-last-child(2) { padding-bottom: 0.8rem; }\n\n.projects-list > li#default { padding: 0.60rem 0.5rem; }\n\n.projects-list > li:nth-child(1n + 2) { padding: 0.15rem 0.5rem; }\n\n.projects-list > li {\n  list-style-type: none;\n  margin: 0.2rem 0.8rem;\n  /* padding: 0.15rem 1rem 0.6rem 1rem; */\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 1.1rem;\n  background-color: #31344a;\n  border-radius: 0.4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap:  nowrap;\n}\n\n.projects-list > li .delete-project {\n  margin: 0 0.3rem 0 0;\n  font-size: 1.8rem;\n  color: var(--lavender);\n  background: none;\n  border: none;\n}\n\n.projects-list > li div {\n  max-width: 15rem;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.manage-tasks {\n  text-align: center;\n  padding: 1rem 0;\n  box-shadow: 0 3px 6px #434;\n  margin-bottom: 1rem;\n  border-top: 1px solid #434;\n}\n\n.manage-tasks > div {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n}\n\n.manage-tasks > div button {\n  padding: 0.7rem 0.6rem;\n  width: 8rem;\n}\n\n.manage-tasks button {\n  background-color: var(--lavender);\n  text-align: center;\n  border: none;\n  border-radius: 0.4rem;\n  margin: 0 0.4rem;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: #fff;\n}\n\n.confirmation {\n  display: none;\n  margin: 0.8rem 0.9rem;\n  text-align: center;\n  border-radius: 0.4rem;\n  padding: 0.6rem;\n  max-width: 16rem;\n}\n\n.confirmation button {\n  margin-top: 0.4rem;\n  padding: 0.4rem 0.4rem;\n  width: 3rem;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCxvQkFBb0IsMEJBQTBCLDBCQUEwQixxQkFBcUIseUJBQXlCLDBCQUEwQix3QkFBd0IseUJBQXlCLDRCQUE0QixHQUFHLFVBQVUsOEJBQThCLGNBQWMsR0FBRyw4RUFBOEUsNENBQTRDLEdBQUcsc0JBQXNCLGtCQUFrQixtQ0FBbUMsMEJBQTBCLHdDQUF3QyxtQkFBbUIsMEJBQTBCLHNDQUFzQyxHQUFHLGlFQUFpRSxtQkFBbUIsOEJBQThCLGtDQUFrQywwQkFBMEIsR0FBRyxrQ0FBa0MsdUJBQXVCLGtCQUFrQixtQkFBbUIsMkJBQTJCLHNDQUFzQyx1RUFBdUUsR0FBRyx5QkFBeUIsMEJBQTBCLDRCQUE0QixtQkFBbUIsNkJBQTZCLEdBQUcsYUFBYSxnQkFBZ0IsbUJBQW1CLEdBQUcsY0FBYyxzQkFBc0IscUJBQXFCLGtCQUFrQixtQkFBbUIsaUJBQWlCLDBCQUEwQixvQkFBb0Isa0JBQWtCLG1CQUFtQixzQ0FBc0MsNkJBQTZCLHVCQUF1QixHQUFHLDBCQUEwQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDBFQUEwRSx1QkFBdUIsY0FBYyx1QkFBdUIsdUJBQXVCLDBGQUEwRixHQUFHLGNBQWMsd0JBQXdCLHdDQUF3Qyw2QkFBNkIscUJBQXFCLHdDQUF3Qyx3Q0FBd0MsMEJBQTBCLDZCQUE2QiwyQkFBMkIsbUJBQW1CLG1CQUFtQiwyQkFBMkIsdUJBQXVCLG1CQUFtQixHQUFHLDJCQUEyQixzQkFBc0Isa0VBQWtFLG1DQUFtQyxpQkFBaUIsR0FBRyxvREFBb0QsY0FBYyxzQ0FBc0MsaUJBQWlCLHFCQUFxQixnQkFBZ0Isc0NBQXNDLDJCQUEyQixnQkFBZ0IsK0JBQStCLHVCQUF1QixHQUFHLDJGQUEyRiwwQkFBMEIsb0JBQW9CLGtCQUFrQixxQkFBcUIsa0VBQWtFLDRCQUE0QixHQUFHLFdBQVcsOEJBQThCLDBCQUEwQixvQkFBb0IsMkJBQTJCLEdBQUcsK0VBQStFLGtCQUFrQixtQ0FBbUMsR0FBRyx1Q0FBdUMsa0JBQWtCLEdBQUcsZ0NBQWdDLHVDQUF1QyxHQUFHLGtCQUFrQiw2QkFBNkIscUJBQXFCLDRDQUE0Qyx3QkFBd0Isa0JBQWtCLG1CQUFtQixlQUFlLHVCQUF1QixHQUFHLGlEQUFpRCw4QkFBOEIsMEJBQTBCLGtCQUFrQixHQUFHLGlDQUFpQyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsZ0JBQWdCLHFCQUFxQixHQUFHLGlCQUFpQixxQkFBcUIscUJBQXFCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsd0JBQXdCLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLEdBQUcsb0JBQW9CLHFCQUFxQiw0QkFBNEIsR0FBRyxvQkFBb0IsdUJBQXVCLHlDQUF5Qyw4QkFBOEIsY0FBYyxxQ0FBcUMsNkJBQTZCLEdBQUcsZ0JBQWdCLHlCQUF5QiwyQkFBMkIsc0NBQXNDLGlCQUFpQiwwQkFBMEIscUJBQXFCLEdBQUcsa0JBQWtCLHNCQUFzQiwyQkFBMkIscUJBQXFCLEdBQUcsZ0JBQWdCLDZCQUE2QixvQkFBb0IsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsMEJBQTBCLEdBQUcsbUJBQW1CLGNBQWMsdUJBQXVCLHFCQUFxQixHQUFHLGtCQUFrQixtQkFBbUIsdUJBQXVCLEdBQUcsb0JBQW9CLGtDQUFrQyxnQkFBZ0IsR0FBRyxzRUFBc0Usb0JBQW9CLFdBQVcsY0FBYyxnQkFBZ0Isd0NBQXdDLDZCQUE2QixlQUFlLHVCQUF1Qix1QkFBdUIsNEJBQTRCLG9DQUFvQyx1Q0FBdUMsaUJBQWlCLHVCQUF1Qix5RkFBeUYsR0FBRyxlQUFlLGtCQUFrQixtQkFBbUIsMEJBQTBCLHFCQUFxQixzQkFBc0Isc0NBQXNDLDJCQUEyQixrQ0FBa0Msd0JBQXdCLGtCQUFrQix3QkFBd0IsR0FBRyxpQ0FBaUMsa0JBQWtCLG1DQUFtQyxzQkFBc0IsbUNBQW1DLEdBQUcsVUFBVSxxQkFBcUIscUJBQXFCLDRCQUE0Qiw4QkFBOEIsK0JBQStCLEdBQUcsd0NBQXdDLHlCQUF5QixrQ0FBa0MsMEJBQTBCLDRDQUE0QywwQkFBMEIseUJBQXlCLDBCQUEwQiwwQkFBMEIsMENBQTBDLGlDQUFpQyxxQkFBcUIsc0JBQXNCLDhCQUE4QiwwQkFBMEIsa0JBQWtCLGdDQUFnQyx3QkFBd0IsdUJBQXVCLEdBQUcseUNBQXlDLHlCQUF5QixzQkFBc0IsMkJBQTJCLHFCQUFxQixpQkFBaUIsR0FBRyw2QkFBNkIscUJBQXFCLHdCQUF3Qix1QkFBdUIsNEJBQTRCLEdBQUcsbUJBQW1CLHVCQUF1QixvQkFBb0IsK0JBQStCLHdCQUF3QiwrQkFBK0IsR0FBRyx5QkFBeUIsa0JBQWtCLHNCQUFzQixrQ0FBa0MsR0FBRyxnQ0FBZ0MsMkJBQTJCLGdCQUFnQixHQUFHLDBCQUEwQixzQ0FBc0MsdUJBQXVCLGlCQUFpQiwwQkFBMEIscUJBQXFCLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLEdBQUcsbUJBQW1CLGtCQUFrQiwwQkFBMEIsdUJBQXVCLDBCQUEwQixvQkFBb0IscUJBQXFCLEdBQUcsMEJBQTBCLHVCQUF1QiwyQkFBMkIsZ0JBQWdCLEdBQUcsU0FBUyx1RkFBdUYsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLFlBQVksT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxVQUFVLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sT0FBTyxPQUFPLHVCQUF1QixNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8seUJBQXlCLE1BQU0sWUFBWSxXQUFXLE1BQU0sdUJBQXVCLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxL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QUFXLENBQUM7SUFDckMsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlMi5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9zcmMvc3R5bGVzL3N0eWxlMi5jc3M/NzM2NyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kb0xpc3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zY3JpcHRzL2xpYi50cyIsIndlYnBhY2s6Ly9vZGluLXRvZG9MaXN0Ly4vc3JjL3NjcmlwdHMvcHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zY3JpcHRzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zY3JpcHRzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvTGlzdC8uL3NyYy9zY3JpcHRzL3VpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgLS1kYXJrLWdyYXkxOiAjNDI0OTYzO1xcbiAgLS1kYXJrLWdyYXkyOiAjNjQ2Yzc3O1xcbiAgLS1ncmFzczogIzllZDM2YTtcXG4gIC0tc3VuZmxvd2VyOiAjZjViYTQ1O1xcbiAgLS1saWdodC1ncmF5OiAjY2JkMGQ4O1xcbiAgLS1sYXZlbmRlcjogIzRiODlkYTtcXG4gIC0tbGF2ZW5kZXIyOiAjOTY3YWRhO1xcbiAgLS1iaXR0ZXItc3dlZXQ6ICNlODU2M2Y7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzQ0YTtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqIEhlYWRlciBTdHlsZXMgKioqKioqKioqKioqKioqKiovXFxuaGVhZGVyLFxcbm1haW4ge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNnMgZWFzZS1pbi1vdXQgLjFzO1xcbn1cXG5cXG5oZWFkZXIgPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkxKTtcXG4gIG1hcmdpbjogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGF2ZW5kZXIpO1xcbn1cXG5cXG4vKiBDdXN0b20gaGFtYnVyZ2VyIG1lbnUgc3R5bGluZyAqL1xcbmhlYWRlciA+IHNlY3Rpb24gLm1lbnUge1xcbiAgbWFyZ2luOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzODUyO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbSAwLjJyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxufVxcblxcbmhlYWRlciA+IHNlY3Rpb24gLm1lbnUgPiBkaXYge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDEuOHJlbTtcXG4gIGhlaWdodDogMC4zcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4ICMzMjMsIGluc2V0IC0xcHggLTFweCA0cHggdmFyKC0tbGF2ZW5kZXIyKTtcXG59XFxuXFxuaGVhZGVyID4gc2VjdGlvbiBoMSB7XFxuICBtYXJnaW46IDAuOHJlbSAwLjlyZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZGVzaWduIHtcXG4gIGNvbG9yOiBnb2xkO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMy43cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHdpZHRoOiAyLjhyZW07XFxuICBoZWlnaHQ6IDIuOHJlbTtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuOXJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxLjJyZW07XFxuICBib3R0b206IDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkxKTtcXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG59XFxuXFxuLmV4aXQtbmF2LFxcbi5hZGQtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKiBIZWFkZXIgZm9ybSBpbnB1dHMgKioqKioqKioqKioqKioqKiovXFxuZm9ybSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBoZWlnaHQ6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAwLjZyZW07XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgLjZzIGVhc2UtaW4tb3V0IC4zcyxcXG4gICAgICAgICAgICAgIHZpc2liaWxpdHkgLjNzIGVhc2UtaW4tb3V0IC4xcztcXG59XFxuXFxuZm9ybSBsaSB7IGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcblxcbmZvcm0gKjppcyhpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCkge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1ncmF5Mik7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW46IDAuMnJlbTtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTguMnJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHsgcGFkZGluZy1sZWZ0OiA2LjRlbTsgfVxcblxcbmhlYWRlciBmb3JtIDppcyhpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCk6aXMoOmZvY3VzLCA6YWN0aXZlKSB7XFxuICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmhlYWRlciBmb3JtIDppcyhpbnB1dCwgdGV4dGFyZWEpOjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjM2JjOyB9XFxuXFxuaGVhZGVyIGZvcm0gaW5wdXRbdHlwZT0nc3VibWl0J10ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiBzbm93O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgcGFkZGluZzogMC41cmVtIDAuOHJlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKiBUb2RvIGxpc3QgaXRlbXMgJiBjb250YWluZXIgc3R5bGluZyAqKioqKioqKioqKioqKioqKi9cXG5tYWluIHtcXG4gIG1hcmdpbjogMXJlbSAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMC4ycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNjVweCwgNDAwcHgpKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0OTZhO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLnRhc2sgPiBzZWN0aW9uOmZpcnN0LWNoaWxkLFxcbi50YXNrID4gLnRhc2stZGV0YWlscyA+IHNlY3Rpb246Zmlyc3QtY2hpbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2sgPiBzZWN0aW9uOmZpcnN0LWNoaWxkID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrOmhvdmVyLFxcbi50YXNrOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1sYXZlbmRlcjIpO1xcbn1cXG5cXG4udGFzay1zdGF0dXMge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogMC4xNXJlbSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogMS40cmVtO1xcbiAgaGVpZ2h0OiAxLjRyZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbn1cXG5cXG4udGFzay1zdGF0dXM6Y2hlY2tlZCxcXG4udGFzay1zdGF0dXM6dmlzaXRlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVkMzZhO1xcbiAgYm9yZGVyLWNvbG9yOiAjOWVkMzZhO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRhc2stc3RhdHVzOmNoZWNrZWQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnRhc2stdGl0bGUge1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXgtd2lkdGg6IDE2LjJyZW07XFxuICBtaW4td2lkdGg6IDEzcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4udGFzay1wcmlvcml0eSB7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcbi50YXNrLWR1ZS1kYXRlIHtcXG4gIG1hcmdpbjogMCAwLjRyZW0gMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjRyZW0gMC40cmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQ5NmE7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAwLjJyZW0gc29saWQgIzQzNDtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLmVkaXQtdGFzayB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG8ge1xcbiAgcGFkZGluZzogMCAwLjZyZW07XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgZm9udC1zaXplOiAyLjFlbTtcXG59XFxuXFxuLnRhc2stbm90ZSB7XFxuICBtYXJnaW46IDAuNHJlbSAwcmVtIDByZW07XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM0NGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxufVxcblxcbi50YXNrLW5vdGUgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuLnRhc2stbm90ZSBwIHtcXG4gIG1hcmdpbjogMC40cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uZmluaXNoZWQtdGFzayB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKiogU2lkZSBuYXZpZ2F0aW9uIG1lbnUgKioqKioqKioqKioqKioqL1xcbmFzaWRlIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5MSk7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC40cmVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgLjVzIGVhc2UtaW4tb3V0IC4xcyxcXG4gICAgICAgICAgICAgIHdpZHRoIC41cyBlYXNlLWluLW91dCAuMnM7XFxufVxcblxcbi5leGl0LW5hdiB7XFxuICB3aWR0aDogMS45cmVtO1xcbiAgaGVpZ2h0OiAxLjlyZW07XFxuICBtYXJnaW46IDAuOHJlbSAwLjhyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1sYXZlbmRlcik7XFxuICBjb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmFzaWRlID4gc2VjdGlvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBtYXJnaW46IDAuMnJlbSAwIDAuMnJlbSAwLjZyZW07XFxufVxcblxcbi5uYXYge1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBwYWRkaW5nOiAwLjJyZW0gMCAwIDAuNnJlbTtcXG59XFxuXFxuLnNpZGUtbmF2ID4gZGl2Om50aC1sYXN0LWNoaWxkKDIpIHsgcGFkZGluZy1ib3R0b206IDAuOHJlbTsgfVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGkjZGVmYXVsdCB7IHBhZGRpbmc6IDAuNjByZW0gMC41cmVtOyB9XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaTpudGgtY2hpbGQoMW4gKyAyKSB7IHBhZGRpbmc6IDAuMTVyZW0gMC41cmVtOyB9XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICBtYXJnaW46IDAuMnJlbSAwLjhyZW07XFxuICAvKiBwYWRkaW5nOiAwLjE1cmVtIDFyZW0gMC42cmVtIDFyZW07ICovXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM0NGE7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogIG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaSAuZGVsZXRlLXByb2plY3Qge1xcbiAgbWFyZ2luOiAwIDAuM3JlbSAwIDA7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpIGRpdiB7XFxuICBtYXgtd2lkdGg6IDE1cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG5cXG4ubWFuYWdlLXRhc2tzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjNDM0O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDM0O1xcbn1cXG5cXG4ubWFuYWdlLXRhc2tzID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWFuYWdlLXRhc2tzID4gZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjdyZW0gMC42cmVtO1xcbiAgd2lkdGg6IDhyZW07XFxufVxcblxcbi5tYW5hZ2UtdGFza3MgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIG1hcmdpbjogMCAwLjRyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAwLjhyZW0gMC45cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgcGFkZGluZzogMC42cmVtO1xcbiAgbWF4LXdpZHRoOiAxNnJlbTtcXG59XFxuXFxuLmNvbmZpcm1hdGlvbiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMC40cmVtO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5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bnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICAtLWRhcmstZ3JheTE6ICM0MjQ5NjM7XFxuICAtLWRhcmstZ3JheTI6ICM2NDZjNzc7XFxuICAtLWdyYXNzOiAjOWVkMzZhO1xcbiAgLS1zdW5mbG93ZXI6ICNmNWJhNDU7XFxuICAtLWxpZ2h0LWdyYXk6ICNjYmQwZDg7XFxuICAtLWxhdmVuZGVyOiAjNGI4OWRhO1xcbiAgLS1sYXZlbmRlcjI6ICM5NjdhZGE7XFxuICAtLWJpdHRlci1zd2VldDogI2U4NTYzZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNDRhO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiogSGVhZGVyIFN0eWxlcyAqKioqKioqKioqKioqKioqKi9cXG5oZWFkZXIsXFxubWFpbiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC42cyBlYXNlLWluLW91dCAuMXM7XFxufVxcblxcbmhlYWRlciA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgbWFyZ2luOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1sYXZlbmRlcik7XFxufVxcblxcbi8qIEN1c3RvbSBoYW1idXJnZXIgbWVudSBzdHlsaW5nICovXFxuaGVhZGVyID4gc2VjdGlvbiAubWVudSB7XFxuICBtYXJnaW46IDAuOHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTM4NTI7XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG59XFxuXFxuaGVhZGVyID4gc2VjdGlvbiAubWVudSA+IGRpdiB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMS44cmVtO1xcbiAgaGVpZ2h0OiAwLjNyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggIzMyMywgaW5zZXQgLTFweCAtMXB4IDRweCB2YXIoLS1sYXZlbmRlcjIpO1xcbn1cXG5cXG5oZWFkZXIgPiBzZWN0aW9uIGgxIHtcXG4gIG1hcmdpbjogMC44cmVtIDAuOXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi5kZXNpZ24ge1xcbiAgY29sb3I6IGdvbGQ7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgZm9udC1zaXplOiAzLjdyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgd2lkdGg6IDIuOHJlbTtcXG4gIGhlaWdodDogMi44cmVtO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMS45cmVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDEuMnJlbTtcXG4gIGJvdHRvbTogMS4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstZ3JheTEpO1xcbiAgZm9udC1mYW1pbHk6IHNlcmlmO1xcbn1cXG5cXG4uZXhpdC1uYXYsXFxuLmFkZC1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqIEhlYWRlciBmb3JtIGlucHV0cyAqKioqKioqKioqKioqKioqKi9cXG5mb3JtIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGhlaWdodDogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAuNnMgZWFzZS1pbi1vdXQgLjNzLFxcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eSAuM3MgZWFzZS1pbi1vdXQgLjFzO1xcbn1cXG5cXG5mb3JtIGxpIHsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XFxuXFxuZm9ybSAqOmlzKGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0KSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmF5MSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLWdyYXkyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIG1hcmdpbjogMC4ycmVtO1xcbiAgcGFkZGluZzogMC43cmVtIDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxOC4ycmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0geyBwYWRkaW5nLWxlZnQ6IDYuNGVtOyB9XFxuXFxuaGVhZGVyIGZvcm0gOmlzKGlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0KTppcyg6Zm9jdXMsIDphY3RpdmUpIHtcXG4gIG91dGxpbmUtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIGZvcm0gOmlzKGlucHV0LCB0ZXh0YXJlYSk6OnBsYWNlaG9sZGVyIHsgY29sb3I6ICMzYmM7IH1cXG5cXG5oZWFkZXIgZm9ybSBpbnB1dFt0eXBlPSdzdWJtaXQnXSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHNub3c7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC44cmVtO1xcbiAgd2lkdGg6IDdyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqIFRvZG8gbGlzdCBpdGVtcyAmIGNvbnRhaW5lciBzdHlsaW5nICoqKioqKioqKioqKioqKioqL1xcbm1haW4ge1xcbiAgbWFyZ2luOiAxcmVtIDAuNHJlbSAwO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAwLjJyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM2NXB4LCA0MDBweCkpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQ5NmE7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4udGFzayA+IHNlY3Rpb246Zmlyc3QtY2hpbGQsXFxuLnRhc2sgPiAudGFzay1kZXRhaWxzID4gc2VjdGlvbjpmaXJzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzayA+IHNlY3Rpb246Zmlyc3QtY2hpbGQgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRhc2s6aG92ZXIsXFxuLnRhc2s6YWN0aXZlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxhdmVuZGVyMik7XFxufVxcblxcbi50YXNrLXN0YXR1cyB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyOiAwLjE1cmVtIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxLjRyZW07XFxuICBoZWlnaHQ6IDEuNHJlbTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxufVxcblxcbi50YXNrLXN0YXR1czpjaGVja2VkLFxcbi50YXNrLXN0YXR1czp2aXNpdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZWQzNmE7XFxuICBib3JkZXItY29sb3I6ICM5ZWQzNmE7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udGFzay1zdGF0dXM6Y2hlY2tlZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4udGFzay10aXRsZSB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNHJlbTtcXG4gIHBhZGRpbmc6IDAuNnJlbTtcXG4gIG1heC13aWR0aDogMTYuMnJlbTtcXG4gIG1pbi13aWR0aDogMTNyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxufVxcblxcbi50YXNrLXByaW9yaXR5IHtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRhc2stZHVlLWRhdGUge1xcbiAgbWFyZ2luOiAwIDAuNHJlbSAwO1xcbiAgcGFkZGluZzogMC40cmVtIDAuNHJlbSAwLjRyZW0gMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDk2YTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCAjNDM0O1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZWRpdC10YXNrIHtcXG4gIG1hcmdpbi1yaWdodDogMC42cmVtO1xcbiAgcGFkZGluZzogMC4zcmVtIDEuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yZW1vdmUtdG9kbyB7XFxuICBwYWRkaW5nOiAwIDAuNnJlbTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBmb250LXNpemU6IDIuMWVtO1xcbn1cXG5cXG4udGFzay1ub3RlIHtcXG4gIG1hcmdpbjogMC40cmVtIDByZW0gMHJlbTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzQ0YTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG59XFxuXFxuLnRhc2stbm90ZSBoMyB7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4udGFzay1ub3RlIHAge1xcbiAgbWFyZ2luOiAwLjRyZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5maW5pc2hlZC10YXNrIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICNiYmI7XFxufVxcblxcblxcblxcbi8qKioqKioqKioqKioqKiBTaWRlIG5hdmlnYXRpb24gbWVudSAqKioqKioqKioqKioqKiovXFxuYXNpZGUge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyYXkxKTtcXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5KTtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjRyZW07XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC40cmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAuNXMgZWFzZS1pbi1vdXQgLjFzLFxcbiAgICAgICAgICAgICAgd2lkdGggLjVzIGVhc2UtaW4tb3V0IC4ycztcXG59XFxuXFxuLmV4aXQtbmF2IHtcXG4gIHdpZHRoOiAxLjlyZW07XFxuICBoZWlnaHQ6IDEuOXJlbTtcXG4gIG1hcmdpbjogMC44cmVtIDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWxhdmVuZGVyKTtcXG4gIGNvbG9yOiB2YXIoLS1sYXZlbmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYXNpZGUgPiBzZWN0aW9uOmZpcnN0LWNoaWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIG1hcmdpbjogMC4ycmVtIDAgMC4ycmVtIDAuNnJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwIDAgMC42cmVtO1xcbn1cXG5cXG4uc2lkZS1uYXYgPiBkaXY6bnRoLWxhc3QtY2hpbGQoMikgeyBwYWRkaW5nLWJvdHRvbTogMC44cmVtOyB9XFxuXFxuLnByb2plY3RzLWxpc3QgPiBsaSNkZWZhdWx0IHsgcGFkZGluZzogMC42MHJlbSAwLjVyZW07IH1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpOm50aC1jaGlsZCgxbiArIDIpIHsgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07IH1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMC4ycmVtIDAuOHJlbTtcXG4gIC8qIHBhZGRpbmc6IDAuMTVyZW0gMXJlbSAwLjZyZW0gMXJlbTsgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzQ0YTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiAgbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCA+IGxpIC5kZWxldGUtcHJvamVjdCB7XFxuICBtYXJnaW46IDAgMC4zcmVtIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgY29sb3I6IHZhcigtLWxhdmVuZGVyKTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0ID4gbGkgZGl2IHtcXG4gIG1heC13aWR0aDogMTVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5tYW5hZ2UtdGFza3Mge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4ICM0MzQ7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0MzQ7XFxufVxcblxcbi5tYW5hZ2UtdGFza3MgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tYW5hZ2UtdGFza3MgPiBkaXYgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAwLjZyZW07XFxuICB3aWR0aDogOHJlbTtcXG59XFxuXFxuLm1hbmFnZS10YXNrcyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGF2ZW5kZXIpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC40cmVtO1xcbiAgbWFyZ2luOiAwIDAuNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW46IDAuOHJlbSAwLjlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjZyZW07XFxuICBtYXgtd2lkdGg6IDE2cmVtO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjRyZW07XFxuICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImFzaWRlLnNob3ctbWVudSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgd2lkdGg6IGNsYW1wKDFyZW0sIDIwcmVtLCAyNXJlbSk7XFxufVxcblxcbi5zaG93LXRvZG8tZm9ybSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgaGVpZ2h0OiAxN3JlbTtcXG59XFxuXFxuLnNob3ctcHJvamVjdC1mb3JtIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJhc2lkZS5zaG93LW1lbnUge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHdpZHRoOiBjbGFtcCgxcmVtLCAyMHJlbSwgMjVyZW0pO1xcbn1cXG5cXG4uc2hvdy10b2RvLWZvcm0ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGhlaWdodDogMTdyZW07XFxufVxcblxcbi5zaG93LXByb2plY3QtZm9ybSB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZTIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZTIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIid1c2Ugc3RyaWN0J1xuXG4vLyBMaWJyYXJpZXMgYW5kIG1vZHVsZXMgXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3NjcmlwdHMvcHJvamVjdHMnXG5pbXBvcnQgVUkgZnJvbSAnLi9zY3JpcHRzL3VpJ1xuaW1wb3J0IExpYiBmcm9tICcuL3NjcmlwdHMvbGliJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zY3JpcHRzL3N0b3JhZ2UnXG4vLyBTdHlsZXNoZWV0XG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcydcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGUyLmNzcydcblxuXG4oZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZG9JbnB1dEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpXG4gIGNvbnN0IHByb2plY3RJbnB1dEZvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpXG5cbiAgLy8gVG9nZ2xlIHNpZGUgbWVudSBkaXNwbGF5IHdoZW4gbWVudSBidXR0b24gY2xpY2tlZCBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBVSS5zaG93TWVudSgpKVxuXG4gIC8vIEhpZGUgU2lkZSBtZW51IHdoZW4gZXhpdCBidXR0b24gaXMgY2xpY2tlZCBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4aXQtbmF2JylcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVUkuaGlkZU1lbnUoKSlcblxuICAvLyBDaGFuZ2UgdmlzaWJpbGl0eSBvZiB0b2RvIGlucHV0IGZvcm1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIFVJLnNldERpc3BsYXkodG9kb0lucHV0Rm9ybSwgJ2Jsb2NrJylcbiAgICAgIC8vIFVJLnNldERpc3BsYXkocHJvamVjdElucHV0Rm9ybSwgJ25vbmUnKVxuICAgICAgdG9kb0lucHV0Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LXRvZG8tZm9ybScpXG4gICAgICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctcHJvamVjdC1mb3JtJylcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSdcbiAgICB9KVxuXG4gIC8vIFNob3cgcHJvamVjdCBpbnB1dCBmb3JtIHdoZW4gJ25ldyBwcm9qZWN0JyBidXR0b24gaXMgY2xpY2tlZCBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0b2RvSW5wdXRGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctdG9kby1mb3JtJylcbiAgICAgIHByb2plY3RJbnB1dEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1wcm9qZWN0LWZvcm0nKVxuICAgICAgLy8gVUkuc2V0RGlzcGxheShwcm9qZWN0SW5wdXRGb3JtLCAnYmxvY2snKVxuICAgICAgVUkuaGlkZU1lbnUoKVxuICAgIH0pXG5cbiAgLy8gQ3JlYXRlIGEgbmV3IHRvZG8gdGFzayBmcm9tIGluZm9ybWF0aW9uIGdpdmVuIGJ5IHVzZXJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmIChMaWIuY3JlYXRlVG9kbygpKSB7XG4gICAgICAgIExpYi5jbGVhckZvcm1JbnB1dCgpXG4gICAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXQoUHJvamVjdC5jdXJyZW50UHJvamVjdCkpXG4gICAgICB9IFxuICAgIH0pXG5cbiAgLy8gU2hvdyBmb3JtIGlucHV0IHRvIGNyZWF0ZSBuZXcgcHJvamVjdFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdG9kb0lucHV0Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXRvZG8tZm9ybScpXG4gICAgICBwcm9qZWN0SW5wdXRGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctcHJvamVjdC1mb3JtJylcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIFVJLnNob3dNZW51KClcbiAgICAgIExpYi5uZXdQcm9qZWN0KClcbiAgICB9KVxuXG4gIC8vIFdob3cgY29uZmlybWF0aW9uIG1lbnUgd2hlbiBwcm9qZWN0IGRlbGV0aW9uIGlzIHRyaWdnZXJlZFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbjogSFRNTEVsZW1lbnQgPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybWF0aW9uJylcbiAgICAgIFVJLnNldERpc3BsYXkoY29uZmlybWF0aW9uLCAnYmxvY2snKVxuICAgIH0pXG5cbiAgLy8gQ2xvc2UgcG9wdXAgaWYgdXNlciBzZWxlY3RzICdubycgdG8gZGVsZXRpb24gb2YgY3VycmVudCBwcm9qZWN0XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24gI25vJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24nKSwgJ25vbmUnKVxuICAgIH0pXG5cbiAgLy8gRGVsZXRlIHByb2plY3QgaWYgdXNlciBzZWxlY3RzICd5ZXMnIHRvIGRlbGV0aW9uIG9mIGN1cnJlbnQgcHJvamVjdGRlbGV0ZVByb2plY1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybWF0aW9uICN5ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpYi5kZWxldGVDdXJyZW50UHJvamVjdCgpXG4gICAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25maXJtYXRpb24nKSwgJ25vbmUnKVxuICAgIH0pXG5cbiAgLy8gU2hvdyBkZWZhdWx0IHRhc2tzIHdoZW4gZGVmYXVsdCBwcm9qZWN0IGlzIGNsaWNrZWRcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QgI2RlZmF1bHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSAnZGVmYXVsdCdcbiAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXQoKSlcbiAgICAgIFVJLmhpZGVNZW51KClcbiAgICB9KVxuICBcbiAgLy8gU2hvdyB0YXNrcyBmb3IgdG9kYXlcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LXRhc2tzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBMaWIuc2hvd1Rhc2tzKFByb2plY3QuZ2V0VG9kYXlUYXNrcygpKVxuICAgICAgVUkuaGlkZU1lbnUoKVxuICAgIH0pXG5cbiAgLy8gU2hvdyB1c2VyIGEgY2hlY2tsaXN0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIExpYi5zaG93VGFza3MoUHJvamVjdC5nZXRDaGVja2xpc3QoKSlcbiAgICAgIFVJLmhpZGVNZW51KClcbiAgICB9KVxuXG4gIC8vIFNhdmUgY2hhbmdlcyB0byB0YXNrXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIExpYi5lZGl0VGFzaygpXG4gICAgfSlcblxuICAvLyBTZXQgZm9ybSBkYXRlIGlucHV0IHZhbHVlIHRvIGN1cnJlbnQgZGF0ZSBcbiAgY29uc3QgZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybSAjZHVlLWRhdGUnKVxuICBkYXRlSW5wdXQudmFsdWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMClcblxuICAvLyBJbml0aWFsaXplIHRvZG8gbWVtb3J5XG4gIFByb2plY3QuaW5pdGlhbGl6ZURhdGEoKVxuXG4gIC8vIFNob3cgYWxsIGF2YWlsYWJsZSBwcm9qZWN0c1xuICBTdG9yYWdlLmdldEtleXMoKS5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICBMaWIuc2hvd1Byb2plY3RzKHByb2plY3QpXG4gIH0gKVxuXG4gIC8vIFNob3cgdGhlIGRlZmF1bHQgcHJvamVjdHNcbiAgTGliLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxufSkoKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmltcG9ydCBVSSBmcm9tICcuL3VpJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0cydcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcblxuY29uc3QgdG9kb0Zvcm06IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZm9ybScpXG5jb25zdCB0aXRsZTogSFRNTElucHV0RWxlbWVudCA9IHRvZG9Gb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG5jb25zdCBkdWVEYXRlOiBIVE1MSW5wdXRFbGVtZW50ID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI2R1ZS1kYXRlJylcbmNvbnN0IHByaW9yaXR5OiBIVE1MSW5wdXRFbGVtZW50ID0gdG9kb0Zvcm0ucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcbmNvbnN0IG5vdGU6IEhUTUxJbnB1dEVsZW1lbnQgPSB0b2RvRm9ybS5xdWVyeVNlbGVjdG9yKCcjbm90ZScpXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gSG9sZGVyIGZvciB0YXNrcyB0byBlZGl0XG4gIHRhc2tUb0VkaXQ6IHRvZG8sXG5cblxuICAvLyBBZGQgdG9kbyBhY3Rpb25zIHRvIGl0J3MgVUlcbiAgYWRkVGFza0V2ZW50cyh0YXNrOiBIVE1MRWxlbWVudCwgdGFza0RhdGE6IHRvZG8pIHtcbiAgICBjb25zdCB0YXNrSWQgPSBwYXJzZUludCh0YXNrLmdldEF0dHJpYnV0ZSgnZGF0YS10b2RvLWlkJykpXG5cbiAgICAvLyBTaG93IGRldGFpbHMgb2YgdGhlIHRhc2sgd2hlbiB0aXRsZSBpcyBjbGlja2VkXG4gICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGFza0RldGFpbHM6IEhUTUxFbGVtZW50ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXRhaWxzJylcbiAgICAgIFVJLnNldERpc3BsYXkodGFza0RldGFpbHMsICdibG9jaycpXG4gICAgfSlcbiAgICAvLyBUb2dnbGUgc3RhdHVzIGFuZCBzaG93IGNoYW5nZXMgd2hlbiBzdGF0dXMgaXMgY2xpY2tlZFxuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stc3RhdHVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay10aXRsZScpXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKCdmaW5pc2hlZC10YXNrJylcbiAgICAgIFByb2plY3QudG9nZ2xlVG9kb1N0YXR1cyh0YXNrRGF0YS5wcm9qZWN0LCB0YXNrSWQpXG4gICAgfSlcbiAgICAvLyBEZWxldGUgdGFza1xuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLnJlbW92ZS10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBQcm9qZWN0LmRlbGV0ZVRvZG8oUHJvamVjdC5jdXJyZW50UHJvamVjdCwgdGFza0lkKVxuICAgICAgVUkudGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzaylcbiAgICB9KVxuICAgIC8vIEVkaXQgdGFza1xuICAgIHRhc2sucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YXNrVG9FZGl0ID0gdGFza0RhdGFcbiAgICAgIGNvbnN0IGNoYW5nZVRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2F2ZS1jaGFuZ2VzJylcbiAgICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctdG9kby1mb3JtJylcbiAgICAgIC8vIFVJLnNldERpc3BsYXkodG9kb0Zvcm0sICdibG9jaycpXG4gICAgICBjaGFuZ2VUb2RvQnRuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJ1xuICAgICAgVUkuc2V0RGlzcGxheShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRvZG8nKSwgJ25vbmUnKVxuICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXByb2plY3QtZm9ybScpXG5cbiAgICAgIHRpdGxlLnZhbHVlID0gdGFza0RhdGEudGl0bGVcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0YXNrRGF0YS5kdWVEYXRlXG4gICAgICB0aXRsZS52YWx1ZSA9IHRhc2tEYXRhLnRpdGxlXG4gICAgICBub3RlLnZhbHVlID0gdGFza0RhdGEubm90ZVxuICAgICAgcHJpb3JpdHkudmFsdWUgPSBgJHt0YXNrRGF0YS5wcmlvcml0eX1gXG5cbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tcbiAgfSxcblxuXG4gIC8vIEVkaXQgYSB0YXNrXG4gIGVkaXRUYXNrKCkge1xuICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtdG9kbycpLCAnaW5saW5lJylcbiAgICBVSS5zZXREaXNwbGF5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLWNoYW5nZXMnKSwgJ25vbmUnKVxuICAgIGNvbnN0IHRhc2sgPSB0b2RvLm5ldyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIHBhcnNlSW50KHByaW9yaXR5LnZhbHVlKSxcbiAgICAgICAgdGhpcy50YXNrVG9FZGl0LmlzQ29tcGxldGUsXG4gICAgICAgIG5vdGUudmFsdWUsXG4gICAgICAgIHRoaXMudGFza1RvRWRpdC5pZCxcbiAgICAgIClcbiAgICB0YXNrLnByb2plY3QgPSB0aGlzLnRhc2tUb0VkaXQucHJvamVjdFxuICAgIFByb2plY3QudXBkYXRlVG9kbyh0YXNrKVxuICAgIHRoaXMuY2xlYXJGb3JtSW5wdXQoKVxuICAgIHRoaXMuc2hvd1Rhc2tzKFByb2plY3QuZ2V0KHRhc2sucHJvamVjdCkpXG4gIH0sXG5cbiAgLy8gRGlzcGxheSBhIGNvbGxlY3Rpb24gb2YgdG9kbyB0byB1c2VyXG4gIHNob3dUYXNrcyh0YXNrczogdG9kb1tdKSB7XG4gICAgVUkudGFza0xpc3QudGV4dENvbnRlbnQgPSAnJ1xuICAgIHRhc2tzLmZvckVhY2goIHRhc2sgPT4ge1xuICAgICAgVUkudGFza0xpc3QuYXBwZW5kQ2hpbGQoXG4gICAgICAgIHRoaXMuYWRkVGFza0V2ZW50cyhVSS5uZXdUYXNrKHRhc2spLCB0YXNrKVxuICAgICAgKVxuICAgIH0pXG4gIH0sXG5cblxuICAvLyBVc2luZyB1c2VyIGRlZmluZWQgdmFsdWVzLCBhZGQgbmV3IHRvZG8gdG8gcHJvamVjdHNcbiAgY3JlYXRlVG9kbygpIHtcbiAgICBpZiAodGl0bGUudmFsdWUubGVuZ3RoIDwgMSkgcmV0dXJuIGZhbHNlXG5cbiAgICBQcm9qZWN0LmFkZFRvZG8oIFByb2plY3QuY3VycmVudFByb2plY3QsXG4gICAgICB0b2RvLm5ldyhcbiAgICAgICAgdGl0bGUudmFsdWUsXG4gICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgIE51bWJlci5wYXJzZUludChwcmlvcml0eS52YWx1ZSksXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBub3RlLnZhbHVlLFxuICAgICAgICBQcm9qZWN0Lm5leHRUYXNrSWQrKyxcbiAgICAgICkgXG4gICAgKVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfSxcblxuXG4gIC8vIEVyYXNlIHZhbHVlcyBlbnRlcmVkIGludG8gZm9ybSBieSB1c2VyXG4gIGNsZWFyRm9ybUlucHV0KCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG4gICAgdGl0bGUudmFsdWUgPSAnJ1xuICAgIGR1ZURhdGUudmFsdWUgPSB0b2RheS5zbGljZSgwLDEwKVxuICAgIHByaW9yaXR5LnZhbHVlID0gJ1ByaW9yaXR5J1xuICAgIG5vdGUudmFsdWUgPSAnJ1xuICB9LFxuXG5cbiAgLy8gQ3JlYXRlIG5ldyBwcm9qZWN0XG4gIG5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0gI3RpdGxlJylcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lRWxlbWVudC52YWx1ZVxuICAgIGNvbnN0IHByb2plY3RFeGlzdHMgPSBQcm9qZWN0Lmhhc1Byb2plY3QocHJvamVjdE5hbWUpXG4gICAgcHJvamVjdE5hbWVFbGVtZW50LnZhbHVlID0gJydcblxuICAgIGlmIChwcm9qZWN0TmFtZS5sZW5ndGggPiAwICYmICFwcm9qZWN0RXhpc3RzKSB7XG4gICAgICB0aGlzLnNob3dQcm9qZWN0cyhwcm9qZWN0TmFtZSlcbiAgICAgIFByb2plY3QuYWRkKHByb2plY3ROYW1lKVxuXG4gICAgICBpZiAoUHJvamVjdC5jdXJyZW50UHJvamVjdCAhPT0gcHJvamVjdE5hbWUpXG4gICAgICAgIFByb2plY3QuY3VycmVudFByb2plY3QgPSBwcm9qZWN0TmFtZVxuXG4gICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldChwcm9qZWN0TmFtZSkpXG4gICAgfSBlbHNlIGlmIChwcm9qZWN0RXhpc3RzKSB7XG4gICAgICBhbGVydCgnQ2F1dGlvbjogUHJvamVjdCBhbHJlYWR5IGV4aXN0cyEhJylcbiAgICAgIHRoaXMuc2hvd1Rhc2tzKFByb2plY3QuZ2V0KHByb2plY3ROYW1lKSlcbiAgICB9IGVsc2UgaWYgKHByb2plY3ROYW1lLmxlbmd0aCA8IDMpXG4gICAgICBhbGVydCgnRXJyb3I6IFByb2plY3QgbmFtZSBtdXN0IGJlIGFib3ZlIHR3byBjaGFyYWN0ZXJzJylcbiAgfSxcblxuXG4gIC8vIERlbGV0ZSB0aGUgY3VycmVudCBwcm9qZWN0XG4gIGRlbGV0ZUN1cnJlbnRQcm9qZWN0KCkge1xuICAgIGNvbnN0IHByb2plY3QgPSBVSS5wcm9qZWN0TGlzdC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0LW5hbWUnKVxuICAgICAgaWYgKHByb2plY3ROYW1lID09PSBQcm9qZWN0LmN1cnJlbnRQcm9qZWN0KVxuICAgICAgICBVSS5yZW1vdmVQcm9qZWN0KHByb2plY3RbaV0pXG4gICAgfVxuICAgIFByb2plY3QuZGVsKFByb2plY3QuY3VycmVudFByb2plY3QpXG4gICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9ICdkZWZhdWx0J1xuICAgIHRoaXMuc2hvd1Byb2plY3RzKCdkZWZhdWx0JylcbiAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxuICB9LFxuXG4gIHNob3dQcm9qZWN0cyhwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lID09ICdkZWZhdWx0JykgcmV0dXJuO1xuICAgIGNvbnN0IHByb2plY3RVSSA9IFVJLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpXG5cbiAgICBwcm9qZWN0VUkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldChwcm9qZWN0TmFtZSkpXG4gICAgICBVSS5oaWRlTWVudSgpXG4gICAgfSlcblxuICAgIHByb2plY3RVSS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3QnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIFByb2plY3QuZGVsKHByb2plY3ROYW1lKVxuICAgICAgICBVSS5yZW1vdmVQcm9qZWN0KHByb2plY3RVSSlcbiAgICAgICAgUHJvamVjdC5jdXJyZW50UHJvamVjdCA9ICdkZWZhdWx0J1xuICAgICAgICB0aGlzLnNob3dUYXNrcyhQcm9qZWN0LmdldCgpKVxuICAgICAgfSlcblxuICAgIFVJLmFkZFByb2plY3QocHJvamVjdFVJKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi9zdG9yYWdlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljIGN1cnJlbnRQcm9qZWN0ID0gJ2RlZmF1bHQnXG4gIHN0YXRpYyBuZXh0VGFza0lkID0gMTIwMjMwMVxuXG4gIHN0YXRpYyBkYXRhOiB7W2tleTogc3RyaW5nXTogdG9kb1tdfSA9IHtcbiAgICAnZGVmYXVsdCc6IFtcbiAgICAgIHRvZG8ubmV3KCdDbGljay9UYXAgdG9kbyB0aXRsZSB0byBzZWUgbW9yZS4uLicsXG4gICAgICAgICAgICAgICAnMjAyMy0wNC0xOScsXG4gICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICctXy0gSGEhIFlvdVxcJ3JlIG5vdyBpbiBteSBiwrdfwrdieSB0cmFwISA6KScsXG4gICAgICAgICAgICAgICB0aGlzLm5leHRUYXNrSWQrKyksXG4gICAgICB0b2RvLm5ldygnVGFrZSBhIHN0cm9sbCcsXG4gICAgICAgICAgICAgICAnMjAyMC0xMS0xNScsXG4gICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAnVGVzdGluZyB5b3VyIGxpbWl0cyBkb2VzblxcJ3QgYnJlYWsgeW91LiBEb2VzIGl0PycsXG4gICAgICAgICAgICAgICB0aGlzLm5leHRUYXNrSWQrKyksXG4gICAgICB0b2RvLm5ldygnQnV5IFJpY2sgYSBuZXcgUXVhbnR1bSBwaHlzaWNzIHRleHRib29rIGZyb20gdGhlIG1hbGwnLFxuICAgICAgICAgICAgICAgJzIwMjMtMDctMjgnLFxuICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAnT2ggaGVhdmVucyEgTXkgVUkgc3Vja3MhIC1fLSBEb25cXCd0IGV2ZW4gdGFsayBhYm91dCB0aGUgbG9naWMnLFxuICAgICAgICAgICAgICAgdGhpcy5uZXh0VGFza0lkKyspLFxuICAgIF0sXG4gIH1cblxuICAvLyBHZXQgcHJvamVjdCBcbiAgc3RhdGljIGdldChwcm9qZWN0TmFtZSA9ICdkZWZhdWx0Jyk6IHRvZG9bXSB7XG4gICAgaWYgKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSlcbiAgICAgIHJldHVybiB0aGlzLmRhdGFbcHJvamVjdE5hbWVdLm1hcCh0ID0+IHQpXG4gICAgcmV0dXJuIFtdXG4gIH1cblxuXG4gIC8vIEFkZCBwcm9qZWN0XG4gIHN0YXRpYyBhZGQocHJvamVjdE5hbWU6IHN0cmluZykge1xuICAgIGlmICghKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSkpXG4gICAgICB0aGlzLmRhdGFbcHJvamVjdE5hbWVdID0gW11cbiAgICBTdG9yYWdlLnN0b3JlVG9kb0RhdGEocHJvamVjdE5hbWUsIHRoaXMuZ2V0KHByb2plY3ROYW1lKSlcbiAgfVxuXG5cbiAgLy8gRGVsZXRlIHByb2plY3RcbiAgc3RhdGljIGRlbChwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAnZGVmYXVsdCcpXG4gICAgICBkZWxldGUgdGhpcy5kYXRhW3Byb2plY3ROYW1lXVxuICAgIFN0b3JhZ2UucmVtb3ZlKHByb2plY3ROYW1lKVxuICB9XG5cbiAgXG4gIC8vIEFkZCB0b2RvIGl0ZW0gdG8gYSBwcm9qZWN0XG4gIHN0YXRpYyBhZGRUb2RvKHByb2plY3ROYW1lOiBzdHJpbmcsIHRhc2s6IHRvZG8pIHtcbiAgICB0YXNrLnByb2plY3QgPSBwcm9qZWN0TmFtZVxuICAgIGlmICghKHByb2plY3ROYW1lIGluIHRoaXMuZGF0YSkpXG4gICAgICB0aGlzLmFkZChwcm9qZWN0TmFtZSlcblxuICAgIHRoaXMuZGF0YVtwcm9qZWN0TmFtZV0ucHVzaCh0YXNrKVxuICAgIFN0b3JhZ2Uuc3RvcmVUb2RvRGF0YShwcm9qZWN0TmFtZSwgdGhpcy5nZXQocHJvamVjdE5hbWUpKVxuICB9XG5cblxuICAvLyAoVW4pY2hlY2sgdG9kbyB0YXNrIFxuICBzdGF0aWMgdG9nZ2xlVG9kb1N0YXR1cyhwcm9qZWN0TmFtZTogc3RyaW5nLCB0YXNrSWQ6IG51bWJlcikge1xuICAgIHRoaXMuZGF0YVtwcm9qZWN0TmFtZV0uZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2suaWQgPT09IHRhc2tJZClcbiAgICAgICAgdGFzay5pc0NvbXBsZXRlID0gIXRhc2suaXNDb21wbGV0ZVxuICAgIH0pXG4gICAgU3RvcmFnZS5zdG9yZVRvZG9EYXRhKHByb2plY3ROYW1lLCB0aGlzLmdldChwcm9qZWN0TmFtZSkpXG4gIH1cblxuICAvLyBDaGFuZ2UgdG9kbyB0YXNrIGluZm9ybWF0aW9uXG4gIHN0YXRpYyB1cGRhdGVUb2RvKG5ld1Rhc2s6IHRvZG8pIHtcbiAgICB0aGlzLmRhdGFbbmV3VGFzay5wcm9qZWN0XSA9IFxuICAgICAgdGhpcy5kYXRhW25ld1Rhc2sucHJvamVjdF0ubWFwKCh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmlkID09PSBuZXdUYXNrLmlkKVxuICAgICAgICAgIHJldHVybiBuZXdUYXNrXG4gICAgICAgIHJldHVybiB0YXNrXG4gICAgICB9KVxuICAgIFN0b3JhZ2Uuc3RvcmVUb2RvRGF0YShcbiAgICAgIG5ld1Rhc2sucHJvamVjdCxcbiAgICAgIHRoaXMuZ2V0KG5ld1Rhc2sucHJvamVjdClcbiAgICApXG4gIH1cbiAgXG4gIC8vIERlbGV0ZSB0b2RvIGl0ZW0gXG4gIHN0YXRpYyBkZWxldGVUb2RvKHByb2plY3ROYW1lOiBzdHJpbmcsIHRhc2tJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5kYXRhW3Byb2plY3ROYW1lXSA9IFxuICAgICAgdGhpcy5kYXRhW3Byb2plY3ROYW1lXS5tYXAoKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2tJZCAhPSB0YXNrLmlkKSByZXR1cm4gdGFza1xuICAgICAgfSlcbiAgICBTdG9yYWdlLnN0b3JlVG9kb0RhdGEocHJvamVjdE5hbWUsIHRoaXMuZ2V0KHByb2plY3ROYW1lKSlcbiAgfVxuXG5cbiAgLy8gQ2hlY2sgZXhpc3RlbmNlIG9mIGEgcHJvamVjdFxuICBzdGF0aWMgaGFzUHJvamVjdChwcm9qZWN0TmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHByb2plY3ROYW1lIGluIHRoaXMuZGF0YVxuICB9XG5cbiAgLy8gR2V0IHRhc2tzIHdpdGggdG9kYXkncyBkYXRlXG4gIHN0YXRpYyBnZXRUb2RheVRhc2tzKCkge1xuICAgIGNvbnN0IHRvZGF5VGFza3M6IHRvZG9bXSA9IFtdXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKCAocHJvamVjdCkgPT4ge1xuICAgICAgdGhpcy5kYXRhW3Byb2plY3RdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgaWYgKHRhc2suZHVlRGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKHRhc2spXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gdG9kYXlUYXNrc1xuICB9XG5cbiAgLy8gR2V0IGEgY2hlY2tsaXN0IG9mIGFsbCB0b2RvIHRhc2tzXG4gIHN0YXRpYyBnZXRDaGVja2xpc3QoKTogdG9kb1tdIHtcbiAgICBjb25zdCBjaGVja2xpc3Q6IHRvZG9bXSA9IFtdXG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goIHByb2plY3QgPT4ge1xuICAgICAgdGhpcy5kYXRhW3Byb2plY3RdLmZvckVhY2goICh0YXNrKSA9PiB7XG4gICAgICAgIGlmICh0YXNrLmlzQ29tcGxldGUgPT09IGZhbHNlKSBjaGVja2xpc3QucHVzaCh0YXNrKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgT2JqZWN0LmtleXModGhpcy5kYXRhKS5mb3JFYWNoKCBwcm9qZWN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YVtwcm9qZWN0XS5mb3JFYWNoKCAodGFzaykgPT4ge1xuICAgICAgICBpZiAodGFzay5pc0NvbXBsZXRlID09PSB0cnVlKSBjaGVja2xpc3QucHVzaCh0YXNrKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGNoZWNrbGlzdFxuICB9XG5cbiAgc3RhdGljIGluaXRpYWxpemVEYXRhKCkge1xuICAgIGlmIChTdG9yYWdlLmNoZWNrU3RvcmFnZSgnbG9jYWxTdG9yYWdlJykpXG4gICAgICBpZiAoU3RvcmFnZS5nZXRTaXplKCkgPiAwKSB7XG4gICAgICAgIFN0b3JhZ2UuZ2V0S2V5cygpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgaWYgKHByb2plY3QgPT09ICdkZWZhdWx0JykgdGhpcy5kYXRhWydkZWZhdWx0J10gPSBbXVxuXG4gICAgICAgICAgU3RvcmFnZS5nZXRUb2RvRGF0YShwcm9qZWN0KS5mb3JFYWNoKCh0YXNrOiB0b2RvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvZG8ocHJvamVjdCwgdGFzaylcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN0b3JlVG9kb0RhdGEoa2V5OiBzdHJpbmcsIGRhdGE6IHRvZG9bXSkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICB9LFxuXG5cbiAgZ2V0VG9kb0RhdGEoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKVxuICB9LFxuXG5cbiAgZ2V0S2V5cygpOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgKytpKVxuICAgICAga2V5cy5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgcmV0dXJuIGtleXNcbiAgfSxcblxuICBcbiAgZ2V0U2l6ZSgpIHsgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGggfSxcblxuXG4gIHJlbW92ZShrZXk6IHN0cmluZykgeyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpIH0sXG5cblxuICBjaGVja1N0b3JhZ2Uoa2V5OiBzdHJpbmcpIHtcbiAgICBsZXQgc3RvcmFnZVxuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W2tleSBhcyBrZXlvZiB0eXBlb2Ygd2luZG93XVxuICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJ1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpXG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeClcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAoXG4gICAgICAgICAgZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIGUubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicgfHxcbiAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCdcbiAgICAgICAgKSAmJiAoc3RvcmFnZSAmJiBzdG9yYWdlLmxlbmd0aCAhPT0gMClcbiAgICB9XG4gIH0sXG59XG4iLCIndXNlIHN0cmljdCdcblxuY2xhc3MgdG9kbyB7XG4gIHRpdGxlXG4gIGR1ZURhdGVcbiAgcHJpb3JpdHlcbiAgbm90ZVxuICBpc0NvbXBsZXRlXG4gIGlkOiBudW1iZXJcbiAgcHJvamVjdCA9ICdkZWZhdWx0J1xuXG4gIGNvbnN0cnVjdG9yIChcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGR1ZURhdGU6IHN0cmluZyxcbiAgICBwcmlvcml0eSA9IDAsXG4gICAgaXNDb21wbGV0ZSA9IGZhbHNlLFxuICAgIG5vdGUgPSAnJyxcbiAgICBpZDogbnVtYmVyXG4gICkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlXG4gICAgdGhpcy5ub3RlID0gbm90ZVxuICAgIHRoaXMuaWQgPSBpZFxuICB9XG5cbiAgc3RhdGljIG5ldyggdGl0bGU6IHN0cmluZyxcbiAgICAgICAgICAgICBkdWVEYXRlOiBzdHJpbmcsXG4gICAgICAgICAgICAgcHJpb3JpdHkgPSAwLFxuICAgICAgICAgICAgIGlzQ29tcGxldGUgPSBmYWxzZSxcbiAgICAgICAgICAgICBub3RlID0gJycsXG4gICAgICAgICAgICAgaWQ6IG51bWJlclxuICAgICAgICAgICAgKTogdG9kbyB7XG4gICAgcmV0dXJuIG5ldyB0b2RvKCB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUsXG4gICAgICAgICAgICAgICAgICAgIG5vdGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9cbiIsIid1c2Ugc3RyaWN0J1xuXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZTIuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRhc2tMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyksXG4gIHByb2plY3RMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpLFxuXG5cbiAgbmV3VGFzayh0b2RvOiB0b2RvKSB7XG4gICAgLy8gVG9kbyBFbGVtZW50XG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIHRhc2suY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9kby1pZCcsIGAke3RvZG8uaWR9YClcbiAgICAvLyBDb250YWluZXIgZm9yIHRhc2sgaW5mb3JtYXRpb24gc2hvd24gYnkgZGVmYXVsdFxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICAvLyBDb250YWluZXIgZm9yIHRvZG8gZGV0YWlscyBub3Qgc2hvd24gYnkgZGVmYXVsdFxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgICBkZXRhaWxzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpXG5cbiAgICAvLyBUYXNrIHN0YXR1cyBjaGVja2JveFxuICAgIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGFza1N0YXR1cy50eXBlID0gJ2NoZWNrYm94J1xuICAgIHRhc2tTdGF0dXMuY2hlY2tlZCA9IHRvZG8uaXNDb21wbGV0ZVxuICAgIHRhc2tTdGF0dXMuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMnKVxuICAgIC8vIFRhc2sgdGl0bGVcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJylcbiAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdG9kby50aXRsZVxuICAgIHRhc2tUaXRsZS50aXRsZSA9IHRvZG8udGl0bGVcbiAgICBpZiAodG9kby5pc0NvbXBsZXRlKSB0YXNrVGl0bGUuY2xhc3NMaXN0LnRvZ2dsZSgnZmluaXNoZWQtdGFzaycpXG4gICAgLy8gVGFzayBkdWUgZGF0ZVxuICAgIGNvbnN0IHRhc2tEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICB0YXNrRHVlLmlubmVyVGV4dCA9IHRvZG8uZHVlRGF0ZS5yZXBsYWNlKCctJywgJyDCtyAnKS5yZXBsYWNlKCctJywgJyDCtyAnKVxuICAgIHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWUtZGF0ZScpXG4gICAgLy8gVGFzayBkZWxldGlvbiBidXR0b25cbiAgICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkZWxldGVUYXNrLmlubmVyVGV4dCA9ICfDlydcbiAgICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS10b2RvJylcbiAgICAvLyBUYXNrIEVkaXQgYnV0dG9uXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSAnRWRpdCdcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtdGFzaycpXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAndG9kby1mb3JtJylcbiAgICAvLyBUYXNrIG5vdGVcbiAgICBjb25zdCB0YXNrTm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIHRhc2tOb3RlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbm90ZScpXG4gICAgY29uc3Qgbm90ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIG5vdGVMYWJlbC5pbm5lclRleHQgPSAnTm90ZSdcbiAgICBjb25zdCBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbm90ZS50ZXh0Q29udGVudCA9IHRvZG8ubm90ZVxuICAgIHRhc2tOb3RlLmFwcGVuZENoaWxkKG5vdGVMYWJlbClcbiAgICB0YXNrTm90ZS5hcHBlbmRDaGlsZChub3RlKVxuXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGl2MS5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKVxuICAgIGRpdjEuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGl2MSlcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXG4gICAgdGFzay5hcHBlbmRDaGlsZChzZWN0aW9uKVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlKVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQodGFza05vdGUpXG4gICAgdGFzay5hcHBlbmRDaGlsZChkZXRhaWxzKVxuXG4gICAgcmV0dXJuIHRhc2tcbiAgfSxcblxuXG4gIHJlbW92ZVRhc2sodGFzazogSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRoaXMudGFza0xpc3QucmVtb3ZlQ2hpbGQodGFzaylcbiAgfSxcblxuXG4gIGFkZFRhc2sodGFzazogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhc2tMaXN0LmFwcGVuZENoaWxkKHRoaXMubmV3VGFza1VJKHRhc2spKVxuICB9LFxuXG5cbiAgY3JlYXRlUHJvamVjdCh0aXRsZTogc3RyaW5nKSB7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSAnICcgKyB0aXRsZVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGRlbGV0ZVByb2plY3QudGV4dENvbnRlbnQgPSAnw5cnXG4gICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGUtcHJvamVjdCcpXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1wcm9qZWN0JywgdGl0bGUpXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KVxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxuXG4gICAgcmV0dXJuIHByb2plY3RcbiAgfSxcblxuXG4gIGFkZFByb2plY3QocHJvamVjdDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLnByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH0sXG5cblxuICByZW1vdmVQcm9qZWN0KHByb2plY3Q6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5wcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChwcm9qZWN0KVxuICB9LFxuXG5cbiAgc2V0RGlzcGxheShlbGVtZW50OiBIVE1MRWxlbWVudCwgZGlzcGxheSA9ICcnKSB7XG4gICAgaWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PT0gJycgfHwgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpXG4gICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XG4gICAgZWxzZSBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfSxcbiAgICBcblxuICBzaG93TWVudSgpIHtcbiAgICBjb25zdCBhc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJylcbiAgICAvLyB0aGlzLnNldERpc3BsYXkoYXNpZGUsICdibG9jaycpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnN0eWxlLm9wYWNpdHkgPSAnMC4yJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ3RydWUnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAnMC4yJ1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAndHJ1ZScpXG4gICAgYXNpZGUuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1tZW51JylcbiAgfSxcblxuXG4gIGhpZGVNZW51KCkge1xuICAgIGNvbnN0IGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKVxuICAgIC8vIHRoaXMuc2V0RGlzcGxheShhc2lkZSwgJ25vbmUnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKS5zdHlsZS5vcGFjaXR5ID0gJzEnXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnZmFsc2UnKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKS5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJ2ZhbHNlJylcbiAgICBhc2lkZS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93LW1lbnUnKVxuICB9LFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9