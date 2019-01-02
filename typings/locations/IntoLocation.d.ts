import { SequenceLocation } from "../SequenceLocation";
import { ISequenceLocation } from "../interfaces/ISequenceLocation";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { Wrapping } from "../enums/Wrapping";
export declare class IntoLocation extends SequenceLocation implements ISequenceLocation {
    readonly wrapping: Wrapping;
    readonly columns: ISequenceColumn[];
    constructor(tableName: string, ...columns: ISequenceColumn[]);
    stringify(): string;
    private getColumnsWithoutPredicate;
}
//# sourceMappingURL=IntoLocation.d.ts.map