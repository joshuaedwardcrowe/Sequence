import {ISequenceSupplement} from "./ISequenceSupplement";
import {ISequenceColumn} from "./ISequenceColumn";

export interface IInsert {

    supplement: ISequenceSupplement;

    into (tableName: string, ...columns: ISequenceColumn[]): this

    values (...values: any[]): this

    stringify (): string

}
