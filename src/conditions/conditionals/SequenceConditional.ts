import {SequencePart} from "../../SequencePart";
import {ISequenceConditional} from "../../interfaces/conditions/conditionals/ISequenceConditional";
import {ISequenceCoalescable} from "../../interfaces/ISequenceCoalescable";
import {Conditional} from "../../enums/Conditional";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";

export class SequenceConditional extends SequencePart implements ISequenceConditional, ISequenceCoalescable {

    public readonly conditional: Conditional;
    public readonly column: ISequenceColumn;

    constructor (conditionalType: Conditional, column: ISequenceColumn) {
        super();

        this.conditional = conditionalType;
        this.column = column;
    }

    public stringify (): string {
        const conditional = SequenceConditional.stringifyConditional(this.conditional);
        return `${this.column.stringify()} ${conditional}`;
    }

    public static stringifyConditional (conditionalType: Conditional) {
        switch (conditionalType) {
            case Conditional.Logical: return "";
            case Conditional.NotIn: return "NOT IN";
            default: return Conditional[conditionalType].toUpperCase();
        }
    }

}
