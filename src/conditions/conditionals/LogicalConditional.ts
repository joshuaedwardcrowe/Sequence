import {SequenceConditional} from "./SequenceConditional";
import {ILogicalConditional} from "../../interfaces/conditions/conditionals/ILogicalConditional";
import {LogicalOperator} from "../../enums/LogicalOperator";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";
import {Conditional} from "../../enums/Conditional";

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
        return `${this.column.stringify()} ${logicalOperator} ${this.value}`;
    }

}
