import {Predicate} from "../enums/Predicate";

export interface ISequenceColumn {

    predicate: Predicate;

    readonly name: string;

    stringify (): string

}
