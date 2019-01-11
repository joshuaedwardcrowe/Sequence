import { SequenceConditional } from "./SequenceConditional";
import { ICriteriaConditional } from "../../interfaces/conditions/conditionals/ICriteriaConditional";
import { Wrapping } from "../../enums/Wrapping";
import { Conditional } from "../../enums/Conditional";
import { ISequenceColumn } from "../../interfaces/ISequenceColumn";
export declare class CriteriaConditional extends SequenceConditional implements ICriteriaConditional {
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(conditional: Conditional, column: ISequenceColumn, ...values: any[]);
    stringify(): string;
}
