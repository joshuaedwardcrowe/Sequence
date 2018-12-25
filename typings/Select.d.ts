import { LogicalOperator } from "./enums/LogicalOperator";
import { Predicate } from "./enums/Predicate";
import { ISequenceBuilder } from "./interfaces/ISequenceBuilder";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { SequenceBuilder } from "./SequenceBuilder";
export declare class Select extends SequenceBuilder implements ISequenceBuilder {
    all(): this;
    column(predicate: Predicate, columnName: string): this;
    from(tableName: string): this;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string | number): this;
    whereIn(column: ISequenceColumn, ...values: any[]): void;
    whereNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
}
//# sourceMappingURL=Select.d.ts.map