import {Location} from "../enums/Location";
import {Wrapping} from "../enums/Wrapping";
import {Predicate} from "../enums/Predicate";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {IIntoLocation} from "../interfaces/IIntoLocation";
import {SequenceLocation} from "./SequenceLocation";

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
    private getColumnsWithoutPredicate (): ISequenceColumn[] {
        const removePredicate = (column: ISequenceColumn) => { column.predicate = Predicate.None; return column; };
        return this.columns.map<ISequenceColumn>(removePredicate);
    }

}
