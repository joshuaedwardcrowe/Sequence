import {SequenceLocation} from "./locations/SequenceLocation";
import {SelectionOperation} from "./operations/SelectionOperation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISelect} from "./interfaces/ISelect";
import {SequenceBuilder} from "./SequenceBuilder";
import {Location} from "./enums/Location";

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
        const operation = !!this.operation ? `${this.operation.stringify()} ` : "";
        const location = !!this.location ? `${this.location.stringify()} ` : "";
        return `${operation}${location}${super.stringify()}`.trim();
    }

}
