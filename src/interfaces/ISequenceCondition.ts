import {Condition} from "../enums/Condition";
import {ISequenceConditional} from "./ISequenceConditional";
import {ISequenceCoalescent} from "./ISequenceCoalescent";

export interface ISequenceCondition extends ISequenceCoalescent {

    readonly condition: Condition;

    conditionals: ISequenceConditional[];

}
