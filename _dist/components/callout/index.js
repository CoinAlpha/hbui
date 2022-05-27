"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalloutWarning = exports.CalloutTip = exports.CalloutSuccess = exports.CalloutNote = exports.CalloutInfo = exports.CalloutDanger = exports.CalloutBug = exports.Callout = void 0;

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

var _excluded = ["title", "text"],
    _excluded2 = ["title", "text"],
    _excluded3 = ["title", "text"],
    _excluded4 = ["title", "text"],
    _excluded5 = ["title", "text"],
    _excluded6 = ["title", "text"],
    _excluded7 = ["title", "text"],
    _excluded8 = ["title", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Callout = function Callout(_ref) {
  var title = _ref.title,
      text = _ref.text,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)(RootDefault, props, (0, _react2.jsx)(HeaderDefault, null, title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.Callout = Callout;

var CalloutSuccess = function CalloutSuccess(_ref2) {
  var title = _ref2.title,
      text = _ref2.text,
      props = _objectWithoutProperties(_ref2, _excluded2);

  return (0, _react2.jsx)(RootSuccess, props, (0, _react2.jsx)(HeaderSuccess, null, (0, _react2.jsx)(_CheckIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutSuccess = CalloutSuccess;

var CalloutInfo = function CalloutInfo(_ref3) {
  var title = _ref3.title,
      text = _ref3.text,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return (0, _react2.jsx)(RootInfo, props, (0, _react2.jsx)(HeaderInfo, null, (0, _react2.jsx)(_InfoIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutInfo = CalloutInfo;

var CalloutWarning = function CalloutWarning(_ref4) {
  var title = _ref4.title,
      text = _ref4.text,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return (0, _react2.jsx)(RootWarning, props, (0, _react2.jsx)(HeaderWarning, null, (0, _react2.jsx)(_WarningIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutWarning = CalloutWarning;

var CalloutDanger = function CalloutDanger(_ref5) {
  var title = _ref5.title,
      text = _ref5.text,
      props = _objectWithoutProperties(_ref5, _excluded5);

  return (0, _react2.jsx)(RootDanger, props, (0, _react2.jsx)(HeaderDanger, null, (0, _react2.jsx)(_ErrorIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutDanger = CalloutDanger;

var CalloutTip = function CalloutTip(_ref6) {
  var title = _ref6.title,
      text = _ref6.text,
      props = _objectWithoutProperties(_ref6, _excluded6);

  return (0, _react2.jsx)(RootTip, props, (0, _react2.jsx)(HeaderTip, null, (0, _react2.jsx)(_TipIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutTip = CalloutTip;

var CalloutBug = function CalloutBug(_ref7) {
  var title = _ref7.title,
      text = _ref7.text,
      props = _objectWithoutProperties(_ref7, _excluded7);

  return (0, _react2.jsx)(RootBug, props, (0, _react2.jsx)(HeaderBug, null, (0, _react2.jsx)(_BugIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutBug = CalloutBug;

var CalloutNote = function CalloutNote(_ref8) {
  var title = _ref8.title,
      text = _ref8.text,
      props = _objectWithoutProperties(_ref8, _excluded8);

  return (0, _react2.jsx)(RootNote, props, (0, _react2.jsx)(HeaderNote, null, (0, _react2.jsx)(_NoteIcon["default"], null), " ", title), (0, _react2.jsx)(Text, {
    className: "text"
  }, text));
};

exports.CalloutNote = CalloutNote;

var Root = _styledComponents["default"].div(function (_ref9) {
  var type = _ref9.type;
  return [{
    "borderRadius": "4px",
    "borderStyle": "solid",
    "borderLeftWidth": "8px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderTopWidth": "1px"
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    svg {\n      margin-right: 10px;\n    }\n  "])))];
});

var RootDefault = (0, _styledComponents["default"])(Root)(function (_ref10) {
  _objectDestructuringEmpty(_ref10);

  return [{
    "borderColor": "rgba(223, 225, 226, 1)",
    "backgroundColor": "rgba(241, 243, 243, 1)"
  }, {
    ".dark &": {
      "backgroundColor": "rgba(250, 250, 250, 1)"
    }
  }];
});
var RootSuccess = (0, _styledComponents["default"])(Root)(function (_ref11) {
  _objectDestructuringEmpty(_ref11);

  return [{
    "borderColor": "rgba(176, 236, 240, 1)",
    "backgroundColor": "rgba(176, 236, 240, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(84, 214, 222, 1)",
      "backgroundColor": "rgba(0, 194, 206, 1)"
    }
  }];
});
var RootInfo = (0, _styledComponents["default"])(Root)(function (_ref12) {
  _objectDestructuringEmpty(_ref12);

  return [{
    "borderColor": "rgba(191, 220, 255, 1)",
    "backgroundColor": "rgba(191, 220, 255, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(117, 179, 255, 1)",
      "backgroundColor": "rgba(117, 179, 255, 1)"
    }
  }];
});
var RootDanger = (0, _styledComponents["default"])(Root)(function (_ref13) {
  _objectDestructuringEmpty(_ref13);

  return [{
    "borderColor": "rgba(249, 203, 203, 1)",
    "backgroundColor": "rgba(249, 203, 203, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(242, 142, 142, 1)",
      "backgroundColor": "rgba(242, 142, 142, 1)"
    }
  }];
});
var RootWarning = (0, _styledComponents["default"])(Root)(function (_ref14) {
  _objectDestructuringEmpty(_ref14);

  return [{
    "borderColor": "rgba(250, 218, 188, 1)",
    "backgroundColor": "rgba(250, 218, 188, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(245, 175, 110, 1)",
      "backgroundColor": "rgba(245, 175, 110, 1)"
    }
  }];
});
var RootTip = (0, _styledComponents["default"])(Root)(function (_ref15) {
  _objectDestructuringEmpty(_ref15);

  return [{
    "borderColor": "rgba(206, 176, 250, 1)",
    "backgroundColor": "rgba(206, 176, 250, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(150, 84, 244, 1)",
      "backgroundColor": "rgba(150, 84, 244, 1)"
    }
  }];
});
var RootBug = (0, _styledComponents["default"])(Root)(function (_ref16) {
  _objectDestructuringEmpty(_ref16);

  return [{
    "borderColor": "rgba(250, 218, 188, 1)",
    "backgroundColor": "rgba(250, 218, 188, 1)"
  }, {
    ".dark &": {
      "borderColor": "rgba(245, 175, 110, 1)",
      "backgroundColor": "rgba(245, 175, 110, 1)"
    }
  }];
});
var RootNote = (0, _styledComponents["default"])(Root)(function (_ref17) {
  _objectDestructuringEmpty(_ref17);

  return [{
    "borderColor": "rgba(223, 225, 226, 1)",
    "backgroundColor": "rgba(223, 225, 226, 1)"
  }, {
    ".dark &": {
      "backgroundColor": "rgba(250, 250, 250, 1)"
    }
  }];
});

var Header = _styledComponents["default"].div(function (_ref18) {
  var type = _ref18.type;
  return [{
    "display": "flex",
    "alignItems": "center",
    "fontWeight": "500",
    "fontSize": "1.125rem",
    "paddingTop": "1rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
  }];
});

var HeaderDefault = (0, _styledComponents["default"])(Header)(function (_ref19) {
  var type = _ref19.type;
  return [{
    "color": "rgba(21, 24, 25, 1)",
    ".dark &": {
      "color": "rgba(201, 205, 207, 1)"
    }
  }];
});
var HeaderSuccess = (0, _styledComponents["default"])(Header)(function (_ref20) {
  var type = _ref20.type;
  return [{
    "color": "rgba(0, 194, 206, 1)",
    ".dark &": {
      "color": "rgba(51, 206, 216, 1)"
    }
  }];
});
var HeaderInfo = (0, _styledComponents["default"])(Header)(function (_ref21) {
  var type = _ref21.type;
  return [{
    "color": "rgba(49, 141, 255, 1)",
    ".dark &": {
      "color": "rgba(117, 179, 255, 1)"
    }
  }];
});
var HeaderDanger = (0, _styledComponents["default"])(Header)(function (_ref22) {
  var type = _ref22.type;
  return [{
    "color": "rgba(235, 87, 87, 1)",
    ".dark &": {
      "color": "rgba(239, 121, 121, 1)"
    }
  }];
});
var HeaderWarning = (0, _styledComponents["default"])(Header)(function (_ref23) {
  var type = _ref23.type;
  return [{
    "color": "rgba(240, 135, 39, 1)",
    ".dark &": {
      "color": "rgba(243, 159, 82, 1)"
    }
  }];
});
var HeaderTip = (0, _styledComponents["default"])(Header)(function (_ref24) {
  var type = _ref24.type;
  return [{
    "color": "rgba(98, 0, 238, 1)",
    ".dark &": {
      "color": "rgba(206, 176, 250, 1)"
    }
  }];
});
var HeaderBug = (0, _styledComponents["default"])(Header)(function (_ref25) {
  var type = _ref25.type;
  return [{
    "color": "rgba(240, 135, 39, 1)",
    ".dark &": {
      "color": "rgba(243, 159, 82, 1)"
    }
  }];
});
var HeaderNote = (0, _styledComponents["default"])(Header)(function (_ref26) {
  var type = _ref26.type;
  return [{
    "color": "rgba(21, 24, 25, 1)",
    ".dark &": {
      "color": "rgba(255, 255, 255, 1)"
    }
  }];
});

var Text = _styledComponents["default"].div(function (_ref27) {
  _objectDestructuringEmpty(_ref27);

  return [{
    "fontWeight": "500",
    "color": "rgba(72, 77, 81, 1)",
    ".dark &": {
      "color": "rgba(255, 255, 255, 1)"
    },
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingBottom": "1rem",
    "paddingTop": "0.5rem"
  }, (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    a {\n      text-decoration: underline;\n    }\n  "])))];
});