"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IntoLocation_1 = require("./locations/IntoLocation");
const Operation_1 = require("./enums/Operation");
const SequenceOperation_1 = require("./operations/SequenceOperation");
const SequenceBuilder_1 = require("./SequenceBuilder");
const SequenceSupplement_1 = require("./SequenceSupplement");
const Supplement_1 = require("./enums/Supplement");
const Wrapping_1 = require("./enums/Wrapping");
const Sanitise_1 = require("./utilities/Sanitise");
class Insert extends SequenceBuilder_1.SequenceBuilder {
    constructor() {
        super();
        this.operation = new SequenceOperation_1.SequenceOperation(Operation_1.Operation.Insert);
    }
    into(tableName, ...columns) {
        if (!this.location)
            this.location = new IntoLocation_1.IntoLocation(tableName, ...columns);
        return this;
    }
    values(...values) {
        if (!this.supplement)
            this.supplement = new SequenceSupplement_1.SequenceSupplement(Supplement_1.Supplement.Values, Wrapping_1.Wrapping.Parentheses);
        const cleansed = values.map(Sanitise_1.Sanitise.input);
        this.supplement.values.push(...cleansed);
        return this;
    }
    where(column, logicalOperator, comparisonValue) {
        throw new Error(`INSERT statements cannot have a WHERE clause`);
    }
    whereIn(column, ...values) {
        throw new Error(`INSERT statements cannot have a WHERE IN clause`);
    }
    whereNotIn(column, ...values) {
        throw new Error(`INSERT statements cannot have a WHERE NOT IN clause`);
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
        const operation = Sanitise_1.Sanitise.part(this.operation);
        const location = Sanitise_1.Sanitise.part(this.location);
        const supplement = Sanitise_1.Sanitise.part(this.supplement);
        return `${operation}${location}${supplement}${this.stringifyBase()}`.trim();
    }
}
exports.Insert = Insert;
