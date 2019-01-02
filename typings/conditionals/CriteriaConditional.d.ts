import { Conditional } from "../enums/Conditional";
import { ISequenceConditional } from "../interfaces/ISequenceConditional";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { SequenceConditional } from "../SequenceConditional";
import { Wrapping } from "../enums/Wrapping";
export declare class CriteriaConditional extends SequenceConditional implements ISequenceConditional {
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(conditionalType: Conditional, column: ISequenceColumn, ...values: string[]);
    stringify(): string;
}
//# sourceMappingURL=CriteriaConditional.d.ts.map