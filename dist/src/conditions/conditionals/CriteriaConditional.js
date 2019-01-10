"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceConditional_1 = require("./SequenceConditional");
const Wrapping_1 = require("../../enums/Wrapping");
class CriteriaConditional extends SequenceConditional_1.SequenceConditional {
    constructor(conditional, column, ...values) {
        super(conditional, column);
        this.wrapping = Wrapping_1.Wrapping.Parentheses;
        this.values = values;
    }
    stringify() {
        const wrapped = SequenceConditional_1.SequenceConditional.stringifyWrapping(this.wrapping, this.values);
        return `${super.stringify()} ${wrapped}`;
    }
}
exports.CriteriaConditional = CriteriaConditional;
