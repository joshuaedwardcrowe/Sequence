import { ISequenceSupplement } from "./interfaces/ISequenceSupplement";
import { Supplement } from "./enums/Supplement";
import { SequencePart } from "./SequencePart";
import { Wrapping } from "./enums/Wrapping";
import { ISequencePart } from "./interfaces/ISequencePart";
export declare class SequenceSupplement extends SequencePart implements ISequenceSupplement, ISequencePart {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(supplement: Supplement, wrapping: Wrapping, ...values: any[]);
    stringify(): string;
    static stringifySupplement(supplement: Supplement): string;
}
