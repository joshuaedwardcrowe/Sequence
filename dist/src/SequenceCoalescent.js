"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequencePart_1 = require("./SequencePart");
const CoalescingOperator_1 = require("./enums/CoalescingOperator");
class SequenceCoalescent extends SequencePart_1.SequencePart {
    static stringifyCoalescingOperator(coalescingOperator) {
        switch (coalescingOperator) {
            case CoalescingOperator_1.CoalescingOperator.None: return "";
            case CoalescingOperator_1.CoalescingOperator.Comma: return ",";
            default: return CoalescingOperator_1.CoalescingOperator[coalescingOperator].toUpperCase();
        }
    }
    static padCoalescingOperator(coalescingOperator, stringified) {
        switch (coalescingOperator) {
            case CoalescingOperator_1.CoalescingOperator.Comma: return `${stringified} `;
            default: return ` ${stringified} `;
        }
    }
    static coalesce(startingKeyword, coalescingOperator, coalescables) {
        const stringifiedCoalescingOperator = SequenceCoalescent.stringifyCoalescingOperator(coalescingOperator);
        const paddedCoalescingOperator = SequenceCoalescent.padCoalescingOperator(coalescingOperator, stringifiedCoalescingOperator);
        return coalescables.reduce((coalesced, coalescable, index) => {
            return index > 0 ? `${coalesced}${paddedCoalescingOperator}${coalescable.stringify()}` : `${coalesced} ${coalescable.stringify()}`;
        }, startingKeyword);
    }
}
exports.SequenceCoalescent = SequenceCoalescent;
