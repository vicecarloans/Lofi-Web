"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FaHeadphonesIcon", {
  enumerable: true,
  get: function get() {
    return _headphones["default"];
  }
});
Object.defineProperty(exports, "FaMinusSquareOIcon", {
  enumerable: true,
  get: function get() {
    return _minusSquareO["default"];
  }
});
Object.defineProperty(exports, "LyricIcon", {
  enumerable: true,
  get: function get() {
    return _book["default"];
  }
});
Object.defineProperty(exports, "ReloadIcon", {
  enumerable: true,
  get: function get() {
    return _refresh["default"];
  }
});
Object.defineProperty(exports, "MdVolumeDownIcon", {
  enumerable: true,
  get: function get() {
    return _volumeUp["default"];
  }
});
Object.defineProperty(exports, "MdVolumeMuteIcon", {
  enumerable: true,
  get: function get() {
    return _volumeOff["default"];
  }
});
Object.defineProperty(exports, "DownloadIcon", {
  enumerable: true,
  get: function get() {
    return _cloudDownload["default"];
  }
});
Object.defineProperty(exports, "LoadIcon", {
  enumerable: true,
  get: function get() {
    return _spinner["default"];
  }
});
Object.defineProperty(exports, "LoopIcon", {
  enumerable: true,
  get: function get() {
    return _repeatOne["default"];
  }
});
Object.defineProperty(exports, "RepeatIcon", {
  enumerable: true,
  get: function get() {
    return _repeat["default"];
  }
});
Object.defineProperty(exports, "ShufflePlayIcon", {
  enumerable: true,
  get: function get() {
    return _arrowShuffle["default"];
  }
});
Object.defineProperty(exports, "NextAudioIcon", {
  enumerable: true,
  get: function get() {
    return _skipNext["default"];
  }
});
Object.defineProperty(exports, "PrevAudioIcon", {
  enumerable: true,
  get: function get() {
    return _skipPrevious["default"];
  }
});
Object.defineProperty(exports, "OrderPlayIcon", {
  enumerable: true,
  get: function get() {
    return _viewHeadline["default"];
  }
});
Object.defineProperty(exports, "PlayLists", {
  enumerable: true,
  get: function get() {
    return _queueMusic["default"];
  }
});
Object.defineProperty(exports, "CloseIcon", {
  enumerable: true,
  get: function get() {
    return _close["default"];
  }
});
Object.defineProperty(exports, "DeleteIcon", {
  enumerable: true,
  get: function get() {
    return _trashO["default"];
  }
});
Object.defineProperty(exports, "NotContentIcon", {
  enumerable: true,
  get: function get() {
    return _libraryMusic["default"];
  }
});
Object.defineProperty(exports, "ArrowDownIcon", {
  enumerable: true,
  get: function get() {
    return _angleDoubleDown["default"];
  }
});
exports.AnimatePauseIcon = exports.AnimatePlayIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _playCircle = _interopRequireDefault(require("react-icons/lib/fa/play-circle"));

var _pauseCircle = _interopRequireDefault(require("react-icons/lib/fa/pause-circle"));

var _headphones = _interopRequireDefault(require("react-icons/lib/fa/headphones"));

var _minusSquareO = _interopRequireDefault(require("react-icons/lib/fa/minus-square-o"));

var _book = _interopRequireDefault(require("react-icons/lib/fa/book"));

var _refresh = _interopRequireDefault(require("react-icons/lib/fa/refresh"));

var _volumeUp = _interopRequireDefault(require("react-icons/lib/md/volume-up"));

var _volumeOff = _interopRequireDefault(require("react-icons/lib/md/volume-off"));

var _cloudDownload = _interopRequireDefault(require("react-icons/lib/fa/cloud-download"));

var _spinner = _interopRequireDefault(require("react-icons/lib/fa/spinner"));

var _repeatOne = _interopRequireDefault(require("react-icons/lib/md/repeat-one"));

var _repeat = _interopRequireDefault(require("react-icons/lib/md/repeat"));

var _arrowShuffle = _interopRequireDefault(require("react-icons/lib/ti/arrow-shuffle"));

var _skipNext = _interopRequireDefault(require("react-icons/lib/md/skip-next"));

var _skipPrevious = _interopRequireDefault(require("react-icons/lib/md/skip-previous"));

var _viewHeadline = _interopRequireDefault(require("react-icons/lib/md/view-headline"));

var _queueMusic = _interopRequireDefault(require("react-icons/lib/md/queue-music"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _trashO = _interopRequireDefault(require("react-icons/lib/fa/trash-o"));

var _libraryMusic = _interopRequireDefault(require("react-icons/lib/md/library-music"));

var _angleDoubleDown = _interopRequireDefault(require("react-icons/lib/fa/angle-double-down"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AnimatePlayIcon = function AnimatePlayIcon() {
  return /*#__PURE__*/_react["default"].createElement(_playCircle["default"], {
    className: "react-jinke-music-player-play-icon"
  });
};

exports.AnimatePlayIcon = AnimatePlayIcon;

var AnimatePauseIcon = function AnimatePauseIcon() {
  return /*#__PURE__*/_react["default"].createElement(_pauseCircle["default"], {
    className: "react-jinke-music-player-pause-icon"
  });
};

exports.AnimatePauseIcon = AnimatePauseIcon;