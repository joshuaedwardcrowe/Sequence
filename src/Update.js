"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceBuilder_1 = require("./SequenceBuilder");
const Operation_1 = require("./enums/Operation");
const SequenceOperation_1 = require("./operations/SequenceOperation");
const Location_1 = require("./enums/Location");
const SequenceLocation_1 = require("./locations/SequenceLocation");
const Assignment_1 = require("./enums/Assignment");
const SequenceAssignment_1 = require("./assignments/SequenceAssignment");
const SequenceAssignation_1 = require("./assignments/assignations/SequenceAssignation");
const Sanitise_1 = require("./utilities/Sanitise");
class Update extends SequenceBuilder_1.SequenceBuilder {
    constructor() {
        super();
        this.operation = new SequenceOperation_1.SequenceOperation(Operation_1.Operation.Update);
        this.assignment = new SequenceAssignment_1.SequenceAssignment(Assignment_1.Assignment.Set);
    }
    table(tableName) {
        if (!this.location)
            this.location = new SequenceLocation_1.SequenceLocation(Location_1.Location.None, tableName);
        return this;
    }
    column(column, value) {
        this.assignment.assignations.push(new SequenceAssignation_1.SequenceAssignation(column, Sanitise_1.Sanitise.input(value)));
        return this;
    }
    orderBy(column, arrangement) {
        throw new Error(`UPDATE statements cannot have an ORDER BY clause`);
    }
    groupBy(column, arrangement) {
        throw new Error(`UPDATE statements cannot have a GROUP BY clause`);
    }
    limit(amount) {
        throw new Error(`UPDATE statements cannot have a LIMIT clause`);
    }
    stringify() {
        const operation = Sanitise_1.Sanitise.part(this.operation);
        const location = Sanitise_1.Sanitise.part(this.location);
        const assignment = Sanitise_1.Sanitise.part(this.assignment);
        return (`${operation}${location}${assignment}${this.stringifyBase()}`).trim();
    }
}
exports.Update = Update;
//# sourceMappingURL=Update.js.map