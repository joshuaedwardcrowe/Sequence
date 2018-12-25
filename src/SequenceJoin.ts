import {ISequenceJoin} from "./interfaces/ISequenceJoin";
import {Join} from "./enums/Join";
import {SequencePart} from "./SequencePart";
import {SequenceCondition} from "./SequenceCondition";
import {Condition} from "./enums/Condition";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {LogicalOperator} from "./enums/LogicalOperator";
import {LogicalConditional} from "./conditionals/LogicalConditional";
import {ParenthesesConditional} from "./conditionals/ParenthesesConditional";
import {Conditional} from "./enums/Conditional";
import {CoalescingOperator} from "./enums/CoalescingOperator";

export class SequenceJoin extends SequencePart implements ISequenceJoin {

    public readonly join: Join;
    public readonly location: string;
    public condition: SequenceCondition;

    constructor (joinType: Join, location: string) {
        super();

        this.join = joinType;
        this.location = location;
    }

    on (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string|number) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, comparisonValue));
        return this;
    }

    public onIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new ParenthesesConditional(Conditional.In, column, ...values));
    }

    public onNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new ParenthesesConditional(Conditional.NotIn, column, ...values));
    }

    public stringify (): string {
        return `${SequenceJoin.stringifyJoinType(this.join)} ${this.location} ${this.condition}`;
    }

    public static stringifyJoinType(joinType: Join): string {
        switch (joinType) {
            default: return `${Join[joinType].toUpperCase()} JOIN`
        }
    }

}
