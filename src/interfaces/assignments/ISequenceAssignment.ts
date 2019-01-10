import {ISequenceAssignation} from "./assignations/ISequenceAssignation";
import {Assignment} from "../../enums/Assignment";
import {ISequencePart} from "../ISequencePart";

export interface ISequenceAssigment extends ISequencePart {

    readonly assignment: Assignment;

    assignations: ISequenceAssignation[];

}
