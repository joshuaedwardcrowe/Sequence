import { SequenceBuilder } from "./SequenceBuilder";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISequenceAssignment } from "./interfaces/assignments/ISequenceAssignment";
import { IUpdate } from "./interfaces/IUpdate";
import { ISequenceBuilder } from "./interfaces/ISequenceBuilder";
import { Arrangement } from "./enums/Arrangement";
export declare class Update extends SequenceBuilder implements IUpdate, ISequenceBuilder {
    assignment: ISequenceAssignment;
    constructor();
    table(tableName: string): this;
    column(column: ISequenceColumn, value: any): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
}
