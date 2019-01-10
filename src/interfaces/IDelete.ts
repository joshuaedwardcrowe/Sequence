import {ISequenceColumn} from "./ISequenceColumn";

export interface IDelete {

    column (column: ISequenceColumn): this;

    from (tableName: string): this;

    stringify (): string;

}