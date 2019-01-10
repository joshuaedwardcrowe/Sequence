import { ISequenceConditional } from "./conditionals/ISequenceConditional";
import { Condition } from "../../enums/Condition";
import { ISequencePart } from "../ISequencePart";
export interface ISequenceCondition extends ISequencePart {
    readonly condition: Condition;
    conditionals: ISequenceConditional[];
}
//# sourceMappingURL=ISequenceCondition.d.ts.map