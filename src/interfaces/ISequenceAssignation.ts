import {ISequencePart} from "./ISequencePart";
import {ISequenceColumn} from "./ISequenceColumn";
import {LogicalOperator} from "../enums/LogicalOperator";

export interface ISequenceAssignation extends ISequencePart {

    readonly column: ISequenceColumn;

    readonly logicalOperator: LogicalOperator;

    readonly value: any;

}
