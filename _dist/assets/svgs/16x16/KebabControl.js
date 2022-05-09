"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2;

var _excluded = ["active"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function KebabControl(_ref) {
  var active = _ref.active,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(KebabControlRoot, _extends({
    active: active
  }, props), (0, _react2.jsx)("div", {
    css: {
      "position": "absolute",
      "top": "-2px",
      "left": "-3px",
      "borderRadius": "0.125rem",
      "backgroundColor": "var(--bg-input)",
      "width": "16px",
      "height": "20px"
    }
  }), (0, _react2.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "16",
    viewBox: "0 0 10 16",
    css: {
      "cursor": "pointer",
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "fill": "currentColor",
      "color": "var(--text-primary)"
    }
  }, (0, _react2.jsx)("path", {
    d: "M4 3.947c0 .533.438.948 1 .948.531 0 1-.415 1-.948C6 3.444 5.531 3 5 3c-.563 0-1 .444-1 .947zM4 7.947C4 7.444 4.438 7 5 7c.531 0 1 .444 1 .947 0 .533-.469.948-1 .948-.563 0-1-.415-1-.948zM5 12.895c-.563 0-1-.415-1-.948 0-.503.438-.947 1-.947.531 0 1 .444 1 .947 0 .533-.469.948-1 .948z"
  })));
}

var _default = KebabControl;
exports["default"] = _default;

var KebabControlRoot = _styledComponents["default"].div(function (_ref2) {
  var active = _ref2.active;
  return [{
    "position": "relative",
    "width": "10px",
    "height": "16px"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    div {\n      display: none;\n    }\n    :hover {\n      div {\n        display: block;\n      }\n    }\n  "]))), active && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      div {\n        display: block;\n      }\n    "])))]];
});