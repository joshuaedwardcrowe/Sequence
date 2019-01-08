"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Join_1 = require("../enums/Join");
const SequencePart_1 = require("../SequencePart");
const SequenceCondition_1 = require("../conditions/SequenceCondition");
const Condition_1 = require("../enums/Condition");
const LogicalConditional_1 = require("../conditions/conditionals/LogicalConditional");
const CriteriaConditional_1 = require("../conditions/conditionals/CriteriaConditional");
const Conditional_1 = require("../enums/Conditional");
const CoalescingOperator_1 = require("../enums/CoalescingOperator");
class SequenceJoin extends SequencePart_1.SequencePart {
    constructor(joinType, location) {
        super();
        this.join = joinType;
        this.location = location;
    }
    on(column, logicalOperator, comparisonValue) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        const cleansed = SequenceJoin.cleanseAnonymousValue(comparisonValue);
        this.condition.conditionals.push(new LogicalConditional_1.LogicalConditional(column, logicalOperator, cleansed));
        return this;
    }
    onIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        const cleansed = SequenceJoin.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.In, column, ...cleansed));
    }
    onNotIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        const cleansed = SequenceJoin.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.NotIn, column, ...cleansed));
    }
    stringify() {
        return `${SequenceJoin.stringifyJoin(this.join)} ${this.location} ${this.condition}`;
    }
    static stringifyJoin(joinType) {
        switch (joinType) {
            default: return `${Join_1.Join[joinType].toUpperCase()} JOIN`;
        }
    }
    static cleanseAnonymousValue(value) {
        if (String(value) !== value)
            return value;
        return `'${value}'`;
    }
    static cleanseAnonymousValues(values) {
        return values.map(SequenceJoin.cleanseAnonymousValue);
    }
}
exports.SequenceJoin = SequenceJoin;
//# sourceMappingURL=SequenceJoin.js.map