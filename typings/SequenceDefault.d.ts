import { ISequenceDefault } from "./interfaces/ISequenceDefault";
import { ISequencePart } from "./interfaces/ISequencePart";
import { SequencePart } from "./SequencePart";
import { ISequenceSorting } from "./interfaces/ISequenceSorting";
import { Default } from "./enums/Default";
import { CoalescingOperator } from "./enums/CoalescingOperator";
export declare class SequenceDefault extends SequencePart implements ISequencePart, ISequenceDefault {
    readonly default: Default;
    readonly coalescingOperator: CoalescingOperator;
    readonly sortings: ISequenceSorting[];
    constructor(defaultType: Default, coalescingOperator: CoalescingOperator, ...sortings: ISequenceSorting[]);
    stringify(): string;
    static stringifyDefaultType(defaultType: Default): "GROUP BY" | "ORDER BY" | "LIMIT";
}
//# sourceMappingURL=SequenceDefault.d.ts.map