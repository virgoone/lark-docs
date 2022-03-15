exports.ids = [13];
exports.modules = {

/***/ "/8yO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useDidMount = useDidMount;

var _react = __webpack_require__("cDcd");

/**
 * useDidMount hook
 * Calls a function on mount
 *
 * @param {Function} callback Callback function to be called on mount
 */
function useDidMount(callback) {
  (0, _react.useEffect)(function () {
    if (typeof callback === 'function') {
      callback();
    }
  }, []);
}

/***/ }),

/***/ "06kq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("LkP0"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _omit = _interopRequireDefault(__webpack_require__("2TDg"));

var _show = _interopRequireDefault(__webpack_require__("iKSp"));

var _hide = _interopRequireDefault(__webpack_require__("H4qj"));

var _deleteAlt = _interopRequireDefault(__webpack_require__("DN0u"));

var _button = _interopRequireDefault(__webpack_require__("zHR5"));

/* eslint-disable @typescript-eslint/indent */
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }

  return value;
}

var Input = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Input, _React$Component);

  Input.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    }

    return null;
  };

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.prefixCls = 'lark-ui-input';
    _this.input = void 0;

    _this.saveInput = function (node) {
      _this.input = node;
    };

    _this.focus = function () {
      _this.input && _this.input.focus();
    };

    _this.blur = function () {
      _this.input && _this.input.blur();
    };

    _this.handleReset = function (e) {
      _this.setValue('', e, function () {
        _this.focus();
      });
    };

    _this.handleKeyDown = function (e) {
      var _this$props = _this.props,
          onPressEnter = _this$props.onPressEnter,
          onKeyDown = _this$props.onKeyDown;

      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }

      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    _this.handleChange = function (e) {
      _this.setValue(e.target.value, e);
    };

    _this.onBlur = function (e) {
      _this.setState({
        isFocused: false
      });

      _this.props.onBlur && _this.props.onBlur(e);
    };

    _this.onFocus = function (e) {
      _this.setState({
        isFocused: true
      });

      _this.props.onFocus && _this.props.onFocus(e);
    };

    var value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    _this.state = {
      value: value,
      isFocused: false,
      isMasked: props.type === 'password'
    };
    return _this;
  }

  var _proto = Input.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;

    if (autoFocus) {
      this.focus();
    }
  };

  _proto.setValue = function setValue(value, e, callback) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      }, callback);
    }

    var onChange = this.props.onChange;

    if (onChange) {
      var event = e;

      if (e.type === 'click') {
        // click clear icon
        event = Object.create(e);
        event.target = this.input;
        event.currentTarget = this.input;
        var originalInputValue = this.input.value; // change input value cause e.target.value should be '' when clear input

        this.input.value = '';
        onChange(event); // reset input value

        this.input.value = originalInputValue;
        return;
      }

      onChange(event);
    }
  };

  _proto.getInputType = function getInputType() {
    // If the type prop is equal to "password" we allow the user to toggle between
    // masked and non masked text. Internally, we toggle between type "password"
    // and "text".
    if (this.props.type === 'password') {
      return this.state.isMasked ? 'password' : 'text';
    } else {
      return this.props.type;
    }
  };

  _proto.renderMaskToggle = function renderMaskToggle() {
    var _this2 = this;

    if (this.props.type !== 'password' || !this.props.visibilityToggle) return null;
    var _this$props$size = this.props.size,
        size = _this$props$size === void 0 ? 'md' : _this$props$size;
    var label = this.state.isMasked ? 'Show password text' : 'Hide password text';
    var iconSize = {
      xs: 12,
      sm: 14,
      md: 14,
      lg: 16
    }[size];
    return /*#__PURE__*/_react.default.createElement(_button.default, {
      "aria-label": label,
      onClick: function onClick() {
        return _this2.setState({
          isMasked: !_this2.state.isMasked
        });
      },
      type: "minimal",
      size: this.props.size,
      htmlType: "button"
    }, this.state.isMasked ? /*#__PURE__*/_react.default.createElement(_show.default, {
      width: iconSize,
      height: iconSize,
      "aria-label": label
    }) : /*#__PURE__*/_react.default.createElement(_hide.default, {
      width: iconSize,
      height: iconSize,
      "aria-label": label
    }));
  };

  _proto.renderClear = function renderClear() {
    var _classNames;

    var prefixCls = this.prefixCls;
    var _this$props2 = this.props,
        allowClear = _this$props2.allowClear,
        disabled = _this$props2.disabled,
        type = _this$props2.type;
    var value = this.state.value;

    if (!allowClear || disabled || !value) {
      return null;
    }

    var classes = (0, _classnames.default)(prefixCls + "-clear-icon", (_classNames = {}, _classNames['align-top'] = type === 'textarea', _classNames));
    var ariaLabel = 'Clear value';
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes,
      onClick: this.handleReset
    }, /*#__PURE__*/_react.default.createElement(_deleteAlt.default, {
      width: 16,
      height: 16,
      "aria-label": ariaLabel,
      role: "button"
    }));
  };

  _proto.render = function render() {
    var _classNames2;

    var prefixCls = this.prefixCls;
    var _this$props3 = this.props,
        _this$props3$size = _this$props3.size,
        size = _this$props3$size === void 0 ? 'md' : _this$props3$size,
        type = _this$props3.type,
        className = _this$props3.className,
        disabled = _this$props3.disabled,
        before = _this$props3.before,
        after = _this$props3.after,
        positive = _this$props3.positive,
        error = _this$props3.error,
        startEnhancer = _this$props3.startEnhancer,
        endEnhancer = _this$props3.endEnhancer,
        allowClear = _this$props3.allowClear;
    var otherProps = (0, _omit.default)(this.props, ['before', 'after', 'onPressEnter', 'startEnhancer', 'endEnhancer', 'allowClear', 'error', 'positive', 'visibilityToggle', // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue', 'size']);
    var _this$state = this.state,
        isFocused = _this$state.isFocused,
        value = _this$state.value;
    var classes = (0, _classnames.default)(prefixCls + "-wrapper", className, (_classNames2 = {}, _classNames2[prefixCls + "-" + type] = type, _classNames2[prefixCls + "-" + size] = !!size, _classNames2[prefixCls + "-focused"] = isFocused, _classNames2[prefixCls + "-disabled"] = disabled, _classNames2[prefixCls + "-error"] = error, _classNames2[prefixCls + "-positive"] = positive, _classNames2));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes
    }, startEnhancer && /*#__PURE__*/_react.default.createElement("div", {
      className: prefixCls + "-enhancer"
    }, startEnhancer), before, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
      "aria-invalid": error,
      className: prefixCls
    }, otherProps, {
      type: this.getInputType(),
      value: fixControlledValue(value),
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown: this.handleKeyDown,
      onChange: this.handleChange,
      ref: this.saveInput
    })), allowClear && this.renderClear(), this.renderMaskToggle(), after, endEnhancer && /*#__PURE__*/_react.default.createElement("div", {
      className: prefixCls + "-enhancer"
    }, endEnhancer));
  };

  return Input;
}(_react.default.Component);

