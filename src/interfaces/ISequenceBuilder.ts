import {Arrangement} from "../enums/Arrangement";
import {ISequenceOperation} from "./ISequenceOperation";
import {ISequenceCondition} from "./ISequenceCondition";
import {ISequenceLocation} from "./ISequenceLocation";
import {ISequenceJoin} from "./ISequenceJoin";
import {ISequenceFormation} from "./ISequenceFormation";
import {ISequenceColumn} from "./ISequenceColumn";
import {LimitFormation} from "../formations/LimitFormation";

export interface ISequenceBuilder {

    operation: ISequenceOperation;

    location: ISequenceLocation;

    condition: ISequenceCondition;

    joins: ISequenceJoin[];

    ordering: ISequenceFormation;

    grouping: ISequenceFormation;

    limitation: LimitFormation;

    orderBy (column: ISequenceColumn, arrangement: Arrangement);

    groupBy (column: ISequenceColumn, arrangement: Arrangement);

    limit (amount: number);

    stringify (): string;

}
