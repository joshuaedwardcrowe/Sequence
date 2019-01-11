import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISequenceSupplement } from "./interfaces/ISequenceSupplement";
import { IInsert } from "./interfaces/IInsert";
import { SequenceBuilder } from "./SequenceBuilder";
import { LogicalOperator } from "./enums/LogicalOperator";
import { Arrangement } from "./enums/Arrangement";
export declare class Insert extends SequenceBuilder implements IInsert {
    supplement: ISequenceSupplement;
    constructor();
    into(tableName: string, ...columns: ISequenceColumn[]): this;
    values(...values: any[]): this;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    whereIn(column: ISequenceColumn, ...values: any[]): this;
    whereNotIn(column: ISequenceColumn, ...values: any[]): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
}
