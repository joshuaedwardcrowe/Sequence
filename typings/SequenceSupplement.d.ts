import { ISequenceSupplement } from "./interfaces/ISequenceSupplement";
import { Supplement } from "./enums/Supplement";
import { Wrapping } from "./enums/Wrapping";
import { SequencePart } from "./SequencePart";
export declare class SequenceSupplement extends SequencePart implements ISequenceSupplement {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(supplement: Supplement, wrapping: Wrapping, ...values: any[]);
    stringify(): string;
    static stringifySupplement(supplement: Supplement): string;
}
//# sourceMappingURL=SequenceSupplement.d.ts.map