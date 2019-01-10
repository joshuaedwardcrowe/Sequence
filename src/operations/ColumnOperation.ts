import {SequenceOperation} from "./SequenceOperation";
import {Operation} from "../enums/Operation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {ISequenceCoalescent} from "../interfaces/ISequenceCoalescent";

export class ColumnOperation extends SequenceOperation implements ISequenceCoalescent {

    public readonly coalescingOperator: CoalescingOperator = CoalescingOperator.Comma;

    constructor (operation: Operation, ...columns: ISequenceColumn[]) {
        super(operation, ...columns);
    }

    public stringify (): string {
        const operation: string = SequenceOperation.stringifyOperation(this.operation);
        if (!this.columns.length) return `${operation} *`;
        return ColumnOperation.coalesce(operation, this.coalescingOperator, this.columns);
    }

}
