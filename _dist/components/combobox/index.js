"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComboBox;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@headlessui/react");

var _solid = require("@heroicons/react/solid");

var _react3 = require("@emotion/react");

var _excluded = ["items", "selected", "setSelected"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ComboBox(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      setSelected = _ref.setSelected,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var filteredItems = query === '' ? items : items.filter(function (item) {
    return item.label.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''));
  });
  return (0, _react3.jsx)(_react2.Combobox, _extends({
    value: selected,
    onChange: setSelected
  }, props), (0, _react3.jsx)("div", {
    css: {
      "position": "relative"
    }
  }, (0, _react3.jsx)("div", {
    css: {
      "position": "relative",
      "width": "100%",
      "textAlign": "left",
      "borderRadius": "0.5rem",
      "cursor": "default",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      "overflow": "hidden",
      "@media (min-width: 480px)": {
        "fontSize": "0.8125rem"
      }
    }
  }, (0, _react3.jsx)(_react2.Combobox.Input, {
    css: {
      "width": "100%",
      "backgroundColor": "var(--bg-input)",
      "fontWeight": "500",
      "borderStyle": "none",
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "0.75rem",
      "paddingRight": "2.5rem",
      "fontSize": "0.8125rem",
      "lineHeight": "1.25rem",
      "color": "var(--text-secondary)"
    },
    displayValue: function displayValue(item) {
      return item.label;
    },
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    }
  }), (0, _react3.jsx)(_react2.Combobox.Button, {
    css: {
      "position": "absolute",
      "top": "0px",
      "bottom": "0px",
      "right": "0px",
      "display": "flex",
      "alignItems": "center",
      "paddingRight": "0.5rem"
    }
  }, (0, _react3.jsx)(_solid.SelectorIcon, {
    css: {
      "width": "1.25rem",
      "height": "1.25rem",
      "color": "var(--text-tertiary)"
    },
    "aria-hidden": "true"
  }))), (0, _react3.jsx)(_react2.Combobox.Options, {
    css: {
      "position": "absolute",
      "width": "100%",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "marginTop": "0.25rem",
      "overflow": "auto",
      "fontSize": "0.9375rem",
      "backgroundColor": "var(--bg-body)",
      "borderRadius": "0.375rem",
      "--tw-shadow": "0px 4px 6px -4px #000000, 0px 10px 15px -3px #000000",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "maxHeight": "15rem",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      "zIndex": "50",
      "@media (min-width: 480px)": {
        "fontSize": "0.8125rem"
      }
    }
  }, filteredItems.length === 0 && query !== '' ? (0, _react3.jsx)("div", {
    css: {
      "cursor": "default",
      "userSelect": "none",
      "position": "relative",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "color": "var(--text-primary)"
    }
  }, "Nothing found.") : filteredItems.map(function (item) {
    return (0, _react3.jsx)(_react2.Combobox.Option, {
      key: item.id,
      css: function css(_ref2) {
        var active = _ref2.active;
        return comboBoxStyles[active];
      },
      value: item
    }, function (_ref3) {
      var selected = _ref3.selected,
          active = _ref3.active;
      return (0, _react3.jsx)("span", {
        css: {
          "display": "block",
          "position": "relative"
        }
      }, (0, _react3.jsx)("span", {
        className: "aqui",
        css: spanStyles[selected]
      }, item.label), selected ? (0, _react3.jsx)("span", {
        css: spanBStyles[selected]
      }, (0, _react3.jsx)(_solid.CheckIcon, {
        css: {
          "width": "1.25rem",
          "height": "1.25rem"
        },
        "aria-hidden": "true"
      })) : null);
    });
  }))));
}

var comboBoxStyles = {};
comboBoxStyles[true] = {
  "cursor": "default",
  "userSelect": "none",
  "position": "relative",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-tertiary)"
};
comboBoxStyles[false] = {
  "cursor": "default",
  "userSelect": "none",
  "position": "relative",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "color": "var(--text-secondary)"
};
var spanStyles = {};
spanStyles[true] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "fontWeight": "500",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  ":hover": {
    "backgroundColor": "var(--bg-input)",
    "cursor": "pointer"
  }
};
spanStyles[false] = {
  "display": "block",
  "overflow": "hidden",
  "textOverflow": "ellipsis",
  "whiteSpace": "nowrap",
  "fontWeight": "400",
  "paddingLeft": "2.5rem",
  "paddingRight": "1rem",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem",
  ":hover": {
    "backgroundColor": "var(--bg-input)",
    "cursor": "pointer"
  }
};
var spanBStyles = {};
spanBStyles[true] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "--tw-text-opacity": "1",
  "color": "currentColor"
};
spanBStyles[false] = {
  "position": "absolute",
  "top": "0px",
  "bottom": "0px",
  "left": "0px",
  "display": "flex",
  "alignItems": "center",
  "paddingLeft": "0.75rem",
  "--tw-text-opacity": "1",
  "color": "currentColor"
};