"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operation_1 = require("../enums/Operation");
const SequenceCoalescent_1 = require("../SequenceCoalescent");
class SequenceOperation extends SequenceCoalescent_1.SequenceCoalescent {
    constructor(operation, ...columns) {
        super();
        this.operation = operation;
        this.columns = columns;
    }
    stringify() {
        return SequenceOperation.stringifyOperation(this.operation);
    }
    static stringifyOperation(operationType) {
        return Operation_1.Operation[operationType].toUpperCase();
    }
}
exports.SequenceOperation = SequenceOperation;
