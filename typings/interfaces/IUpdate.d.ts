import { ISequenceColumn } from "./ISequenceColumn";
import { ISequenceAssignment } from "./assignments/ISequenceAssignment";
export interface IUpdate {
    assignment: ISequenceAssignment;
    table(tableName: string): this;
    column(column: ISequenceColumn, value: any): this;
}
//# sourceMappingURL=IUpdate.d.ts.map