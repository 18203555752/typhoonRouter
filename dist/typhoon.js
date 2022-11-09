(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/base.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/base.scss ***!
  \****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./grade.png */ "./src/style/grade.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes rotation {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(-1turn); } }\n\n.mapboxgl-popup {\n  max-width: unset !important; }\n\n.img-pos {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 34px;\n  height: 35px; }\n  .img-pos.s6 {\n    background-position-x: 0; }\n  .img-pos.s7 {\n    background-position-x: 0; }\n  .img-pos.s8 {\n    background-position-x: -35px; }\n  .img-pos.s9 {\n    background-position-x: -35px; }\n  .img-pos.s10 {\n    background-position-x: -70px; }\n  .img-pos.s11 {\n    background-position-x: -70px; }\n  .img-pos.s12 {\n    background-position-x: -105px; }\n  .img-pos.s13 {\n    background-position-x: -105px; }\n  .img-pos.s14 {\n    background-position-x: -140px; }\n  .img-pos.s15 {\n    background-position-x: -140px; }\n  .img-pos.s16 {\n    background-position-x: -175px; }\n  .img-pos.s17 {\n    background-position-x: -175px; }\n  .img-pos.s18 {\n    background-position-x: -175px; }\n  .img-pos.s19 {\n    background-position-x: -175px; }\n  .img-pos.s20 {\n    background-position-x: -175px; }\n  .img-pos.active {\n    animation: rotation 1s linear infinite; }\n\n.mapboxgl-popup-content {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4); }\n\n.windRouterPop__box {\n  width: 16rem; }\n  .windRouterPop__box .windRouterPop_row {\n    display: flex;\n    justify-content: flex-start;\n    padding: 0.2rem 0; }\n    .windRouterPop__box .windRouterPop_row .row-time {\n      flex-basis: 6rem;\n      display: flex;\n      justify-content: flex-end;\n      font-size: 0.95rem;\n      font-weight: bold; }\n    .windRouterPop__box .windRouterPop_row .row-content {\n      flex: 1;\n      font-size: 0.9rem;\n      display: flex;\n      justify-content: flex-start; }\n", "",{"version":3,"sources":["webpack://./src/style/base.scss"],"names":[],"mappings":"AAiBA;EACE;IACE,uBAAuB,EAAA;EAGzB;IACE,yBAAyB,EAAA,EAAA;;AAG7B;EACE,2BAA2B,EAAA;;AAG7B;EACE,yDAAoC;EACpC,WAAW;EACX,YAAY,EAAA;EAHd;IAMM,wBAnCG,EAAA;EA6BT;IAMM,wBAlCG,EAAA;EA4BT;IAMM,4BAjCO,EAAA;EA2Bb;IAMM,4BAhCO,EAAA;EA0Bb;IAMM,4BA/BQ,EAAA;EAyBd;IAMM,4BA9BQ,EAAA;EAwBd;IAMM,6BA7BS,EAAA;EAuBf;IAMM,6BA5BS,EAAA;EAsBf;IAMM,6BA3BS,EAAA;EAqBf;IAMM,6BA1BS,EAAA;EAoBf;IAMM,6BAzBS,EAAA;EAmBf;IAMM,6BAxBS,EAAA;EAkBf;IAMM,6BAvBS,EAAA;EAiBf;IAMM,6BAtBS,EAAA;EAgBf;IAMM,6BArBS,EAAA;EAef;IAUI,sCAAsC,EAAA;;AAG1C;EACE,2CAA2C,EAAA;;AAE7C;EACE,YAAY,EAAA;EADd;IAGI,aAAa;IACb,2BAA2B;IAC3B,iBAAiB,EAAA;IALrB;MAOM,gBAAgB;MAChB,aAAa;MACb,yBAAyB;MACzB,kBAAkB;MAClB,iBAAiB,EAAA;IAXvB;MAcM,OAAO;MACP,iBAAiB;MACjB,aAAa;MACb,2BAA2B,EAAA","sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./src/style/base.scss":
/*!*****************************!*\
  !*** ./src/style/base.scss ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/base.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/base/Layer.ts":
/*!***************************!*\
  !*** ./src/base/Layer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseLayer": () => (/* binding */ BaseLayer),
/* harmony export */   "LineLayer": () => (/* binding */ LineLayer),
/* harmony export */   "WindCircleLayer": () => (/* binding */ WindCircleLayer),
/* harmony export */   "forecastRouterLayer": () => (/* binding */ forecastRouterLayer),
/* harmony export */   "windRouteCircleLayer": () => (/* binding */ windRouteCircleLayer)
/* harmony export */ });
/* harmony import */ var _mapBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapBox */ "./src/base/mapBox.ts");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _turf_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/circle */ "./node_modules/@turf/circle/dist/es/index.js");
// import mapbox from 'mapbox-gl'



/**
 * 基础图层
 */
