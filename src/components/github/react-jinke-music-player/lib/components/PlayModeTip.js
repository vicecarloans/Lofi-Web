"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlayModeTip = function PlayModeTip(_ref) {
  var prefix = _ref.prefix,
      visible = _ref.visible,
      title = _ref.title,
      text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("".concat(prefix, "-play-model-tip"), {
      show: visible
    })
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(prefix, "-play-model-tip-title")
  }, title), /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(prefix, "-play-model-tip-text")
  }, text));
};

var _default = PlayModeTip;
exports["default"] = _default;