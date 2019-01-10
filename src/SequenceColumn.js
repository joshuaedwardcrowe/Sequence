"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Predicate_1 = require("./enums/Predicate");
const SequencePart_1 = require("./SequencePart");
class SequenceColumn extends SequencePart_1.SequencePart {
    constructor(predicate, name) {
        super();
        this.name = name;
        this.predicate = predicate;
    }
    stringify() {
        const predicate = SequenceColumn.stringifyPredicate(this.predicate);
        switch (this.predicate) {
            case Predicate_1.Predicate.None: return this.name;
            case Predicate_1.Predicate.Distinct: return `${predicate} ${this.name}`;
            case Predicate_1.Predicate.Count: return `${predicate}(${this.name})`;
        }
    }
    static stringifyPredicate(predicate) {
        switch (predicate) {
            case Predicate_1.Predicate.None: return "";
            default: return Predicate_1.Predicate[predicate].toUpperCase();
        }
    }
}
exports.SequenceColumn = SequenceColumn;
//# sourceMappingURL=SequenceColumn.js.map