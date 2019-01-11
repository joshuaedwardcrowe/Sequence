import { Operation } from "../enums/Operation";
import { ISequenceOperation } from "../interfaces/operations/ISequenceOperation";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { SequenceCoalescent } from "../SequenceCoalescent";
export declare class SequenceOperation extends SequenceCoalescent implements ISequenceOperation {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
    protected static stringifyOperation(operationType: Operation): string;
}