Input.Password = void 0;
Input.PinCode = void 0;
Input.defaultProps = {
  type: 'text',
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  name: '',
  error: false,
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  required: false,
  visibilityToggle: true,
  size: 'md'
};
var _default = Input;
exports.default = _default;

/***/ }),

/***/ "1zhA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useOnline = useOnline;

var _react = __webpack_require__("cDcd");

/**
 *
 * @returns {boolean} Is navigator online
 */
function getIsOnline() {
  if (typeof window === 'undefined') {
    return null;
  }

  return navigator.onLine;
}
/**
 * useOnline hook
 *
 * Returns true if navigator is online, false if not.
 *
 * @returns {boolean} The value of navigator.onLine
 */


function useOnline() {
  var _useState = (0, _react.useState)(function () {
    return getIsOnline();
  }),
      online = _useState[0],
      changeOnline = _useState[1];

  function setOffline() {
    changeOnline(false);
  }

  function setOnline() {
    changeOnline(true);
  } // we only needs this to be set on mount
  // hence []


  (0, _react.useEffect)(function () {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    return function () {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);
  return online;
}

/***/ }),

/***/ "5mcn":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "DN0u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var SvgDeleteAlt = function SvgDeleteAlt(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20a8 8 0 100-16 8 8 0 000 16zM10.03 8.97a.75.75 0 00-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 101.06 1.06L12 13.06l1.97 1.97a.75.75 0 101.06-1.06L13.06 12l1.97-1.97a.75.75 0 10-1.06-1.06L12 10.94l-1.97-1.97z"
  }));
};

