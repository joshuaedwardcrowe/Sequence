import {LogicalOperator} from "../enums/LogicalOperator";
import {Conditional} from "../enums/Conditional";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {ISequenceConditional} from "../interfaces/ISequenceConditional";
import {SequenceConditional} from "../SequenceConditional";

export class LogicalConditional extends SequenceConditional implements ISequenceConditional {

    public readonly logicalOperator: LogicalOperator;
    public readonly value: string|number;

    constructor (column: ISequenceColumn, logicalOperator: LogicalOperator, value: string|number) {
        super (Conditional.Logical, column);

        this.logicalOperator = logicalOperator;
        this.value = value;
    }

    public stringify (): string {
        const logicalOperator = LogicalConditional.stringifyLogicalOperator(this.logicalOperator);
        return `${this.column} ${logicalOperator} ${this.value}`;
    }

    public static stringifyLogicalOperator (logicalOperator: LogicalOperator) {
        switch (logicalOperator) {
            case LogicalOperator.GreaterThan: return ">";
            case LogicalOperator.GreaterThanOrEquality: return ">=";
            case LogicalOperator.Equality: return "=";
            case LogicalOperator.LessThan: return "<";
            case LogicalOperator.LessThanOrEquality: return "<=";
            case LogicalOperator.Division: return "/";
            case LogicalOperator.Modulo: return "%";
        }
    }

}
