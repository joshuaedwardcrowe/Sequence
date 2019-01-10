import {SequenceCoalescent} from "../SequenceCoalescent";
import {ISequenceAssigment} from "../interfaces/assignments/ISequenceAssignment";
import {CoalescingOperator} from "../enums/CoalescingOperator";
import {Assignment} from "../enums/Assignment";
import {ISequenceAssignation} from "../interfaces/assignments/assignations/ISequenceAssignation";
import {ISequencePart} from "../interfaces/ISequencePart";
import {ISequenceCoalescent} from "../interfaces/ISequenceCoalescent";

export class SequenceAssignment extends SequenceCoalescent implements ISequenceAssigment, ISequenceCoalescent {

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
        return SequenceAssignment.coalesce(assignment, this.coalescingOperator, this.assignations);
    }

    protected static stringifyAssignment(assignment: Assignment) {
        switch (assignment) {
            default: return Assignment[assignment].toUpperCase();
        }
    }

}
