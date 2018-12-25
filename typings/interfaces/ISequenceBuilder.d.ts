import { Arrangement } from "../enums/Arrangement";
import { ISequenceOperation } from "./ISequenceOperation";
import { ISequenceCondition } from "./ISequenceCondition";
import { ISequenceLocation } from "./ISequenceLocation";
import { ISequenceJoin } from "./ISequenceJoin";
import { ISequenceDefault } from "./ISequenceDefault";
import { ISequenceColumn } from "./ISequenceColumn";
import { LimitDefault } from "../defaults/LimitDefault";
export interface ISequenceBuilder {
    operation: ISequenceOperation;
    location: ISequenceLocation;
    condition: ISequenceCondition;
    joins: ISequenceJoin[];
    ordering: ISequenceDefault;
    grouping: ISequenceDefault;
    limitation: LimitDefault;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): any;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): any;
    limit(amount: number): any;
    stringify(): string;
}
//# sourceMappingURL=ISequenceBuilder.d.ts.map