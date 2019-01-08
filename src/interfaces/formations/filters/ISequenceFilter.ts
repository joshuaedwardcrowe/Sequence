import {Arrangement} from "../../../enums/Arrangement";
import {ISequenceColumn} from "../../ISequenceColumn";

export interface ISequenceFilter {

    column: ISequenceColumn;

    arrangement: Arrangement;

}
