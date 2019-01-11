"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SequenceCoalescent_1 = require("../SequenceCoalescent");
var Condition_1 = require("../enums/Condition");
var SequenceCondition = /** @class */ (function (_super) {
    __extends(SequenceCondition, _super);
    function SequenceCondition(condition, coalescingOperator) {
        var conditionals = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            conditionals[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.condition = condition;
        _this.coalescingOperator = coalescingOperator;
        _this.conditionals = conditionals;
        return _this;
    }
    SequenceCondition.prototype.stringify = function () {
        var condition = SequenceCondition.stringifyCondition(this.condition);
        return SequenceCondition.coalesce(condition, this.coalescingOperator, this.conditionals);
    };
    SequenceCondition.stringifyCondition = function (condition) {
        switch (condition) {
            default: return Condition_1.Condition[condition].toUpperCase();
        }
    };
    return SequenceCondition;
}(SequenceCoalescent_1.SequenceCoalescent));
exports.SequenceCondition = SequenceCondition;
