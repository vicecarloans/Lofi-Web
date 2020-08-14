import React from 'react';
import cls from 'classnames';
import ReactDragListView from 'react-drag-listview/lib/ReactDragListView';
import { NotContentIcon, ArrowDownIcon } from './Icon';

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
  return /*#__PURE__*/React.createElement("div", {
    className: cls('audio-lists-panel', panelToggleAnimate, {
      'glass-bg': glassBg
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "audio-lists-panel-header"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "audio-lists-panel-header-title"
  }, /*#__PURE__*/React.createElement("span", null, locale.playListsText, " / "), /*#__PURE__*/React.createElement("span", {
    className: "audio-lists-panel-header-num"
  }, audioLists.length), /*#__PURE__*/React.createElement("span", {
    className: "audio-lists-panel-header-close-btn",
    title: locale.closeText,
    onClick: onCancel
  }, isMobile ? /*#__PURE__*/React.createElement(ArrowDownIcon, null) : closeIcon), remove && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "audio-lists-panel-header-line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "audio-lists-panel-header-delete-btn",
    title: locale.removeAudioListsText,
    onClick: onDelete()
  }, deleteIcon)))), /*#__PURE__*/React.createElement("div", {
    className: cls('audio-lists-panel-content', {
      'no-content': audioLists.length < 1
    })
  }, audioLists.length >= 1 ? /*#__PURE__*/React.createElement(ReactDragListView, {
    nodeSelector: "li",
    handleSelector: ".player-name",
    lineClassName: "audio-lists-panel-drag-line",
    onDragEnd: audioListsDragEnd
  }, /*#__PURE__*/React.createElement("ul", null, audioLists.map(function (audio) {
    var name = audio.name,
        singer = audio.singer;
    var playing = playId === audio.id;
    return /*#__PURE__*/React.createElement("li", {
      key: audio.id,
      title: pause ? locale.clickToPlayText : playing ? locale.clickToPauseText : locale.clickToPlayText,
      className: cls('audio-item', {
        playing: playing
      }, {
        pause: pause
      }, {
        remove: removeId === audio.id
      }),
      onClick: function onClick() {
        return onPlay(audio.id);
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "group player-status"
    }, /*#__PURE__*/React.createElement("span", {
      className: "player-icons"
    }, playing && loading ? loading : playing ? pause ? playIcon : pauseIcon : undefined)), /*#__PURE__*/React.createElement("span", {
      className: "group player-name",
      title: name
    }, name), /*#__PURE__*/React.createElement("span", {
      className: "group player-singer",
      title: singer
    }, singer), remove && /*#__PURE__*/React.createElement("span", {
      className: "group player-delete",
      title: locale.clickToDeleteText(name),
      onClick: onDelete(audio.id)
    }, closeIcon));
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(NotContentIcon, null)), /*#__PURE__*/React.createElement("span", {
    className: "no-data"
  }, locale.notContentText))));
};

export default AudioListsPanel;