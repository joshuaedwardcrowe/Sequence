import { Default } from "../enums/Default";
import { ISequenceSorting } from "./ISequenceSorting";
import { ISequencePart } from "./ISequencePart";
export interface ISequenceDefault extends ISequencePart {
    readonly default: Default;
    readonly sortings: ISequenceSorting[];
}
//# sourceMappingURL=ISequenceDefault.d.ts.map