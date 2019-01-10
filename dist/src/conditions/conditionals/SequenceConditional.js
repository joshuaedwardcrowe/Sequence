"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequencePart_1 = require("../../SequencePart");
const Conditional_1 = require("../../enums/Conditional");
class SequenceConditional extends SequencePart_1.SequencePart {
    constructor(conditionalType, column) {
        super();
        this.conditional = conditionalType;
        this.column = column;
    }
    stringify() {
        const conditional = SequenceConditional.stringifyConditional(this.conditional);
        return `${this.column.stringify()} ${conditional}`;
    }
    static stringifyConditional(conditionalType) {
        switch (conditionalType) {
            case Conditional_1.Conditional.Logical: return "";
            case Conditional_1.Conditional.NotIn: return "NOT IN";
            default: return Conditional_1.Conditional[conditionalType].toUpperCase();
        }
    }
}
exports.SequenceConditional = SequenceConditional;
