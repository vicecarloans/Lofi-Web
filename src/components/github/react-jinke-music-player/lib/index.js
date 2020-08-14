"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _classnames = _interopRequireDefault(require("classnames"));

var _downloadjs = _interopRequireDefault(require("downloadjs"));

var _isMobile = _interopRequireDefault(require("is-mobile"));

var _Slider = _interopRequireDefault(require("rc-slider/lib/Slider"));

var _rcSwitch = _interopRequireDefault(require("rc-switch"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _AudioListsPanel = _interopRequireDefault(require("./components/AudioListsPanel"));

var _CircleProcessBar = _interopRequireDefault(require("./components/CircleProcessBar"));

var _Icon = require("./components/Icon");

var _Load = _interopRequireDefault(require("./components/Load"));

var _PlayerMobile = _interopRequireDefault(require("./components/PlayerMobile"));

var _PlayModel = _interopRequireDefault(require("./components/PlayModel"));

var _animate = require("./config/animate");

var _keycode = require("./config/keycode");

var _locale = _interopRequireDefault(require("./config/locale"));

var _mediaQuery = require("./config/mediaQuery");

var _mode = require("./config/mode");

var _networkState = _interopRequireDefault(require("./config/networkState"));

var _playMode2 = _interopRequireDefault(require("./config/playMode"));

var _propTypes = _interopRequireDefault(require("./config/propTypes"));

var _slider = require("./config/slider");

var _theme = require("./config/theme");

var _locale2 = _interopRequireDefault(require("./locale"));

var _lyric = _interopRequireDefault(require("./lyric"));

var _utils = require("./utils");

require("rc-slider/assets/index.css");

require("rc-switch/assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IS_MOBILE = (0, _isMobile["default"])();

var ReactJkMusicPlayer = /*#__PURE__*/function (_PureComponent) {
  _inherits(ReactJkMusicPlayer, _PureComponent);

  var _super = _createSuper(ReactJkMusicPlayer);

  _createClass(ReactJkMusicPlayer, [{
    key: "locale",
    // 初始播放id
    get: function get() {
      var locale = this.props.locale;

      if (typeof locale === 'string') {
        return _locale2["default"][this.props.locale];
      }

      return locale ? _objectSpread(_objectSpread({}, _locale2["default"][_locale["default"].en_US]), locale) : {};
    }
  }, {
    key: "audioDuration",
    get: function get() {
      var _this$state = this.state,
          audioLists = _this$state.audioLists,
          playId = _this$state.playId;

      if (!audioLists.length || !this.audio) {
        return 0;
      }

      var _ref = audioLists.find(function (audio) {
        return audio.id === playId;
      }) || {},
          duration = _ref.duration;

      return Math.max(Number(duration) || this.audio.duration || 0, 0);
    }
  }, {
    key: "isAudioCanPlay",
    get: function get() {
      var autoPlay = this.props.autoPlay;
      var _this$state2 = this.state,
          isInitAutoPlay = _this$state2.isInitAutoPlay,
          isAutoPlayWhenUserClicked = _this$state2.isAutoPlayWhenUserClicked;
      return isInitAutoPlay || autoPlay || isAutoPlayWhenUserClicked;
    }
  }]);

  function ReactJkMusicPlayer(props) {
    var _this;

    _classCallCheck(this, ReactJkMusicPlayer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isDrag", false);

    _defineProperty(_assertThisInitialized(_this), "initPlayId", '');

    _defineProperty(_assertThisInitialized(_this), "state", {
      audioLists: [],
      playId: _this.initPlayId,
      // 播放id
      name: '',
      // 当前歌曲名
      cover: '',
      // 当前歌曲封面
      singer: '',
      // 当前歌手
      musicSrc: '',
      // 当前歌曲链
      lyric: '',
      // 当前歌词
      currentLyric: '',
      isMobile: IS_MOBILE,
      toggle: _this.props.mode === _mode.MODE.FULL,
      pause: true,
      playing: false,
      currentTime: 0,
      soundValue: 100,
      moveX: 0,
      moveY: 0,
      loading: false,
      audioListsPanelVisible: false,
      playModelNameVisible: false,
      theme: _this.props.theme || _this.darkThemeName,
      playMode: _this.props.playMode || _this.props.defaultPlayMode || '',
      // 当前播放模式
      currentAudioVolume: 0,
      // 当前音量  静音后恢复到之前记录的音量
      initAnimate: false,
      isInitAutoPlay: _this.props.autoPlay,
      isInitRemember: false,
      loadProgress: 0,
      removeId: -1,
      isNeedMobileHack: IS_MOBILE,
      audioLyricVisible: false,
      isAutoPlayWhenUserClicked: false,
      playIndex: _this.props.playIndex || _this.props.defaultPlayIndex || 0
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayIndex", function () {
      var playIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.playIndex;
      var audioLists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.audioLists;
      return Math.max(0, Math.min(audioLists.length - 1, playIndex));
    });

    _defineProperty(_assertThisInitialized(_this), "onCoverClick", function () {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _mode.MODE.FULL;

      if (_this.props.onCoverClick) {
        _this.props.onCoverClick(mode, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getAudioTitle", function () {
      // 暂时兼容
      var _ref2 = _this.locale || {},
          audioTitle = _ref2.audioTitle;

      var _this$state3 = _this.state,
          name = _this$state3.name,
          singer = _this$state3.singer;

      if (typeof audioTitle === 'function' && _this.audio) {
        return audioTitle(_this.getBaseAudioInfo());
      }

      return audioTitle || "".concat(name, " ").concat(singer ? "- ".concat(singer) : '');
    });

    _defineProperty(_assertThisInitialized(_this), "toggleAudioLyric", function () {
      _this.setState({
        audioLyricVisible: !_this.state.audioLyricVisible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "togglePlayMode", function () {
      var index = _this._PLAY_MODE_.findIndex(function (mode) {
        return mode === _this.state.playMode;
      });

      var playMode = index === _this._PLAY_MODE_LENGTH_ - 1 ? _this._PLAY_MODE_[0] : _this._PLAY_MODE_[++index];

      _this.setState({
        playMode: playMode,
        playModelNameVisible: true,
        playModeTipVisible: true
      });

      _this.props.onPlayModeChange && _this.props.onPlayModeChange(playMode);
      clearTimeout(_this.playModelTimer);
      _this.playModelTimer = setTimeout(function () {
        _this.setState({
          playModelNameVisible: false,
          playModeTipVisible: false
        });
      }, _this.props.playModeShowTime);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPlayModeIcon", function (playMode) {
      var IconNode = '';
      var animateName = 'react-jinke-music-player-mode-icon';

      switch (playMode) {
        case _playMode2["default"].order:
          IconNode = /*#__PURE__*/_react["default"].createElement(_Icon.OrderPlayIcon, {
            className: animateName
          });
          break;

        case _playMode2["default"].orderLoop:
          IconNode = /*#__PURE__*/_react["default"].createElement(_Icon.RepeatIcon, {
            className: animateName
          });
          break;

        case _playMode2["default"].singleLoop:
          IconNode = /*#__PURE__*/_react["default"].createElement(_Icon.LoopIcon, {
            className: animateName
          });
          break;

        case _playMode2["default"].shufflePlay:
          IconNode = /*#__PURE__*/_react["default"].createElement(_Icon.ShufflePlayIcon, {
            className: animateName
          });
          break;

        default:
          IconNode = /*#__PURE__*/_react["default"].createElement(_Icon.OrderPlayIcon, {
            className: animateName
          });
      }

      return IconNode;
    });

    _defineProperty(_assertThisInitialized(_this), "audioListsPlay", function (playId) {
      var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.state;
      var currentPlayId = state.playId,
          pause = state.pause,
          playing = state.playing,
          audioLists = state.audioLists;

      if (Array.isArray(audioLists) && audioLists.length === 0) {
        // eslint-disable-next-line no-console
        return console.warn('Warning: Your playlist has no songs. and cannot play !');
      } // 如果点击当前项 就暂停 或者播放


      if (playId === currentPlayId && !ignore) {
        _this.setState({
          pause: !pause,
          playing: !playing
        });

        return pause ? _this.audio.play() : _this.audio.pause();
      }

      var playIndex = audioLists.findIndex(function (audio) {
        return audio.id === playId;
      });

      var _ref3 = audioLists[playIndex] || {},
          name = _ref3.name,
          cover = _ref3.cover,
          musicSrc = _ref3.musicSrc,
          singer = _ref3.singer,
          _ref3$lyric = _ref3.lyric,
          lyric = _ref3$lyric === void 0 ? '' : _ref3$lyric;

      var loadAudio = function loadAudio(originMusicSrc) {
        _this.setState({
          name: name,
          cover: cover,
          musicSrc: originMusicSrc,
          singer: singer,
          playId: playId,
          lyric: lyric,
          currentTime: 0,
          playing: false,
          loading: true,
          loadProgress: 0,
          playIndex: playIndex,
          isAutoPlayWhenUserClicked: true
        }, function () {
          _this.lyric && _this.lyric.stop();

          _this.audio.load();

          _this.updateMediaSessionMetadata();

          setTimeout(function () {
            _this.initLyricParser();
          }, 0);
        });

        _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());
        _this.props.onAudioPlayTrackChange && _this.props.onAudioPlayTrackChange(playId, audioLists, _this.getBaseAudioInfo());
        _this.props.onPlayIndexChange && _this.props.onPlayIndexChange(playIndex);
      };

      switch (_typeof(musicSrc)) {
        case 'function':
          musicSrc().then(loadAudio, _this.onAudioError);
          break;

        default:
          loadAudio(musicSrc);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resetAudioStatus", function () {
      _this.audio.pause();

      _this.lyric && _this.lyric.stop();

      _this.initPlayInfo([]);

      _this.setState({
        currentTime: 0,
        loading: false,
        playing: false,
        pause: true,
        lyric: '',
        currentLyric: '',
        playId: _this.initPlayId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearAudioLists", function () {
      _this.props.onAudioListsChange && _this.props.onAudioListsChange('', [], {});

      _this.resetAudioStatus();
    });

    _defineProperty(_assertThisInitialized(_this), "onDeleteAudioLists", function (audioId) {
      return function (e) {
        e.stopPropagation(); // 如果不 传 id  删除全部

        var _this$state4 = _this.state,
            audioLists = _this$state4.audioLists,
            playId = _this$state4.playId;

        if (audioLists.length < 1) {
          return;
        }

        _this.lyric && _this.lyric.stop();

        if (!audioId) {
          _this.clearAudioLists();

          return;
        }

        var newAudioLists = _toConsumableArray(audioLists).filter(function (audio) {
          return audio.id !== audioId;
        }); // 触发删除动画,等动画结束 删除列表


        _this.setState({
          removeId: audioId
        });

        setTimeout(function () {
          _this.setState({
            audioLists: newAudioLists,
            removeId: -1
          }, function () {
            if (!newAudioLists.length) {
              return _this.resetAudioStatus();
            } // 如果删除的是当前正在播放的 顺延下一首播放


            if (audioId === playId) {
              _this.handlePlay(_playMode2["default"].orderLoop);
            }
          });
        }, _animate.AUDIO_LIST_REMOVE_ANIMATE_TIME);
        _this.props.onAudioListsChange && _this.props.onAudioListsChange(playId, newAudioLists, _this.getBaseAudioInfo());
      };
    });

    _defineProperty(_assertThisInitialized(_this), "openAudioListsPanel", function () {
      _this.setState(function (_ref4) {
        var audioListsPanelVisible = _ref4.audioListsPanelVisible;
        return {
          initAnimate: true,
          audioListsPanelVisible: !audioListsPanelVisible
        };
      });

      _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(!_this.state.audioListsPanelVisible);
    });

    _defineProperty(_assertThisInitialized(_this), "closeAudioListsPanel", function (e) {
      e.stopPropagation();

      _this._closeAudioListsPanel();
    });

    _defineProperty(_assertThisInitialized(_this), "_closeAudioListsPanel", function () {
      _this.setState({
        audioListsPanelVisible: false
      });

      _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(false);
    });

    _defineProperty(_assertThisInitialized(_this), "themeChange", function (isLight) {
      var theme = isLight ? _theme.THEME.LIGHT : _theme.THEME.DARK;

      _this.setState({
        theme: theme
      });

      _this.props.onThemeChange && _this.props.onThemeChange(theme);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioDownload", function () {
      var musicSrc = _this.state.musicSrc;

      if (_this.state.musicSrc) {
        var customDownloader = _this.props.customDownloader;

        var baseAudioInfo = _this.getBaseAudioInfo();

        var onBeforeAudioDownload = _this.props.onBeforeAudioDownload(baseAudioInfo);

        var transformedDownloadAudioInfo = {};

        if (onBeforeAudioDownload && onBeforeAudioDownload.then) {
          onBeforeAudioDownload.then(function (info) {
            var src = info.src,
                filename = info.filename,
                mimeType = info.mimeType;
            transformedDownloadAudioInfo = info;

            if (customDownloader) {
              customDownloader(info);
            } else {
              (0, _downloadjs["default"])(src, filename, mimeType);
            }
          });
        } else {
          customDownloader ? customDownloader({
            src: musicSrc
          }) : (0, _downloadjs["default"])(musicSrc);
        }

        _this.props.onAudioDownload && _this.props.onAudioDownload(baseAudioInfo, transformedDownloadAudioInfo);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDrag", function () {
      _this.isDrag = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStart", function () {
      _this.isDrag = false;
    });

    _defineProperty(_assertThisInitialized(_this), "onControllerDragStop", function (e, _ref5) {
      var x = _ref5.x,
          y = _ref5.y;

      if (_this.props.showDestroy && _this.destroyBtn && _this.destroyBtn.current && _this.destroyBtn.current.contains(e.target)) {
        _this.onDestroyPlayer();

        return;
      }

      if (!_this.isDrag) {
        if (_this.state.isNeedMobileHack) {
          _this.loadAndPlayAudio();

          _this.setState({
            isNeedMobileHack: false
          });
        }

        _this.openPanel();

        _this.onCoverClick(_mode.MODE.MINI);
      }

      _this.setState({
        moveX: x,
        moveY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onResetVolume", function () {
      var currentAudioVolume = _this.state.currentAudioVolume;

      _this.setAudioVolume(currentAudioVolume || 0.1);
    });

    _defineProperty(_assertThisInitialized(_this), "setAudioVolume", function (value) {
      _this.audio.volume = value;

      _this.setState({
        currentAudioVolume: value,
        soundValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "stopAll", function (target) {
      target.stopPropagation();
      target.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "getBoundingClientRect", function (ele) {
      var _ele$getBoundingClien = ele.getBoundingClientRect(),
          left = _ele$getBoundingClien.left,
          top = _ele$getBoundingClien.top;

      return {
        left: left,
        top: top
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioReload", function () {
      if (_this.props.audioLists.length) {
        _this.handlePlay(_playMode2["default"].singleLoop);

        _this.props.onAudioReload && _this.props.onAudioReload(_this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openPanel", function () {
      var _this$props = _this.props,
          toggleMode = _this$props.toggleMode,
          spaceBar = _this$props.spaceBar;

      if (toggleMode) {
        _this.setState({
          toggle: true
        });

        _this.props.onModeChange && _this.props.onModeChange(_mode.MODE.FULL);

        if (spaceBar && _this.player.current) {
          _this.player.current.focus({
            preventScroll: true
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onHidePanel", function () {
      _this.setState({
        toggle: false,
        audioListsPanelVisible: false
      });

      _this.props.onModeChange && _this.props.onModeChange(_mode.MODE.MINI);
    });

    _defineProperty(_assertThisInitialized(_this), "onDestroyPlayer", function () {
      if (_this.props.onBeforeDestroy) {
        var onBeforeDestroy = Promise.resolve(_this.props.onBeforeDestroy(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo()));

        if (onBeforeDestroy && onBeforeDestroy.then) {
          onBeforeDestroy.then(function () {
            _this._onDestroyPlayer();
          }) // ignore unhandledrejection handler
          ["catch"](function () {});
        }

        return;
      }

      _this._onDestroyPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyPlayer", function () {
      _this.unInstallPlayer();
    });

    _defineProperty(_assertThisInitialized(_this), "_onDestroyed", function () {
      _this.setState({
        isPlayDestroyed: true
      });

      if (_this.props.onDestroyed) {
        _this.props.onDestroyed(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCurrentPlayIndex", function () {
      return _this.state.audioLists.findIndex(function (audio) {
        return audio.id === _this.state.playId;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onTogglePlay", function () {
      if (_this.state.audioLists.length >= 1) {
        if (_this.state.playing) {
          return _this.audio.pause();
        }

        _this.setState( // lgtm [js/react/inconsistent-state-update]
        {
          isAutoPlayWhenUserClicked: true
        }, _this.loadAndPlayAudio);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "canPlay", function () {
      _this.setState({
        loading: false,
        playing: false
      });

      if (_this.isAudioCanPlay) {
        _this.loadAndPlayAudio();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPause", function () {
      _this.setState({
        playing: false,
        pause: true
      });

      _this.props.onAudioPause && _this.props.onAudioPause(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioPlay", function () {
      _this.setState({
        playing: true,
        loading: false
      });

      _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());

      if (_this.state.lyric && _this.lyric) {
        _this.lyric.togglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadAndPlayAudio", function () {
      var remember = _this.props.remember;
      var _this$state5 = _this.state,
          isInitRemember = _this$state5.isInitRemember,
          loadProgress = _this$state5.loadProgress;
      var networkState = _this.audio.networkState;
      var maxLoadProgress = 100;

      _this.setState({
        loading: true
      });

      if (loadProgress < maxLoadProgress) {
        _this.setState({
          loadProgress: loadProgress + 1
        });
      }

      if (networkState !== _networkState["default"].NETWORK_NO_SOURCE) {
        var _this$getLastPlayStat = _this.getLastPlayStatus(),
            pause = _this$getLastPlayStat.pause;

        var isLastPause = remember && !isInitRemember && pause;

        _this.setState({
          playing: remember ? !isLastPause : _this.isAudioCanPlay,
          loading: false,
          pause: remember ? isLastPause : !_this.isAudioCanPlay,
          loadProgress: maxLoadProgress
        }, function () {
          if (remember ? !isLastPause : _this.isAudioCanPlay) {
            // fuck Safari is need muted :(
            // this.audio.muted = true
            _this.audio.play();
          }

          _this.setState({
            isInitAutoPlay: true,
            isInitRemember: true,
            isAutoPlayWhenUserClicked: false
          });
        });
      } else {
        _this.onAudioError({
          reason: '[loadAndPlayAudio]: Failed to load because no supported source was found.'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioError", function (error) {
      var _this$state6 = _this.state,
          playMode = _this$state6.playMode,
          audioLists = _this$state6.audioLists,
          playId = _this$state6.playId,
          musicSrc = _this$state6.musicSrc;
      var loadAudioErrorPlayNext = _this.props.loadAudioErrorPlayNext;
      var isSingleLoop = playMode === _playMode2["default"].singleLoop;
      var currentPlayMode = isSingleLoop ? _playMode2["default"].order : playMode;
      _this.lyric && _this.lyric.stop(); // 如果当前音乐加载出错 尝试播放下一首

      if (loadAudioErrorPlayNext && audioLists.length) {
        var isLastAudio = (playMode === _playMode2["default"].order || playMode === _playMode2["default"].orderLoop) && playId === audioLists[audioLists.length - 1].id;

        if (!isLastAudio) {
          _this.handlePlay(currentPlayMode, true);
        }
      } // 如果删除歌曲或其他原因导致列表为空时
      // 这时候会触发 https://developer.mozilla.org/en-US/docs/Web/API/MediaError


      if (musicSrc) {
        _this.props.onAudioError && _this.props.onAudioError(_this.audio.error || error && error.reason || null, playId, audioLists, _this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlay", function (playMode) {
      var isNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$state7 = _this.state,
          playId = _this$state7.playId,
          audioLists = _this$state7.audioLists;
      var audioListsLen = audioLists.length;

      if (!audioListsLen) {
        return;
      }

      var currentPlayIndex = _this.getCurrentPlayIndex();

      switch (playMode) {
        // 顺序播放
        case _playMode2["default"].order:
          // 拖拽排序后 或者 正常播放 到最后一首歌 就暂停
          if (currentPlayIndex === audioListsLen - 1) {
            _this.audio.pause();

            return;
          }

          _this.audioListsPlay(isNext ? audioLists[currentPlayIndex + 1].id : audioLists[currentPlayIndex - 1].id);

          break;
        // 列表循环

        case _playMode2["default"].orderLoop:
          if (isNext) {
            if (currentPlayIndex === audioListsLen - 1) {
              return _this.audioListsPlay(audioLists[0].id);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex + 1].id);
          } else {
            if (currentPlayIndex === 0) {
              return _this.audioListsPlay(audioLists[audioListsLen - 1].id);
            }

            _this.audioListsPlay(audioLists[currentPlayIndex - 1].id);
          }

          break;
        // 单曲循环

        case _playMode2["default"].singleLoop:
          _this.audio.currentTime = 0;

          _this.audioListsPlay(playId, true);

          break;
        // 随机播放

        case _playMode2["default"].shufflePlay:
          {
            var randomIndex = (0, _utils.createRandomNum)(0, audioListsLen - 1);

            if (randomIndex === _this.getCurrentPlayIndex()) {
              randomIndex = _this.getPlayIndex(randomIndex + 1);
            }

            var randomPlayId = (audioLists[randomIndex] || {}).id;

            _this.audioListsPlay(randomPlayId, true);
          }
          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioEnd", function () {
      _this.props.onAudioEnded && _this.props.onAudioEnded(_this.state.playId, _this.state.audioLists, _this.getBaseAudioInfo());

      _this.handlePlay(_this.state.playMode);
    });

    _defineProperty(_assertThisInitialized(_this), "audioPrevAndNextBasePlayHandle", function () {
      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var playMode = _this.state.playMode;
      var _playMode = '';

      switch (playMode) {
        case _playMode2["default"].shufflePlay:
          _playMode = playMode;
          break;

        default:
          _playMode = _playMode2["default"].orderLoop;
          break;
      }

      _this.handlePlay(_playMode, isNext);
    });

    _defineProperty(_assertThisInitialized(_this), "audioPrevPlay", function () {
      _this.audioPrevAndNextBasePlayHandle(false);
    });

    _defineProperty(_assertThisInitialized(_this), "audioNextPlay", function () {
      _this.audioPrevAndNextBasePlayHandle(true);
    });

    _defineProperty(_assertThisInitialized(_this), "audioTimeUpdate", function () {
      var currentTime = _this.audio.currentTime;

      _this.setState({
        currentTime: currentTime
      });

      if (_this.props.remember) {
        _this.saveLastPlayStatus();
      }

      _this.props.onAudioProgress && _this.props.onAudioProgress(_this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "audioSoundChange", function (value) {
      _this.setAudioVolume(value);
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioVolumeChange", function () {
      var volume = _this.audio.volume;

      _this.setState({
        soundValue: volume
      });

      _this.props.onAudioVolumeChange && _this.props.onAudioVolumeChange(volume);
    });

    _defineProperty(_assertThisInitialized(_this), "onProgressChange", function (value) {
      if (_this.audio) {
        _this.audio.currentTime = value;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioSeeked", function () {
      if (_this.state.audioLists.length >= 1) {
        _this.lyric && _this.lyric.seek(_this.audio.currentTime * 1000);

        if (_this.state.playing && !_this.state.pause) {
          _this.setState({
            playing: true
          }, function () {
            _this.loadAndPlayAudio();
          });
        } else {
          _this.lyric && _this.lyric.stop();
        }

        _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMute", function () {
      _this.setState({
        soundValue: 0,
        currentAudioVolume: _this.audio.volume
      }, function () {
        _this.audio.volume = 0;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAudioAbort", function (e) {
      var _this$state8 = _this.state,
          audioLists = _this$state8.audioLists,
          playId = _this$state8.playId;

      var audioInfo = _this.getBaseAudioInfo();

      var mergedAudioInfo = _objectSpread(_objectSpread({}, e), audioInfo);

      _this.props.onAudioAbort && _this.props.onAudioAbort(playId, audioLists, mergedAudioInfo);

      if (audioLists.length) {
        _this.audio.pause();

        _this.state.isInitAutoPlay && _this.audio.play();
        _this.lyric && _this.lyric.stop();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMode", function (mode) {
      if (mode === _mode.MODE.FULL) {
        _this.setState({
          toggle: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleTheme", function (theme) {
      _this.setState({
        theme: theme
      });
    });

    _defineProperty(_assertThisInitialized(_this), "audioListsDragEnd", function (fromIndex, toIndex) {
      var _this$state9 = _this.state,
          playId = _this$state9.playId,
          audioLists = _this$state9.audioLists;

      var _audioLists = _toConsumableArray(audioLists);

      var item = _audioLists.splice(fromIndex, 1)[0];

      _audioLists.splice(toIndex, 0, item); // 如果拖动正在播放的歌曲 播放Id 等于 拖动后的index


      var _playId = fromIndex === playId ? toIndex : playId;

      _this.setState({
        audioLists: _audioLists,
        playId: _playId
      });

      _this.props.onAudioListsDragEnd && _this.props.onAudioListsDragEnd(fromIndex, toIndex);
      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_playId, _audioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "saveLastPlayStatus", function () {
      var _this$state10 = _this.state,
          currentTime = _this$state10.currentTime,
          playId = _this$state10.playId,
          theme = _this$state10.theme,
          soundValue = _this$state10.soundValue,
          playMode = _this$state10.playMode,
          name = _this$state10.name,
          cover = _this$state10.cover,
          singer = _this$state10.singer,
          musicSrc = _this$state10.musicSrc,
          pause = _this$state10.pause;
      var lastPlayStatus = JSON.stringify({
        currentTime: currentTime,
        playId: playId,
        theme: theme,
        playMode: playMode,
        soundValue: soundValue,
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc,
        pause: pause
      });
      localStorage.setItem('lastPlayStatus', lastPlayStatus);
    });

    _defineProperty(_assertThisInitialized(_this), "getLastPlayStatus", function () {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          defaultPlayMode = _this$props2.defaultPlayMode,
          playMode = _this$props2.playMode,
          defaultPlayIndex = _this$props2.defaultPlayIndex,
          playIndex = _this$props2.playIndex;
      var status = {
        currentTime: 0,
        playMode: playMode || defaultPlayMode || _playMode2["default"].order,
        name: '',
        cover: '',
        singer: '',
        musicSrc: '',
        lyric: '',
        playId: _this.getDefaultPlayId(),
        theme: theme,
        pause: false,
        playIndex: playIndex || defaultPlayIndex || 0
      };

      try {
        return JSON.parse(localStorage.getItem('lastPlayStatus')) || status;
      } catch (error) {
        return status;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mockAutoPlayForMobile", function () {
      if (_this.props.autoPlay && !_this.state.playing && _this.state.pause) {
        _this.audio.load();

        _this.audio.pause();

        _this.audio.play();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindMobileAutoPlayEvents", function () {
      document.addEventListener('touchstart', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      }); // 监听微信准备就绪事件

      document.addEventListener('WeixinJSBridgeReady', function () {
        _this.mockAutoPlayForMobile();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindSafariAutoPlayEvents", function () {
      document.addEventListener('click', function () {
        _this.mockAutoPlayForMobile();
      }, {
        once: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unBindEvents", function () {
      var _this2;

      (_this2 = _this).bindEvents.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_this), "bindEvents", function () {
      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.audio;
      var eventsNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        waiting: _this.loadAndPlayAudio,
        canplay: _this.canPlay,
        error: _this.onAudioError,
        ended: _this.onAudioEnd,
        pause: _this.onAudioPause,
        play: _this.onAudioPlay,
        timeupdate: _this.audioTimeUpdate,
        volumechange: _this.onAudioVolumeChange,
        stalled: _this.onAudioError,
        // 当浏览器尝试获取媒体数据，但数据不可用时
        abort: _this.onAudioAbort
      };
      var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var once = _this.props.once;

      for (var name in eventsNames) {
        var _events = eventsNames[name];

        if (target) {
          bind ? target.addEventListener(name, _events, {
            once: !!(once && name === 'play')
          }) : target.removeEventListener(name, _events);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.audioLists;

      var playIndex = _this.getPlayIndex(undefined, audioLists);

      var playId = _this.state.playId || audioLists[playIndex] && audioLists[playIndex].id;
      return playId;
    });

    _defineProperty(_assertThisInitialized(_this), "_getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var playId = _this.getPlayId(audioLists);

      var _ref6 = audioLists.find(function (_ref7) {
        var id = _ref7.id;
        return id === playId;
      }) || {},
          _ref6$name = _ref6.name,
          name = _ref6$name === void 0 ? '' : _ref6$name,
          _ref6$cover = _ref6.cover,
          cover = _ref6$cover === void 0 ? '' : _ref6$cover,
          _ref6$singer = _ref6.singer,
          singer = _ref6$singer === void 0 ? '' : _ref6$singer,
          _ref6$musicSrc = _ref6.musicSrc,
          musicSrc = _ref6$musicSrc === void 0 ? '' : _ref6$musicSrc,
          _ref6$lyric = _ref6.lyric,
          lyric = _ref6$lyric === void 0 ? '' : _ref6$lyric;

      return {
        name: name,
        cover: cover,
        singer: singer,
        musicSrc: musicSrc,
        lyric: lyric,
        audioLists: audioLists,
        playId: playId
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfo", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var newAudioLists = audioLists.filter(function (audio) {
        return !audio.id;
      });
      var lastAudioLists = audioLists.filter(function (audio) {
        return audio.id;
      });
      var mergedAudioLists = [].concat(_toConsumableArray(lastAudioLists), _toConsumableArray(newAudioLists.map(function (info) {
        return _objectSpread(_objectSpread({}, info), {}, {
          id: (0, _utils.uuId)()
        });
      })));
      return _this._getPlayInfo(mergedAudioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "getPlayInfoOfNewList", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _audioLists = audioLists.map(function (info) {
        return _objectSpread(_objectSpread({}, info), {}, {
          id: (0, _utils.uuId)()
        });
      });

      return _this._getPlayInfo(_audioLists);
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayInfo", function (audioLists, cb) {
      var info = _this.getPlayInfo(audioLists);

      switch (_typeof(info.musicSrc)) {
        case 'function':
          info.musicSrc().then(function (originMusicSrc) {
            _this.setState(_objectSpread(_objectSpread({}, info), {}, {
              musicSrc: originMusicSrc
            }), cb);
          }, _this.onAudioError);
          break;

        default:
          _this.setState(info, cb);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMatchMediaListener", function (query, handler) {
      var media = window.matchMedia(query);
      handler(media);

      if ('addEventListener' in media) {
        media.addEventListener('change', handler);
      } else {
        media.addListener(handler);
      }

      return media;
    });

    _defineProperty(_assertThisInitialized(_this), "removeMatchMediaListener", function (media, handler) {
      if (media) {
        if ('removeEventListener' in media) {
          media.removeEventListener('change', handler);
        } else {
          media.removeListener(handler);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addMobileListener", function () {
      _this.mobileMedia = _this.addMatchMediaListener(_mediaQuery.MEDIA_QUERY.MOBILE, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeMobileListener", function () {
      _this.removeMatchMediaListener(_this.mobileMedia, _this.mobileMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "addSystemThemeListener", function () {
      _this.systemThemeMedia = _this.addMatchMediaListener(_mediaQuery.MEDIA_QUERY.DARK_THEME, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "removeSystemThemeListener", function () {
      _this.removeMatchMediaListener(_this.systemThemeMedia, _this.systemThemeMediaHandler);
    });

    _defineProperty(_assertThisInitialized(_this), "mobileMediaHandler", function (_ref8) {
      var matches = _ref8.matches;

      _this.setState({
        isMobile: !!matches
      });
    });

    _defineProperty(_assertThisInitialized(_this), "systemThemeMediaHandler", function (_ref9) {
      var matches = _ref9.matches;

      if (_this.props.theme === _theme.THEME.AUTO) {
        var theme = matches ? _theme.THEME.DARK : _theme.THEME.LIGHT;

        _this.updateTheme(theme);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setDefaultAudioVolume", function () {
      var _this$props3 = _this.props,
          defaultVolume = _this$props3.defaultVolume,
          remember = _this$props3.remember; // 音量 [0-1]

      _this.defaultVolume = Math.max(0, Math.min(defaultVolume, 1));

      var _this$getLastPlayStat2 = _this.getLastPlayStatus(),
          _this$getLastPlayStat3 = _this$getLastPlayStat2.soundValue,
          soundValue = _this$getLastPlayStat3 === void 0 ? _this.defaultVolume : _this$getLastPlayStat3;

      _this.setAudioVolume(remember ? soundValue : _this.defaultVolume);
    });

    _defineProperty(_assertThisInitialized(_this), "getDefaultPlayId", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;

      var playIndex = _this.getPlayIndex();

      return audioLists[playIndex] && audioLists[playIndex].id;
    });

    _defineProperty(_assertThisInitialized(_this), "initLyricParser", function () {
      _this.lyric = new _lyric["default"](_this.state.lyric, _this.onLyricChange);

      _this.setState({
        currentLyric: _this.lyric.lines[0] && _this.lyric.lines[0].text
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLyricChange", function (_ref10) {
      var lineNum = _ref10.lineNum,
          txt = _ref10.txt;

      _this.setState({
        currentLyric: txt
      });

      _this.props.onAudioLyricChange && _this.props.onAudioLyricChange(lineNum, txt);
    });

    _defineProperty(_assertThisInitialized(_this), "updateTheme", function (theme) {
      if (theme && theme !== _this.props.theme && Object.values(_theme.THEME).includes(theme)) {
        _this.setState({
          theme: theme
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMode", function (mode) {
      if (mode && mode !== _this.props.mode && Object.values(_mode.MODE).includes(mode)) {
        _this.setState({
          toggle: mode === _mode.MODE.FULL
        });

        if (mode === _mode.MODE.MINI) {
          _this._closeAudioListsPanel();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayMode", function (playMode) {
      if (!Object.values(_playMode2["default"]).includes(playMode)) {
        return;
      }

      if (playMode !== _this.props.playMode) {
        _this.setState({
          playMode: playMode
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateAudioLists", function (audioLists) {
      var newAudioLists = [].concat(_toConsumableArray(_this.state.audioLists), _toConsumableArray(audioLists.filter(function (audio) {
        return _this.state.audioLists.findIndex(function (v) {
          return v.musicSrc === audio.musicSrc;
        }) === -1;
      })));

      _this.initPlayInfo(newAudioLists);

      _this.bindEvents(_this.audio);

      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, audioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "loadNewAudioLists", function (_ref11) {
      var audioLists = _ref11.audioLists,
          remember = _ref11.remember,
          playMode = _ref11.playMode,
          theme = _ref11.theme,
          autoPlayInitLoadPlayList = _ref11.autoPlayInitLoadPlayList,
          playIndex = _ref11.playIndex;

      if (audioLists.length >= 1) {
        var info = _this.getPlayInfoOfNewList(audioLists);

        var lastPlayStatus = remember ? _this.getLastPlayStatus() : {
          playMode: playMode || _playMode2["default"].order,
          theme: theme,
          playIndex: playIndex || 0
        };

        var audioInfo = _objectSpread(_objectSpread(_objectSpread({}, info), lastPlayStatus), {}, {
          isInitAutoPlay: autoPlayInitLoadPlayList
        });

        switch (_typeof(info.musicSrc)) {
          case 'function':
            info.musicSrc().then(function (musicSrc) {
              _this.setState(_objectSpread(_objectSpread({}, audioInfo), {}, {
                musicSrc: musicSrc
              }), function () {
                _this.audio.load();
              });
            }, _this.onAudioError);
            break;

          default:
            _this.setState(audioInfo, function () {
              _this.audio.load();
            });

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeAudioLists", function (nextProps) {
      _this.resetAudioStatus();

      _this.loadNewAudioLists(nextProps);

      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, nextProps.audioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "updatePlayIndex", function (playIndex) {
      var currentPlayIndex = _this.getCurrentPlayIndex();

      if (playIndex !== undefined && currentPlayIndex !== playIndex) {
        var currentPlay = _this.state.audioLists[_this.getPlayIndex(playIndex)];

        if (currentPlay && currentPlay.id) {
          _this.audioListsPlay(currentPlay.id, true);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "playByIndex", function (index) {
      _this.updatePlayIndex(index);
    });

    _defineProperty(_assertThisInitialized(_this), "appendAudio", function (fromIndex) {
      var audioLists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!fromIndex && fromIndex !== 0) {
        // eslint-disable-next-line no-console
        console.error('Warning! function appendAudio(){} must have formIndex!');
        return;
      }

      var newAudioLists = _toConsumableArray(_this.state.audioLists);

      var addedAudioLists = audioLists.map(function (audioInfo) {
        return _objectSpread({
          id: (0, _utils.uuId)()
        }, audioInfo);
      });
      newAudioLists.splice.apply(newAudioLists, [fromIndex, 0].concat(_toConsumableArray(addedAudioLists)));

      _this.setState({
        audioLists: newAudioLists
      });

      _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, newAudioLists, _this.getBaseAudioInfo());
    });

    _defineProperty(_assertThisInitialized(_this), "getEnhanceAudio", function () {
      var _assertThisInitialize = _assertThisInitialized(_this),
          audio = _assertThisInitialize.audio;

      [{
        name: 'destroy',
        value: _this.onDestroyPlayer
      }, {
        name: 'updatePlayIndex',
        value: _this.updatePlayIndex
      }, {
        name: 'playByIndex',
        value: _this.playByIndex
      }, {
        name: 'playNext',
        value: _this.audioNextPlay
      }, {
        name: 'playPrev',
        value: _this.audioPrevPlay
      }, {
        name: 'togglePlay',
        value: _this.onTogglePlay
      }, {
        name: 'clear',
        value: _this.clearAudioLists
      }, {
        name: 'appendAudio',
        value: _this.appendAudio
      }].forEach(function (_ref12) {
        var name = _ref12.name,
            value = _ref12.value;
        Object.defineProperty(audio, name, {
          value: value,
          writable: false
        });
      });
      return audio;
    });

    _defineProperty(_assertThisInitialized(_this), "onGetAudioInstance", function () {
      if (_this.props.getAudioInstance) {
        _this.props.getAudioInstance(_this.getEnhanceAudio());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionMetadata", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var _this$state11 = _this.state,
            name = _this$state11.name,
            cover = _this$state11.cover,
            singer = _this$state11.singer;
        var mediaMetaDataConfig = {
          title: name,
          artist: singer,
          album: name
        };

        if (cover) {
          mediaMetaDataConfig.artwork = ['96x96', '128x128', '192x192', '256x256', '384x384', '512x512'].map(function (size) {
            return {
              src: cover,
              sizes: size,
              type: 'image/png'
            };
          });
        }

        navigator.mediaSession.metadata = new MediaMetadata(mediaMetaDataConfig);

        _this.updateMediaSessionPositionState();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateMediaSessionPositionState", function () {
      if ('setPositionState' in navigator.mediaSession) {
        try {
          var _assertThisInitialize2 = _assertThisInitialized(_this),
              audio = _assertThisInitialize2.audio;

          navigator.mediaSession.setPositionState({
            duration: _this.audioDuration,
            playbackRate: audio.playbackRate || 1,
            position: audio.currentTime || 0
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Update media session position state failed: ', error);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddMediaSession", function () {
      if ('mediaSession' in navigator && _this.props.showMediaSession) {
        var defaultSkipTime = 10;
        navigator.mediaSession.setActionHandler('play', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('pause', _this.onTogglePlay);
        navigator.mediaSession.setActionHandler('seekbackward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.max(_this.audio.currentTime - skipTime, 0);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('seekforward', function (details) {
          var skipTime = details.seekOffset || defaultSkipTime;
          _this.audio.currentTime = Math.min(_this.audio.currentTime + skipTime, _this.audioDuration);
          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        });
        navigator.mediaSession.setActionHandler('previoustrack', _this.audioPrevPlay);
        navigator.mediaSession.setActionHandler('nexttrack', _this.audioNextPlay);
        setTimeout(function () {
          _this.updateMediaSessionMetadata();
        }, 0);

        try {
          navigator.mediaSession.setActionHandler('seekto', function (event) {
            if (event.fastSeek && 'fastSeek' in _this.audio) {
              _this.audio.fastSeek(event.seekTime);

              return;
            }

            _this.audio.currentTime = event.seekTime;

            _this.updateMediaSessionPositionState();
          });
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn('Warning! The "seekto" media session action is not supported.');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "bindUnhandledRejection", function () {
      window.addEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "unBindUnhandledRejection", function () {
      window.removeEventListener('unhandledrejection', _this.onAudioError);
    });

    _defineProperty(_assertThisInitialized(_this), "bindKeyDownEvents", function () {
      if (_this.props.spaceBar && _this.player.current) {
        _this.player.current.addEventListener('keydown', _this.onKeyDown, false);

        _this.player.current.focus({
          preventScroll: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unBindKeyDownEvents", function () {
      if (_this.player.current) {
        _this.player.current.removeEventListener('keydown', _this.onKeyDown, false);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
      var spaceBar = _this.props.spaceBar;

      if (spaceBar && e.keyCode === _keycode.SPACE_BAR_KEYCODE) {
        _this.onTogglePlay();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initPlayer", function () {
      var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;
      var isBindKeyDownEvents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!Array.isArray(audioLists)) {
        return;
      }

      if (audioLists.length) {
        _this.setDefaultAudioVolume();

        _this.bindUnhandledRejection();

        _this.bindEvents(_this.audio);

        _this.initLyricParser();

        _this.onAddMediaSession();

        if (IS_MOBILE) {
          _this.bindMobileAutoPlayEvents();
        } else {
          if (isBindKeyDownEvents) {
            _this.bindKeyDownEvents();
          }

          if ((0, _utils.isSafari)()) {
            _this.bindSafariAutoPlayEvents();
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeLyric", function () {
      if (_this.lyric) {
        _this.lyric.stop();

        _this.lyric = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "unInstallPlayer", function () {
      _this.unBindEvents(_this.audio, undefined, false);

      _this.unBindUnhandledRejection();

      _this.unBindKeyDownEvents();

      _this.removeMobileListener();

      _this.removeLyric();

      _this._onDestroyed();
    });

    _this.audio = null;
    _this.targetId = 'music-player-controller';
    _this._PLAY_MODE_ = Object.values(_playMode2["default"]);
    _this._PLAY_MODE_LENGTH_ = _this._PLAY_MODE_.length;
    _this.player = (0, _react.createRef)();
    _this.destroyBtn = (0, _react.createRef)();
    return _this;
  }

  _createClass(ReactJkMusicPlayer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          drag = _this$props4.drag,
          style = _this$props4.style,
          showDownload = _this$props4.showDownload,
          showPlay = _this$props4.showPlay,
          showReload = _this$props4.showReload,
          showPlayMode = _this$props4.showPlayMode,
          showThemeSwitch = _this$props4.showThemeSwitch,
          toggleMode = _this$props4.toggleMode,
          showMiniModeCover = _this$props4.showMiniModeCover,
          extendsContent = _this$props4.extendsContent,
          defaultPlayMode = _this$props4.defaultPlayMode,
          seeked = _this$props4.seeked,
          showProgressLoadBar = _this$props4.showProgressLoadBar,
          bounds = _this$props4.bounds,
          defaultPosition = _this$props4.defaultPosition,
          showMiniProcessBar = _this$props4.showMiniProcessBar,
          preload = _this$props4.preload,
          glassBg = _this$props4.glassBg,
          remove = _this$props4.remove,
          lyricClassName = _this$props4.lyricClassName,
          showLyric = _this$props4.showLyric,
          getContainer = _this$props4.getContainer,
          autoHiddenCover = _this$props4.autoHiddenCover,
          showDestroy = _this$props4.showDestroy,
          responsive = _this$props4.responsive;
      var locale = this.locale;
      var _this$state12 = this.state,
          toggle = _this$state12.toggle,
          playing = _this$state12.playing,
          currentTime = _this$state12.currentTime,
          soundValue = _this$state12.soundValue,
          moveX = _this$state12.moveX,
          moveY = _this$state12.moveY,
          loading = _this$state12.loading,
          audioListsPanelVisible = _this$state12.audioListsPanelVisible,
          pause = _this$state12.pause,
          theme = _this$state12.theme,
          name = _this$state12.name,
          cover = _this$state12.cover,
          singer = _this$state12.singer,
          musicSrc = _this$state12.musicSrc,
          playId = _this$state12.playId,
          isMobile = _this$state12.isMobile,
          playMode = _this$state12.playMode,
          playModeTipVisible = _this$state12.playModeTipVisible,
          playModelNameVisible = _this$state12.playModelNameVisible,
          initAnimate = _this$state12.initAnimate,
          loadProgress = _this$state12.loadProgress,
          audioLists = _this$state12.audioLists,
          removeId = _this$state12.removeId,
          currentLyric = _this$state12.currentLyric,
          audioLyricVisible = _this$state12.audioLyricVisible,
          isPlayDestroyed = _this$state12.isPlayDestroyed;
      var preloadState = preload === false || preload === 'none' ? {} : preload === true ? {
        preload: 'auto'
      } : {
        preload: preload
      };
      var panelToggleAnimate = initAnimate ? {
        show: audioListsPanelVisible,
        hide: !audioListsPanelVisible
      } : {
        show: audioListsPanelVisible
      };
      var currentPlayMode = _playMode2["default"][playMode || defaultPlayMode] || _playMode2["default"].order;
      var currentPlayModeName = locale.playModeText[currentPlayMode];
      var isShowMiniModeCover = showMiniModeCover && !autoHiddenCover || autoHiddenCover && cover ? {
        style: {
          backgroundImage: "url(".concat(cover, ")")
        }
      } : {};
      var formattedCurrentTime = (0, _utils.formatTime)(currentTime);
      var formattedAudioDuration = (0, _utils.formatTime)(this.audioDuration);
      var progressHandler = seeked ? {
        onChange: this.onProgressChange,
        onAfterChange: this.onAudioSeeked
      } : {}; // 进度条

      var ProgressBar = /*#__PURE__*/_react["default"].createElement(_Slider["default"], _extends({
        max: Math.ceil(this.audioDuration),
        defaultValue: 0,
        value: Math.ceil(currentTime)
      }, progressHandler, _slider.sliderBaseOptions)); // 下载按钮


      var DownloadComponent = showDownload && /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group audio-download"
      }, _defineProperty({}, isMobile ? 'onTouchStart' : 'onClick', this.onAudioDownload), {
        title: locale.downloadText
      }), /*#__PURE__*/_react["default"].createElement(_Icon.DownloadIcon, null)); // 主题开关


      var ThemeSwitchComponent = showThemeSwitch && /*#__PURE__*/_react["default"].createElement("span", {
        className: "group theme-switch"
      }, /*#__PURE__*/_react["default"].createElement(_rcSwitch["default"], {
        className: "theme-switch-container",
        onChange: this.themeChange,
        checkedChildren: locale.lightThemeText,
        unCheckedChildren: locale.darkThemeText,
        checked: theme === _theme.THEME.LIGHT,
        title: locale.switchThemeText
      })); // 重放


      var ReloadComponent = showReload && /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group reload-btn"
      }, isMobile ? {
        onTouchStart: this.onAudioReload
      } : {
        onClick: this.onAudioReload
      }, {
        title: locale.reloadText
      }), /*#__PURE__*/_react["default"].createElement(_Icon.ReloadIcon, null)); // 歌词


      var LyricComponent = showLyric && /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: (0, _classnames["default"])('group lyric-btn', {
          'lyric-btn-active': audioLyricVisible
        })
      }, isMobile ? {
        onTouchStart: this.toggleAudioLyric
      } : {
        onClick: this.toggleAudioLyric
      }, {
        title: locale.toggleLyricText
      }), /*#__PURE__*/_react["default"].createElement(_Icon.LyricIcon, null)); // 播放模式


      var PlayModeComponent = showPlayMode && /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: (0, _classnames["default"])('group loop-btn')
      }, isMobile ? {
        onTouchStart: this.togglePlayMode
      } : {
        onClick: this.togglePlayMode
      }, {
        title: locale.playModeText[currentPlayMode]
      }), this.renderPlayModeIcon(currentPlayMode));

      var miniProcessBarR = isMobile ? 30 : 40;

      var DestroyComponent = showDestroy && /*#__PURE__*/_react["default"].createElement("span", _extends({
        title: locale.destroyText,
        className: "group destroy-btn",
        ref: this.destroyBtn
      }, !drag || toggle ? _defineProperty({}, isMobile ? 'onTouchStart' : 'onClick', this.onDestroyPlayer) : null), /*#__PURE__*/_react["default"].createElement(_Icon.CloseIcon, null));

      var AudioController = /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('react-jinke-music-player'),
        style: defaultPosition,
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player')
      }, showMiniProcessBar && /*#__PURE__*/_react["default"].createElement(_CircleProcessBar["default"], {
        progress: currentTime / this.audioDuration,
        r: miniProcessBarR
      }), /*#__PURE__*/_react["default"].createElement("div", _extends({
        id: this.targetId,
        className: (0, _classnames["default"])('scale', 'music-player-controller', {
          'music-player-playing': this.state.playing
        })
      }, isShowMiniModeCover), loading ? /*#__PURE__*/_react["default"].createElement(_Load["default"], null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "controller-title"
      }, locale.controllerTitle), /*#__PURE__*/_react["default"].createElement("div", {
        className: "music-player-controller-setting"
      }, toggle ? locale.closeText : locale.openText))), DestroyComponent));

      var container = getContainer() || document.body;
      var audioTitle = this.getAudioTitle();

      if (isPlayDestroyed) {
        return null;
      }

      return (0, _reactDom.createPortal)( /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('react-jinke-music-player-main', {
          'light-theme': theme === _theme.THEME.LIGHT,
          'dark-theme': theme === _theme.THEME.DARK
        }, className),
        style: style,
        ref: this.player,
        tabIndex: "-1"
      }, toggle && isMobile && responsive && /*#__PURE__*/_react["default"].createElement(_PlayerMobile["default"], {
        playing: playing,
        loading: loading,
        pause: pause,
        name: name,
        singer: singer,
        cover: cover,
        themeSwitch: ThemeSwitchComponent,
        duration: formattedAudioDuration,
        currentTime: formattedCurrentTime,
        progressBar: ProgressBar,
        onPlay: this.onTogglePlay,
        currentPlayModeName: currentPlayModeName,
        playMode: PlayModeComponent,
        audioNextPlay: this.audioNextPlay,
        audioPrevPlay: this.audioPrevPlay,
        playListsIcon: /*#__PURE__*/_react["default"].createElement(_Icon.PlayLists, null),
        reloadIcon: ReloadComponent,
        downloadIcon: DownloadComponent,
        nextAudioIcon: /*#__PURE__*/_react["default"].createElement(_Icon.NextAudioIcon, null),
        prevAudioIcon: /*#__PURE__*/_react["default"].createElement(_Icon.PrevAudioIcon, null),
        playIcon: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePlayIcon, null),
        pauseIcon: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePauseIcon, null),
        closeIcon: /*#__PURE__*/_react["default"].createElement(_Icon.CloseIcon, null),
        loadingIcon: /*#__PURE__*/_react["default"].createElement(_Load["default"], null),
        playModeTipVisible: playModeTipVisible,
        openAudioListsPanel: this.openAudioListsPanel,
        onClose: this.onHidePanel,
        extendsContent: extendsContent,
        glassBg: glassBg,
        LyricIcon: LyricComponent,
        autoHiddenCover: autoHiddenCover,
        onCoverClick: this.onCoverClick
      }), toggle ? undefined : drag ? /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], {
        bounds: bounds,
        position: {
          x: moveX,
          y: moveY
        },
        onDrag: this.onControllerDrag,
        onStop: this.onControllerDragStop,
        onStart: this.onControllerDragStart
      }, AudioController) : AudioController, toggle && (!isMobile || !responsive) && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player-panel', 'translate', {
          'glass-bg': glassBg
        })
      }, /*#__PURE__*/_react["default"].createElement("section", {
        className: "panel-content"
      }, (!autoHiddenCover || autoHiddenCover && cover) && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('img-content', 'img-rotate', {
          'img-rotate-pause': pause || !playing || !cover
        }),
        style: {
          backgroundImage: "url(".concat(cover, ")")
        },
        onClick: function onClick() {
          return _this3.onCoverClick();
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-bar-content"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-title",
        title: audioTitle
      }, audioTitle), /*#__PURE__*/_react["default"].createElement("section", {
        className: "audio-main"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "current-time",
        title: formattedCurrentTime
      }, loading ? '--' : formattedCurrentTime), /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-bar"
      }, showProgressLoadBar && /*#__PURE__*/_react["default"].createElement("div", {
        className: "progress-load-bar",
        style: {
          width: "".concat(Math.min(loadProgress, 100), "%")
        }
      }), ProgressBar), /*#__PURE__*/_react["default"].createElement("span", {
        className: "duration",
        title: formattedAudioDuration
      }, loading ? '--' : formattedAudioDuration))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "player-content"
      }, loading ? /*#__PURE__*/_react["default"].createElement(_Load["default"], null) : showPlay ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "group"
      }, /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group prev-audio",
        title: locale.previousTrackText
      }, isMobile ? {
        onTouchStart: this.audioPrevPlay
      } : {
        onClick: this.audioPrevPlay
      }), /*#__PURE__*/_react["default"].createElement(_Icon.PrevAudioIcon, null)), /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group play-btn"
      }, isMobile ? {
        onTouchStart: this.onTogglePlay
      } : {
        onClick: this.onTogglePlay
      }, {
        title: playing ? locale.clickToPauseText : locale.clickToPlayText
      }), playing ? /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePauseIcon, null)) : /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePlayIcon, null))), /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group next-audio",
        title: locale.nextTrackText
      }, isMobile ? {
        onTouchStart: this.audioNextPlay
      } : {
        onClick: this.audioNextPlay
      }), /*#__PURE__*/_react["default"].createElement(_Icon.NextAudioIcon, null))) : undefined, ReloadComponent, DownloadComponent, ThemeSwitchComponent, extendsContent || null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "group play-sounds",
        title: locale.volumeText
      }, soundValue === 0 ? /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "sounds-icon"
      }, isMobile ? {
        onTouchStart: this.onResetVolume
      } : {
        onClick: this.onResetVolume
      }), /*#__PURE__*/_react["default"].createElement(_Icon.MdVolumeMuteIcon, null)) : /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "sounds-icon"
      }, isMobile ? {
        onTouchStart: this.onMute
      } : {
        onClick: this.onMute
      }), /*#__PURE__*/_react["default"].createElement(_Icon.MdVolumeDownIcon, null)), /*#__PURE__*/_react["default"].createElement(_Slider["default"], _extends({
        max: 1,
        value: soundValue,
        onChange: this.audioSoundChange,
        className: "sound-operation"
      }, _slider.sliderBaseOptions))), PlayModeComponent, LyricComponent, /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group audio-lists-btn",
        title: locale.playListsText
      }, isMobile ? {
        onTouchStart: this.openAudioListsPanel
      } : {
        onClick: this.openAudioListsPanel
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-lists-icon"
      }, /*#__PURE__*/_react["default"].createElement(_Icon.PlayLists, null)), /*#__PURE__*/_react["default"].createElement("span", {
        className: "audio-lists-num"
      }, audioLists.length)), toggleMode && /*#__PURE__*/_react["default"].createElement("span", _extends({
        className: "group hide-panel",
        title: locale.toggleMiniModeText
      }, isMobile ? {
        onTouchStart: this.onHidePanel
      } : {
        onClick: this.onHidePanel
      }), /*#__PURE__*/_react["default"].createElement(_Icon.FaMinusSquareOIcon, null)), DestroyComponent))), /*#__PURE__*/_react["default"].createElement(_AudioListsPanel["default"], {
        playId: playId,
        pause: pause,
        loading: loading ? /*#__PURE__*/_react["default"].createElement(_Load["default"], null) : undefined,
        visible: audioListsPanelVisible,
        audioLists: audioLists,
        onPlay: this.audioListsPlay,
        onCancel: this.closeAudioListsPanel,
        playIcon: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePlayIcon, null),
        pauseIcon: /*#__PURE__*/_react["default"].createElement(_Icon.AnimatePauseIcon, null),
        closeIcon: /*#__PURE__*/_react["default"].createElement(_Icon.CloseIcon, null),
        isMobile: isMobile,
        panelToggleAnimate: panelToggleAnimate,
        glassBg: glassBg,
        cover: cover,
        remove: remove,
        deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon.DeleteIcon, null),
        onDelete: this.onDeleteAudioLists,
        removeId: removeId,
        audioListsDragEnd: this.audioListsDragEnd,
        locale: locale
      }), !isMobile && /*#__PURE__*/_react["default"].createElement(_PlayModel["default"], {
        visible: playModelNameVisible,
        value: currentPlayModeName
      }), audioLyricVisible && /*#__PURE__*/_react["default"].createElement(_reactDraggable["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('music-player-lyric', lyricClassName)
      }, currentLyric || locale.emptyLyricText)), /*#__PURE__*/_react["default"].createElement("audio", _extends({
        className: "music-player-audio",
        title: audioTitle
      }, preloadState, {
        src: musicSrc,
        ref: function ref(node) {
          _this3.audio = node;
        }
      }))), container);
    }
  }, {
    key: "getBaseAudioInfo",
    // 返回给使用者的 音乐信息
    value: function getBaseAudioInfo() {
      var _this$state13 = this.state,
          cover = _this$state13.cover,
          name = _this$state13.name,
          musicSrc = _this$state13.musicSrc,
          soundValue = _this$state13.soundValue,
          lyric = _this$state13.lyric,
          audioLists = _this$state13.audioLists,
          currentLyric = _this$state13.currentLyric;

      var _ref15 = this.audio || {},
          currentTime = _ref15.currentTime,
          muted = _ref15.muted,
          networkState = _ref15.networkState,
          readyState = _ref15.readyState,
          played = _ref15.played,
          paused = _ref15.paused,
          ended = _ref15.ended,
          startDate = _ref15.startDate;

      var currentPlayIndex = this.getCurrentPlayIndex();
      var currentAudioListInfo = audioLists[currentPlayIndex] || {};
      return _objectSpread(_objectSpread({}, currentAudioListInfo), {}, {
        cover: cover,
        name: name,
        musicSrc: musicSrc,
        volume: soundValue,
        currentTime: currentTime,
        duration: this.audioDuration,
        muted: muted,
        networkState: networkState,
        readyState: readyState,
        played: played,
        paused: paused,
        ended: ended,
        startDate: startDate,
        lyric: lyric,
        currentLyric: currentLyric,
        playIndex: currentPlayIndex
      });
    } // 播放

  }, {
    key: "UNSAFE_componentWillReceiveProps",
    // eslint-disable-next-line camelcase
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var audioLists = nextProps.audioLists,
          playIndex = nextProps.playIndex,
          theme = nextProps.theme,
          mode = nextProps.mode,
          playMode = nextProps.playMode,
          clearPriorAudioLists = nextProps.clearPriorAudioLists;

      if (!(0, _utils.arrayEqual)(audioLists)(this.props.audioLists)) {
        if (clearPriorAudioLists) {
          this.changeAudioLists(nextProps);
        } else {
          this.updateAudioLists(audioLists);
        }

        this.initPlayer(audioLists, false);
      }

      this.updatePlayIndex(playIndex);
      this.updateTheme(theme);
      this.updateMode(mode);
      this.updatePlayMode(playMode);
    } // eslint-disable-next-line camelcase

  }, {
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var _this4 = this;

      var _this$props5 = this.props,
          audioLists = _this$props5.audioLists,
          remember = _this$props5.remember;

      if (Array.isArray(audioLists) && audioLists.length >= 1) {
        var playInfo = this.getPlayInfo(audioLists);
        var lastPlayStatus = remember ? this.getLastPlayStatus() : {};

        switch (_typeof(playInfo.musicSrc)) {
          case 'function':
            playInfo.musicSrc().then(function (val) {
              _this4.setState(_objectSpread(_objectSpread({}, playInfo), {}, {
                musicSrc: val
              }, lastPlayStatus));
            }, this.onAudioError);
            break;

          default:
            this.setState(_objectSpread(_objectSpread({}, playInfo), lastPlayStatus));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unInstallPlayer();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addMobileListener();
      this.addSystemThemeListener();
      this.initPlayer();
      this.onGetAudioInstance();
    }
  }]);

  return ReactJkMusicPlayer;
}(_react.PureComponent);

exports["default"] = ReactJkMusicPlayer;

_defineProperty(ReactJkMusicPlayer, "defaultProps", {
  audioLists: [],
  theme: _theme.THEME.DARK,
  mode: _mode.MODE.MINI,
  defaultPlayMode: _playMode2["default"].order,
  defaultPosition: {
    left: 0,
    top: 0
  },
  once: false,
  // onAudioPlay 事件  是否只触发一次
  drag: true,
  toggleMode: true,
  // 能换在迷你 和完整模式下 互相切换
  showMiniModeCover: true,
  // 迷你模式下 是否显示封面图
  showDownload: true,
  showPlay: true,
  showReload: true,
  showPlayMode: true,
  showThemeSwitch: true,
  showLyric: false,
  playModeTipVisible: false,
  // 手机端切换播放模式
  autoPlay: true,
  defaultVolume: 1,
  showProgressLoadBar: true,
  // 音频预加载进度
  seeked: true,
  playModeShowTime: 600,
  // 播放模式提示 显示时间,
  bounds: 'body',
  // mini 模式拖拽的可移动边界
  showMiniProcessBar: false,
  // 是否在迷你模式 显示进度条
  loadAudioErrorPlayNext: true,
  // 加载音频失败时 是否尝试播放下一首
  preload: false,
  // 是否在页面加载后立即加载音频
  glassBg: false,
  // 是否是毛玻璃效果
  remember: false,
  // 是否记住当前播放状态
  remove: true,
  // 音乐是否可以删除
  defaultPlayIndex: 0,
  // 默认播放索引
  getContainer: function getContainer() {
    return document.body;
  },
  // 播放器挂载的节点
  autoHiddenCover: false,
  // 当前播放歌曲没有封面时是否自动隐藏
  onBeforeAudioDownload: function onBeforeAudioDownload() {},
  // 下载前转换音频地址等
  spaceBar: false,
  // 是否可以通过空格键 控制播放暂停
  showDestroy: false,
  showMediaSession: false,
  locale: _locale["default"].en_US,
  responsive: true
});

_defineProperty(ReactJkMusicPlayer, "propTypes", _propTypes["default"]);