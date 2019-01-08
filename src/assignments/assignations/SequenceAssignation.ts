import {SequencePart} from "../../SequencePart";
import {ISequenceAssignation} from "../../interfaces/assignments/assignations/ISequenceAssignation";
import {ISequenceCoalescable} from "../../interfaces/ISequenceCoalescable";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";
import {LogicalOperator} from "../../enums/LogicalOperator";

export class SequenceAssignation extends SequencePart implements ISequenceAssignation, ISequenceCoalescable {

    public column: ISequenceColumn;
    public readonly logicalOperator: LogicalOperator = LogicalOperator.Equality;
    public value: any;

    constructor (column: ISequenceColumn, value: any) {
        super();

        this.column = column;
        this.value = value;
    }

    public stringify (): string {
        const logicalOperator = SequenceAssignation.stringifyLogicalOperator(this.logicalOperator);
        return `${this.column.stringify()} ${logicalOperator} ${this.value}`;
    }

}
