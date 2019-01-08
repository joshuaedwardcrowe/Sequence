import {IntoLocation} from "./locations/IntoLocation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {Operation} from "./enums/Operation";
import {SequenceOperation} from "./operations/SequenceOperation";
import {ISequenceSupplement} from "./interfaces/ISequenceSupplement";
import {IInsert} from "./interfaces/IInsert";
import {SequenceBuilder} from "./SequenceBuilder";
import {SequenceSupplement} from "./SequenceSupplement";
import {Supplement} from "./enums/Supplement";
import {Wrapping} from "./enums/Wrapping";

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
        const operation: string = !!this.operation ? `${this.operation.stringify()} ` : "";
        const location: string = !!this.location ? `${this.location.stringify()} ` : "";
        const supplement: string = !!this.supplement ? `${this.supplement.stringify()} ` : "";
        return `${operation}${location}${supplement}${super.stringify()}`.trim();
    }

}
