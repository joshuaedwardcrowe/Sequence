import {Operation} from "../enums/Operation";
import {ISequenceOperation} from "../interfaces/operations/ISequenceOperation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceCoalescent} from "../SequenceCoalescent";

export class SequenceOperation extends SequenceCoalescent implements ISequenceOperation {

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

    protected static stringifyOperation(operationType: Operation) {
        return Operation[operationType].toUpperCase();
    }

}
