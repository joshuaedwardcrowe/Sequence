import { Conditional } from "../enums/Conditional";
import { ISequenceConditional } from "../interfaces/ISequenceConditional";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { SequenceConditional } from "../SequenceConditional";
export declare class ParenthesesConditional extends SequenceConditional implements ISequenceConditional {
    readonly values: any[];
    constructor(conditionalType: Conditional, column: ISequenceColumn, ...values: string[]);
    stringify(): string;
}
//# sourceMappingURL=ParenthesesConditional.d.ts.map