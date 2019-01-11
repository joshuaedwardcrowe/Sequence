import {SequenceLocation} from "./locations/SequenceLocation";
import {ColumnOperation} from "./operations/ColumnOperation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {ISelect} from "./interfaces/ISelect";
import {SequenceBuilder} from "./SequenceBuilder";
import {Location} from "./enums/Location";
import {Operation} from "./enums/Operation";

export class Select extends SequenceBuilder implements ISelect {

    constructor () {
        super ();

        this.operation = new ColumnOperation(Operation.Select);
    }

    public column (column: ISequenceColumn): this {
        this.operation.columns.push(column);
        return this;
    }

    public from (tableName: string): this {
        if (!this.location) this.location = new SequenceLocation(Location.From, tableName);
        return this;
    }

    public stringify (): string {
        this.addPartToBuilder(this.operation);
        this.addPartToBuilder(this.location);
        this.addBaseToBuilder();

        return this.builder.toString().trim();
    }

}