class BaseLayer {
    // protected keysTxt:string[] = []
    constructor(mapbox, map, arr) {
        this.layers = [];
        this.mapbox = mapbox;
        this.map = map;
        this.geoJson = this.getJeoJson(arr);
        this.addSource(this.geoJson);
    }
    /**
     *获得ids
     */
    get ids() {
        const arr = this.layers.map((layer) => layer.id);
        return arr;
    }
    /**
     * 移除图层
     */
    removeLayer() {
        this.layers.forEach((layer) => {
            try {
                this.map.removeLayer(layer.id);
            }
            catch (error) { }
        });
        this.layers = [];
    }
    /**
     * 移除数据源
     */
    removeSource() {
        try {
            this.map.removeSource(this.sourceId);
        }
        catch (error) { }
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
    }
    /**
     * 增加数据源
     */
    addSource(source) {
        this.sourceId = this.sourceId || (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.map.addSource(this.sourceId, source);
        return this.map;
    }
    // 生成geoJson
    getJeoJson(arr) {
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: arr,
            },
        };
        return geoJson;
    }
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color = '#e43', offset = [0, 0.7], size = 16) {
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    addFeature(item) {
        this.geoJson.data.features.push(item);
        // this.geoJson.data.features[0].geometry.coordinates.push(...item.geometry.coordinates)
        //@ts-ignore
        this.map.getSource(this.sourceId).setData(this.geoJson.data);
    }
}
/**
 * 台风路径实线
 */
class LineLayer extends BaseLayer {
    constructor(mapbox, map, arr) {
        arr = arr || [
            {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [],
                },
            },
        ];
        super(mapbox, map, arr);
    }
    /**
     *
     * @param color
     * @param offset
     * @param size
     * @returns
     */
    addLineLayer() {
        const id = 'line_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layout = {
            'line-cap': 'round',
            'line-join': 'round',
        };
        const paint = {
            'line-color': '#333',
            'line-width': 2,
            'line-opacity': 0.8,
        };
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].getLineLayer({
            id,
            layout,
            paint,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    addCoordinates(item) {
        // this.geoJson.data.features.push(item)
        this.geoJson.data.features[0].geometry.coordinates.push([
            item.lng,
            item.lat,
        ]);
        //@ts-ignore
        this.map.getSource(this.sourceId).setData(this.geoJson.data);
    }
}
// 路径上的点
class windRouteCircleLayer extends BaseLayer {
    constructor(mapbox, map, arr) {
        // this.popup
        super(mapbox, map, arr);
        this.popup = null;
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
        // this.map.off('click', this.layers[0].id, this.mouseClickFunc)
    }
    /**
     * 添加图层
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color = '#e43', offset = [0, 0.7], size = 16) {
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: this.sourceId,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        // this.map.on('click', this.layers[0].id, this.mouseClickFunc.bind(this))
        this.map.on('mouseenter', this.layers[0].id, this.mouseEnterFunc.bind(this));
        this.map.on('mouseleave', this.layers[0].id, this.mouseOutFunc.bind(this));
        return this;
    }
    /**
     * 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e) {
        this.map.getCanvas().style.cursor = 'pointer';
        // console.log(e.features)
        if (e.features) {
            if (this.popup)
                this.popup.remove();
            this.addPop(e.features[0].properties);
        }
    }
    /**
     * 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc() {
        this.map.getCanvas().style.cursor = '';
        if (this.popup)
            this.popup.remove();
    }
    addPop(message) {
        //@ts-ignore
        const html = `<div class='windRouterPop__box'>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${message.time}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${message.lng}E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${message.pressure}百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${message.speed}米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${message.power}级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${message.strong}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${message.move_speed}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${message.move_dir}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>七级半径： </div> <div class='row-content'>${message.radius7}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十级半径： </div> <div class='row-content'>${message.radius10}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>十二级半径： </div> <div class='row-content'>${message.radius12}</div> </div>
    </div>
    `;
        this.popup = new this.mapbox.Popup({ closeOnClick: false })
            .setLngLat([message.lng, message.lat])
            .setHTML(html)
            .addTo(this.map);
        return html;
    }
}
// 风圈
class WindCircleLayer {
    constructor(map, center, arr, color = '#78C5BB') {
        this.step = 180;
        this.geoJson = null;
        this.layer = null;
        this.color = color;
        this.map = map;
        this.arr = arr;
        this.center = center;
        this.getFeatures();
        this.addSource(this.geoJson);
    }
    getFeatures() {
        const step = Math.ceil(this.step / 4);
        this.step = step * 4;
        const coordinates = [];
        let feature;
        this.arr.forEach((r, i) => {
            feature = (0,_turf_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(this.center, r, { steps: this.step });
            coordinates.push(...feature.geometry.coordinates[0].slice(i * step, (i + 1) * step + 1));
        });
        // features.forEach(item => {
        //   coordinates.push (...item.geometry.coordinates[0])
        // })
        feature.properties.color = this.color;
        feature.geometry.coordinates[0] = coordinates;
        // console.log(feature)
        this.geoJson = this.getJeoJson([feature]);
    }
    /**
     * 增加数据源
     */
    addSource(source) {
        this.sourceId = this.sourceId || (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.map.addSource(this.sourceId, source);
        return this.map;
    }
    /**
     * 画风圈
     * @returns
     */
    addCircleLayer() {
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].drawFillPolygon(this.sourceId, 0.4);
        this.map.addLayer(layer);
        this.layer = layer;
        return this;
    }
    // 生成geoJson
    getJeoJson(arr) {
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: arr,
            },
        };
        return geoJson;
    }
    clearLayer() {
        this.map.getLayer(this.layer.id) && this.map.removeLayer(this.layer.id);
        this.map.getSource(this.sourceId) && this.map.removeSource(this.sourceId);
    }
}
/**
 * 台风路径（预报）虚线
 */
