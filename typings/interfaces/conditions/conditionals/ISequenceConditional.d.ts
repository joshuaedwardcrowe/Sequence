import { ISequenceColumn } from "../../ISequenceColumn";
import { Conditional } from "../../../enums/Conditional";
import { ISequenceCoalescable } from "../../ISequenceCoalescable";
export interface ISequenceConditional extends ISequenceCoalescable {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
}
//# sourceMappingURL=ISequenceConditional.d.ts.map