"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SpinnerBlock = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _templateObject;

var _excluded = ["color", "radius", "style", "duration", "strokeWidth", "center"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Spinner(_ref) {
  var color = _ref.color,
      radius = _ref.radius,
      style = _ref.style,
      duration = _ref.duration,
      strokeWidth = _ref.strokeWidth,
      center = _ref.center,
      props = _objectWithoutProperties(_ref, _excluded);

  var styles = style || {};

  if (center) {
    styles.display = 'block';
    styles.textAlign = 'center';
  }

  var Path = getPathElement(color);
  return (0, _react2.jsx)("span", {
    style: styles
  }, (0, _react2.jsx)("svg", {
    viewBox: "0 0 42 42",
    css: (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          @keyframes rotate {\n            100% {transform: rotate(360deg);}\n          }\n          animation-name: rotate;\n          animation-timing-function: linear;\n          display: inline-block;\n          animation-iteration-count: infinite;\n        "]))),
    style: {
      animationDuration: "".concat(duration ? duration : 900, "ms"),
      width: "".concat(radius ? radius : 40, "px"),
      height: "".concat(radius ? radius : 40, "px")
    }
  }, (0, _react2.jsx)("g", {
    fill: "none",
    transform: "translate(3 3)",
    strokeWidth: "3"
  }, (0, _react2.jsx)("circle", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(223, 225, 226, 1)",
      ".dark &": {
        "color": "rgba(62, 67, 71, 1)"
      }
    },
    cx: "18",
    cy: "18",
    r: "18"
  }), Path)));
}

var _default = Spinner;
exports["default"] = _default;

var SpinnerBlock = _styledComponents["default"].div({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  height: '20%'
});

exports.SpinnerBlock = SpinnerBlock;

function DefaultPath() {
  return (0, _react2.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(0, 0, 0, 1)",
      ".dark &": {
        "color": "rgba(255, 255, 255, 1)"
      }
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}

function BluePath() {
  return (0, _react2.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(49, 141, 255, 1)"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}

function GreenPath() {
  return (0, _react2.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(0, 194, 206, 1)"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}

function RedPath() {
  return (0, _react2.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(235, 87, 87, 1)"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}

function OrangePath() {
  return (0, _react2.jsx)("path", {
    css: {
      "stroke": "currentColor",
      "color": "rgba(240, 135, 39, 1)"
    },
    d: "M36 18c0-9.94-8.06-18-18-18",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  });
}

var getPathElement = function getPathElement(color) {
  switch (color) {
    case 'green':
      return (0, _react2.jsx)(GreenPath, null);

    case 'blue':
      return (0, _react2.jsx)(BluePath, null);

    case 'orange':
      return (0, _react2.jsx)(OrangePath, null);

    case 'red':
      return (0, _react2.jsx)(RedPath, null);
  }

  return (0, _react2.jsx)(DefaultPath, null);
};