import { Condition } from "../enums/Condition";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { ISequenceConditional } from "./ISequenceConditional";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceCondition extends ISequencePart {
    condition: Condition;
    coalescingOperator: CoalescingOperator;
    conditionals: ISequenceConditional[];
}
//# sourceMappingURL=ISequenceCondition.d.ts.map