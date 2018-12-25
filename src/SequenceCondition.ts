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
        const conditionType = SequenceCondition.stringifyCondition(this.condition);
        const coalescingOperator = SequencePart.stringifyCoalescingOperator(this.coalescingOperator);
        const reducer = (a, c, i) => i > 0 ? `${a} ${coalescingOperator} ${c}` : `${a} ${c}`;
        return this.conditionals.reduce<string>(reducer, conditionType);
    }

    public static stringifyCondition (condition: Condition): string {
        switch (condition) {
            default: return Condition[condition].toUpperCase();
        }
    }

}
