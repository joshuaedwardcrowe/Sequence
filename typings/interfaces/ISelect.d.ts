import { ISequenceColumn } from "./ISequenceColumn";
export interface ISelect {
    all(): this;
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}
//# sourceMappingURL=ISelect.d.ts.map