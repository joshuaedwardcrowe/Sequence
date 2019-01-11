import { Supplement } from "../enums/Supplement";
import { Wrapping } from "../enums/Wrapping";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceSupplement extends ISequencePart {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
}
