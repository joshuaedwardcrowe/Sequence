import {Formation} from "../enums/Formation";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {ILimitFormation} from "../interfaces/ILimitFormation";
import {SequenceFormation} from "./SequenceFormation";

export class LimitFormation extends SequenceFormation implements ILimitFormation {

    public readonly amount: number;

    constructor (amount: number = 1) {
        super (Formation.Limit, CoalescingOperator.None);

        this.amount = amount;
    }

    public stringify (): string {
        const formation: string = LimitFormation.stringifyFormation(this.formation);
        return `${formation} ${this.amount}`;
    }

}
