import { ISequenceColumn } from "./ISequenceColumn";
import { ISequencePart } from "./ISequencePart";
import { Operation } from "../enums/Operation";
export interface ISequenceOperation extends ISequencePart {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
}
//# sourceMappingURL=ISequenceOperation.d.ts.map