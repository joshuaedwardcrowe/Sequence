import {Conditional} from "../enums/Conditional";
import {ISequenceConditional} from "../interfaces/ISequenceConditional";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {SequenceConditional} from "../SequenceConditional";

export class ParenthesesConditional extends SequenceConditional implements ISequenceConditional {

    public readonly values: any[];

    constructor (conditionalType: Conditional, column: ISequenceColumn, ...values: string[]) {
        super(conditionalType, column);

        this.values = values;
    }

    public stringify (): string {
        return `${super.stringify()} (${this.values.join(", ")})`;
    }

}
