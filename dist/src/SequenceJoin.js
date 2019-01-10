"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequencePart_1 = require("./SequencePart");
const Join_1 = require("./enums/Join");
const SequenceCondition_1 = require("./conditions/SequenceCondition");
const Condition_1 = require("./enums/Condition");
const CoalescingOperator_1 = require("./enums/CoalescingOperator");
const LogicalConditional_1 = require("./conditions/conditionals/LogicalConditional");
const CriteriaConditional_1 = require("./conditions/conditionals/CriteriaConditional");
const Conditional_1 = require("./enums/Conditional");
const Sanitise_1 = require("./utilities/Sanitise");
class SequenceJoin extends SequencePart_1.SequencePart {
    constructor(join, location) {
        super();
        this.join = join;
        this.location = location;
    }
    on(column, logicalOperator, comparisonValue) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional_1.LogicalConditional(column, logicalOperator, Sanitise_1.Sanitise.input(comparisonValue)));
        return this;
    }
    onIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.In, column, ...Sanitise_1.Sanitise.inputs(values)));
    }
    onNotIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.On, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.NotIn, column, ...Sanitise_1.Sanitise.inputs(values)));
    }
    stringify() {
        const condition = Sanitise_1.Sanitise.part(this.condition);
        return `${SequenceJoin.stringifyJoin(this.join)} ${this.location} ${condition}`.trim();
    }
    static stringifyJoin(joinType) {
        switch (joinType) {
            default: return `${Join_1.Join[joinType].toUpperCase()} JOIN`;
        }
    }
}
exports.SequenceJoin = SequenceJoin;
