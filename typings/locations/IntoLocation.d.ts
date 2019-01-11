import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { Wrapping } from "../enums/Wrapping";
import { IIntoLocation } from "../interfaces/locations/IIntoLocation";
import { SequenceLocation } from "./SequenceLocation";
export declare class IntoLocation extends SequenceLocation implements IIntoLocation {
    readonly wrapping: Wrapping;
    readonly columns: ISequenceColumn[];
    constructor(tableName: string, ...columns: ISequenceColumn[]);
    stringify(): string;
    private getColumnsWithoutPredicate;
}
