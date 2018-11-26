import Condition from "../enums/Condition";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {ISequenceConditional} from "./ISequenceConditional";
import {ISequencePart} from "./ISequencePart";

export default interface ISequenceCondition extends ISequencePart {

    condition: Condition;
    coalescingOperator: CoalescingOperator;
    conditionals: ISequenceConditional[];

}
