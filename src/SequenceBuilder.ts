import {ISequenceBuilder} from "./interfaces/ISequenceBuilder";
import {ISequenceOperation} from "./interfaces/ISequenceOperation";
import {ISequenceLocation} from "./interfaces/ISequenceLocation";
import {ISequenceCondition} from "./interfaces/ISequenceCondition";
import {LimitFormation} from "./formations/LimitFormation";
import {Arrangement} from "./enums/Arrangement";
import {SequenceFilter} from "./SequenceFilter";
import {SequenceFormation} from "./SequenceFormation";
import {Formation} from "./enums/Formation";
import {ISequenceJoin} from "./interfaces/ISequenceJoin";
import {ISequenceFormation} from "./interfaces/ISequenceFormation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {LogicalOperator} from "./enums/LogicalOperator";
import {SequenceCondition} from "./SequenceCondition";
import {Condition} from "./enums/Condition";
import {LogicalConditional} from "./conditionals/LogicalConditional";
import {CriteriaConditional} from "./conditionals/CriteriaConditional";
import {Conditional} from "./enums/Conditional";

export abstract class SequenceBuilder implements ISequenceBuilder {

    public condition: ISequenceCondition;
    public location: ISequenceLocation;
    public operation: ISequenceOperation;
    public joins: ISequenceJoin[] = [];
    public ordering: ISequenceFormation;
    public grouping: ISequenceFormation;
    public limitation: LimitFormation;

    public where (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where,  CoalescingOperator.And);
        const cleansedValue: any = SequenceBuilder.cleanseAnonymousValue(comparisonValue);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, cleansedValue));
        return this;
    }

    public whereIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        const cleansedValues: any[] = SequenceBuilder.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.In, column, ...cleansedValues));
    }

    public whereNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        const cleansedValues: any = SequenceBuilder.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.NotIn, column, ...cleansedValues));
    }

    public orderBy (column: ISequenceColumn, arrangement: Arrangement) {
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

    public stringify (): string {
        const condition: string = this.stringifyCondition();
        const ordering: string = this.stringifyOrdering();
        const limitation: string = this.stringifyLimitation();
        const grouping: string = this.stringifyGrouping();
        const joins: string = this.stringifyJoins();

        return (`${condition}${ordering}${limitation}${grouping}${joins}`).trim();
    }

    public toString (): string {
        return this.stringify();
    }

    private stringifyCondition (): string {
        return !!this.condition ? `${this.condition.stringify()} ` : "";
    }

    private stringifyOrdering (): string {
        return !!this.ordering ? `${this.ordering.stringify()} ` : "";
    }

    private stringifyGrouping (): string {
        return !!this.grouping ? `${this.grouping.stringify()} ` : "";
    }

    private stringifyLimitation (): string {
        return !!this.limitation ? `${this.limitation.stringify()} ` : "";
    }

    private stringifyJoins (): string {
        return this.joins.length ? `${this.joins.reduce<string>(this.reduceJoins, "")} ` : "";
    }

    private reduceJoins (reduction: string, join: ISequenceJoin): string {
        return `${reduction} ${join.stringify()}`
    }

    protected static cleanseAnonymousValue (value: any) {
        if (String(value) !== value) return value;
        return `'${value}'`
    }

    protected static cleanseAnonymousValues (values: any[]) {
        return values.map(SequenceBuilder.cleanseAnonymousValue);
    }

}
