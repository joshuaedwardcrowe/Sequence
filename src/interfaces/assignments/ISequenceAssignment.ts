import {ISequenceAssignation} from "./assignations/ISequenceAssignation";
import {Assignment} from "../../enums/Assignment";

export interface ISequenceAssigment {

    readonly assignment: Assignment;

    assignations: ISequenceAssignation[];

}
