import {ISequenceDefault} from "./interfaces/ISequenceDefault";
import {ISequencePart} from "./interfaces/ISequencePart";
import {SequencePart} from "./SequencePart";
import {ISequenceSorting} from "./interfaces/ISequenceSorting";
import {Default} from "./enums/Default";
import {CoalescingOperator} from "./enums/CoalescingOperator";

export class SequenceDefault extends SequencePart implements ISequencePart, ISequenceDefault {

    public readonly default: Default;
    public readonly coalescingOperator: CoalescingOperator;
    public readonly sortings: ISequenceSorting[];

    constructor (defaultType: Default, coalescingOperator: CoalescingOperator, ...sortings: ISequenceSorting[]) {
        super();

        this.default = defaultType;
        this.coalescingOperator = coalescingOperator;
        this.sortings = sortings;
    }

    public stringify (): string {
        const defaultType: string = SequenceDefault.stringifyDefaultType(this.default);
        const coalescingOperator: string = SequencePart.stringifyCoalescingOperator(this.coalescingOperator);
        const reducer = (a, s, i) => `${a}${i > 0 ? ` ${coalescingOperator}` : ""} ${s}`;
        return this.sortings.reduce<string>(reducer, defaultType);
    }

    public static stringifyDefaultType (defaultType: Default) {
        switch (defaultType) {
            case Default.GroupBy: return "GROUP BY";
            case Default.OrderBy: return "ORDER BY";
            case Default.Limit: return "LIMIT";
        }
    }
}
