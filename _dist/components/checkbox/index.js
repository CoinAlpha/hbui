"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = require("@emotion/react");

var _excluded = ["active", "partial", "disabled"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Checkbox(_ref) {
  var active = _ref.active,
      partial = _ref.partial,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react.jsx)(CheckboxRoot, _extends({
    active: active,
    disabled: disabled,
    className: active ? 'is-active' : 'is-off'
  }, props), active && !partial && (0, _react.jsx)(CheckIcon, null), active && partial && (0, _react.jsx)(MinusIcon, null));
}

var CheckboxRoot = _styledComponents["default"].div(function (_ref2) {
  var active = _ref2.active,
      disabled = _ref2.disabled;
  return [{
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "position": "relative",
    "borderWidth": "2px"
  }, {
    "cursor": "pointer",
    "height": "16px",
    "width": "16px",
    "borderRadius": "4px",
    "display": "flex",
    "justifyContent": "center !important",
    "alignItems": "center !important"
  }, {
    "position": "relative",
    "borderWidth": "1px",
    "borderColor": "var(--border-body)",
    ":hover": {
      "borderColor": "rgba(0, 194, 206, 1)"
    }
  }, {
    "backgroundColor": "var(--bg-checkbox-unselected-enabled)",
    "borderColor": "var(--border-checkbox-unselected-enabled)"
  }, {
    ":hover": {
      "backgroundColor": "var(--bg-checkbox-unselected-hover)",
      "borderColor": "var(--border-checkbox-unselected-hover)"
    }
  }, {
    ":active": {
      "backgroundColor": "var(--bg-checkbox-unselected-active)",
      "borderColor": "var(--border-checkbox-unselected-active)"
    }
  }, active && [{
    "backgroundColor": "var(--bg-checkbox-selected-enabled)",
    "borderColor": "var(--border-checkbox-selected-enabled)"
  }, {
    ":hover": {
      "backgroundColor": "var(--bg-checkbox-selected-hover)",
      "borderColor": "var(--border-checkbox-selected-hover)"
    }
  }, {
    ":active": {
      "backgroundColor": "var(--bg-checkbox-selected-active)",
      "borderColor": "var(--border-checkbox-selected-active)"
    }
  }], disabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});

function CheckIcon(_ref3) {
  var active = _ref3.active;
  return (0, _react.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "6",
    fill: "transparent",
    viewBox: "0 0 8 6"
  }, (0, _react.jsx)("path", {
    css: {
      "fill": "currentColor",
      "color": "rgba(255, 255, 255, 1)",
      ".dark &": {
        "color": "rgba(0, 0, 0, 1)"
      }
    },
    d: "M7.25 1.266c.25-.25.25-.641 0-.891a.632.632 0 00-.875 0L2.812 3.938 1.25 2.375a.632.632 0 00-.875 0c-.25.25-.25.64 0 .89l2 2c.11.126.281.188.438.188a.617.617 0 00.437-.187l4-4z"
  }));
}

function MinusIcon() {
  return (0, _react.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "2",
    fill: "transparent",
    viewBox: "0 0 10 2"
  }, (0, _react.jsx)("path", {
    css: {
      "fill": "currentColor",
      "color": "rgba(255, 255, 255, 1)",
      ".dark &": {
        "color": "rgba(0, 0, 0, 1)"
      }
    },
    d: "M10 1a.627.627 0 00-.625-.625H.625a.64.64 0 00-.625.64.6.6 0 00.61.61h8.75A.64.64 0 0010 1z"
  }));
}

var _default = Checkbox;
exports["default"] = _default;