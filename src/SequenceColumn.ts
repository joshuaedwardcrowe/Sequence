import {Predicate} from "./enums/Predicate";
import {ISequenceCoalescable} from "./interfaces/ISequenceCoalescable";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {SequencePart} from "./SequencePart";

export class SequenceColumn extends SequencePart implements ISequenceColumn, ISequenceCoalescable {

    public predicate: Predicate;
    public name: string;

    constructor (predicate: Predicate, name: string) {
        super();

        this.name = name;
        this.predicate = predicate;
    }

    public stringify (): string {
        const predicate = SequenceColumn.stringifyPredicate(this.predicate);

        switch (this.predicate) {
            case Predicate.None: return this.name;
            case Predicate.Distinct: return `${predicate} ${this.name}`;
            case Predicate.Count: return `${predicate}(${this.name})`;
        }
    }

    public static stringifyPredicate (predicate: Predicate) {
        switch (predicate) {
            case Predicate.None: return "";
            default: return Predicate[predicate].toUpperCase();
        }
    }

}