class forecastRouterLayer {
    // protected keysTxt:string[] = []
    constructor(mapbox, map, data) {
        this.sourceIds = [];
        this.layers = [];
        this.map = map;
        this.mapbox = mapbox;
        this.circleJson = this.getJeoJson(data);
        this.lineJson = this.getLineJson(data);
        this.addLineLayer();
        this.addCircleLayer();
    }
    /**
     *获得ids
     */
    get ids() {
        const arr = this.layers.map((layer) => layer.id);
        return arr;
    }
    /**
     * 移除图层
     */
    removeLayer() {
        this.layers.forEach((layer) => {
            try {
                this.map.removeLayer(layer.id);
            }
            catch (error) { }
        });
        this.layers = [];
    }
    /**
     * 移除数据源
     */
    removeSource() {
        this.sourceIds.forEach((sourceId) => {
            try {
                this.map.removeSource(sourceId);
            }
            catch (error) { }
        });
        this.sourceIds = [];
    }
    /**
     * 清楚图层
     */
    clearLayer() {
        this.removeLayer();
        this.removeSource();
    }
    /**
     * 增加数据源
     */
    addSource(id, source) {
        this.sourceIds.push(id);
        this.map.addSource(id, source);
        return this.map;
    }
    // 生成pointer的geoJson
    getJeoJson(pointers) {
        let pointerArr = [];
        pointers.forEach((item, index) => {
            if (!index)
                return;
            const el = item;
            el.color = 's' + el.power;
            pointerArr.push({
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [Number(el.lng), Number(el.lat)],
                },
                properties: el,
            });
        });
        let geoJson = {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: pointerArr,
            },
        };
        return geoJson;
    }
    getLineJson(pointers) {
        const coordinates = [];
        pointers.forEach((item) => {
            coordinates.push([item.lng, item.lat]);
        });
        return {
            type: 'geojson' /* geojson类型资源 */,
            data: {
                /* geojson数据 */
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: coordinates,
                        },
                    },
                ],
            },
        };
    }
    /**
     * @param key property中字段名称
     * @param offset number[] 偏移量
     * @param anchor 显示位置
     * @returns this
     */
    addCircleLayer(color = '#333', offset = [0, 0.7], size = 4) {
        const id = 'circle_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.addSource(id, this.circleJson);
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].getMakerCircleLayer({
            id,
            offset,
            size,
            color,
            source: id,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        this.map.on('mouseenter', id, this.mouseEnterFunc.bind(this));
        this.map.on('mouseleave', id, this.mouseOutFunc.bind(this));
        return this;
    }
    addLineLayer() {
        const id = 'line_' + (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)();
        this.addSource(id, this.lineJson);
        const layout = {
            'line-cap': 'round',
            'line-join': 'round',
        };
        const paint = {
            'line-color': '#333',
            'line-width': 2,
            'line-opacity': 0.8,
            'line-dasharray': [2, 4],
        };
        const layer = _mapBox__WEBPACK_IMPORTED_MODULE_0__["default"].getLineLayer({
            id,
            layout,
            paint,
            source: id,
        });
        this.map.addLayer(layer);
        this.layers.push(layer);
        return this;
    }
    /**
     * 鼠标移入pointer事件
     * @param e 当前pointer的对象
     */
    mouseEnterFunc(e) {
        this.map.getCanvas().style.cursor = 'pointer';
        // console.log(e.features)
        if (e.features) {
            if (this.popup)
                this.popup.remove();
            this.addPop(e.features[0].properties);
        }
    }
    /**
     * 鼠标移出pointer事件
     * @param e 当前pointer的对象
     */
    mouseOutFunc() {
        this.map.getCanvas().style.cursor = '';
        if (this.popup)
            this.popup.remove();
    }
    /**
     * 弹出框展示的信息
     * @param message 弹出框展示的信息object
     * @returns
     */
    addPop(message) {
        //@ts-ignore
        const html = `<div class='windRouterPop__box'>
      <div class='windRouterPop_row'> <div class='row-time'>时间： </div> <div class='row-content'>${message.time}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>当前位置： </div> <div class='row-content'>${message.lng}E/${message.lat}N</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>中心气压： </div> <div class='row-content'>${message.pressure}百帕</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>最大风速： </div> <div class='row-content'>${message.speed}米/秒</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>风力： </div> <div class='row-content'>${message.power}级</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>等级： </div> <div class='row-content'>${message.strong}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动速度： </div> <div class='row-content'>${message.move_speed}</div> </div>
      <div class='windRouterPop_row'> <div class='row-time'>移动方向： </div> <div class='row-content'>${message.move_dir}</div> </div>
    </div>
    `;
        this.popup = new this.mapbox.Popup({ closeOnClick: false })
            .setLngLat([message.lng, message.lat])
            .setHTML(html)
            .addTo(this.map);
        return html;
    }
}



/***/ }),

/***/ "./src/base/mapBox.ts":
/*!****************************!*\
  !*** ./src/base/mapBox.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMap": () => (/* binding */ CustomMap),
/* harmony export */   "PUBLIC_URL": () => (/* binding */ PUBLIC_URL),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PUBLIC_URL = process.env.BASE_URL;
/**
 * mapbox 工具类
 */
