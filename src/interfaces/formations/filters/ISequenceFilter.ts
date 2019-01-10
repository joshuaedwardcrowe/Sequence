import {Arrangement} from "../../../enums/Arrangement";
import {ISequenceColumn} from "../../ISequenceColumn";
import {ISequenceCoalescable} from "../../ISequenceCoalescable";

export interface ISequenceFilter extends ISequenceCoalescable {

    column: ISequenceColumn;

    arrangement: Arrangement;

}
