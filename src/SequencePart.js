"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Wrapping_1 = require("./enums/Wrapping");
const LogicalOperator_1 = require("./enums/LogicalOperator");
class SequencePart {
    static stringifyWrapping(wrapping, values) {
        switch (wrapping) {
            case Wrapping_1.Wrapping.Parentheses: return `(${values.join(", ")})`;
        }
    }
    static stringifyLogicalOperator(logicalOperator) {
        switch (logicalOperator) {
            case LogicalOperator_1.LogicalOperator.GreaterThan: return ">";
            case LogicalOperator_1.LogicalOperator.GreaterThanOrEquality: return ">=";
            case LogicalOperator_1.LogicalOperator.Equality: return "=";
            case LogicalOperator_1.LogicalOperator.LessThan: return "<";
            case LogicalOperator_1.LogicalOperator.LessThanOrEquality: return "<=";
            case LogicalOperator_1.LogicalOperator.Division: return "/";
            case LogicalOperator_1.LogicalOperator.Modulo: return "%";
        }
    }
}
exports.SequencePart = SequencePart;
//# sourceMappingURL=SequencePart.js.map