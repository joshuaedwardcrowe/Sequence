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
var SequencePart_1 = require("../../SequencePart");
var Conditional_1 = require("../../enums/Conditional");
var SequenceConditional = /** @class */ (function (_super) {
    __extends(SequenceConditional, _super);
    function SequenceConditional(conditionalType, column) {
        var _this = _super.call(this) || this;
        _this.conditional = conditionalType;
        _this.column = column;
        return _this;
    }
    SequenceConditional.prototype.stringify = function () {
        var conditional = SequenceConditional.stringifyConditional(this.conditional);
        return this.column.stringify() + " " + conditional;
    };
    SequenceConditional.stringifyConditional = function (conditionalType) {
        switch (conditionalType) {
            case Conditional_1.Conditional.Logical: return "";
            case Conditional_1.Conditional.NotIn: return "NOT IN";
            default: return Conditional_1.Conditional[conditionalType].toUpperCase();
        }
    };
    return SequenceConditional;
}(SequencePart_1.SequencePart));
exports.SequenceConditional = SequenceConditional;
