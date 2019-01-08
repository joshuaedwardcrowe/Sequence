import {ISequenceOperation} from "../interfaces/ISequenceOperation";
import {Operation} from "../enums/Operation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceCoalescent} from "../coalescents/SequenceCoalescent";

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

    public static stringifyOperation(operationType: Operation) {
        return Operation[operationType].toUpperCase();
    }

}
