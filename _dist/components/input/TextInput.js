"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _input = require("../../elements/input");

var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));

var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));

var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

var _excluded = ["value", "onChange", "required", "customTopLabel", "bottomLabel", "prefix"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextInput = function TextInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      required = _ref.required,
      customTopLabel = _ref.customTopLabel,
      bottomLabel = _ref.bottomLabel,
      prefix = _ref.prefix,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      inputFocused = _useState2[0],
      setInputFocused = _useState2[1];

  var stateIcon = getStateIcon(props);
  var placeholder = props.placeholder;
  var hasValue = value && value !== '' && typeof value === 'string' && value.length > 0;

  if (!placeholder) {
    console.error('TextInput Component: A placeholder value is required');
  }

  var labelValue = customTopLabel || placeholder;
  return (0, _react2.jsx)(Root, _extends({
    prefix: prefix,
    hasValue: hasValue,
    inputFocused: inputFocused,
    placeholder: placeholder
  }, props), labelValue && (0, _react2.jsx)(PlaceholderLabel, _extends({
    className: "top-label"
  }, props), labelValue, required && (0, _react2.jsx)("span", {
    css: {
      "--tw-text-opacity": "1",
      "color": "rgba(235, 87, 87, var(--tw-text-opacity))",
      "marginLeft": "0.25rem"
    }
  }, "*")), prefix && (0, _react2.jsx)(PrefixLabel, {
    className: "prefix-label"
  }, prefix), (0, _react2.jsx)(_input.TextInput, _extends({
    type: "text",
    className: "input-element",
    inputFocused: true,
    onFocus: function onFocus() {
      return setInputFocused(true);
    },
    onBlur: function onBlur() {
      return setInputFocused(false);
    },
    value: value,
    onChange: onChange
  }, props)), bottomLabel && (0, _react2.jsx)(BottomLabel, props, stateIcon, " ", bottomLabel));
};

var _default = TextInput;
exports["default"] = _default;
TextInput.propTypes = {
  value: _propTypes["default"].string,
  customTopLabel: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  required: _propTypes["default"].bool,
  isValid: _propTypes["default"].bool,
  isWarning: _propTypes["default"].bool,
  isInvalid: _propTypes["default"].bool
};
TextInput.defaultProps = {
  value: '',
  customTopLabel: '',
  onChange: null,
  required: false,
  isValid: false,
  isWarning: false,
  isInvalid: false
};

var getStateIcon = function getStateIcon(props) {
  if (props.isValid) return (0, _react2.jsx)(_CheckIcon["default"], null);
  if (props.isWarning) return (0, _react2.jsx)(_WarningIcon["default"], null);
  if (props.isInvalid) return (0, _react2.jsx)(_ErrorIcon["default"], null);
  return null;
};

var Root = _styledComponents["default"].div(function (_ref2) {
  var hasValue = _ref2.hasValue,
      isValid = _ref2.isValid,
      isInvalid = _ref2.isInvalid,
      isWarning = _ref2.isWarning,
      inputFocused = _ref2.inputFocused,
      prefix = _ref2.prefix,
      customPrefixPadding = _ref2.customPrefixPadding;
  return [{
    "position": "relative"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      .top-label {\n        top: 0px;\n        left: 8px;\n      }\n      .prefix-label {\n        top: 12px;\n      }\n    "]))), prefix && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        input {\n          padding-left: 60px;\n        }\n      "]))), customPrefixPadding && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        input {\n          padding-left: ", ";\n        }\n      "])), customPrefixPadding), hasValue && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        .top-label {\n          opacity: 1;\n          top: -10px;\n        }\n      "]))), hasValue && inputFocused && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#318dff"), isValid && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#00c2ce"), isInvalid && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#eb5757"), isWarning && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        .top-label {\n          color: ", ";\n        }\n      "])), "#f08727")];
});

var PrefixLabel = _styledComponents["default"].span(function (_ref3) {
  _objectDestructuringEmpty(_ref3);

  return [{
    "position": "absolute",
    "left": "1rem",
    "fontWeight": "500",
    "color": "var(--text-dim)",
    "fontSize": "1rem",
    "lineHeight": "24px",
    "pointerEvents": "none"
  }];
});

var PlaceholderLabel = _styledComponents["default"].span(function (_ref4) {
  var isValid = _ref4.isValid,
      isInvalid = _ref4.isInvalid,
      isWarning = _ref4.isWarning;
  return [{
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "200ms",
    "position": "absolute",
    "opacity": "0",
    "backgroundColor": "var(--bg-primary)",
    "fontWeight": "500",
    "color": "var(--text-primary)",
    "fontSize": "0.8125rem",
    "lineHeight": "16px",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "0.125rem",
    "paddingBottom": "0.125rem",
    "pointerEvents": "none",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "--tw-text-opacity": "1",
      "color": "rgba(49, 141, 255, var(--tw-text-opacity))"
    }
  }, isValid && [{
    "--tw-text-opacity": "1",
    "color": "rgba(0, 194, 206, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 194, 206, var(--tw-text-opacity))"
    }
  }], isInvalid && [{
    "--tw-text-opacity": "1",
    "color": "rgba(235, 87, 87, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(235, 87, 87, var(--tw-text-opacity))"
    }
  }], isWarning && [{
    "--tw-text-opacity": "1",
    "color": "rgba(240, 135, 39, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(240, 135, 39, var(--tw-text-opacity))"
    }
  }]];
});

var BottomLabel = _styledComponents["default"].div(function (_ref5) {
  var isValid = _ref5.isValid,
      isInvalid = _ref5.isInvalid,
      isWarning = _ref5.isWarning;
  return [{
    "display": "flex",
    "alignItems": "center",
    "width": "100%",
    "backgroundColor": "var(--bg-tertiary)",
    "fontWeight": "500",
    "color": "var(--text-dim)",
    "fontSize": "0.875rem",
    "lineHeight": "20px",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "pointerEvents": "none",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "--tw-text-opacity": "1",
      "color": "rgba(49, 141, 255, var(--tw-text-opacity))"
    }
  }, isValid && [{
    "backgroundColor": "rgba(0, 194, 206, 0.1)",
    "borderRadius": "4px",
    "--tw-text-opacity": "1",
    "color": "rgba(0, 194, 206, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 194, 206, var(--tw-text-opacity))"
    }
  }], isInvalid && [{
    "backgroundColor": "rgba(235, 87, 87, 0.1)",
    "borderRadius": "4px",
    "--tw-text-opacity": "1",
    "color": "rgba(235, 87, 87, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(235, 87, 87, var(--tw-text-opacity))"
    }
  }], isWarning && [{
    "backgroundColor": "rgba(240, 135, 39, 0.1)",
    "borderRadius": "4px",
    "--tw-text-opacity": "1",
    "color": "rgba(240, 135, 39, var(--tw-text-opacity))",
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(240, 135, 39, var(--tw-text-opacity))"
    }
  }], (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    svg {\n      margin-right: 6px;\n    }\n  "])))];
});