class MapBox {
    /**
     * 获得实例
     * @returns MapBox
     */
    static getInstance() {
        return this.box;
    }
    /**
     * 绘制线条
     * @param id
     * @param geojson
     */
    getLineLayer(defaultOp = {}) {
        console.log(defaultOp);
        const lineLayer = Object.assign({ id: 'line', type: 'line', source: 'line', layout: {
                'line-cap': 'round',
                'line-join': 'round',
            }, paint: {
                'line-color': '#333',
                'line-width': 1,
                'line-dasharray': [2, 4],
                'line-opacity': 0.8,
            } }, defaultOp);
        return lineLayer;
    }
    getFillLayer({ source = 'zhejiang', id = 'zhejiang' }) {
        const fillLayer = {
            id: id,
            type: 'fill',
            source: source,
            layout: {},
            paint: {
                'fill-color': '#fff',
                'fill-opacity': 1,
                'fill-outline-color': '#0f0',
            },
        };
        return fillLayer;
    }
    /**
     * 绘制标记点
     * @param color 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getMakerCircleLayer(defaultOp = {}) {
        let typhoonColors = [
            's6',
            '#30fc31',
            's7',
            '#30fc31',
            's8',
            '#307efa',
            's9',
            '#307efa',
            's10',
            '#fffc00',
            's11',
            '#fffc00',
            's12',
            '#ff9c00',
            's13',
            '#ff9c00',
            's14',
            '#fb7cff',
            's15',
            '#fb7cff',
            's16',
            '#fa3030',
            's17',
            '#fa3030',
            's18',
            '#fa3030',
            's19',
            '#fa3030',
            's20',
            '#fa3030',
        ];
        console.log(defaultOp);
        const op = Object.assign({ id: 'labelLayer', size: 12, offset: [0, 0.7], color: '#333', source: 'points', textAllowOverlap: false, visibility: false }, defaultOp);
        const layerCircle = {
            id: op.id,
            type: 'circle',
            source: op.source,
            layout: {},
            paint: {
                'circle-radius': {
                    base: op.size,
                    stops: [
                        [12, op.size],
                        [22, 180],
                    ],
                },
                // 'fill-extrusion':'none',
                'circle-opacity': 1.0,
                'circle-translate': op.offset,
                'circle-stroke-width': 1,
                'circle-stroke-opacity': 0.8,
                'circle-stroke-color': op.color,
                'circle-color': ['match', ['get', 'color'], ...typhoonColors, op.color],
            },
        };
        return layerCircle;
    }
    /**
     * 绘制海量点图层
     * @param stationColors 色标颜色
     * @param source 数据源字段
     * @returns  mapbox.CircleLayer
     */
    getCircleLayer(stationColors, source = 'points', id = 'pointLayer', baseSize = 2.5) {
        const layerCircle = {
            id: id,
            type: 'circle',
            source: source,
            paint: {
                'circle-radius': {
                    base: baseSize,
                    stops: [
                        [12, baseSize],
                        [22, 180],
                    ],
                },
                'circle-color': ['match', ['get', 'color'], ...stationColors, '#333'],
            },
        };
        return layerCircle;
    }
    /**
     * 生成标签文本图层
     * @param value 显示文本字段名称
     * @param source 数据源字段
     * @returns mapbox.SymbolLayer
     */
    getTextLayer(defaultOp = {}) {
        const op = Object.assign({ id: 'labelLayer', fontSize: 12, offset: [0, 0.7], txtColor: '#333', anchor: 'top', source: 'points', textAllowOverlap: false, visibility: false }, defaultOp);
        // anchor = anchor ? anchor : 'top'
        let txt = op.txtColor;
        if (typeof op.txtColor == 'object') {
            txt = ['match', ['get', 'color'], ...op.txtColor, '#333'];
            op.txtColor = txt;
        }
        // if(op.zoom){
        const layerValue = {
            id: op.id,
            type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
            source: op.source,
            // paint: {
            //   "text-color": txt
            // },
            paint: {
                'text-color': op.txtColor,
            },
            layout: {
                visibility: (op.visibility ? 'visible' : 'none'),
                // 'icon-image': 'wind-15' /* 图标图像 */,
                'text-field': 
                //@ts-ignore
                `{${op.value}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
                // 'text-font': ['wind'],
                'text-font': ['RobotoRegular'] /* 文本字体 */,
                'text-allow-overlap': op.textAllowOverlap,
                'text-ignore-placement': op.textAllowOverlap,
                'text-size': op.fontSize,
                'text-offset': op.offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
                //@ts-ignore
                'text-anchor': op.anchor /* 该属性设置文本中最接近锚点的部分，top表示文本的顶端放置到最接近锚点的位置 */,
            },
        };
        return layerValue;
        // }else{
        //   const layerValue: mapbox.SymbolLayer = {
        //     id: op.id,
        //     type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
        //     source: op.source,
        //     paint: {
        //       "text-color": txt
        //     },
        //     layout: {
        //       // 'icon-image': 'wind-15' /* 图标图像 */,
        //       'text-field':
        //         //@ts-ignore
        //         `{${op.value}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
        //       // 'text-font': ['wind'],
        //       'text-font': ['RobotoRegular'] /* 文本字体 */,
        //       // "text-allow-overlap": true,
        //       // "text-ignore-placement": true,
        //       'text-size': op.fontSize,
        //       'text-offset': op.offset/* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
        //       //@ts-ignore
        //       'text-anchor':
        //         op.anchor /* 该属性设置文本中最接近锚点的部分，top表示文本的顶端放置到最接近锚点的位置 */,
        //     },
        //   }
        //   return layerValue;
        // }
    }
    /**
     * 生成图片标签图层
     * @param rotate 旋转角度
     * @param source 数据源字段
     * @param iconImg 图名称
     * @returns mapbox.SymbolLayer
     */
    /**
     * 生成图片标签图层
     * @param rotate 旋转角度
     * @param source 数据源字段
     * @param iconImg 图名称
     * @returns mapbox.SymbolLayer
     */
    getImageLayer(defaultOp = {}) {
        const op = Object.assign({ id: 'imgId', iconImg: 'wind-0', txtName: 'name', fontSize: 12, offset: [0, 0], txtColor: '#333', anchor: 'top', source: 'points', textAllowOverlap: false, visibility: false, rotate: 'direction', iconSize: 0.8 }, defaultOp);
        const layerValue = {
            id: op.id,
            type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
            source: op.source,
            paint: {
                // 'text-color':'transparent'
                'text-opacity': 1.0,
            },
            layout: {
                // 'text-field':
                //   `{${op.txtName}}`, /* 使用text标签显示的值，Feature属性使用{域名}格式*/
                // // 'text-font': ['wind'],
                // 'text-font': ['RobotoRegular'] /* 文本字体 */,
                // 'text-size': 11,
                // 'text-offset': op.offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
                // 'text-anchor':
                //   'top',
                //   'top',
                // "text-allow-overlap": true,
                // "text-ignore-placement":true,
                'text-allow-overlap': op.textAllowOverlap,
                'text-ignore-placement': op.textAllowOverlap,
                'icon-ignore-placement': op.textAllowOverlap,
                'icon-allow-overlap': op.textAllowOverlap,
                // "icon-ignore-placement":true,
                // "icon-allow-overlap": true,
                'icon-size': op.iconSize,
                'icon-image': `{${op.iconImg}}` /* 图标图像 */,
                'icon-rotate': ['number', ['get', op.rotate]],
                'icon-offset': [4, -10],
            },
        };
        return layerValue;
    }
    /**
     * 生成图片标签图层
     * @param rotate 旋转角度
     * @param source 数据源字段
     * @param iconImg 图名称
     * @returns mapbox.SymbolLayer
     */
    getLightImageLayer(id, iconImg = 'wind-0', name = 'name', source = 'points', rotate = 'direction', offset = [0, 0.0]) {
        let obj = {};
        if (name) {
            console.log(name, '232323');
            obj = {
                'text-field': `{${name}}` /* 使用text标签显示的值，Feature属性使用{域名}格式*/,
                // 'text-font': ['wind'],
                'text-font': ['RobotoRegular'] /* 文本字体 */,
                'text-size': 11,
                'text-offset': offset /* 该属性表示文本偏移锚点的距离，正值表示向右和向下，负值表示向左和向上 */,
                'text-anchor': 'top',
                'text-allow-overlap': true,
                'text-ignore-placement': true,
            };
        }
        const layerValue = {
            id: id,
            type: 'symbol' /* symbol类型layer，一般用来绘制点*/,
            source: source,
            paint: {
                // 'text-color':'transparent'
                'text-opacity': 1.0,
            },
            layout: Object.assign(Object.assign({}, obj), { 'icon-ignore-placement': true, 'icon-allow-overlap': true, 'icon-size': 0.8, 'icon-image': `{${iconImg}}` /* 图标图像 */, 'icon-rotate': ['number', ['get', rotate]], 'icon-offset': [4, -10] }),
        };
        return layerValue;
    }
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawMultiPolygon(lineColor = 'rgba(0,0,0,0.8)', source = 'bounds', lineWidth = 2) {
        let layer = {
            id: source,
            type: 'line' /* fill类型layer */,
            source: source,
            // layout: {},
            layout: {
            // 'text-size': 10,
            // 'symbol-placement': 'point',
            // 'text-field': '{NAME}', // 显示注记字段
            //  "text-field": [
            //   'format',
            //   ['get', '属性'],
            //   { 'font-scale': 1.5 },
            //   '\n',
            //   {},
            //   ['get', '属性'],
            //   {
            //     'font-scale': 1.0,
            //     'text-font': [
            //       'literal',
            //       ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
            //     ],
            //     'text-color': 'red',
            //   }
            // ]
            // 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'], // 默认使用mapbox官网字体库
            // 'text-offset': [0, 0.6],
            // 'text-anchor': 'top'
            },
            paint: {
                // 'fill-color': '#088' /* fill颜色 */,
                // 'fill-opacity': 0.8 /* fill透明度 */,
                'line-color': lineColor,
                'line-width': lineWidth,
            },
        };
        return layer;
    }
    /**
     *
     * @param lineColor 线颜色
     * @param source 数据源
     * @returns
     */
    drawFillPolygon(source = 'bounds', opacity = 0.7) {
        let layer = {
            id: source,
            type: 'fill' /* fill类型layer */,
            source: source,
            layout: {},
            paint: {
                'fill-color': ['get', 'color'] /* fill颜色 */,
                'fill-opacity': opacity /* fill透明度 */,
                'fill-outline-color': '#888',
            },
        };
        return layer;
    }
    /**
     * 获得天空背景
     */
    getSkyLayer() {
        const layer = {
            id: 'sky',
            type: 'sky',
            paint: {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15,
            },
        };
        return layer;
    }
    /**
     * 瓦片图
     * @param url
     */
    getTile(url) {
        return {
            type: 'raster',
            tiles: [
                // "http://172.21.129.15/geoserver/gwc/service/wms?service=WMS&version=1.1.1&request=GetMap&layers=tianditu:ZJ_kx_tianditu_dxL01&styles=&bbox={bbox-epsg-3857}&width=256&height=256&srs=EPSG:3857&format=image/png&TRANSPARENT=TRUE",
                url,
            ],
            tileSize: 256,
        };
    }
    /**
     * 添加地图资源
     * @param map
     * @param sourceId
     * @param url
     */
    addSorceLayer(map, sourceId, url, layerId = 'layerId') {
        map.addSource(sourceId, this.getTile(url));
        const wmtsLayer = {
            id: layerId,
            type: 'raster',
            source: sourceId,
            minZoom: 1,
            maxZoom: 18,
            // paint: {
            //   "raster-opacity": 1,
            // },
        };
        map.addLayer(wmtsLayer);
        return wmtsLayer;
    }
}
MapBox.box = new MapBox();
const CustomMap = MapBox;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapBox.getInstance());


/***/ }),

