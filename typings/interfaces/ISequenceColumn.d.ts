import { Predicate } from "../enums/Predicate";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceColumn extends ISequencePart {
    predicate: Predicate;
    name: string;
}
//# sourceMappingURL=ISequenceColumn.d.ts.map