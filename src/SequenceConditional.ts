import {SequencePart} from "./SequencePart";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISequenceConditional} from "./interfaces/ISequenceConditional";
import {Conditional} from "./enums/Conditional";
import {ISequenceCoalescable} from "./interfaces/ICoalescable";

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
        return `${this.column} ${conditional}`;
    }

    public static stringifyConditional (conditionalType: Conditional) {
        switch (conditionalType) {
            case Conditional.Logical: return "";
            case Conditional.NotIn: return "NOT IN";
            default: return Conditional[conditionalType].toUpperCase();
        }
    }

}
