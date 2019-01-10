import {LimitFormation} from "./formations/LimitFormation";
import {LogicalOperator} from "./enums/LogicalOperator";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISequenceFormation} from "./interfaces/formations/ISequenceFormation";
import {ISequenceJoin} from "./interfaces/ISequenceJoin";
import {ISequenceOperation} from "./interfaces/operations/ISequenceOperation";
import {ISequenceLocation} from "./interfaces/locations/ISequenceLocation";
import {ISequenceCondition} from "./interfaces/conditions/ISequenceCondition";
import {SequenceCondition} from "./conditions/SequenceCondition";
import {Condition} from "./enums/Condition";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {LogicalConditional} from "./conditions/conditionals/LogicalConditional";
import {CriteriaConditional} from "./conditions/conditionals/CriteriaConditional";
import {Conditional} from "./enums/Conditional";
import {Arrangement} from "./enums/Arrangement";
import {SequenceFormation} from "./formations/SequenceFormation";
import {Formation} from "./enums/Formation";
import {SequenceFilter} from "./formations/filters/SequenceFilter";
import {Sanitise} from "./utilities/Sanitise";

export abstract class SequenceBuilder {

    public condition: ISequenceCondition;
    public location: ISequenceLocation;
    public operation: ISequenceOperation;
    public joins: ISequenceJoin[] = [];
    public ordering: ISequenceFormation;
    public grouping: ISequenceFormation;
    public limitation: LimitFormation;

    public where (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where,  CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, Sanitise.input(comparisonValue)));
        return this;
    }

    public whereIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.In, column, ...Sanitise.inputs(values)));
    }

    public whereNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.NotIn, column, ...Sanitise.inputs(values)));
    }

    public orderBy (column: ISequenceColumn, arrangement: Arrangement): this {
        if (!this.ordering) this.ordering = new SequenceFormation(Formation.OrderBy, CoalescingOperator.And);
        this.ordering.filters.push(new SequenceFilter(column, arrangement));
        return this;
    }

    public groupBy (column: ISequenceColumn, arrangement: Arrangement) {
        if (!this.grouping) this.grouping = new SequenceFormation(Formation.GroupBy, CoalescingOperator.And);
        this.grouping.filters.push(new SequenceFilter(column, arrangement));
        return this;
    }

    public limit (amount: number): this {
        if (!this.limitation) this.limitation = new LimitFormation(amount);
        return this;
    }

    protected stringifyBase (): string {
        const condition: string = Sanitise.part(this.condition);
        const ordering: string = Sanitise.part(this.ordering);
        const limitation: string = Sanitise.part(this.limitation);
        const grouping: string = Sanitise.part(this.grouping);
        return (`${condition}${ordering}${limitation}${grouping}${this.stringifyJoins()}`);
    }

    private stringifyJoins (): string {
        const reducer = (reduction: string, join: ISequenceJoin) => ` ${reduction} ${join.stringify()}`;
        return this.joins.length ? this.joins.reduce<string>(reducer, "") : "";
    }

}
