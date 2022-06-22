"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SuccessIcon = _interopRequireDefault(require("../../assets/svgs/alerts/SuccessIcon"));

var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/alerts/WarningIcon"));

var _DangerIcon = _interopRequireDefault(require("../../assets/svgs/alerts/DangerIcon"));

var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/alerts/InfoIcon"));

var _DefaultIcon = _interopRequireDefault(require("../../assets/svgs/alerts/DefaultIcon"));

var _react2 = require("@emotion/react");

var _excluded = ["label", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Snackbar = function Snackbar(_ref) {
  var label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded);

  var stateIcon = getStateIcon(type);
  return (0, _react2.jsx)(Root, _extends({
    type: type
  }, props), (0, _react2.jsx)(IconBox, {
    type: type
  }, stateIcon), (0, _react2.jsx)(Text, null, label));
};

var _default = Snackbar;
exports["default"] = _default;

var getStateIcon = function getStateIcon(type) {
  if (type === 'success') return (0, _react2.jsx)(_SuccessIcon["default"], null);
  if (type === 'warning') return (0, _react2.jsx)(_WarningIcon["default"], null);
  if (type === 'danger') return (0, _react2.jsx)(_DangerIcon["default"], null);
  if (type === 'info') return (0, _react2.jsx)(_InfoIcon["default"], null);
  return (0, _react2.jsx)(_DefaultIcon["default"], null);
};

var Root = _styledComponents["default"].div(function (_ref2) {
  var type = _ref2.type;
  return [{
    "--tw-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    ".dark &": {
      "--tw-shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(40, 44, 47, var(--tw-bg-opacity))"
    },
    "display": "inline-flex",
    "overflow": "hidden",
    "borderRadius": "4px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))"
  }, {
    "marginBottom": "1rem"
  }];
});

var IconBox = _styledComponents["default"].div(function (_ref3) {
  var type = _ref3.type;
  return [{
    "display": "flex",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(72, 77, 81, var(--tw-bg-opacity))",
    "alignItems": "center",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem"
  }, type === 'success' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity))"
  }], type === 'info' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(49, 141, 255, var(--tw-bg-opacity))"
  }], type === 'danger' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(235, 87, 87, var(--tw-bg-opacity))"
  }], type === 'warning' && [{
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(240, 135, 39, var(--tw-bg-opacity))"
  }]];
});

var Text = _styledComponents["default"].div(function (_ref4) {
  _objectDestructuringEmpty(_ref4);

  return [{
    "display": "flex",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgba(72, 77, 81, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },
    "alignItems": "center",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  }];
});