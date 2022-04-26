"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = require("styled-components");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _darkModeConfig = _interopRequireDefault(require("./darkModeConfig"));

require("../assets/fonts/inter/inter.css");

require("../assets/fonts/satoshi/satoshi.css");

require("../assets/fonts/sfmono/sfmono.css");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject || (_templateObject = _taggedTemplateLiteral(["*, ::before, ::after {\nbox-sizing: border-box;\nborder-width: 0;\nborder-style: solid;\nborder-color: currentColor;\n--tw-translate-x: 0;\n--tw-translate-y: 0;\n--tw-rotate: 0;\n--tw-skew-x: 0;\n--tw-skew-y: 0;\n--tw-scale-x: 1;\n--tw-scale-y: 1;\n--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n--tw-ring-offset-width: 0px;\n--tw-ring-offset-color: #fff;\n--tw-ring-color: rgba(59, 130, 246, 0.5);\n--tw-ring-offset-shadow: 0 0 #0000;\n--tw-ring-shadow: 0 0 #0000;\n--tw-shadow: 0 0 #0000;\n--tw-blur: var(--tw-empty,/*!*/ /*!*/);\n--tw-brightness: var(--tw-empty,/*!*/ /*!*/);\n--tw-contrast: var(--tw-empty,/*!*/ /*!*/);\n--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);\n--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n--tw-invert: var(--tw-empty,/*!*/ /*!*/);\n--tw-saturate: var(--tw-empty,/*!*/ /*!*/);\n--tw-sepia: var(--tw-empty,/*!*/ /*!*/);\n--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);\n--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);\n--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n        }\nhtml {\nline-height: 1.5;\n-webkit-text-size-adjust: 100%;\n-moz-tab-size: 4;\ntab-size: 4;\nfont-family: Satoshi, sans-serif;\n        }\nbody {\nmargin: 0;\nfont-family: inherit;\nline-height: inherit;\n        }\nhr {\nheight: 0;\ncolor: inherit;\nborder-top-width: 1px;\n        }\nabbr[title] {\ntext-decoration: underline dotted;\n        }\nb, strong {\nfont-weight: bolder;\n        }\ncode, kbd, samp, pre {\nfont-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;\nfont-size: 1em;\n        }\nsmall {\nfont-size: 80%;\n        }\nsub, sup {\nfont-size: 75%;\nline-height: 0;\nposition: relative;\nvertical-align: baseline;\n        }\nsub {\nbottom: -0.25em;\n        }\nsup {\ntop: -0.5em;\n        }\ntable {\ntext-indent: 0;\nborder-color: inherit;\nborder-collapse: collapse;\n        }\nbutton, input, optgroup, select, textarea {\nfont-family: inherit;\nfont-size: 100%;\nline-height: inherit;\nmargin: 0;\npadding: 0;\ncolor: inherit;\n        }\nbutton, select {\ntext-transform: none;\n        }\nbutton, [type='button'], [type='reset'], [type='submit'] {\n-webkit-appearance: button;\n        }\n::-moz-focus-inner {\nborder-style: none;\npadding: 0;\n        }\n:-moz-focusring {\noutline: 1px dotted ButtonText;\n        }\n:-moz-ui-invalid {\nbox-shadow: none;\n        }\nlegend {\npadding: 0;\n        }\nprogress {\nvertical-align: baseline;\n        }\n::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\nheight: auto;\n        }\n[type='search'] {\n-webkit-appearance: textfield;\noutline-offset: -2px;\n        }\n::-webkit-search-decoration {\n-webkit-appearance: none;\n        }\n::-webkit-file-upload-button {\n-webkit-appearance: button;\nfont: inherit;\n        }\nsummary {\ndisplay: list-item;\n        }\nblockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {\nmargin: 0;\n        }\nbutton {\nbackground-color: transparent;\nbackground-image: none;\n        }\nfieldset {\nmargin: 0;\npadding: 0;\n        }\nol, ul {\nlist-style: none;\nmargin: 0;\npadding: 0;\n        }\nimg {\nborder-style: solid;\n        }\ntextarea {\nresize: vertical;\n        }\ninput::placeholder, textarea::placeholder {\ncolor: #a1a1aa;\n        }\nbutton, [role=\"button\"] {\ncursor: pointer;\n        }\nh1, h2, h3, h4, h5, h6 {\nfont-size: inherit;\nfont-weight: inherit;\n        }\na {\ncolor: inherit;\ntext-decoration: inherit;\n        }\npre, code, kbd, samp {\nfont-family: SF Mono, mono;\n        }\nimg, svg, video, canvas, audio, iframe, embed, object {\ndisplay: block;\nvertical-align: middle;\n        }\nimg, video {\nmax-width: 100%;\nheight: auto;\n        }\n[hidden] {\ndisplay: none;\n        }\n@keyframes spin {\nto {\ntransform: rotate(360deg);\n        }\n        }\n@keyframes ping {\n75%, 100% {\ntransform: scale(2);\nopacity: 0;\n        }\n        }\n@keyframes pulse {\n50% {\nopacity: .5;\n        }\n        }\n@keyframes bounce {\n0%, 100% {\ntransform: translateY(-25%);\nanimation-timing-function: cubic-bezier(0.8,0,1,1);\n        }\n50% {\ntransform: none;\nanimation-timing-function: cubic-bezier(0,0,0.2,1);\n        }\n        }"])));

var GlobalStyles = function GlobalStyles() {
  return (0, _react2.jsx)(_react["default"].Fragment, null, (0, _react2.jsx)(_GlobalStyles, null), (0, _react2.jsx)(_react2.Global, {
    styles: _darkModeConfig["default"]
  }));
};

var _default = GlobalStyles;
exports["default"] = _default;