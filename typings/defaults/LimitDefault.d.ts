import { ISequenceDefault } from "../interfaces/ISequenceDefault";
import { SequenceDefault } from "../SequenceDefault";
export declare class LimitDefault extends SequenceDefault implements ISequenceDefault {
    readonly amount: number;
    constructor(amount?: number);
    stringify(): string;
}
//# sourceMappingURL=LimitDefault.d.ts.map