import { LimitFormation } from "./formations/LimitFormation";
import { LogicalOperator } from "./enums/LogicalOperator";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISequenceFormation } from "./interfaces/formations/ISequenceFormation";
import { ISequenceJoin } from "./interfaces/ISequenceJoin";
import { ISequenceOperation } from "./interfaces/operations/ISequenceOperation";
import { ISequenceLocation } from "./interfaces/locations/ISequenceLocation";
import { ISequenceCondition } from "./interfaces/conditions/ISequenceCondition";
import { Arrangement } from "./enums/Arrangement";
export declare abstract class SequenceBuilder {
    condition: ISequenceCondition;
    location: ISequenceLocation;
    operation: ISequenceOperation;
    joins: ISequenceJoin[];
    ordering: ISequenceFormation;
    grouping: ISequenceFormation;
    limitation: LimitFormation;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    whereIn(column: ISequenceColumn, ...values: any[]): void;
    whereNotIn(column: ISequenceColumn, ...values: any[]): void;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    protected stringifyBase(): string;
    private stringifyJoins;
}
//# sourceMappingURL=SequenceBuilder.d.ts.map