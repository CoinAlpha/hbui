"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("@emotion/react");

var _excluded = ["active"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkbox(_ref) {
  var active = _ref.active,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react.jsx)(CheckboxRoot, _extends({
    active: active,
    className: active ? 'is-active' : 'is-off'
  }, props), active && (0, _react.jsx)(CheckIcon, null));
}

var CheckboxRoot = _styledComponents["default"].div(function (_ref2) {
  var active = _ref2.active;
  return [{
    "cursor": "pointer",
    "height": "16px",
    "width": "16px",
    "borderRadius": "0.125rem",
    "display": "flex",
    "justifyContent": "center !important",
    "alignItems": "center !important"
  }, {
    "backgroundColor": "var(--bg-body)",
    "position": "relative",
    "borderWidth": "2px",
    "borderColor": "var(--border-body)",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
    }
  }, active && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity))",
    "position": "relative",
    "borderWidth": "2px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
  }]];
});

function CheckIcon(_ref3) {
  var active = _ref3.active;
  return (0, _react.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "9",
    fill: "transparent",
    viewBox: "0 0 10 9"
  }, (0, _react.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      ".dark &": {
        "--tw-text-opacity": "1",
        "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
      }
    },
    d: "M1 4.5L4.2 8 9 1"
  }));
}

var _default = Checkbox;
exports["default"] = _default;