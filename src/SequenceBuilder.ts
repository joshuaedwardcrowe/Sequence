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
import {Sanitize} from "./utilities/Sanitise";
import {ISequencePart} from "./interfaces/ISequencePart";
import {StringBuilder} from "@gallink/oxygen";

export abstract class SequenceBuilder {

    public condition: ISequenceCondition;
    public location: ISequenceLocation;
    public operation: ISequenceOperation;
    public joins: ISequenceJoin[] = [];
    public ordering: ISequenceFormation;
    public grouping: ISequenceFormation;
    public limitation: LimitFormation;
    protected builder: StringBuilder = new StringBuilder();

    public where (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where,  CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, Sanitize.input(comparisonValue)));
        return this;
    }

    public whereIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.In, column, ...Sanitize.inputs(values)));
    }

    public whereNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.NotIn, column, ...Sanitize.inputs(values)));
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

    protected addBaseToBuilder () {
        this.addPartToBuilder(this.condition);
        this.addPartToBuilder(this.ordering);
        this.addPartToBuilder(this.limitation);
        this.addPartToBuilder(this.grouping);
        this.addJoinsToBuilder();
    }

    protected addPartToBuilder (part: ISequencePart, alterations?: (stringified: string) => string): void {
        this.builder.append(Sanitize.part(part, alterations));
    }

    private addJoinsToBuilder (): void {
        const reducer = (reduction: string, join: ISequenceJoin) => ` ${reduction} ${join.stringify()}`;
        if (this.joins.length) this.builder.append(this.joins.reduce<string>(reducer, ""));
    }

}
