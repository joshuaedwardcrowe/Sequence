"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Predicate_1 = require("../enums/Predicate");
const Wrapping_1 = require("../enums/Wrapping");
const SequenceLocation_1 = require("./SequenceLocation");
const Location_1 = require("../enums/Location");
class IntoLocation extends SequenceLocation_1.SequenceLocation {
    constructor(tableName, ...columns) {
        super(Location_1.Location.Into, tableName);
        this.wrapping = Wrapping_1.Wrapping.Parentheses;
        this.columns = columns;
    }
    stringify() {
        const wrapped = SequenceLocation_1.SequenceLocation.stringifyWrapping(this.wrapping, this.getColumnsWithoutPredicate());
        return `${super.stringify()} ${wrapped}`;
    }
    // TODO: There needs to be a better solution than this.
    getColumnsWithoutPredicate() {
        const removePredicate = (column) => { column.predicate = Predicate_1.Predicate.None; return column.stringify(); };
        return this.columns.map(removePredicate);
    }
}
exports.IntoLocation = IntoLocation;
