import Operation from "../enums/Operation";
import {ISequenceColumn} from "./ISequenceColumn";
import {ISequencePart} from "./ISequencePart";

export default interface ISequenceOperation extends ISequencePart {

    readonly operation: Operation;
    readonly columns: ISequenceColumn[];

}
