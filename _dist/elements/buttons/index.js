"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Headers = exports.Button = exports.BotsList = void 0;
exports.RowComponentA = RowComponentA;
exports.RowComponentB = RowComponentB;
exports.TableHeaders = TableHeaders;
exports["default"] = exports.TableRow = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _CheckBox = _interopRequireDefault(require("@hummingbot/hbui/assets/svgs/16x16/CheckBox"));

var _PowerSwitch = _interopRequireDefault(require("@hummingbot/hbui/assets/svgs/16x16/PowerSwitch"));

var _KebabControl = _interopRequireDefault(require("@hummingbot/hbui/assets/svgs/16x16/KebabControl"));

var _PlayButton = _interopRequireDefault(require("@hummingbot/hbui/assets/svgs/16x16/PlayButton"));

var _StopButton = _interopRequireDefault(require("@hummingbot/hbui/assets/svgs/16x16/StopButton"));

var _input = require("@hummingbot/hbui/elements/input");

var _typography = require("@hummingbot/hbui/elements/typography");

var _layout = require("@hummingbot/hbui/elements/layout");

var _ComboBox = _interopRequireDefault(require("@hummingbot/hbui/components/combobox/ComboBox"));

var _Modal = _interopRequireDefault(require("../../ui/components/Modal"));

var _bots = _interopRequireDefault(require("../../data/bots"));

var _exchanges = _interopRequireDefault(require("../../data/exchanges"));

var _strategies = _interopRequireDefault(require("../../data/strategies"));

var _tradingmodes = _interopRequireDefault(require("../../data/tradingmodes"));

var _tradingpairs = _interopRequireDefault(require("../../data/tradingpairs"));

var _regions = _interopRequireDefault(require("../../data/regions"));

var _hostlocations = _interopRequireDefault(require("../../data/hostlocations"));

var _activities = _interopRequireDefault(require("../../data/activities"));

var _fileformats = _interopRequireDefault(require("../../data/fileformats"));

var _react2 = require("@emotion/react");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_bots["default"].unshift({
  label: 'All bots',
  id: 0
});

_activities["default"].unshift({
  label: 'All activities',
  id: 0
});

_exchanges["default"].unshift({
  label: 'All exchanges',
  id: 0
});

_tradingpairs["default"].unshift({
  label: 'All trading pairs',
  id: 0
});

