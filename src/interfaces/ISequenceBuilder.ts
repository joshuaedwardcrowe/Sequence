import {Arrangement} from "../enums/Arrangement";
import {ISequenceOperation} from "./ISequenceOperation";
import {ISequenceCondition} from "./ISequenceCondition";
import {ISequenceLocation} from "./ISequenceLocation";
import {ISequenceJoin} from "./ISequenceJoin";
import {ISequenceDefault} from "./ISequenceDefault";
import {ISequenceColumn} from "./ISequenceColumn";
import {LimitDefault} from "../defaults/LimitDefault";

export interface ISequenceBuilder {

    operation: ISequenceOperation;

    location: ISequenceLocation;

    condition: ISequenceCondition;

    joins: ISequenceJoin[];

    ordering: ISequenceDefault;

    grouping: ISequenceDefault;

    limitation: LimitDefault;

    orderBy (column: ISequenceColumn, arrangement: Arrangement);

    groupBy (column: ISequenceColumn, arrangement: Arrangement);

    limit (amount: number);

    stringify (): string;

}
