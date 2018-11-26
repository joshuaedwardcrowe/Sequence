import {Default} from "../enums/Default";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {ISequenceDefault} from "../interfaces/ISequenceDefault";
import {SequenceDefault} from "../SequenceDefault";

export class LimitDefault extends SequenceDefault implements ISequenceDefault {

    public readonly amount: number;

    constructor (amount: number = 1) {
        super (Default.Limit, CoalescingOperator.None);

        this.amount = amount;
    }

    public stringify (): string {
        const stringifiedDefault = SequenceDefault.stringifyDefaultType(this.default);
        return `${stringifiedDefault} ${this.amount}`;
    }

}
