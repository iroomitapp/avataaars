"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionContextClass = exports.OptionContext = void 0;
var React = require("react");
// Create modern React context
exports.OptionContext = React.createContext(null);
var OptionContextClass = /** @class */ (function () {
    function OptionContextClass(options) {
        this.stateChangeListeners = new Set();
        this.valueChangeListeners = new Set();
        this._state = {};
        this._data = {};
        this._options = options;
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            this._state[option.key] = {
                key: option.key,
                available: 0,
                options: []
            };
        }
    }
    Object.defineProperty(OptionContextClass.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OptionContextClass.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    OptionContextClass.prototype.addStateChangeListener = function (listener) {
        this.stateChangeListeners.add(listener);
    };
    OptionContextClass.prototype.removeStateChangeListener = function (listener) {
        this.stateChangeListeners.delete(listener);
    };
    OptionContextClass.prototype.addValueChangeListener = function (listener) {
        this.valueChangeListeners.add(listener);
    };
    OptionContextClass.prototype.removeValueChangeListener = function (listener) {
        this.valueChangeListeners.delete(listener);
    };
    OptionContextClass.prototype.optionEnter = function (key) {
        var _a;
        // TODO:
        var optionState = this.getOptionState(key);
        this.setState((_a = {},
            _a[key] = __assign(__assign({}, optionState), { available: optionState.available + 1 }),
            _a));
    };
    OptionContextClass.prototype.optionExit = function (key) {
        var _a;
        var optionState = this.getOptionState(key);
        this.setState((_a = {},
            _a[key] = __assign(__assign({}, optionState), { available: optionState.available - 1 }),
            _a));
    };
    OptionContextClass.prototype.getOptionState = function (key) {
        return this.state[key] || null;
    };
    OptionContextClass.prototype.getValue = function (key) {
        var optionState = this.getOptionState(key);
        if (!optionState) {
            return null;
        }
        var value = this._data[key];
        if (value) {
            return value;
        }
        return optionState.defaultValue || null;
    };
    OptionContextClass.prototype.setValue = function (key, value) {
        for (var _i = 0, _a = Array.from(this.valueChangeListeners); _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(key, value);
        }
    };
    // set single source of truth
    OptionContextClass.prototype.setData = function (data) {
        this._data = data;
        this.notifyListener();
    };
    OptionContextClass.prototype.setDefaultValue = function (key, defaultValue) {
        var _a;
        var optionState = this.getOptionState(key);
        this.setState((_a = {},
            _a[key] = __assign(__assign({}, optionState), { defaultValue: defaultValue }),
            _a));
    };
    OptionContextClass.prototype.setOptions = function (key, options) {
        var _a;
        this.setState((_a = {},
            _a[key] = __assign(__assign({}, this.state[key]), { key: key, options: options }),
            _a));
    };
    OptionContextClass.prototype.setState = function (state) {
        this._state = __assign(__assign({}, this.state), state);
        this.notifyListener();
    };
    OptionContextClass.prototype.notifyListener = function () {
        for (var _i = 0, _a = Array.from(this.stateChangeListeners); _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return OptionContextClass;
}());
exports.OptionContextClass = OptionContextClass;
// Export the class as default for backward compatibility
exports.default = OptionContextClass;
