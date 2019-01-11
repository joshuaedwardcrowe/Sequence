import { ISequenceOperation } from "./operations/ISequenceOperation";
import { ISequenceFormation } from "./formations/ISequenceFormation";
import { ISequenceJoin } from "./ISequenceJoin";
import { ISequenceCondition } from "./conditions/ISequenceCondition";
import { LimitFormation } from "../formations/LimitFormation";
import { Arrangement } from "../enums/Arrangement";
import { ISequenceColumn } from "./ISequenceColumn";
import { ISequenceLocation } from "./locations/ISequenceLocation";
export interface ISequenceBuilder {
    operation: ISequenceOperation;
    location: ISequenceLocation;
    condition: ISequenceCondition;
    joins: ISequenceJoin[];
    ordering: ISequenceFormation;
    grouping: ISequenceFormation;
    limitation: LimitFormation;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): any;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): any;
    limit(amount: number): any;
    stringify(): string;
    toString(): string;
}
