import { SequencePart } from "../../SequencePart";
import { ISequenceAssignation } from "../../interfaces/assignments/assignations/ISequenceAssignation";
import { ISequenceCoalescable } from "../../interfaces/ISequenceCoalescable";
import { ISequenceColumn } from "../../interfaces/ISequenceColumn";
import { LogicalOperator } from "../../enums/LogicalOperator";
export declare class SequenceAssignation extends SequencePart implements ISequenceAssignation, ISequenceCoalescable {
    column: ISequenceColumn;
    readonly logicalOperator: LogicalOperator;
    value: any;
    constructor(column: ISequenceColumn, value: any);
    stringify(): string;
}