function Table() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      generating = _useState2[0],
      setGenerating = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      generated = _useState4[0],
      setGenerated = _useState4[1];

  var _useState5 = (0, _react.useState)(_bots["default"][0]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedBot = _useState6[0],
      setBot = _useState6[1];

  var _useState7 = (0, _react.useState)(_activities["default"][0]),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedActivity = _useState8[0],
      setActivity = _useState8[1];

  var _useState9 = (0, _react.useState)(_tradingpairs["default"][0]),
      _useState10 = _slicedToArray(_useState9, 2),
      selectedTradingPair = _useState10[0],
      setTradingPair = _useState10[1];

  var _useState11 = (0, _react.useState)(_exchanges["default"][0]),
      _useState12 = _slicedToArray(_useState11, 2),
      selectedExchange = _useState12[0],
      setExchange = _useState12[1];

  var _useState13 = (0, _react.useState)(_fileformats["default"][0]),
      _useState14 = _slicedToArray(_useState13, 2),
      fileFormat = _useState14[0],
      setFileFormat = _useState14[1];

  return (0, _react2.jsx)("div", {
    css: {
      "width": "100%"
    }
  }, (0, _react2.jsx)(_layout.Section, null, generating && (0, _react2.jsx)(_Modal["default"], {
    path: "Reports > New report",
    closeFunction: setGenerating,
    content: (0, _react2.jsx)(ModalContent, {
      setSavedKeys: setGenerated,
      setAddingKey: setGenerating
    })
  }), (0, _react2.jsx)(_layout.Section, {
    css: {
      "borderBottomWidth": "1px",
      "paddingTop": "8px",
      "paddingBottom": "8px",
      "marginBottom": "0.5rem",
      "borderColor": "var(--border-secondary)"
    }
  }, (0, _react2.jsx)(_layout.Container, null, (0, _react2.jsx)(_layout.ItemsRow, {
    css: {
      "justifyContent": "space-between",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "Generate new report"), (0, _react2.jsx)("div", {
    css: {
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_ComboBox["default"], {
    css: {
      "marginRight": "16px"
    },
    items: _bots["default"],
    selected: selectedBot,
    setSelected: setBot
  }), (0, _react2.jsx)(_ComboBox["default"], {
    css: {
      "marginRight": "16px"
    },
    items: _activities["default"],
    selected: selectedActivity,
    setSelected: setActivity
  }), (0, _react2.jsx)(_ComboBox["default"], {
    css: {
      "marginRight": "16px"
    },
    items: _tradingpairs["default"],
    selected: selectedTradingPair,
    setSelected: setTradingPair
  }), (0, _react2.jsx)(_ComboBox["default"], {
    css: {
      "marginRight": "16px"
    },
    items: _exchanges["default"],
    selected: selectedExchange,
    setSelected: setExchange
  }), (0, _react2.jsx)(_ComboBox["default"], {
    css: {
      "marginRight": "16px"
    },
    items: _fileformats["default"],
    selected: fileFormat,
    setSelected: setFileFormat
  }), (0, _react2.jsx)(Button, {
    isSuccess: true,
    isSmall: true,
    onClick: function onClick() {
      return setGenerating(true);
    }
  }, "Generate"))))), (0, _react2.jsx)(_layout.Container, null, (0, _react2.jsx)(_typography.P, {
    isMedium: true,
    css: {
      "marginTop": "16px"
    }
  }, "Past reports"), (0, _react2.jsx)(TableHeaders, null), (0, _react2.jsx)(BotsList, null, (0, _react2.jsx)(RowComponentA, null), generated && (0, _react2.jsx)(RowComponentB, null)))));
}

var _default = Table;
exports["default"] = _default;

var Headers = _styledComponents["default"].div(function () {
  return [{
    "width": "100%",
    "display": "flex",
    "paddingTop": "0.625rem",
    "paddingBottom": "0.625rem",
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "marginTop": "8px",
    "marginBottom": "8px"
  }, {
    "alignItems": "center"
  }];
});

exports.Headers = Headers;

function TableHeaders(_ref) {
  var children = _ref.children;
  return (0, _react2.jsx)(Headers, null, (0, _react2.jsx)(_typography.PNano, {
    css: {
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    },
    isLabel: true,
    isMedium: true
  }, "Date"), (0, _react2.jsx)(_typography.PNano, {
    css: {
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    },
    isLabel: true,
    isMedium: true
  }, "Name"), (0, _react2.jsx)(_typography.PNano, {
    css: {
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    },
    isLabel: true,
    isMedium: true
  }, "Portfolio"), (0, _react2.jsx)(_typography.PNano, {
    css: {
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    },
    isLabel: true,
    isMedium: true
  }, "File type"), (0, _react2.jsx)(_typography.PNano, {
    css: {
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    },
    isLabel: true,
    isMedium: true
  }, "Status"), (0, _react2.jsx)(_typography.PNano, {
    css: [{
      "width": "16.666667%",
      "color": "var(--text-quaternary) !important"
    }, {
      "opacity": "0"
    }],
    isLabel: true,
    isMedium: true
  }, "_"));
}

var BotsList = _styledComponents["default"].div(function () {
  return [{
    "width": "100%",
    "display": "flex",
    "flexDirection": "column"
  }];
});

exports.BotsList = BotsList;

var TableRow = _styledComponents["default"].div(function () {
  return [{
    "width": "100%",
    "marginBottom": "8px",
    "backgroundColor": "var(--bg-primary)"
  }, {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between"
  }, {
    "paddingLeft": "16px",
    "paddingRight": "16px",
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "marginBottom": "0.75rem"
  }, {
    "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    "borderRadius": "0.375rem"
  }];
});

exports.TableRow = TableRow;

function RowComponentA(_ref2) {
  var children = _ref2.children;
  return (0, _react2.jsx)(TableRow, null, (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "02/12/22 22:22")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "My report #1")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "Portfolio #1")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "CSV")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "Completed")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "flex-end"
    }
  }, (0, _react2.jsx)(Button, {
    isSmall: true
  }, "Download")));
}

