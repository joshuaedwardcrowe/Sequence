import {ISequenceAssigment} from "./ISequenceAssignment";
import {ISequenceColumn} from "./ISequenceColumn";

export interface IUpdate {

    assignment: ISequenceAssigment;

    table (tableName: string): this

    column (column: ISequenceColumn, value: any): this

}
