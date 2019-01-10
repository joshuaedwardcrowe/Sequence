"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arrangement_1 = require("../../enums/Arrangement");
const SequencePart_1 = require("../../SequencePart");
class SequenceFilter extends SequencePart_1.SequencePart {
    constructor(column, arrangement) {
        super();
        this.column = column;
        this.arrangement = arrangement;
    }
    stringify() {
        const arrangement = SequenceFilter.stringifyArrangement(this.arrangement);
        return `${this.column.stringify()} ${arrangement}`;
    }
    static stringifyArrangement(arrangement) {
        switch (arrangement) {
            default: return Arrangement_1.Arrangement[arrangement].toUpperCase();
        }
    }
}
exports.SequenceFilter = SequenceFilter;
