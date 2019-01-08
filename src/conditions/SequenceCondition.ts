import {ISequenceCondition} from "../interfaces/conditions/ISequenceCondition";
import {SequenceCoalescent} from "../SequenceCoalescent";
import {Condition} from "../enums/Condition";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {ISequenceConditional} from "../interfaces/conditions/conditionals/ISequenceConditional";

export class SequenceCondition extends SequenceCoalescent implements ISequenceCondition {

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
        return SequenceCondition.coalesce(condition, this.coalescingOperator, this.conditionals);
    }

    protected static stringifyCondition (condition: Condition): string {
        switch (condition) {
            default: return Condition[condition].toUpperCase();
        }
    }

}
