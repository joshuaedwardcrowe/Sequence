import {SequencePart} from "./SequencePart";
import {ISequenceJoin} from "./interfaces/ISequenceJoin";
import {Join} from "./enums/Join";
import {SequenceCondition} from "./conditions/SequenceCondition";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {LogicalOperator} from "./enums/LogicalOperator";
import {Condition} from "./enums/Condition";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {LogicalConditional} from "./conditions/conditionals/LogicalConditional";
import {CriteriaConditional} from "./conditions/conditionals/CriteriaConditional";
import {Conditional} from "./enums/Conditional";

export class SequenceJoin extends SequencePart implements ISequenceJoin {

    public readonly join: Join;
    public readonly location: string;
    public condition: SequenceCondition;

    constructor (join: Join, location: string) {
        super();

        this.join = join;
        this.location = location;
    }

    public on (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        const cleansed: any = SequenceJoin.cleanseAnonymousValue(comparisonValue);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, cleansed));
        return this;
    }

    public onIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        const cleansed: any[] = SequenceJoin.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.In, column, ...cleansed));
    }

    public onNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        const cleansed: any[] = SequenceJoin.cleanseAnonymousValues(values);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.NotIn, column, ...cleansed));
    }

    public stringify (): string {
        const location: string = !!this.location ? `${this.location} ` : "";
        const condition: string = !!this.condition ? `${this.condition.stringify()} ` : "";
        const join: string = `${SequenceJoin.stringifyJoin(this.join)} `;

        return `${join}${location}${condition}`.trim();
    }

    protected static stringifyJoin(joinType: Join): string {
        switch (joinType) {
            default: return `${Join[joinType].toUpperCase()} JOIN`;
        }
    }

    protected static cleanseAnonymousValue (value: any) {
        if (String(value) !== value) return value;
        return `'${value}'`;
    }

    protected static cleanseAnonymousValues (values: any[]) {
        return values.map(SequenceJoin.cleanseAnonymousValue);
    }

}
