import {ISequenceOperation} from "./interfaces/ISequenceOperation";
import {SequencePart} from "./SequencePart";
import {Operation} from "./enums/Operation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";

export class SequenceOperation extends SequencePart implements ISequenceOperation {

    public readonly operation: Operation;
    public readonly columns: ISequenceColumn[];

    constructor (operation: Operation, ...columns: ISequenceColumn[]) {
        super();

        this.operation = operation;
        this.columns = columns;
    }

    public stringify(): string {
        return SequenceOperation.stringifyOperation(this.operation);
    }

    public static stringifyOperation(operationType: Operation) {
        return Operation[operationType].toUpperCase();
    }

}
