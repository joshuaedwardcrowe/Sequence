import { ILimitFormation } from "../interfaces/formations/ILimitFormation";
import { SequenceFormation } from "./SequenceFormation";
export declare class LimitFormation extends SequenceFormation implements ILimitFormation {
    readonly amount: number;
    constructor(amount?: number);
    stringify(): string;
}
//# sourceMappingURL=LimitFormation.d.ts.map