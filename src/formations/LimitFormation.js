"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoalescingOperator_1 = require("../enums/CoalescingOperator");
const Formation_1 = require("../enums/Formation");
const SequenceFormation_1 = require("./SequenceFormation");
class LimitFormation extends SequenceFormation_1.SequenceFormation {
    constructor(amount = 1) {
        super(Formation_1.Formation.Limit, CoalescingOperator_1.CoalescingOperator.None);
        this.amount = amount;
    }
    stringify() {
        const formation = LimitFormation.stringifyFormation(this.formation);
        return `${formation} ${this.amount}`;
    }
}
exports.LimitFormation = LimitFormation;
//# sourceMappingURL=LimitFormation.js.map