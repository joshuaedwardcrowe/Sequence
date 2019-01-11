import { ISequenceFilter } from "./filters/ISequenceFilter";
import { Formation } from "../../enums/Formation";
import { ISequencePart } from "../ISequencePart";
export interface ISequenceFormation extends ISequencePart {
    readonly formation: Formation;
    readonly filters: ISequenceFilter[];
}
