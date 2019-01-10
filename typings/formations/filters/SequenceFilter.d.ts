import { Arrangement } from "../../enums/Arrangement";
import { ISequenceColumn } from "../../interfaces/ISequenceColumn";
import { ISequenceFilter } from "../../interfaces/formations/filters/ISequenceFilter";
import { SequencePart } from "../../SequencePart";
export declare class SequenceFilter extends SequencePart implements ISequenceFilter {
    readonly column: ISequenceColumn;
    readonly arrangement: Arrangement;
    constructor(column: ISequenceColumn, arrangement: Arrangement);
    stringify(): string;
    protected static stringifyArrangement(arrangement: Arrangement): string;
}
//# sourceMappingURL=SequenceFilter.d.ts.map