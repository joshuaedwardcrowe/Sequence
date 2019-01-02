import {Conditional} from "../enums/Conditional";
import {ISequenceConditional} from "../interfaces/ISequenceConditional";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceConditional} from "../SequenceConditional";
import {Wrapping} from "../enums/Wrapping";

export class CriteriaConditional extends SequenceConditional implements ISequenceConditional {

    public readonly wrapping: Wrapping = Wrapping.Parentheses;
    public readonly values: any[];

    constructor (conditionalType: Conditional, column: ISequenceColumn, ...values: string[]) {
        super(conditionalType, column);

        this.values = values;
    }

    public stringify (): string {
        const wrapped = SequenceConditional.stringifyWrapping(this.wrapping, this.values);
        return `${super.stringify()} ${wrapped}`;
    }

}
