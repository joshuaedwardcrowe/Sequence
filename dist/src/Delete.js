"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceBuilder_1 = require("./SequenceBuilder");
const Operation_1 = require("./enums/Operation");
const ColumnOperation_1 = require("./operations/ColumnOperation");
const SequenceLocation_1 = require("./locations/SequenceLocation");
const Location_1 = require("./enums/Location");
const Sanitise_1 = require("./utilities/Sanitise");
class Delete extends SequenceBuilder_1.SequenceBuilder {
    constructor() {
        super();
        this.operation = new ColumnOperation_1.ColumnOperation(Operation_1.Operation.Delete);
    }
    column(column) {
        this.operation.columns.push(column);
        return this;
    }
    from(tableName) {
        if (!this.location)
            this.location = new SequenceLocation_1.SequenceLocation(Location_1.Location.From, tableName);
        return this;
    }
    orderBy(column, arrangement) {
        throw new Error(`INSERT statements cannot have an ORDER BY clause`);
    }
    groupBy(column, arrangement) {
        throw new Error(`INSERT statements cannot have a GROUP BY clause`);
    }
    limit(amount) {
        throw new Error(`INSERT statements cannot have a LIMIT clause`);
    }
    stringify() {
        const location = Sanitise_1.Sanitise.part(this.location);
        return (`${this.stringifyOperation()}${location}${this.stringifyBase()}`).trim();
    }
    stringifyOperation() {
        return Sanitise_1.Sanitise.part(this.operation).replace(" *", "");
    }
}
exports.Delete = Delete;