var _default = SvgDeleteAlt;
exports.default = _default;

/***/ }),

/***/ "E5P/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("LkP0"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _reactMultiRef = _interopRequireDefault(__webpack_require__("R76z"));

var _input = _interopRequireDefault(__webpack_require__("06kq"));

var PinCode = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(PinCode, _React$Component);

  function PinCode() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      values: _this.props.values,
      hasFocus: false
    };
    _this.prefixCls = 'lark-ui-input';
    _this._inputRefs = new _reactMultiRef.default();
    return _this;
  }

  var _proto = PinCode.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/_react.default.createElement("div", {
      className: this.prefixCls + "-pin-code"
    }, this.props.values.map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement(_input.default, {
        "aria-label": _this2.props['aria-label'],
        "aria-labelledby": _this2.props['aria-labelledby'],
        "aria-describedby": _this2.props['aria-describedby'],
        autoComplete: "one-time-code",
        disabled: _this2.props.disabled,
        error: _this2.props.error,
        id: _this2.props.id ? _this2.props.id + '-' + i : '',
        inputMode: "numeric",
        ref: _this2._inputRefs.ref(i),
        key: i,
        maxLength: 1,
        name: _this2.props.name,
        onBlur: function onBlur() {
          return _this2.setState({
            hasFocus: false
          });
        },
        onFocus: function onFocus() {
          return _this2.setState({
            hasFocus: true
          });
        },
        onChange: function onChange(event) {
          var eventValue = event.target.value; // in the case of an autocomplete or copy and paste

          if (eventValue.length > 2) {
            // see if we can use the string to fill out our values
            if (eventValue.length === _this2.props.values.length && eventValue.match(/^[0-9]+$/)) {
              _this2.props.onChange({
                values: eventValue.split(''),
                event: event
              });
            }

            return;
          } // digit was deleted


          if (eventValue === '') {
            var newValues = _this2.props.values.slice();

            newValues[i] = '';

            _this2.props.onChange({
              values: newValues,
              event: event
            });

            return;
          } // we want to override the input value with the last digit typed


          var currentValue = _this2.props.values[i];
          var newValue = eventValue;

          if (currentValue[0] === eventValue[0]) {
            newValue = eventValue[1];
          } else if (currentValue[0] === eventValue[1]) {
            newValue = eventValue[0];
          } // only fire a change event if the new value is a digit


          if (newValue.match(/^[0-9]$/)) {
            var _newValues = _this2.props.values.slice();

            _newValues[i] = newValue;

            _this2.props.onChange({
              values: _newValues,
              event: event
            }); // tab to next pin code input if we aren't at end already


            if (_this2.props.manageFocus && i < _this2.props.values.length - 1) {
              var inputRef = _this2._inputRefs.map.get(i + 1);

              if (inputRef && inputRef.focus) inputRef.focus();
            }
          }
        },
        onKeyDown: function onKeyDown(event) {
          // if we see a backspace/delete and the input is empty, transfer focus backward
          if (_this2.props.manageFocus && event.key === 'Backspace' && _this2.props.values[i] === '' && i > 0) {
            var inputRef = _this2._inputRefs.map.get(i - 1);

            if (inputRef && inputRef.focus) inputRef.focus();
          }
        },
        pattern: "\\d*",
        placeholder: _this2.state.hasFocus ? '' : _this2.props.placeholder,
        positive: _this2.props.positive,
        required: _this2.props.required,
        size: _this2.props.size,
        type: "text",
        value: _this2.props.values[i] || v
      });
    }));
  };

  return PinCode;
}(_react.default.Component);

PinCode.defaultProps = {
  'aria-label': 'Please enter your pin code',
  'aria-labelledby': null,
  'aria-describedby': null,
  autoFocus: false,
  disabled: false,
  error: false,
  id: null,
  name: null,
  onChange: function onChange() {},
  placeholder: '○',
  positive: false,
  required: false,
  size: 'md',
  manageFocus: true,
  values: ['', '', '', '']
};
var _default = PinCode;
exports.default = _default;

/***/ }),

/***/ "H4qj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var SvgHide = function SvgHide(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.81 4.36l-1.77 1.78a4 4 0 00-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0112.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 01-12.62 5.64l1.77-1.78a4 4 0 004.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z"
  }));
};

