import { Predicate } from "../enums/Predicate";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceColumn extends ISequencePart {
    predicate: Predicate;
    readonly name: string;
    stringify(): string;
}
