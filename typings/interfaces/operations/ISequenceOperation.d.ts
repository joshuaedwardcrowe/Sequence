import { ISequenceColumn } from "../ISequenceColumn";
import { Operation } from "../../enums/Operation";
import { ISequencePart } from "../ISequencePart";
export interface ISequenceOperation extends ISequencePart {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
}
