"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 迷你模式进度条
var CircleProcessBar = function CircleProcessBar() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$progress = _ref.progress,
      progress = _ref$progress === void 0 ? 0 : _ref$progress,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 40 : _ref$r;

  var currentProgress = progress.toFixed(2);
  var perimeter = Math.PI * 2 * r;
  var strokeDasharray = "".concat(Math.floor(perimeter * currentProgress), " ").concat(Math.floor(perimeter * (1 - currentProgress)));
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "audio-circle-process-bar"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "stroke",
    strokeDasharray: strokeDasharray
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "bg",
    strokeDasharray: "0 1000"
  }));
};

var _default = CircleProcessBar;
exports["default"] = _default;