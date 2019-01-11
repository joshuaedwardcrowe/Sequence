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
import {SqlSanitize} from "./utilities/SqlSanitise";
import {StringBuilder} from "@gallink/oxygen";

export class SequenceJoin extends SequencePart implements ISequenceJoin {

    public readonly join: Join;
    public readonly location: string;
    public condition: SequenceCondition;
    protected builder: StringBuilder = new StringBuilder();

    constructor (join: Join, location: string) {
        super();

        this.join = join;
        this.location = location;
    }

    public on (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, SqlSanitize.input(comparisonValue)));
        return this;
    }

    public onIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.In, column, ...SqlSanitize.inputs(values)));
    }

    public onNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
        this.condition.conditionals.push(new CriteriaConditional(Conditional.NotIn, column, ...SqlSanitize.inputs(values)));
    }

    public stringify (): string {
        this.builder.append(SequenceJoin.stringifyJoin(this.join));
        this.builder.append(this.location);
        this.builder.append(SqlSanitize.part(this.condition));
        return this.builder.toString().trim();
    }

    protected static stringifyJoin(joinType: Join): string {
        switch (joinType) {
            default: return `${Join[joinType].toUpperCase()} JOIN`;
        }
    }

}
