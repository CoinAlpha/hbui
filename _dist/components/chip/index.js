"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["to", "label", "isUppercase", "isDisabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var to = _ref.to,
      label = _ref.label,
      isUppercase = _ref.isUppercase,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(ChipRoot, {
    className: "chip",
    isUppercase: isUppercase,
    isDisabled: isDisabled
  }, (0, _react2.jsx)(ChipElement, _extends({
    to: to
  }, props), label));
};

var _default = Chip;
exports["default"] = _default;

var ChipRoot = _styledComponents["default"].span(function (_ref2) {
  var isUppercase = _ref2.isUppercase,
      isDisabled = _ref2.isDisabled;
  return [{
    "display": "flex"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    a.active {\n      ", ";\n    }\n  "])), {
    "backgroundColor": "var(--bg-tertiary)"
  }), isUppercase && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      a {\n        text-transform: uppercase;\n      }\n    "])))], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});

var ChipElement = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(function (_ref3) {
  _objectDestructuringEmpty(_ref3);

  return [{
    "display": "flex"
  }, {
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "borderRadius": "4px",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, {
    "backgroundColor": "rgba(0, 0, 0, 0)",
    ":hover": {
      "backgroundColor": "var(--bg-tertiary)"
    },
    ":active": {
      "backgroundColor": "var(--bg-quaternary)"
    }
  }, // tw`bg-transparent border border-primary border-2 hover:bg-tertiary active:bg-quaternary`,
  {
    "fontWeight": "500"
  }, {
    "color": "var(--text-tertiary)"
  }, {
    "fontSize": "1rem",
    "lineHeight": "24px"
  }, (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    text-align: center;\n    align-items: center;\n    justify-content: center;\n    user-select: none;\n    cursor: pointer;\n  "])))];
});