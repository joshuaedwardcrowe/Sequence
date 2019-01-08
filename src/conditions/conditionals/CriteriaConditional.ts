import {SequenceConditional} from "./SequenceConditional";
import {ICriteriaConditional} from "../../interfaces/conditions/conditionals/ICriteriaConditional";
import {Wrapping} from "../../enums/Wrapping";
import {Conditional} from "../../enums/Conditional";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";

export class CriteriaConditional extends SequenceConditional implements ICriteriaConditional {

    public readonly wrapping: Wrapping = Wrapping.Parentheses;
    public readonly values: any[];

    constructor (conditional: Conditional, column: ISequenceColumn, ...values: any[]) {
        super(conditional, column);

        this.values = values;
    }

    public stringify (): string {
        const wrapped: string = SequenceConditional.stringifyWrapping(this.wrapping, this.values);
        return `${super.stringify()} ${wrapped}`;
    }

}
