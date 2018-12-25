import { ISequenceSorting } from "./interfaces/ISequenceSorting";
import { Arrangement } from "./enums/Arrangement";
import { SequencePart } from "./SequencePart";
import { ISequencePart } from "./interfaces/ISequencePart";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
export declare class SequenceSorting extends SequencePart implements ISequencePart, ISequenceSorting {
    readonly column: ISequenceColumn;
    readonly arrangement: Arrangement;
    constructor(column: ISequenceColumn, arrangement: Arrangement);
    stringify(): string;
    static stringifyArrangement(arrangement: Arrangement): string;
}
//# sourceMappingURL=SequenceSorting.d.ts.map