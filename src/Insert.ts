import {SequenceBuilder} from "./SequenceBuilder";
import {ISequenceBuilder} from "./interfaces/ISequenceBuilder";
import {SequenceOperation} from "./SequenceOperation";
import {Operation} from "./enums/Operation";
import {IntoLocation} from "./locations/IntoLocation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISequenceSupplement} from "./interfaces/ISequenceSupplement";
import {SequenceSupplement} from "./SequenceSupplement";
import {Supplement} from "./enums/Supplement";
import {Wrapping} from "./enums/Wrapping";

export class Insert extends SequenceBuilder implements ISequenceBuilder {

    public supplement: ISequenceSupplement;

    constructor () {
        super();

        this.operation = new SequenceOperation(Operation.Insert);
        this.supplement = new SequenceSupplement(Supplement.Values, Wrapping.Parentheses);
    }

    public into (tableName: string, ...columns: ISequenceColumn[]) {
        if (!this.location) this.location = new IntoLocation(tableName, ...columns);
        return this;
    }

    public values (...values: any[]) {
        this.supplement.values.push(...values);
        return this;
    }

    public stringify (): string {
        const location = !!this.location ? `${this.location} ` : "";
        return `${this.operation} ${location}${this.supplement}${super.stringify()}`.trim();
    }


}
