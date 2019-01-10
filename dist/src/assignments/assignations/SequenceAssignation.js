"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequencePart_1 = require("../../SequencePart");
const LogicalOperator_1 = require("../../enums/LogicalOperator");
class SequenceAssignation extends SequencePart_1.SequencePart {
    constructor(column, value) {
        super();
        this.logicalOperator = LogicalOperator_1.LogicalOperator.Equality;
        this.column = column;
        this.value = value;
    }
    stringify() {
        const logicalOperator = SequenceAssignation.stringifyLogicalOperator(this.logicalOperator);
        return `${this.column.stringify()} ${logicalOperator} ${this.value}`;
    }
}
exports.SequenceAssignation = SequenceAssignation;
