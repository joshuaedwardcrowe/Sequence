import { ISequencePart } from "./interfaces/ISequencePart";
import { CoalescingOperator } from "./enums/CoalescingOperator";
import { Wrapping } from "./enums/Wrapping";
export declare abstract class SequencePart implements ISequencePart {
    stringify(): string;
    toString(): string;
    static stringifyCoalescingOperator(coalescingOperator: CoalescingOperator): string;
    static stringifyWrapping(wrapping: Wrapping, values: any[]): string;
}
//# sourceMappingURL=SequencePart.d.ts.map