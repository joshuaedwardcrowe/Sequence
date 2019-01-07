import {SequenceBuilder} from "./SequenceBuilder";
import {Operation} from "./enums/Operation";
import {SequenceOperation} from "./SequenceOperation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {Location} from "./enums/Location";
import {SequenceLocation} from "./SequenceLocation";
import {Assignment} from "./enums/Assignment";
import {ISequenceAssigment} from "./interfaces/ISequenceAssignment";
import {SequenceAssignment} from "./SequenceAssignment";
import {SequenceAssignation} from "./SequenceAssignation";
import {IUpdate} from "./interfaces/IUpdate";

export class Update extends SequenceBuilder implements IUpdate {

    public assignment: ISequenceAssigment;

    constructor () {
        super ();

        this.operation = new SequenceOperation(Operation.Update);
        this.assignment = new SequenceAssignment(Assignment.Set);
    }

    public table (tableName: string): this {
        if (!this.location) this.location = new SequenceLocation(Location.None, tableName);
        return this;
    }

    public column (column: ISequenceColumn, value: any): this {
        const cleansed: any = Update.cleanseAnonymousValue(value);
        this.assignment.assignations.push(new SequenceAssignation(column, value));
        return this;
    }


}


