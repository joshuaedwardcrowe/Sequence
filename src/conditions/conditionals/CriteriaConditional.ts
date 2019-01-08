import {Conditional} from "../../enums/Conditional";
import {Wrapping} from "../../enums/Wrapping";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";
import {ICriteriaConditional} from "../../interfaces/ICriteriaConditional";
import {SequenceConditional} from "./SequenceConditional";

export class CriteriaConditional extends SequenceConditional implements ICriteriaConditional {

    public readonly wrapping: Wrapping = Wrapping.Parentheses;
    public readonly values: any[];

    constructor (conditional: Conditional, column: ISequenceColumn, ...values: any[]) {
        super(conditional, column);

        this.values = values
    }

    public stringify (): string {
        const wrapped = SequenceConditional.stringifyWrapping(this.wrapping, this.values);
        return `${super.stringify()} ${wrapped}`;
    }

}
