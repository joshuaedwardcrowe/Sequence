import { SequencePart } from "./SequencePart";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISequenceConditional } from "./interfaces/ISequenceConditional";
import { Conditional } from "./enums/Conditional";
export declare class SequenceConditional extends SequencePart implements ISequenceConditional {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
    constructor(conditionalType: Conditional, column: ISequenceColumn);
    stringify(): string;
    static stringifyConditional(conditionalType: Conditional): string;
}
//# sourceMappingURL=SequenceConditional.d.ts.map