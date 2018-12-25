import { ISequenceBuilder } from "./interfaces/ISequenceBuilder";
import { ISequenceOperation } from "./interfaces/ISequenceOperation";
import { ISequenceLocation } from "./interfaces/ISequenceLocation";
import { ISequenceCondition } from "./interfaces/ISequenceCondition";
import { LimitDefault } from "./defaults/LimitDefault";
import { Arrangement } from "./enums/Arrangement";
import { ISequenceJoin } from "./interfaces/ISequenceJoin";
import { ISequenceDefault } from "./interfaces/ISequenceDefault";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
export declare abstract class SequenceBuilder implements ISequenceBuilder {
    condition: ISequenceCondition;
    location: ISequenceLocation;
    operation: ISequenceOperation;
    joins: ISequenceJoin[];
    ordering: ISequenceDefault;
    grouping: ISequenceDefault;
    limitation: LimitDefault;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringifyJoins(): string;
    stringify(): string;
    toString(): string;
}
//# sourceMappingURL=SequenceBuilder.d.ts.map