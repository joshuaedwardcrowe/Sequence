import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { Predicate } from "./enums/Predicate";
import { SequencePart } from "./SequencePart";
export declare class SequenceColumn extends SequencePart implements ISequenceColumn {
    predicate: Predicate;
    name: string;
    constructor(predicate: Predicate, name: string);
    stringify(): string;
    static stringifyPredicate(predicate: Predicate): string;
}
//# sourceMappingURL=SequenceColumn.d.ts.map