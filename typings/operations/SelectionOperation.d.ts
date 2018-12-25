import { Operation } from "../enums/Operation";
import { ISequenceOperation } from "../interfaces/ISequenceOperation";
import { ISequencePart } from "../interfaces/ISequencePart";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { SequenceOperation } from "../SequenceOperation";
export declare class SelectionOperation extends SequenceOperation implements ISequencePart, ISequenceOperation {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
    constructor(...columns: ISequenceColumn[]);
    stringify(): string;
}
//# sourceMappingURL=SelectionOperation.d.ts.map