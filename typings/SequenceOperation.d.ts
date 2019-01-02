import { ISequenceOperation } from "./interfaces/ISequenceOperation";
import { SequencePart } from "./SequencePart";
import { Operation } from "./enums/Operation";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
export declare class SequenceOperation extends SequencePart implements ISequenceOperation {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
    static stringifyOperation(operationType: Operation): string;
}
//# sourceMappingURL=SequenceOperation.d.ts.map