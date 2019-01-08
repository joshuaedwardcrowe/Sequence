import {ISequenceAssigment} from "../interfaces/ISequenceAssignment";
import {Assignment} from "../enums/Assignment";
import {ISequenceAssignation} from "../interfaces/ISequenceAssignation";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {SequenceCoalescent} from "../coalescents/SequenceCoalescent";
import {ISequenceCoalescent} from "../interfaces/ISequenceCoalescent";

export class SequenceAssignment extends SequenceCoalescent implements ISequenceAssigment {

    public assignment: Assignment;
    public readonly coalescingOperator: CoalescingOperator = CoalescingOperator.Comma;
    public assignations: ISequenceAssignation[];

    constructor (assignment: Assignment, ...assignations: ISequenceAssignation[]) {
        super();

        this.assignment = assignment;
        this.assignations = assignations;
    }

    public stringify (): string {
        const assignment: string = SequenceAssignment.stringifyAssignment(this.assignment);
        return SequenceAssignment.coalesce(assignment, this.coalescingOperator, this.assignations)
    }

    protected static stringifyAssignment(assignment: Assignment) {
        switch (assignment) {
            default: return Assignment[assignment].toUpperCase();
        }
    }
}
