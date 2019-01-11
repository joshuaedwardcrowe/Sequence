import { Predicate } from "./enums/Predicate";
import { ISequenceCoalescable } from "./interfaces/ISequenceCoalescable";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { SequencePart } from "./SequencePart";
export declare class SequenceColumn extends SequencePart implements ISequenceColumn, ISequenceCoalescable {
    predicate: Predicate;
    name: string;
    constructor(predicate: Predicate, name: string);
    stringify(): string;
    static stringifyPredicate(predicate: Predicate): string;
}
