"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceCoalescent_1 = require("../SequenceCoalescent");
const Condition_1 = require("../enums/Condition");
class SequenceCondition extends SequenceCoalescent_1.SequenceCoalescent {
    constructor(condition, coalescingOperator, ...conditionals) {
        super();
        this.condition = condition;
        this.coalescingOperator = coalescingOperator;
        this.conditionals = conditionals;
    }
    stringify() {
        const condition = SequenceCondition.stringifyCondition(this.condition);
        return SequenceCondition.coalesce(condition, this.coalescingOperator, this.conditionals);
    }
    static stringifyCondition(condition) {
        switch (condition) {
            default: return Condition_1.Condition[condition].toUpperCase();
        }
    }
}
exports.SequenceCondition = SequenceCondition;
//# sourceMappingURL=SequenceCondition.js.map