/***/ "./src/base/windCircle.ts":
/*!********************************!*\
  !*** ./src/base/windCircle.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWindCircle": () => (/* binding */ createWindCircle)
/* harmony export */ });
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layer */ "./src/base/Layer.ts");

/**
 * 台风中心风圈
 * @param map
 * @param pointer
 * @returns
 */
function createWindCircle(map, pointer) {
    let radius7;
    let radius10;
    let radius12;
    console.log(pointer);
    const quad7 = Object.values(pointer.radius7_quad).reverse();
    const quad10 = Object.values(pointer.radius10_quad).reverse();
    const quad12 = Object.values(pointer.radius12_quad).reverse();
    if (pointer.radius7)
        radius7 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad7, '#62E3CE').addCircleLayer();
    if (pointer.radius7)
        radius10 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad10, '#62E371').addCircleLayer();
    if (pointer.radius7)
        radius12 = new _Layer__WEBPACK_IMPORTED_MODULE_0__.WindCircleLayer(map, [pointer.lng, pointer.lat], quad12, '#A5E362').addCircleLayer();
    return function () {
        if (radius7)
            radius7.clearLayer();
        if (quad10)
            radius10.clearLayer();
        if (radius12)
            radius12.clearLayer();
    };
}


/***/ }),

/***/ "./src/myAnimation.ts":
/*!****************************!*\
  !*** ./src/myAnimation.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myAnimation)
/* harmony export */ });
function myAnimation(parmas) {
    let current = 0;
    const length = parmas.length - 1;
    const callBack = parmas.callBack;
    const successCallback = parmas.successCallback;
    const looping = () => {
        let looped = requestAnimationFrame(looping);
        // console.log(current)
        if (current < length) {
            callBack(current);
            current = current + 1 >= length ? length : current + 1;
        }
        else {
            // console.log(current)
            callBack(current);
            cancelAnimationFrame(looped);
            looped = null;
            successCallback && successCallback();
        }
    };
    looping();
}


