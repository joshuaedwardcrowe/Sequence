"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequenceCoalescent_1 = require("../SequenceCoalescent");
const CoalescingOperator_1 = require("../enums/CoalescingOperator");
const Assignment_1 = require("../enums/Assignment");
class SequenceAssignment extends SequenceCoalescent_1.SequenceCoalescent {
    constructor(assignment, ...assignations) {
        super();
        this.coalescingOperator = CoalescingOperator_1.CoalescingOperator.Comma;
        this.assignment = assignment;
        this.assignations = assignations;
    }
    stringify() {
        const assignment = SequenceAssignment.stringifyAssignment(this.assignment);
        return SequenceAssignment.coalesce(assignment, this.coalescingOperator, this.assignations);
    }
    static stringifyAssignment(assignment) {
        switch (assignment) {
            default: return Assignment_1.Assignment[assignment].toUpperCase();
        }
    }
}
exports.SequenceAssignment = SequenceAssignment;
//# sourceMappingURL=SequenceAssignment.js.map