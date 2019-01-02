import {SequenceLocation} from "../SequenceLocation";
import {ISequenceLocation} from "../interfaces/ISequenceLocation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {Location} from "../enums/Location";
import {Wrapping} from "../enums/Wrapping";
import {Predicate} from "../enums/Predicate";

export class IntoLocation extends SequenceLocation implements ISequenceLocation {

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

    private getColumnsWithoutPredicate (): ISequenceColumn[] {
        const removePredicate = (column: ISequenceColumn) => { column.predicate = Predicate.None; return column; };
        return this.columns.map<ISequenceColumn>(removePredicate);
    }



}