var _default = SvgHide;
exports.default = _default;

/***/ }),

/***/ "LkP0":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("kvJd");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "VnaL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "Y4m5":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "bYT6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
var _exportNames = {
  Button: true,
  Input: true,
  Image: true
};
exports.Input = exports.Image = exports.Button = void 0;

var _button = _interopRequireWildcard(__webpack_require__("zHR5"));

exports.Button = _button.default;
Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _button[key]) return;
  exports[key] = _button[key];
});

var _input = _interopRequireWildcard(__webpack_require__("wGBy"));

exports.Input = _input.default;
Object.keys(_input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _input[key]) return;
  exports[key] = _input[key];
});

var _image = _interopRequireDefault(__webpack_require__("vxy1"));

exports.Image = _image.default;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ "iKSp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var SvgShow = function SvgShow(props) {
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    viewBox: "0 0 20 20",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"
  }));
};

var _default = SvgShow;
exports.default = _default;

/***/ }),

/***/ "kvJd":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "m4NA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CodeBox */
/* unused harmony export Code */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("6ukF");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lark_org_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bYT6");
/* harmony import */ var _lark_org_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lark_org_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lark_org_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tSqJ");
/* harmony import */ var _lark_org_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lark_org_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5FuJ");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const StyledCodeBox = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1julih50"
})(true ? {
  name: "170iffl",
  styles: "overflow:scroll;border:1px solid #e8e8e8;border-left:5px solid #f7bfa5;background-color:rgb(253, 253, 253);margin-bottom:16px;margin-top:16px;position:relative"
} : undefined);

const CodeBox = props => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(StyledCodeBox, {
    children: props.children
  });
};
const Code = props => {
  const code = props.children.replace(/[\r\n]+$/, '');
  const {
    onCopy,
    hasCopied
  } = Object(_lark_org_hooks__WEBPACK_IMPORTED_MODULE_4__["useClipboard"])(code);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(CodeBox, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(prism_react_renderer__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_2__["defaultProps"]), {}, {
      language: props.language,
      code: code,
      theme: undefined,
      children: ({
        style,
        tokens,
        getLineProps,
        getTokenProps
      }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("pre", {
        dir: "ltr",
        style: _objectSpread(_objectSpread({}, style), {}, {
          padding: '10px 10px',
          margin: 0
        }),
        children: tokens.map((line, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", _objectSpread(_objectSpread({}, getLineProps({
          line,
          key: i
        })), {}, {
          children: line.map((token, key) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("span", _objectSpread({}, getTokenProps({
            token,
            key
          })), key))
        }), i))
      })
    })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_lark_org_ui__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      size: "xs",
      onClick: () => onCopy(),
      className: /*#__PURE__*/Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["css"])(true ? {
        name: "1xfwze9",
        styles: "right:12px;top:10px;position:absolute"
      } : undefined),
      children: hasCopied ? 'Copied' : 'Copy'
    })]
  });
};
/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ }),

/***/ "sd0V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.useClipboard = useClipboard;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("5mcn"));

var _react = __webpack_require__("cDcd");

var _copyToClipboard = _interopRequireDefault(__webpack_require__("oLBY"));

var _excluded = ["timeout"];

/**
 * React hook to copy content to clipboard
 *
 * @param text the text or value to copy
 * @param {Number} [optionsOrTimeout=1500] optionsOrTimeout - delay (in ms) to switch back to initial state once copied.
 * @param {Object} optionsOrTimeout
 * @param {string} optionsOrTimeout.format - set the desired MIME type
 * @param {number} optionsOrTimeout.timeout - delay (in ms) to switch back to initial state once copied.
 */
function useClipboard(text, optionsOrTimeout) {
  if (optionsOrTimeout === void 0) {
    optionsOrTimeout = {};
  }

  var _useState = (0, _react.useState)(false),
      hasCopied = _useState[0],
      setHasCopied = _useState[1];

  var _ref = typeof optionsOrTimeout === 'number' ? {
    timeout: optionsOrTimeout
  } : optionsOrTimeout,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 1500 : _ref$timeout,
      copyOptions = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var onCopy = (0, _react.useCallback)(function () {
    var didCopy = (0, _copyToClipboard.default)(text, copyOptions);
    setHasCopied(didCopy);
  }, [text, copyOptions]);
  (0, _react.useEffect)(function () {
    var timeoutId = null;

    if (hasCopied) {
      timeoutId = window.setTimeout(function () {
        setHasCopied(false);
      }, timeout);
    }

    return function () {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);
  return {
    value: text,
    onCopy: onCopy,
    hasCopied: hasCopied
  };
}

/***/ }),

