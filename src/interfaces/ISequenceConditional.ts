import {Conditional} from "../enums/Conditional";
import {ISequenceColumn} from "./ISequenceColumn";
import {ISequencePart} from "./ISequencePart";

export interface ISequenceConditional extends ISequencePart {

    readonly conditional: Conditional;

    readonly column: ISequenceColumn;

}