/***/ }),

/***/ "./src/style/grade.png":
/*!*****************************!*\
  !*** ./src/style/grade.png ***!
  \*****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./node_modules/@turf/circle/dist/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@turf/circle/dist/es/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _turf_destination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/destination */ "./node_modules/@turf/destination/dist/es/index.js");
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");


/**
 * Takes a {@link Point} and calculates the circle polygon given a radius in degrees, radians, miles, or kilometers; and steps for precision.
 *
 * @name circle
 * @param {Feature<Point>|number[]} center center point
 * @param {number} radius radius of the circle
 * @param {Object} [options={}] Optional parameters
 * @param {number} [options.steps=64] number of steps
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] properties
 * @returns {Feature<Polygon>} circle polygon
 * @example
 * var center = [-75.343, 39.984];
 * var radius = 5;
 * var options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}};
 * var circle = turf.circle(center, radius, options);
 *
 * //addToMap
 * var addToMap = [turf.point(center), circle]
 */
function circle(center, radius, options) {
    if (options === void 0) { options = {}; }
    // default params
    var steps = options.steps || 64;
    var properties = options.properties
        ? options.properties
        : !Array.isArray(center) && center.type === "Feature" && center.properties
            ? center.properties
            : {};
    // main
    var coordinates = [];
    for (var i = 0; i < steps; i++) {
        coordinates.push((0,_turf_destination__WEBPACK_IMPORTED_MODULE_0__["default"])(center, radius, (i * -360) / steps, options).geometry
            .coordinates);
    }
    coordinates.push(coordinates[0]);
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_1__.polygon)([coordinates], properties);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circle);


/***/ }),

/***/ "./node_modules/@turf/destination/dist/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@turf/destination/dist/es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ destination)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");
/* harmony import */ var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @turf/invariant */ "./node_modules/@turf/invariant/dist/es/index.js");
// http://en.wikipedia.org/wiki/Haversine_formula
// http://www.movable-type.co.uk/scripts/latlong.html


