import {ISequenceColumn} from "../../ISequenceColumn";
import {Conditional} from "../../../enums/Conditional";

export interface ISequenceConditional {

    readonly conditional: Conditional;

    readonly column: ISequenceColumn;

}