/***/ "tSqJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _useClipboard = __webpack_require__("sd0V");

Object.keys(_useClipboard).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useClipboard[key]) return;
  exports[key] = _useClipboard[key];
});

var _useDidMount = __webpack_require__("/8yO");

Object.keys(_useDidMount).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useDidMount[key]) return;
  exports[key] = _useDidMount[key];
});

var _useOnline = __webpack_require__("1zhA");

Object.keys(_useOnline).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useOnline[key]) return;
  exports[key] = _useOnline[key];
});

/***/ }),

/***/ "tYv2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Heading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MDXTheme; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("w8No");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nwDx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_innertext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7Q+T");
/* harmony import */ var react_innertext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_innertext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5Phu");
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(github_slugger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _misc_active_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ePpy");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("m4NA");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);

const _excluded = ["children"],
      _excluded2 = ["tag", "children", "slugger", "withObserver"],
      _excluded3 = ["element", "children"],
      _excluded4 = ["children"],
      _excluded5 = ["children"],
      _excluded6 = ["children"],
      _excluded7 = ["children"],
      _excluded8 = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable @typescript-eslint/indent */










const IBlock = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(props.element, {
  className: props.className
}, props.children);

const Block = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(IBlock, {
  target: "e12voff12"
})("margin-bottom:8px;color:#000;font-size:", props => props.fontSize || '14px', ";font-weight:", props => props.fontWeight || 'normal', ";line-height:", props => props.lineHeight || 'normal', ";");

const InlineCode = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("code", {
  target: "e12voff11"
})(true ? {
  name: "10unbr4",
  styles: "border-radius:3px;background-color:rgba(27, 31, 35, 0.05);margin:0px;padding:0.2em 0.4em;font-size:85%;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace"
} : undefined);

const Blockquote = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()("blockquote", {
  target: "e12voff10"
})(true ? {
  name: "hzjkxx",
  styles: "border-radius:3px;background-color:rgba(27, 31, 35, 0.05);margin:0px;padding:1em 3em"
} : undefined);

const A = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const isExternal = props.href && props.href.startsWith('https://');

  if (isExternal) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", _objectSpread(_objectSpread({
      target: "_blank",
      rel: "noreferrer"
    }, props), {}, {
      children: children
    }));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.href,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("a", _objectSpread(_objectSpread({}, props), {}, {
      children: children
    }))
  });
};

const ob = {};
const obCallback = {};

const createOrGetObserver = rootMargin => {
  // Only create 1 instance for performance reasons
  if (!ob[rootMargin]) {
    obCallback[rootMargin] = [];
    ob[rootMargin] = new IntersectionObserver(e => {
      obCallback[rootMargin].forEach(cb => cb(e));
    }, {
      rootMargin,
      threshold: [0, 1]
    });
  }

  return ob[rootMargin];
};

function useIntersect(margin, ref, cb) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const callback = entries => {
      let e;

      for (let i = 0; i < entries.length; i++) {
        if (entries[i].target === ref.current) {
          e = entries[i];
          break;
        }
      }

      if (e) cb(e);
    };

    const observer = createOrGetObserver(margin);
    obCallback[margin].push(callback);
    if (ref.current) observer.observe(ref.current);
    return () => {
      const idx = obCallback[margin].indexOf(callback);
      if (idx >= 0) obCallback[margin].splice(idx, 1);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
} // Anchor links


