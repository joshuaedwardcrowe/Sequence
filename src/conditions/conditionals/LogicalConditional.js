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
var SequenceConditional_1 = require("./SequenceConditional");
var Conditional_1 = require("../../enums/Conditional");
var LogicalConditional = /** @class */ (function (_super) {
    __extends(LogicalConditional, _super);
    function LogicalConditional(column, logicalOperator, value) {
        var _this = _super.call(this, Conditional_1.Conditional.Logical, column) || this;
        _this.logicalOperator = logicalOperator;
        _this.value = value;
        return _this;
    }
    LogicalConditional.prototype.stringify = function () {
        var logicalOperator = LogicalConditional.stringifyLogicalOperator(this.logicalOperator);
        return this.column.stringify() + " " + logicalOperator + " " + this.value;
    };
    return LogicalConditional;
}(SequenceConditional_1.SequenceConditional));
exports.LogicalConditional = LogicalConditional;
