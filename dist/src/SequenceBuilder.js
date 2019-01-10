"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LimitFormation_1 = require("./formations/LimitFormation");
const SequenceCondition_1 = require("./conditions/SequenceCondition");
const Condition_1 = require("./enums/Condition");
const CoalescingOperator_1 = require("./enums/CoalescingOperator");
const LogicalConditional_1 = require("./conditions/conditionals/LogicalConditional");
const CriteriaConditional_1 = require("./conditions/conditionals/CriteriaConditional");
const Conditional_1 = require("./enums/Conditional");
const SequenceFormation_1 = require("./formations/SequenceFormation");
const Formation_1 = require("./enums/Formation");
const SequenceFilter_1 = require("./formations/filters/SequenceFilter");
const Sanitise_1 = require("./utilities/Sanitise");
class SequenceBuilder {
    constructor() {
        this.joins = [];
    }
    where(column, logicalOperator, comparisonValue) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.Where, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional_1.LogicalConditional(column, logicalOperator, Sanitise_1.Sanitise.input(comparisonValue)));
        return this;
    }
    whereIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.Where, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.In, column, ...Sanitise_1.Sanitise.inputs(values)));
    }
    whereNotIn(column, ...values) {
        if (!this.condition)
            this.condition = new SequenceCondition_1.SequenceCondition(Condition_1.Condition.Where, CoalescingOperator_1.CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional_1.CriteriaConditional(Conditional_1.Conditional.NotIn, column, ...Sanitise_1.Sanitise.inputs(values)));
    }
    orderBy(column, arrangement) {
        if (!this.ordering)
            this.ordering = new SequenceFormation_1.SequenceFormation(Formation_1.Formation.OrderBy, CoalescingOperator_1.CoalescingOperator.And);
        this.ordering.filters.push(new SequenceFilter_1.SequenceFilter(column, arrangement));
        return this;
    }
    groupBy(column, arrangement) {
        if (!this.grouping)
            this.grouping = new SequenceFormation_1.SequenceFormation(Formation_1.Formation.GroupBy, CoalescingOperator_1.CoalescingOperator.And);
        this.grouping.filters.push(new SequenceFilter_1.SequenceFilter(column, arrangement));
        return this;
    }
    limit(amount) {
        if (!this.limitation)
            this.limitation = new LimitFormation_1.LimitFormation(amount);
        return this;
    }
    stringifyBase() {
        const condition = Sanitise_1.Sanitise.part(this.condition);
        const ordering = Sanitise_1.Sanitise.part(this.ordering);
        const limitation = Sanitise_1.Sanitise.part(this.limitation);
        const grouping = Sanitise_1.Sanitise.part(this.grouping);
        return (`${condition}${ordering}${limitation}${grouping}${this.stringifyJoins()}`);
    }
    stringifyJoins() {
        const reducer = (reduction, join) => ` ${reduction} ${join.stringify()}`;
        return this.joins.length ? this.joins.reduce(reducer, "") : "";
    }
}
exports.SequenceBuilder = SequenceBuilder;