const HeaderLink = _ref2 => {
  let {
    tag: Tag,
    children,
    slugger,
    withObserver = true
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const setActiveAnchor = Object(_misc_active_anchor__WEBPACK_IMPORTED_MODULE_6__[/* useActiveAnchorSet */ "b"])();
  const obRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(); // We are pretty sure that this header link component will not be rerendered
  // separately, so we attach a mutable index property to slugger.

  const slug = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => slugger.slug(react_innertext__WEBPACK_IMPORTED_MODULE_3___default()(children) || ''))[0];
  const index = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(() => slugger.index++)[0];

  const anchor = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
    className: "subheading-anchor",
    id: slug,
    ref: obRef
  });

  useIntersect('0px 0px -50%', obRef, e => {
    const aboveHalfViewport = e.boundingClientRect.y + e.boundingClientRect.height <= e.rootBounds.y + e.rootBounds.height;
    const insideHalfViewport = e.intersectionRatio > 0;
    setActiveAnchor(f => {
      const ret = _objectSpread(_objectSpread({}, f), {}, {
        [slug]: {
          index,
          aboveHalfViewport,
          insideHalfViewport
        }
      });

      let activeSlug;
      let smallestIndexInViewport = Infinity;
      let largestIndexAboveViewport = -1;

      for (const s in f) {
        ret[s].isActive = false;

        if (ret[s].insideHalfViewport && ret[s].index < smallestIndexInViewport) {
          smallestIndexInViewport = ret[s].index;
          activeSlug = s;
        }

        if (smallestIndexInViewport === Infinity && ret[s].aboveHalfViewport && ret[s].index > largestIndexAboveViewport) {
          largestIndexAboveViewport = ret[s].index;
          activeSlug = s;
        }
      }

      if (ret[activeSlug]) ret[activeSlug].isActive = true;
      return ret;
    });
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(Tag, _objectSpread(_objectSpread({}, props), {}, {
    children: [anchor, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])("a", {
      href: '#' + slug,
      className: "text-current no-underline no-outline",
      children: [children, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("span", {
        className: "anchor-icon",
        "aria-hidden": true,
        children: "#"
      })]
    })]
  }));
};

const Heading = _ref3 => {
  let {
    element,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, _excluded3);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Block, _objectSpread(_objectSpread({
    element: element
  }, props), {}, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: children
    })
  }));
};
const H1 = props => {
  const {
    children
  } = props;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Heading, {
    element: "h1",
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: "500",
    children: children
  });
};

const H2 = ({
  slugger
}) => _ref4 => {
  let {
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, _excluded4);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HeaderLink, _objectSpread(_objectSpread({
    tag: "h2",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H3 = ({
  slugger
}) => _ref5 => {
  let {
    children
  } = _ref5,
      props = _objectWithoutProperties(_ref5, _excluded5);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HeaderLink, _objectSpread(_objectSpread({
    tag: "h3",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H4 = ({
  slugger
}) => _ref6 => {
  let {
    children
  } = _ref6,
      props = _objectWithoutProperties(_ref6, _excluded6);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HeaderLink, _objectSpread(_objectSpread({
    tag: "h4",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H5 = ({
  slugger
}) => _ref7 => {
  let {
    children
  } = _ref7,
      props = _objectWithoutProperties(_ref7, _excluded7);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HeaderLink, _objectSpread(_objectSpread({
    tag: "h5",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const H6 = ({
  slugger
}) => _ref8 => {
  let {
    children
  } = _ref8,
      props = _objectWithoutProperties(_ref8, _excluded8);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(HeaderLink, _objectSpread(_objectSpread({
    tag: "h6",
    slugger: slugger
  }, props), {}, {
    children: children
  }));
};

const getComponents = args => ({
  h2: H2(args),
  h3: H3(args),
  h4: H4(args),
  h5: H5(args),
  h6: H6(args),
  code: _code__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
  inlineCode: ({
    children
  }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(InlineCode, {
    children: children
  }),
  blockquote: ({
    children
  }) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Blockquote, {
    children: children
  }),
  table: props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("table", {
    className: "p-0 w-full text-left border-collapse text-sm border border-solid border-[#e8e8e8] dark:border-slate-400/20 table-container",
    children: props.children
  }),
  th: props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("th", {
    className: "whitespace-nowrap p-3 pt-3.5 border-[#e8e8e8] dark:border-slate-400/20 font-medium text-[#5c6b77] dark:text-slate-200 bg-black/[.02] dark:bg-slate-500/[0.1]",
    children: props.children
  }),
  td: props => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("td", {
    className: "text-left border border-solid border-[#e8e8e8] dark:border-slate-400/20 border-x-0 border-y p-3",
    children: props.children
  }),
  a: A
});

const MDXTheme = ({
  children
}) => {
  const slugger = new github_slugger__WEBPACK_IMPORTED_MODULE_5___default.a();
  slugger.index = 0;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__["MDXProvider"], {
    components: getComponents({
      slugger
    }),
    children: children
  });
};

/***/ }),

/***/ "u04e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _input = _interopRequireDefault(__webpack_require__("06kq"));

var Password = function Password(props) {
  return /*#__PURE__*/_react.default.createElement(_input.default, (0, _extends2.default)({}, props, {
    type: "password"
  }));
};

var _default = Password;
exports.default = _default;

/***/ }),

/***/ "vxy1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("LkP0"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Image = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Image, _PureComponent);

  function Image(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.prefixCls = 'lark-ui-image';
    _this.state = {
      loading: _this.props.loading
    };
    return _this;
  }

  var _proto = Image.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return /*#__PURE__*/_react.default.createElement("a", {
      role: "Image",
      className: "" + this.prefixCls
    }, children);
  };

  return Image;
}(_react.PureComponent);

Image.defaultProps = {
  loading: false,
  block: false,
  type: 'primary'
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "wGBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
var _exportNames = {
  Password: true,
  PinCode: true
};
exports.default = void 0;

var _input = _interopRequireWildcard(__webpack_require__("06kq"));

Object.keys(_input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _input[key]) return;
  exports[key] = _input[key];
});

var _password = _interopRequireDefault(__webpack_require__("u04e"));

exports.Password = _password.default;

var _pinCode = _interopRequireDefault(__webpack_require__("E5P/"));

exports.PinCode = _pinCode.default;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_input.default.Password = _password.default;
_input.default.PinCode = _pinCode.default;
var _default = _input.default;
exports.default = _default;

/***/ }),

/***/ "yRSK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tYv2");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("r7Qn");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function MDXLayout({
  children,
  frontMatter
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_elements__WEBPACK_IMPORTED_MODULE_1__[/* MDXTheme */ "b"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_page__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        frontMatter: frontMatter,
        sidebar: true,
        children: children
      })
    })
  });
}

/***/ }),