function RowComponentB(_ref3) {
  var children = _ref3.children;
  return (0, _react2.jsx)(TableRow, null, (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "02/12/22 22:22")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "My report #2")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "Portfolio #1")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "CSV")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center"
    }
  }, (0, _react2.jsx)(_typography.PSmall, {
    isMedium: true
  }, "Completed")), (0, _react2.jsx)("div", {
    css: {
      "width": "16.666667%",
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "flex-end"
    }
  }, (0, _react2.jsx)(Button, {
    isSmall: true
  }, "Download")));
}

function ModalContent(_ref4) {
  var item = _ref4.item,
      setAddingKey = _ref4.setAddingKey,
      setSavedKeys = _ref4.setSavedKeys;

  var _useState15 = (0, _react.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      reportName = _useState16[0],
      setReportName = _useState16[1];

  var _useState17 = (0, _react.useState)(''),
      _useState18 = _slicedToArray(_useState17, 2),
      keyCode = _useState18[0],
      setKeyCode = _useState18[1];

  var _useState19 = (0, _react.useState)(''),
      _useState20 = _slicedToArray(_useState19, 2),
      apiSecret = _useState20[0],
      setApiSecret = _useState20[1];

  var _useState21 = (0, _react.useState)(_regions["default"][0]),
      _useState22 = _slicedToArray(_useState21, 2),
      selectedRegion = _useState22[0],
      setRegion = _useState22[1];

  return (0, _react2.jsx)("div", null, (0, _react2.jsx)(_typography.LabelTiny, {
    css: {
      "color": "var(--text-quaternary)",
      "marginBottom": "8px"
    }
  }, "Report name ", (0, _react2.jsx)(_typography.Red, null, "*")), (0, _react2.jsx)(_input.TextInput, {
    onChange: function onChange(e) {
      return setReportName(e.target.value);
    },
    value: reportName,
    placeholder: "Untitled report",
    css: {
      "marginBottom": "16px"
    }
  }), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "16px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "Bots"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "All bots")), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "16px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "Activities"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "All activities")), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "16px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "Trading pairs"), (0, _react2.jsx)("div", {
    css: {
      "display": "flex"
    }
  }, (0, _react2.jsx)(Pill, {
    isLabel: true,
    css: {
      "marginRight": "8px"
    }
  }, "BTC - USDT"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "BUSD - BCH"))), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "16px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "Exchanges"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "All exchanges")), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "16px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "File type"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "CSV")), (0, _react2.jsx)("div", {
    css: {
      "width": "100%",
      "display": "flex",
      "justifyContent": "space-between",
      "alignItems": "center",
      "marginBottom": "48px"
    }
  }, (0, _react2.jsx)(_typography.PSmall, null, "Date range"), (0, _react2.jsx)(Pill, {
    isLabel: true
  }, "15/09/2021 \u2014 20/09/2021")), (0, _react2.jsx)(_layout.ItemsRow, {
    css: {
      "justifyContent": "flex-end"
    }
  }, (0, _react2.jsx)(Button, {
    onClick: function onClick() {
      return setAddingKey(false);
    }
  }, "Cancel"), (0, _react2.jsx)(Button, {
    isSuccess: true,
    onClick: function onClick() {
      setAddingKey(false);
      setSavedKeys(true);
    }
  }, "Generate")));
}

var Pill = (0, _styledComponents["default"])(_typography.PSmall)(function (_ref5) {
  _objectDestructuringEmpty(_ref5);

  return [{
    "color": "var(--text-primary)",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 0, 0, var(--tw-bg-opacity))",
    "padding": "0.25rem",
    "borderRadius": "4px"
  }];
});

