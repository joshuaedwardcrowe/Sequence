import {Predicate} from "../enums/Predicate";
import {ISequenceColumn} from "./ISequenceColumn";

export interface ISelect {

    all(): this;

    column (column: ISequenceColumn): this;

    from (tableName: string): this;

    stringify (): string;

}
