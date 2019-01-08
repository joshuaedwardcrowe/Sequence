import {SequenceBuilder} from "./SequenceBuilder";
import {SequenceOperation} from "./operations/SequenceOperation";
import {Operation} from "./enums/Operation";
import {IntoLocation} from "./locations/IntoLocation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISequenceSupplement} from "./interfaces/ISequenceSupplement";
import {SequenceSupplement} from "./supplements/SequenceSupplement";
import {Supplement} from "./enums/Supplement";
import {Wrapping} from "./enums/Wrapping";
import {IInsert} from "./interfaces/IInsert";

export class Insert extends SequenceBuilder implements IInsert {

    public supplement: ISequenceSupplement;

    constructor () {
        super ();

        this.operation = new SequenceOperation(Operation.Insert);
    }

    public into (tableName: string, ...columns: ISequenceColumn[]): this {
        if (!this.location) this.location = new IntoLocation(tableName, ...columns);
        return this;
    }

    public values (...values: any[]): this {
        if (!this.supplement) this.supplement = new SequenceSupplement(Supplement.Values, Wrapping.Parentheses);
        const cleansed: any[] = values.map(Insert.cleanseAnonymousValue);
        this.supplement.values.push(...cleansed);
        return this;
    }

    public stringify (): string {
        const location = !!this.location ? `${this.location} ` : "";
        return `${this.operation} ${location}${this.supplement}${super.stringify()}`.trim();
    }


}
