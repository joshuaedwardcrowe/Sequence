import { ISequencePart } from "./interfaces/ISequencePart";
import { CoalescingOperator } from "./enums/CoalescingOperator";
export declare abstract class SequencePart implements ISequencePart {
    stringify(): string;
    toString(): string;
    static stringifyCoalescingOperator(coalescingOperator: CoalescingOperator): string;
}
//# sourceMappingURL=SequencePart.d.ts.map