import {SequenceBuilder} from "./SequenceBuilder";
import {ISequenceBuilder} from "./interfaces/ISequenceBuilder";
import {IDelete} from "./interfaces/IDelete";
import {Operation} from "./enums/Operation";
import {ColumnOperation} from "./operations/ColumnOperation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {SequenceLocation} from "./locations/SequenceLocation";
import {Location} from "./enums/Location";
import {Arrangement} from "./enums/Arrangement";

export class Delete extends SequenceBuilder implements IDelete, ISequenceBuilder {

    constructor () {
        super ();

        this.operation = new ColumnOperation(Operation.Delete);
    }

    public column (column: ISequenceColumn): this {
        this.operation.columns.push(column);
        return this;
    }

    public from (tableName: string): this {
        if (!this.location) this.location = new SequenceLocation(Location.From, tableName);
        return this;
    }

    public orderBy (column: ISequenceColumn, arrangement: Arrangement): this {
        throw new Error(`INSERT statements cannot have an ORDER BY clause`);
    }

    public groupBy (column: ISequenceColumn, arrangement: Arrangement): this {
        throw new Error(`INSERT statements cannot have a GROUP BY clause`);
    }

    public limit (amount: number): this {
        throw new Error(`INSERT statements cannot have a LIMIT clause`);
    }

    public stringify (): string {
        const removeAsterisk = (stringified: string) => stringified.replace(" *", "");
        this.addPartToBuilder(this.operation, removeAsterisk);
        this.addPartToBuilder(this.location);
        this.addBaseToBuilder();

        return this.builder.toString().trim();
    }

}
