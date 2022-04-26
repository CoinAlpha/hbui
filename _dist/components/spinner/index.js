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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spin = function Spin(props) {
  var color = props.color,
      radius = props.radius,
      style = props.style,
      duration = props.duration,
      strokeWidth = props.strokeWidth,
      center = props.center;
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
    css: (0, _styledComponents.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n          @keyframes rotate {\n            100% {transform: rotate(360deg);}\n          }\n          animation-name: rotate;\n          animation-duration: ", "ms;\n          animation-timing-function: linear;\n          display: inline-block;\n          animation-iteration-count: infinite;\n          width: ", "px;\n          height: ", "px;\n        "])), duration ? duration : 900, radius ? radius : 40, radius ? radius : 40)
  }, (0, _react2.jsx)("g", {
    fill: "none",
    transform: "translate(3 3)",
    strokeWidth: "3"
  }, (0, _react2.jsx)("circle", {
    css: {
      "stroke": "currentColor",
      "--tw-text-opacity": "1",
      "color": "rgba(223, 225, 226, var(--tw-text-opacity))",
      ".dark &": {
        "--tw-text-opacity": "1",
        "color": "rgba(62, 67, 71, var(--tw-text-opacity))"
      }
    },
    cx: "18",
    cy: "18",
    r: "18"
  }), Path)));
};

var _default = Spin;
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
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))",
      ".dark &": {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
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
      "--tw-text-opacity": "1",
      "color": "rgba(49, 141, 255, var(--tw-text-opacity))"
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
      "--tw-text-opacity": "1",
      "color": "rgba(0, 194, 206, var(--tw-text-opacity))"
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
      "--tw-text-opacity": "1",
      "color": "rgba(235, 87, 87, var(--tw-text-opacity))"
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
      "--tw-text-opacity": "1",
      "color": "rgba(240, 135, 39, var(--tw-text-opacity))"
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