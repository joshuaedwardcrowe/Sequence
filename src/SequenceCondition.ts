import {ISequenceCondition} from "./interfaces/ISequenceCondition";
import {SequencePart} from "./SequencePart";
import {Condition} from "./enums/Condition";
import {ISequenceConditional} from "./interfaces/ISequenceConditional";
import {CoalescingOperator} from "./enums/CoalescingOperator";

export class SequenceCondition extends SequencePart implements ISequenceCondition {

    public readonly condition: Condition;
    public readonly coalescingOperator: CoalescingOperator;
    public readonly conditionals: ISequenceConditional[];

    constructor (condition: Condition, coalescingOperator: CoalescingOperator, ...conditionals: ISequenceConditional[]) {
        super();

        this.condition = condition;
        this.coalescingOperator = coalescingOperator;
        this.conditionals = conditionals;
    }

    public stringify (): string {
        const condition = SequenceCondition.stringifyCondition(this.condition);
        return SequenceCondition.coalesce(condition, this.coalescingOperator, this.conditionals)
    }

    public static stringifyCondition (condition: Condition): string {
        switch (condition) {
            default: return Condition[condition].toUpperCase();
        }
    }

}
