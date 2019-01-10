"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceOperation_1 = require("./SequenceOperation");
const CoalescingOperator_1 = require("../enums/CoalescingOperator");
class ColumnOperation extends SequenceOperation_1.SequenceOperation {
    constructor(operation, ...columns) {
        super(operation, ...columns);
        this.coalescingOperator = CoalescingOperator_1.CoalescingOperator.Comma;
    }
    stringify() {
        const operation = SequenceOperation_1.SequenceOperation.stringifyOperation(this.operation);
        if (!this.columns.length)
            return `${operation} *`;
        return ColumnOperation.coalesce(operation, this.coalescingOperator, this.columns);
    }
}
exports.ColumnOperation = ColumnOperation;
//# sourceMappingURL=ColumnOperation.js.map