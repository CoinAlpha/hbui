"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttons = require("../../elements/buttons");

var _react2 = require("@emotion/react");

var _excluded = ["label", "iconBefore", "iconAfter"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var label = _ref.label,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(_buttons.Button, _extends({
    type: "button"
  }, props), iconBefore && (0, _react2.jsx)("span", {
    className: "icon-before"
  }, iconBefore), label, iconAfter && (0, _react2.jsx)("span", {
    className: "icon-after"
  }, iconAfter));
};

exports.Button = Button;
Button.propTypes = {
  // Button types
  isPrimary: _propTypes["default"].bool,
  isSecondary: _propTypes["default"].bool,
  isSmall: _propTypes["default"].bool,
  isSuccess: _propTypes["default"].bool,
  isDanger: _propTypes["default"].bool,
  isWarning: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  // Button label content
  label: _propTypes["default"].string.isRequired,
  // Click handler
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  isSmall: false,
  isSuccess: false,
  isDanger: false,
  isWarning: false,
  isDisabled: false,
  onClick: undefined
};