var Button = _styledComponents["default"].button(function (_ref6) {
  var isSecondary = _ref6.isSecondary,
      isInfo = _ref6.isInfo,
      isSuccess = _ref6.isSuccess,
      isWarning = _ref6.isWarning,
      isDanger = _ref6.isDanger,
      isSmall = _ref6.isSmall,
      isTiny = _ref6.isTiny,
      isLarge = _ref6.isLarge,
      isExtraLarge = _ref6.isExtraLarge,
      isDisabled = _ref6.isDisabled,
      isUppercase = _ref6.isUppercase,
      isGhost = _ref6.isGhost,
      iconColor = _ref6.iconColor;
  return [{
    "display": "flex"
  }, {
    "color": "var(--text-tertiary)",
    "fontSize": "14px",
    "fontWeight": "500"
  }, {
    "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "100ms"
  }, {
    "borderWidth": "2px",
    "borderColor": "var(--border-primary)",
    ":hover": {
      "borderColor": "var(--border-tertiary)"
    },
    ":active": {
      "borderColor": "var(--border-quaternary)"
    }
  }, {
    "backgroundColor": "var(--bg-tertiary)",
    ":hover": {
      "backgroundColor": "var(--bg-quaternary)"
    },
    ":active": {
      "backgroundColor": "var(--bg-quintenary)"
    }
  }, {
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "5px",
    "paddingBottom": "5px",
    "borderRadius": "4px",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px"
    }
  }, (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      font-family: 'Inter';\n      align-items: center;\n      justify-content: center;\n      user-select: none;\n      cursor: pointer;\n      .icon-before * {\n        margin-right: 10px;\n        fill: ", ";\n      }\n      .icon-after * {\n        margin-left: 10px;\n        fill: ", ";\n      }\n    "])), iconColor ? iconColor : 'auto', iconColor ? iconColor : 'auto'), isUppercase && [(0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        text-transform: uppercase;\n      "])))], isSmall && [{
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "paddingTop": "2px",
    "paddingBottom": "1.5px",
    "fontSize": "13px"
  }], isTiny && [{
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "paddingTop": "0px",
    "paddingBottom": "0px",
    "fontSize": "11px"
  }], isLarge && [{
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.375rem",
    "paddingBottom": "0.375rem",
    "fontSize": "16px"
  }], isSecondary && [{
    "backgroundColor": "rgba(0, 0, 0, 0)",
    ":hover": {
      "backgroundColor": "rgba(0, 0, 0, 0)"
    },
    ":active": {
      "backgroundColor": "var(--bg-tertiary)"
    }
  }, {
    "borderColor": "var(--border-secondary)",
    ":hover": {
      "borderColor": "var(--border-quaternary)"
    }
  }], isSuccess && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(0, 194, 206, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(0, 194, 206, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 177, 187, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(0, 138, 146, var(--tw-bg-opacity))"
    }
  }], isInfo && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(49, 141, 255, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(49, 141, 255, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(45, 128, 232, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(35, 100, 181, var(--tw-bg-opacity))"
    }
  }], isWarning && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(240, 135, 39, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(240, 135, 39, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(218, 123, 35, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(170, 96, 28, var(--tw-bg-opacity))"
    }
  }], isDanger && [{
    "--tw-text-opacity": "1",
    "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
    ".dark &": {
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    }
  }, {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))",
    ":hover": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))"
    },
    ":active": {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(235, 87, 87, var(--tw-border-opacity))"
    }
  }, {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(235, 87, 87, var(--tw-bg-opacity))",
    ":hover": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(214, 79, 79, var(--tw-bg-opacity))"
    },
    ":active": {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(167, 62, 62, var(--tw-bg-opacity))"
    }
  }], isDisabled && [{
    "pointerEvents": "none",
    "opacity": "0.3"
  }]];
});

exports.Button = Button;