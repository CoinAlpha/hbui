"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttons = require("../../elements/buttons");

var _CheckIcon = _interopRequireDefault(require("../../assets/svgs/notifications/CheckIcon"));

var _WarningIcon = _interopRequireDefault(require("../../assets/svgs/notifications/WarningIcon"));

var _ErrorIcon = _interopRequireDefault(require("../../assets/svgs/notifications/ErrorIcon"));

var _InfoIcon = _interopRequireDefault(require("../../assets/svgs/notifications/InfoIcon"));

var _TipIcon = _interopRequireDefault(require("../../assets/svgs/notifications/TipIcon"));

var _BugIcon = _interopRequireDefault(require("../../assets/svgs/notifications/BugIcon"));

var _NoteIcon = _interopRequireDefault(require("../../assets/svgs/notifications/NoteIcon"));

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2;

var _excluded = ["title", "text", "type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Callout = function Callout(_ref) {
  var title = _ref.title,
      text = _ref.text,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, _excluded);

  var stateIcon = getStateIcon(type);
  return (0, _react2.jsx)(Root, _extends({
    type: type
  }, props), (0, _react2.jsx)(Header, {
    type: type
  }, stateIcon, " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

var _default = Callout;
exports["default"] = _default;

var getStateIcon = function getStateIcon(type) {
  if (type === 'success') return (0, _react2.jsx)(_CheckIcon["default"], null);
  if (type === 'warning') return (0, _react2.jsx)(_WarningIcon["default"], null);
  if (type === 'danger') return (0, _react2.jsx)(_ErrorIcon["default"], null);
  if (type === 'info') return (0, _react2.jsx)(_InfoIcon["default"], null);
  if (type === 'tip') return (0, _react2.jsx)(_TipIcon["default"], null);
  if (type === 'bug') return (0, _react2.jsx)(_BugIcon["default"], null);
  if (type === 'note') return (0, _react2.jsx)(_NoteIcon["default"], null);
  return null;
};

var Root = _styledComponents["default"].div(function (_ref2) {
  var type = _ref2.type;
  return [{
    "borderRadius": "4px",
    "borderStyle": "solid",
    "borderLeftWidth": "8px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderTopWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgba(223, 225, 226, var(--tw-border-opacity))",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(241, 243, 243, var(--tw-bg-opacity))",
    ".dark &": {
      "backgroundColor": "rgba(250, 250, 250, 0.05)"
    }
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    svg {\n      margin-right: 10px;\n    }\n  "]))), type === 'success' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(176, 236, 240, var(--tw-border-opacity))",
    "backgroundColor": "rgba(176, 236, 240, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(84, 214, 222, var(--tw-border-opacity))",
      "backgroundColor": "rgba(84, 214, 222, 0.1)"
    }
  }], type === 'info' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(191, 220, 255, var(--tw-border-opacity))",
    "backgroundColor": "rgba(191, 220, 255, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(117, 179, 255, var(--tw-border-opacity))",
      "backgroundColor": "rgba(117, 179, 255, 0.1)"
    }
  }], type === 'danger' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(249, 203, 203, var(--tw-border-opacity))",
    "backgroundColor": "rgba(249, 203, 203, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(242, 142, 142, var(--tw-border-opacity))",
      "backgroundColor": "rgba(242, 142, 142, 0.1)"
    }
  }], type === 'warning' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(250, 218, 188, var(--tw-border-opacity))",
    "backgroundColor": "rgba(250, 218, 188, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(245, 175, 110, var(--tw-border-opacity))",
      "backgroundColor": "rgba(245, 175, 110, 0.1)"
    }
  }], type === 'tip' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(206, 176, 250, var(--tw-border-opacity))",
    "backgroundColor": "rgba(206, 176, 250, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(150, 84, 244, var(--tw-border-opacity))",
      "backgroundColor": "rgba(150, 84, 244, 0.1)"
    }
  }], type === 'bug' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(250, 218, 188, var(--tw-border-opacity))",
    "backgroundColor": "rgba(250, 218, 188, 0.2)",
    ".dark &": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(245, 175, 110, var(--tw-border-opacity))",
      "backgroundColor": "rgba(245, 175, 110, 0.1)"
    }
  }], type === 'note' && [{
    "--tw-border-opacity": "1",
    "borderColor": "rgba(223, 225, 226, var(--tw-border-opacity))",
    "backgroundColor": "rgba(223, 225, 226, 0.2)",
    ".dark &": {
      "backgroundColor": "rgba(250, 250, 250, 0.05)"
    }
  }]];
});

var Header = _styledComponents["default"].div(function (_ref3) {
  var type = _ref3.type;
  return [{
    "display": "flex",
    "alignItems": "center",
    "fontWeight": "500",
    "fontSize": "1.125rem",
    "lineHeight": "28px",
    "--tw-text-opacity": "1",
    "color": "rgba(21, 24, 25, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(201, 205, 207, var(--tw-text-opacity))"
    },
    "paddingTop": "1rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  }, type === 'success' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(0, 194, 206, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(51, 206, 216, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(51, 206, 216, var(--tw-text-opacity))"
    }
  }], type === 'info' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(49, 141, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(117, 179, 255, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(90, 164, 255, var(--tw-text-opacity))"
    }
  }], type === 'danger' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(235, 87, 87, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(239, 121, 121, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(239, 121, 121, var(--tw-text-opacity))"
    }
  }], type === 'warning' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(240, 135, 39, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(243, 159, 82, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(243, 159, 82, var(--tw-text-opacity))"
    }
  }], type === 'tip' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(98, 0, 238, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(206, 176, 250, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(206, 176, 250, var(--tw-text-opacity))"
    }
  }], type === 'bug' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(240, 135, 39, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(243, 159, 82, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(243, 159, 82, var(--tw-text-opacity))"
    }
  }], type === 'note' && [{
    "--tw-text-opacity": "1",
    "color": "rgba(21, 24, 25, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },
    ":focus": {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }
  }]];
});

var Text = _styledComponents["default"].div(function (_ref4) {
  var isSuccess = _ref4.isSuccess,
      isInfo = _ref4.isInfo,
      isDanger = _ref4.isDanger,
      isWarning = _ref4.isWarning;
  return [{
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgba(72, 77, 81, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    },
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingBottom": "1rem",
    "paddingTop": "0.5rem"
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    a {\n      text-decoration: underline;\n    }\n  "])))];
});