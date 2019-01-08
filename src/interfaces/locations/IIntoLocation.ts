import {Wrapping} from "../../enums/Wrapping";
import {ISequenceColumn} from "../ISequenceColumn";

export interface IIntoLocation {

    readonly wrapping: Wrapping;

    readonly columns: ISequenceColumn[];

}
