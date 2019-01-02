import {Operation} from "../enums/Operation";
import {ISequenceOperation} from "../interfaces/ISequenceOperation";
import {ISequencePart} from "../interfaces/ISequencePart";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceOperation} from "../SequenceOperation";

export class SelectionOperation extends SequenceOperation implements ISequencePart, ISequenceOperation {

    public readonly columns: ISequenceColumn[];

    constructor (...columns: ISequenceColumn[]) {
        super(Operation.Select);

        this.columns = columns;
    }

    public stringify (): string {
        const operation = SequenceOperation.stringifyOperation(this.operation);
        if (!this.columns.length) return `${operation} *`;
        const reducer = (a, c, i) => i > 0 ? `${a}, ${c}` : `${a} ${c}`;
        return this.columns.reduce<string>(reducer, operation);
    }

}
