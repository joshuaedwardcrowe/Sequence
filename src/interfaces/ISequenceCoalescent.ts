import {ISequencePart} from "./ISequencePart";
import {CoalescingOperator} from "../enums/CoalescingOperator";

export interface ISequenceCoalescent extends ISequencePart {

    readonly coalescingOperator: CoalescingOperator;

}
