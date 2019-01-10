import { SequenceBuilder } from "./SequenceBuilder";
import { ISequenceBuilder } from "./interfaces/ISequenceBuilder";
import { IDelete } from "./interfaces/IDelete";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { Arrangement } from "./enums/Arrangement";
export declare class Delete extends SequenceBuilder implements IDelete, ISequenceBuilder {
    constructor();
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
    private stringifyOperation;
}
//# sourceMappingURL=Delete.d.ts.map