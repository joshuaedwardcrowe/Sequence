import { SequenceCoalescent } from "../SequenceCoalescent";
import { ISequenceAssignment } from "../interfaces/assignments/ISequenceAssignment";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { Assignment } from "../enums/Assignment";
import { ISequenceAssignation } from "../interfaces/assignments/assignations/ISequenceAssignation";
import { ISequenceCoalescent } from "../interfaces/ISequenceCoalescent";
export declare class SequenceAssignment extends SequenceCoalescent implements ISequenceAssignment, ISequenceCoalescent {
    assignment: Assignment;
    readonly coalescingOperator: CoalescingOperator;
    assignations: ISequenceAssignation[];
    constructor(assignment: Assignment, ...assignations: ISequenceAssignation[]);
    stringify(): string;
    protected static stringifyAssignment(assignment: Assignment): string;
}
//# sourceMappingURL=SequenceAssignment.d.ts.map