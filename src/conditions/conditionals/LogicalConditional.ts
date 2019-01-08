import {LogicalOperator} from "../../enums/LogicalOperator";
import {Conditional} from "../../enums/Conditional";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";
import {ILogicalConditional} from "../../interfaces/ILogicalConditional";
import {SequenceConditional} from "./SequenceConditional";

export class LogicalConditional extends SequenceConditional implements ILogicalConditional {

    public readonly logicalOperator: LogicalOperator;
    public readonly value: any;

    constructor (column: ISequenceColumn, logicalOperator: LogicalOperator, value: any) {
        super (Conditional.Logical, column);

        this.logicalOperator = logicalOperator;
        this.value = value;
    }

    public stringify (): string {
        const logicalOperator = LogicalConditional.stringifyLogicalOperator(this.logicalOperator);
        return `${this.column} ${logicalOperator} ${this.value}`;
    }

}
