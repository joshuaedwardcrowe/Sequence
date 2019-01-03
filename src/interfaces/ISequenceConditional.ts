import {Conditional} from "../enums/Conditional";
import {ISequenceColumn} from "./ISequenceColumn";

export interface ISequenceConditional {

    readonly conditional: Conditional;

    readonly column: ISequenceColumn;

}
