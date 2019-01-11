import { ISequenceColumn } from "./ISequenceColumn";
export interface ISelect {
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}
