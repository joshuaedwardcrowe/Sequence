"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceLocation_1 = require("./locations/SequenceLocation");
const ColumnOperation_1 = require("./operations/ColumnOperation");
const SequenceBuilder_1 = require("./SequenceBuilder");
const Location_1 = require("./enums/Location");
const Sanitise_1 = require("./utilities/Sanitise");
const Operation_1 = require("./enums/Operation");
class Select extends SequenceBuilder_1.SequenceBuilder {
    constructor() {
        super();
        this.operation = new ColumnOperation_1.ColumnOperation(Operation_1.Operation.Select);
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
    stringify() {
        const operation = Sanitise_1.Sanitise.part(this.operation);
        const location = Sanitise_1.Sanitise.part(this.location);
        return (`${operation}${location}${this.stringifyBase()}`).trim();
    }
}
exports.Select = Select;
//# sourceMappingURL=Select.js.map