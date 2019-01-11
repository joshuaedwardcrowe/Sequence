"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceConditional_1 = require("./SequenceConditional");
const Conditional_1 = require("../../enums/Conditional");
class LogicalConditional extends SequenceConditional_1.SequenceConditional {
    constructor(column, logicalOperator, value) {
        super(Conditional_1.Conditional.Logical, column);
        this.logicalOperator = logicalOperator;
        this.value = value;
    }
    stringify() {
        const logicalOperator = LogicalConditional.stringifyLogicalOperator(this.logicalOperator);
        return `${this.column.stringify()} ${logicalOperator} ${this.value}`;
    }
}
exports.LogicalConditional = LogicalConditional;
//# sourceMappingURL=LogicalConditional.js.map