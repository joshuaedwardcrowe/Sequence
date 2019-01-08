import {Location} from "./enums/Location";
import {SequenceBuilder} from "./SequenceBuilder";
import {SelectionOperation} from "./operations/SelectionOperation";
import {SequenceLocation} from "./locations/SequenceLocation";
import {ISelect} from "./interfaces/ISelect";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";

export class Select extends SequenceBuilder implements ISelect {

    public all (): this {
        if (!this.operation) this.operation = new SelectionOperation();
        return this;
    }

    public column (column: ISequenceColumn): this {
        if (!this.operation) this.operation = new SelectionOperation();
        this.operation.columns.push(column);
        return this;
    }

    public from (tableName: string): this {
        if (!this.location) this.location = new SequenceLocation(Location.From, tableName);
        return this;
    }

    public stringify (): string {
        const operation = !!this.operation ? `${this.operation} ` : "";
        const location = !!this.location ? `${this.location} ` : "";
        return `${operation}${location}${super.stringify()}`.trim();
    }

}
