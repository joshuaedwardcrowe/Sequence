import ISequenceOperation from "./interfaces/ISequenceOperation";
import {SequencePart} from "./SequencePart";
import Operation from "./enums/Operation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";

export abstract class SequenceOperation extends SequencePart implements ISequenceOperation {

    public readonly operation: Operation;
    public readonly columns: ISequenceColumn[];

    public static stringifyOperation(operationType: Operation) {
        return Operation[operationType].toUpperCase();
    }

}
