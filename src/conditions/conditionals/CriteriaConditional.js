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
var Wrapping_1 = require("../../enums/Wrapping");
var CriteriaConditional = /** @class */ (function (_super) {
    __extends(CriteriaConditional, _super);
    function CriteriaConditional(conditional, column) {
        var values = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            values[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, conditional, column) || this;
        _this.wrapping = Wrapping_1.Wrapping.Parentheses;
        _this.values = values;
        return _this;
    }
    CriteriaConditional.prototype.stringify = function () {
        var wrapped = SequenceConditional_1.SequenceConditional.stringifyWrapping(this.wrapping, this.values);
        return _super.prototype.stringify.call(this) + " " + wrapped;
    };
    return CriteriaConditional;
}(SequenceConditional_1.SequenceConditional));
exports.CriteriaConditional = CriteriaConditional;
