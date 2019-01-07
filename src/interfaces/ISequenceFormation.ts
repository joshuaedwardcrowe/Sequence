import {Formation} from "../enums/Formation";
import {ISequenceFilter} from "./ISequenceFilter";

export interface ISequenceFormation {

    readonly formation: Formation;

    readonly filters: ISequenceFilter[];

    stringify();

}
