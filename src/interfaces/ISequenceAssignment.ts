import {Assignment} from "../enums/Assignment";
import {ISequenceAssignation} from "./ISequenceAssignation";
import {ISequenceCoalescent} from "./ISequenceCoalescent";

export interface ISequenceAssigment extends ISequenceCoalescent {

    readonly assignment: Assignment;

    assignations: ISequenceAssignation[];

}
