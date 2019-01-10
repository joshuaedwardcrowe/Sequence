"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Supplement_1 = require("./enums/Supplement");
const SequencePart_1 = require("./SequencePart");
class SequenceSupplement extends SequencePart_1.SequencePart {
    constructor(supplement, wrapping, ...values) {
        super();
        this.supplement = supplement;
        this.wrapping = wrapping;
        this.values = values;
    }
    stringify() {
        const supplement = SequenceSupplement.stringifySupplement(this.supplement);
        const wrapped = SequencePart_1.SequencePart.stringifyWrapping(this.wrapping, this.values);
        return `${supplement} ${wrapped}`;
    }
    static stringifySupplement(supplement) {
        switch (supplement) {
            default: return Supplement_1.Supplement[supplement].toUpperCase();
        }
    }
}
exports.SequenceSupplement = SequenceSupplement;
