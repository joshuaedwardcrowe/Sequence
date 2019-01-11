import { ISequenceCondition } from "../interfaces/conditions/ISequenceCondition";
import { SequenceCoalescent } from "../SequenceCoalescent";
import { Condition } from "../enums/Condition";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { ISequenceConditional } from "../interfaces/conditions/conditionals/ISequenceConditional";
export declare class SequenceCondition extends SequenceCoalescent implements ISequenceCondition {
    readonly condition: Condition;
    readonly coalescingOperator: CoalescingOperator;
    readonly conditionals: ISequenceConditional[];
    constructor(condition: Condition, coalescingOperator: CoalescingOperator, ...conditionals: ISequenceConditional[]);
    stringify(): string;
    protected static stringifyCondition(condition: Condition): string;
}
