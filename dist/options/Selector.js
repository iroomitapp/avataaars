"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var OptionContext_1 = require("./OptionContext");
function getComponentOptionValue(component) {
    var optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error("optionValue should be provided for ".concat(component));
    }
    return optionValue;
}
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.optionContext = null;
        _this.optionContextUpdate = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    Selector.prototype.componentDidMount = function () {
        this.optionContext = this.context;
        if (this.optionContext) {
            var _a = this.props, option = _a.option, defaultOption = _a.defaultOption;
            var defaultValue = typeof defaultOption === 'string'
                ? defaultOption
                : getComponentOptionValue(defaultOption);
            this.optionContext.addStateChangeListener(this.optionContextUpdate);
            this.optionContext.optionEnter(option.key);
            var optionState = this.optionContext.getOptionState(option.key);
            this.updateOptionValues();
            if (optionState) {
                this.optionContext.setDefaultValue(option.key, defaultValue);
            }
        }
    };
    Selector.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps !== this.props) {
            this.updateOptionValues(this.props);
        }
    };
    Selector.prototype.componentWillUnmount = function () {
        if (this.optionContext) {
            this.optionContext.removeStateChangeListener(this.optionContextUpdate);
            this.optionContext.optionExit(this.props.option.key);
        }
    };
    Selector.prototype.render = function () {
        var result = null;
        var _a = this.props, option = _a.option, children = _a.children;
        if (this.optionContext) {
            var value_1 = this.optionContext.getValue(option.key);
            React.Children.forEach(children, function (child) {
                if (getComponentOptionValue(child.type) === value_1) {
                    result = child;
                }
            });
        }
        return result;
    };
    Selector.prototype.updateOptionValues = function (nextProps) {
        if (!this.optionContext)
            return;
        var _a = nextProps || this.props, option = _a.option, children = _a.children;
        var values = React.Children.map(children, 
        // TODO: also validate and throw error if we don't see optionValue
        function (child) { return getComponentOptionValue(child.type); });
        if (new Set(values).size !== (values === null || values === void 0 ? void 0 : values.length)) {
            throw new Error('Duplicate values');
        }
        this.optionContext.setOptions(option.key, values);
    };
    Selector.contextType = OptionContext_1.OptionContext;
    return Selector;
}(React.Component));
exports.default = Selector;
