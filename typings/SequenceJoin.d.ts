import { ISequenceJoin } from "./interfaces/ISequenceJoin";
import { Join } from "./enums/Join";
import { SequencePart } from "./SequencePart";
import { SequenceCondition } from "./SequenceCondition";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { LogicalOperator } from "./enums/LogicalOperator";
export declare class SequenceJoin extends SequencePart implements ISequenceJoin {
    readonly join: Join;
    readonly location: string;
    condition: SequenceCondition;
    constructor(joinType: Join, location: string);
    on(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string | number): this;
    onIn(column: ISequenceColumn, ...values: any[]): void;
    onNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
    static stringifyJoinType(joinType: Join): string;
}
//# sourceMappingURL=SequenceJoin.d.ts.map