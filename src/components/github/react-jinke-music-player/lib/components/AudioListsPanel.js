"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ReactDragListView = _interopRequireDefault(require("react-drag-listview/lib/ReactDragListView"));

var _Icon = require("./Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AudioListsPanel = function AudioListsPanel(_ref) {
  var audioLists = _ref.audioLists,
      onCancel = _ref.onCancel,
      onDelete = _ref.onDelete,
      onPlay = _ref.onPlay,
      pause = _ref.pause,
      playId = _ref.playId,
      loading = _ref.loading,
      playIcon = _ref.playIcon,
      pauseIcon = _ref.pauseIcon,
      closeIcon = _ref.closeIcon,
      deleteIcon = _ref.deleteIcon,
      panelToggleAnimate = _ref.panelToggleAnimate,
      glassBg = _ref.glassBg,
      remove = _ref.remove,
      removeId = _ref.removeId,
      audioListsDragEnd = _ref.audioListsDragEnd,
      isMobile = _ref.isMobile,
      locale = _ref.locale;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('audio-lists-panel', panelToggleAnimate, {
      'glass-bg': glassBg
    })
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "audio-lists-panel-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "audio-lists-panel-header-title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, locale.playListsText, " / "), /*#__PURE__*/_react["default"].createElement("span", {
    className: "audio-lists-panel-header-num"
  }, audioLists.length), /*#__PURE__*/_react["default"].createElement("span", {
    className: "audio-lists-panel-header-close-btn",
    title: locale.closeText,
    onClick: onCancel
  }, isMobile ? /*#__PURE__*/_react["default"].createElement(_Icon.ArrowDownIcon, null) : closeIcon), remove && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
    className: "audio-lists-panel-header-line"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "audio-lists-panel-header-delete-btn",
    title: locale.removeAudioListsText,
    onClick: onDelete()
  }, deleteIcon)))), /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('audio-lists-panel-content', {
      'no-content': audioLists.length < 1
    })
  }, audioLists.length >= 1 ? /*#__PURE__*/_react["default"].createElement(_ReactDragListView["default"], {
    nodeSelector: "li",
    handleSelector: ".player-name",
    lineClassName: "audio-lists-panel-drag-line",
    onDragEnd: audioListsDragEnd
  }, /*#__PURE__*/_react["default"].createElement("ul", null, audioLists.map(function (audio) {
    var name = audio.name,
        singer = audio.singer;
    var playing = playId === audio.id;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: audio.id,
      title: pause ? locale.clickToPlayText : playing ? locale.clickToPauseText : locale.clickToPlayText,
      className: (0, _classnames["default"])('audio-item', {
        playing: playing
      }, {
        pause: pause
      }, {
        remove: removeId === audio.id
      }),
      onClick: function onClick() {
        return onPlay(audio.id);
      }
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "group player-status"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "player-icons"
    }, playing && loading ? loading : playing ? pause ? playIcon : pauseIcon : undefined)), /*#__PURE__*/_react["default"].createElement("span", {
      className: "group player-name",
      title: name
    }, name), /*#__PURE__*/_react["default"].createElement("span", {
      className: "group player-singer",
      title: singer
    }, singer), remove && /*#__PURE__*/_react["default"].createElement("span", {
      className: "group player-delete",
      title: locale.clickToDeleteText(name),
      onClick: onDelete(audio.id)
    }, closeIcon));
  }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon.NotContentIcon, null)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "no-data"
  }, locale.notContentText))));
};

var _default = AudioListsPanel;
exports["default"] = _default;