import {ISequenceColumn} from "./ISequenceColumn";
import {ISequenceAssigment} from "./assignments/ISequenceAssignment";

export interface IUpdate {

    assignment: ISequenceAssigment;

    table (tableName: string): this;

    column (column: ISequenceColumn, value: any): this;

}
