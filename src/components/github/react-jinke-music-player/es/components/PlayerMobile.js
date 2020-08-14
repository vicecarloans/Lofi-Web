import React from 'react';
import cls from 'classnames';
import PlayModeTip from './PlayModeTip';
var prefix = 'react-jinke-music-player-mobile';

var PlayerMobile = function PlayerMobile(_ref) {
  var name = _ref.name,
      cover = _ref.cover,
      singer = _ref.singer,
      playing = _ref.playing,
      duration = _ref.duration,
      currentTime = _ref.currentTime,
      loading = _ref.loading,
      loadingIcon = _ref.loadingIcon,
      themeSwitch = _ref.themeSwitch,
      progressBar = _ref.progressBar,
      openAudioListsPanel = _ref.openAudioListsPanel,
      audioPrevPlay = _ref.audioPrevPlay,
      audioNextPlay = _ref.audioNextPlay,
      prevAudioIcon = _ref.prevAudioIcon,
      nextAudioIcon = _ref.nextAudioIcon,
      playIcon = _ref.playIcon,
      pauseIcon = _ref.pauseIcon,
      playMode = _ref.playMode,
      downloadIcon = _ref.downloadIcon,
      reloadIcon = _ref.reloadIcon,
      playListsIcon = _ref.playListsIcon,
      closeIcon = _ref.closeIcon,
      onClose = _ref.onClose,
      pause = _ref.pause,
      playModeTipVisible = _ref.playModeTipVisible,
      currentPlayModeName = _ref.currentPlayModeName,
      extendsContent = _ref.extendsContent,
      onPlay = _ref.onPlay,
      glassBg = _ref.glassBg,
      LyricIcon = _ref.LyricIcon,
      onCoverClick = _ref.onCoverClick,
      autoHiddenCover = _ref.autoHiddenCover;
  return /*#__PURE__*/React.createElement("div", {
    className: cls(prefix, {
      'default-bg': !glassBg,
      'glass-bg': glassBg
    })
  }, /*#__PURE__*/React.createElement(PlayModeTip, {
    prefix: prefix,
    visible: playModeTipVisible,
    title: playMode,
    text: currentPlayModeName
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-header group")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-header-left")
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-header-title")
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-header-right"),
    onClick: onClose
  }, closeIcon)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-singer text-center group")
  }, /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefix, "-singer-name")
  }, singer)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-switch text-center group")
  }, themeSwitch), (!autoHiddenCover || autoHiddenCover && cover) && /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-cover text-center"),
    onClick: function onClick() {
      return onCoverClick();
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "cover",
    className: cls('cover', {
      'img-rotate-pause': pause || !playing || !cover
    })
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-progress group")
  }, /*#__PURE__*/React.createElement("span", {
    className: "current-time"
  }, loading ? '--' : currentTime), progressBar, /*#__PURE__*/React.createElement("span", {
    className: "duration text-right"
  }, loading ? '--' : duration)), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-toggle text-center group")
  }, loading ? loadingIcon : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "group prev-audio",
    title: "Previous track",
    onClick: audioPrevPlay
  }, prevAudioIcon), /*#__PURE__*/React.createElement("span", {
    className: "group play-btn",
    title: playing ? 'Click to pause' : 'Click to play',
    onClick: onPlay
  }, playing ? pauseIcon : playIcon), /*#__PURE__*/React.createElement("span", {
    className: "group next-audio",
    title: "Next track",
    onClick: audioNextPlay
  }, nextAudioIcon))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefix, "-operation group")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "items"
  }, [playMode, downloadIcon, reloadIcon, LyricIcon].filter(Boolean).map(function (icon) {
    return /*#__PURE__*/React.createElement("li", {
      className: "item",
      key: icon.props.className
    }, icon);
  }), extendsContent, /*#__PURE__*/React.createElement("li", {
    className: "item",
    onClick: openAudioListsPanel
  }, playListsIcon))));
};

export default PlayerMobile;