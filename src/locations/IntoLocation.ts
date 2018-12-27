import {SequenceLocation} from "../SequenceLocation";
import {ISequenceLocation} from "../interfaces/ISequenceLocation";
import {ISequenceColumn} from "../interfaces/ISequenceColumn";
import {Location} from "../enums/Location";

export class IntoLocation extends SequenceLocation implements ISequenceLocation {

    public readonly columns: ISequenceColumn[];

    constructor (tableName: string, ...columns: ISequenceColumn[]) {
        super (Location.Into, tableName);

        this.columns = columns;
    }

}
