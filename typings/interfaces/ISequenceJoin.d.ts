import { Join } from "../enums/Join";
import { ISequenceCondition } from "./ISequenceCondition";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceJoin extends ISequencePart {
    readonly join: Join;
    readonly location: string;
    condition: ISequenceCondition;
}
//# sourceMappingURL=ISequenceJoin.d.ts.map