"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _react2 = require("@headlessui/react");

var _react3 = require("@emotion/react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var stylesA = {};
stylesA[true] = {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity)) !important",
  "position": "relative",
  "display": "inline-flex",
  "height": "1.5rem",
  "width": "2.75rem",
  "alignItems": "center",
  "borderRadius": "9999px"
};
stylesA[false] = {
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(201, 205, 207, var(--tw-bg-opacity))",
  ".dark &": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(62, 67, 71, var(--tw-bg-opacity))"
  },
  "position": "relative",
  "display": "inline-flex",
  "height": "1.5rem",
  "width": "2.75rem",
  "alignItems": "center",
  "borderRadius": "9999px"
};
var stylesB = {};
stylesB[true] = {
  "transform": "var(--tw-transform)",
  "--tw-translate-x": "1.5rem",
  "display": "inline-block",
  "height": "1rem",
  "width": "1rem",
  "borderRadius": "9999px",
  "backgroundColor": "var(--bg-body)"
};
stylesB[false] = {
  "transform": "var(--tw-transform)",
  "--tw-translate-x": "0.25rem",
  "display": "inline-block",
  "height": "1rem",
  "width": "1rem",
  "borderRadius": "9999px",
  "backgroundColor": "var(--bg-body)"
};

function MyToggle(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useState = (0, _react.useState)(active),
      _useState2 = _slicedToArray(_useState, 2),
      enabled = _useState2[0],
      setEnabled = _useState2[1];

  return (0, _react3.jsx)(_react2.Switch, {
    checked: enabled,
    onChange: setEnabled,
    css: [{
      "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transitionDuration": "150ms"
    }, stylesA[enabled]],
    style: disabled ? {
      pointerEvents: 'none',
      opacity: 0.5
    } : null
  }, (0, _react3.jsx)("span", {
    css: stylesB[enabled]
  }));
}

var _default = MyToggle;
exports["default"] = _default;