/***/ "zHR5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y4m5");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("VnaL"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("5mcn"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("LkP0"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _classnames = _interopRequireDefault(__webpack_require__("K2gz"));

var _pick = _interopRequireDefault(__webpack_require__("KPEA"));

var _omit = _interopRequireDefault(__webpack_require__("2TDg"));

var _excluded = ["children", "block", "type", "className", "loading", "htmlType", "shape", "disabled", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Button = /*#__PURE__*/function (_PureComponent) {
  (0, _inheritsLoose2.default)(Button, _PureComponent);

  function Button() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;
    _this.prefixCls = 'lark-ui-btn';
    _this.state = {
      loading: _this.props.loading
    };

    _this.handleClick = function (e) {
      var loading = _this.state.loading;
      var onClick = _this.props.onClick;

      if (loading) {
        return;
      }

      if (onClick) {
        ;
        onClick(e);
      }
    };

    return _this;
  }

  var _proto = Button.prototype;

  _proto.render = function render() {
    var _classNames;

    var prefixCls = this.prefixCls;
    var _this$props = this.props,
        children = _this$props.children,
        block = _this$props.block,
        type = _this$props.type,
        className = _this$props.className,
        loading = _this$props.loading,
        htmlType = _this$props.htmlType,
        shape = _this$props.shape,
        disabled = _this$props.disabled,
        _this$props$size = _this$props.size,
        size = _this$props$size === void 0 ? 'md' : _this$props$size,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, _excluded);
    var classes = (0, _classnames.default)(prefixCls, className, (_classNames = {}, _classNames[prefixCls + "-" + type] = type, _classNames[prefixCls + "-" + size] = !!size, _classNames[prefixCls + "-" + shape] = shape, _classNames[prefixCls + "-loading"] = !!loading, _classNames[prefixCls + "-block"] = block, _classNames[prefixCls + "-disabled"] = disabled, _classNames));

    if (rest.href !== undefined) {
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, (0, _pick.default)(rest, ['href', 'target']), {
        className: classes,
        onClick: this.handleClick
      }), children);
    }

    return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
      type: htmlType,
      className: classes
    }, (0, _omit.default)(rest, ['href', 'target']), {
      onClick: this.handleClick
    }), children);
  };

  return Button;
}(_react.PureComponent);

Button.defaultProps = {
  disabled: false,
  loading: false,
  block: false,
  htmlType: 'button',
  type: 'primary',
  shape: '',
  size: 'md'
};
var _default = Button;
exports.default = _default;

/***/ })

};;