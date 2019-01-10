import { SequencePart } from "../../SequencePart";
import { ISequenceConditional } from "../../interfaces/conditions/conditionals/ISequenceConditional";
import { ISequenceCoalescable } from "../../interfaces/ISequenceCoalescable";
import { Conditional } from "../../enums/Conditional";
import { ISequenceColumn } from "../../interfaces/ISequenceColumn";
export declare class SequenceConditional extends SequencePart implements ISequenceConditional, ISequenceCoalescable {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
    constructor(conditionalType: Conditional, column: ISequenceColumn);
    stringify(): string;
    static stringifyConditional(conditionalType: Conditional): string;
}
//# sourceMappingURL=SequenceConditional.d.ts.map