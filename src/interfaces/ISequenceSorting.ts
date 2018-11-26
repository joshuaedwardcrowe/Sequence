import {Arrangement} from "../enums/Arrangement";
import {ISequenceColumn} from "./ISequenceColumn";

export interface ISequenceSorting {

    column: ISequenceColumn;

    arrangement: Arrangement;

}
