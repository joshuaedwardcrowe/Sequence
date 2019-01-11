import { SequencePart } from "./SequencePart";
import { CoalescingOperator } from "./enums/CoalescingOperator";
import { ISequenceCoalescable } from "./interfaces/ISequenceCoalescable";
export declare abstract class SequenceCoalescent extends SequencePart {
    private static stringifyCoalescingOperator;
    private static padCoalescingOperator;
    protected static coalesce(startingKeyword: string, coalescingOperator: CoalescingOperator, coalescables: ISequenceCoalescable[]): string;
}