/**
 * Takes a {@link Point} and calculates the location of a destination point given a distance in
 * degrees, radians, miles, or kilometers; and bearing in degrees.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name destination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the origin point
 * @param {number} bearing ranging from -180 to 180
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] Translate properties to Point
 * @returns {Feature<Point>} destination point
 * @example
 * var point = turf.point([-75.343, 39.984]);
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.destination(point, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [point, destination]
 * destination.properties['marker-color'] = '#f00';
 * point.properties['marker-color'] = '#0f0';
 */
function destination(origin, distance, bearing, options) {
    if (options === void 0) { options = {}; }
    // Handle input
    var coordinates1 = (0,_turf_invariant__WEBPACK_IMPORTED_MODULE_1__.getCoord)(origin);
    var longitude1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[0]);
    var latitude1 = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(coordinates1[1]);
    var bearingRad = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.degreesToRadians)(bearing);
    var radians = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.lengthToRadians)(distance, options.units);
    // Main
    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) +
        Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad));
    var longitude2 = longitude1 +
        Math.atan2(Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    var lng = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.radiansToDegrees)(longitude2);
    var lat = (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.radiansToDegrees)(latitude2);
    return (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.point)([lng, lat], options.properties);
}


/***/ }),

/***/ "./node_modules/@turf/helpers/dist/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@turf/helpers/dist/es/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areaFactors": () => (/* binding */ areaFactors),
/* harmony export */   "bearingToAzimuth": () => (/* binding */ bearingToAzimuth),
/* harmony export */   "convertArea": () => (/* binding */ convertArea),
/* harmony export */   "convertLength": () => (/* binding */ convertLength),
/* harmony export */   "degreesToRadians": () => (/* binding */ degreesToRadians),
/* harmony export */   "earthRadius": () => (/* binding */ earthRadius),
/* harmony export */   "factors": () => (/* binding */ factors),
/* harmony export */   "feature": () => (/* binding */ feature),
/* harmony export */   "featureCollection": () => (/* binding */ featureCollection),
/* harmony export */   "geometry": () => (/* binding */ geometry),
/* harmony export */   "geometryCollection": () => (/* binding */ geometryCollection),
/* harmony export */   "isNumber": () => (/* binding */ isNumber),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "lengthToDegrees": () => (/* binding */ lengthToDegrees),
/* harmony export */   "lengthToRadians": () => (/* binding */ lengthToRadians),
/* harmony export */   "lineString": () => (/* binding */ lineString),
/* harmony export */   "lineStrings": () => (/* binding */ lineStrings),
/* harmony export */   "multiLineString": () => (/* binding */ multiLineString),
/* harmony export */   "multiPoint": () => (/* binding */ multiPoint),
/* harmony export */   "multiPolygon": () => (/* binding */ multiPolygon),
/* harmony export */   "point": () => (/* binding */ point),
/* harmony export */   "points": () => (/* binding */ points),
/* harmony export */   "polygon": () => (/* binding */ polygon),
/* harmony export */   "polygons": () => (/* binding */ polygons),
/* harmony export */   "radiansToDegrees": () => (/* binding */ radiansToDegrees),
/* harmony export */   "radiansToLength": () => (/* binding */ radiansToLength),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "unitsFactors": () => (/* binding */ unitsFactors),
/* harmony export */   "validateBBox": () => (/* binding */ validateBBox),
/* harmony export */   "validateId": () => (/* binding */ validateId)
/* harmony export */ });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
var earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
var factors = {
    centimeters: earthRadius * 100,
    centimetres: earthRadius * 100,
    degrees: earthRadius / 111325,
    feet: earthRadius * 3.28084,
    inches: earthRadius * 39.37,
    kilometers: earthRadius / 1000,
    kilometres: earthRadius / 1000,
    meters: earthRadius,
    metres: earthRadius,
    miles: earthRadius / 1609.344,
    millimeters: earthRadius * 1000,
    millimetres: earthRadius * 1000,
    nauticalmiles: earthRadius / 1852,
    radians: 1,
    yards: earthRadius * 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.37,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / earthRadius,
    yards: 1.0936133,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
var areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    hectares: 0.0001,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, _options) {
    if (_options === void 0) { _options = {}; }
    switch (type) {
        case "Point":
            return point(coordinates).geometry;
        case "LineString":
            return lineString(coordinates).geometry;
        case "Polygon":
            return polygon(coordinates).geometry;
        case "MultiPoint":
            return multiPoint(coordinates).geometry;
        case "MultiLineString":
            return multiLineString(coordinates).geometry;
        case "MultiPolygon":
            return multiPolygon(coordinates).geometry;
        default:
            throw new Error(type + " is invalid");
    }
}
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (!coordinates) {
        throw new Error("coordinates is required");
    }
    if (!Array.isArray(coordinates)) {
        throw new Error("coordinates must be an Array");
    }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be at least 2 numbers long");
    }
    if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
        throw new Error("coordinates must contain numbers");
    }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return (degrees * 180) / Math.PI;
}
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return (radians * Math.PI) / 180;
}
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted area
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num);
}
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return !!input && input.constructor === Object;
}
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}


/***/ }),

