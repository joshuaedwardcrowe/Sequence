import { ISequenceCondition } from "./interfaces/ISequenceCondition";
import { SequencePart } from "./SequencePart";
import { Condition } from "./enums/Condition";
import { ISequenceConditional } from "./interfaces/ISequenceConditional";
import { CoalescingOperator } from "./enums/CoalescingOperator";
export declare class SequenceCondition extends SequencePart implements ISequenceCondition {
    readonly condition: Condition;
    readonly coalescingOperator: CoalescingOperator;
    readonly conditionals: ISequenceConditional[];
    constructor(condition: Condition, coalescingOperator: CoalescingOperator, ...conditionals: ISequenceConditional[]);
    stringify(): string;
    static stringifyCondition(condition: Condition): string;
}
//# sourceMappingURL=SequenceCondition.d.ts.map