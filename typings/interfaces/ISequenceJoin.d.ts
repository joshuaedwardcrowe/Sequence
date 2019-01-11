import { ISequenceCondition } from "./conditions/ISequenceCondition";
import { Join } from "../enums/Join";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceJoin extends ISequencePart {
    readonly join: Join;
    readonly location: string;
    readonly condition: ISequenceCondition;
}