/***/ "./node_modules/@turf/invariant/dist/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@turf/invariant/dist/es/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "collectionOf": () => (/* binding */ collectionOf),
/* harmony export */   "containsNumber": () => (/* binding */ containsNumber),
/* harmony export */   "featureOf": () => (/* binding */ featureOf),
/* harmony export */   "geojsonType": () => (/* binding */ geojsonType),
/* harmony export */   "getCoord": () => (/* binding */ getCoord),
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getGeom": () => (/* binding */ getGeom),
/* harmony export */   "getType": () => (/* binding */ getType)
/* harmony export */ });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turf/helpers */ "./node_modules/@turf/helpers/dist/es/index.js");

/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" &&
            coord.geometry !== null &&
            coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) &&
        coord.length >= 2 &&
        !Array.isArray(coord[0]) &&
        !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 &&
        (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(coordinates[0]) &&
        (0,_turf_helpers__WEBPACK_IMPORTED_MODULE_0__.isNumber)(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            value.type);
    }
}
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " +
            name +
            ": must be a " +
            type +
            ", given " +
            feature.geometry.type);
    }
}
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " +
                name +
                ": must be a " +
                type +
                ", given " +
                feature.geometry.type);
        }
    }
}
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message (unused)
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, _name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}


/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte > 62) {
      id += '-'
    } else {
      id += '_'
    }
    return id
  }, '')


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/typhoon.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base_Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/Layer */ "./src/base/Layer.ts");
/* harmony import */ var _myAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myAnimation */ "./src/myAnimation.ts");
/* harmony import */ var _base_windCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/windCircle */ "./src/base/windCircle.ts");
/* harmony import */ var _style_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/base.scss */ "./src/style/base.scss");




// class
class Typhoon {
    constructor(mapbox, map, data) {
        this.forecastData = [];
        this.forecastLayer = [];
        this.map = map;
        this.mapbox = mapbox;
        this.live_marker = null;
        this.data = data;
        console.log(data);
        this.drawLive();
    }
    drawLive() {
        // 台风路径上的线 line
        this.live_line = new _base_Layer__WEBPACK_IMPORTED_MODULE_0__.LineLayer(this.mapbox, this.map);
        this.live_line.addLineLayer();
        // 台风路径上的点 pointer
        this.live_circle = new _base_Layer__WEBPACK_IMPORTED_MODULE_0__.windRouteCircleLayer(this.mapbox, this.map, []);
        this.live_circle.addCircleLayer('#333', [0, 0], 4);
        this.addForecast();
        // 台风图标
        const div = document.createElement('div');
        div.innerHTML = `<div class="img-pos"></div>`;
        let data = this.data[0].points;
        this.live_marker = new this.mapbox.Marker({ element: div });
        // 渲染路径的每一步
        const callBack = (cur) => {
            this.live_line.addCoordinates(data[cur]);
            this.live_circle.addFeature(this.getFeature(cur, data));
            if (this.live_marker) {
                const el = this.live_marker.getElement();
                el.innerHTML = `<div class="img-pos s${data[cur].power}"></div>`;
                this.live_marker
                    .setLngLat([data[cur].lng, data[cur].lat])
                    .addTo(this.map);
            }
        };
        // 渲染路径完成后的成功回调
        const successBack = () => {
            if (this.live_marker) {
                const el = this.live_marker.getElement();
                const child = el.querySelector('div');
                if (child) {
                    child.className += ' active';
                }
            }
            console.log(this.live_circle);
            // 风圈
            this.drawWindCircle(data[data.length - 1]);
        };
        // 调用动画
        (0,_myAnimation__WEBPACK_IMPORTED_MODULE_1__["default"])({
            length: this.data[0].points.length,
            successCallback: successBack,
            callBack: callBack,
        });
    }
    drawWindCircle(pointer) {
        (0,_base_windCircle__WEBPACK_IMPORTED_MODULE_2__.createWindCircle)(this.map, pointer);
    }
    drawForecast() {
        this.forecastLayer.forEach((layer) => {
            layer.clearLayer();
        });
        this.forecastLayer = [];
        this.forecastData.forEach((data) => {
            this.forecastLayer.push(new _base_Layer__WEBPACK_IMPORTED_MODULE_0__.forecastRouterLayer(this.mapbox, this.map, data));
        });
    }
    getFeature(n, data) {
        const el = data[n];
        el.color = 's' + el.power;
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [Number(el.lng), Number(el.lat)],
            },
            properties: el,
        };
    }
    /**
     * 添加预报路径
     */
    addForecast() {
        this.map.on('click', this.live_circle.layers[0].id, (e) => {
            if (e.features) {
                console.log(e.features[0].properties);
                this.forecastData = [
                    getthisPoointerForecast(e.features[0].properties, 0.5),
                    getthisPoointerForecast(e.features[0].properties, 0.8),
                ];
                console.log(this.forecastData);
                this.drawForecast();
            }
        });
    }
}
function getthisPoointerForecast(pointer, ratio) {
    let arr = [];
    for (let i = 0; i < 6; i++) {
        let lng = pointer.lng + ratio * (Math.random() * i);
        let lat = pointer.lat + ratio * i;
        arr.push({
            color: '8',
            forecast: null,
            lat,
            lng,
            move_dir: '西西北',
            move_speed: 25,
            power: 8,
            pressure: 998,
        });
    }
    return arr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typhoon);

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=typhoon.js.map