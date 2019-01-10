import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {Predicate} from "../enums/Predicate";
import {Wrapping} from "../enums/Wrapping";
import {IIntoLocation} from "../interfaces/locations/IIntoLocation";
import {SequenceLocation} from "./SequenceLocation";
import {Location} from "../enums/Location";

export class IntoLocation extends SequenceLocation implements IIntoLocation {

    public readonly wrapping: Wrapping = Wrapping.Parentheses;
    public readonly columns: ISequenceColumn[];

    constructor (tableName: string, ...columns: ISequenceColumn[]) {
        super (Location.Into, tableName);

        this.columns = columns;
    }

    public stringify () {
        const wrapped: string = SequenceLocation.stringifyWrapping(this.wrapping, this.getColumnsWithoutPredicate());
        return `${super.stringify()} ${wrapped}`;
    }

    // TODO: There needs to be a better solution than this.
    private getColumnsWithoutPredicate (): string[] {
        const removePredicate = (column: ISequenceColumn) => { column.predicate = Predicate.None; return column.stringify(); };
        return this.columns.map<string>(removePredicate);
    }

}
