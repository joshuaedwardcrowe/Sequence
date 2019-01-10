import {Operation} from "../enums/Operation";
import {ISequenceOperation} from "../interfaces/operations/ISequenceOperation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceCoalescent} from "../SequenceCoalescent";
import {ISequenceCoalescent} from "../interfaces/ISequenceCoalescent";

export class SequenceOperation extends SequenceCoalescent implements ISequenceOperation, ISequenceCoalescent {

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
