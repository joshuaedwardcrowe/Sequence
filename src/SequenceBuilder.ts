import {ISequenceBuilder} from "./interfaces/ISequenceBuilder";
import {ISequenceOperation} from "./interfaces/ISequenceOperation";
import {ISequenceLocation} from "./interfaces/ISequenceLocation";
import {ISequenceCondition} from "./interfaces/ISequenceCondition";
import {LimitDefault} from "./defaults/LimitDefault";
import {Arrangement} from "./enums/Arrangement";
import {SequenceSorting} from "./SequenceSorting";
import {SequenceDefault} from "./SequenceDefault";
import {Default} from "./enums/Default";
import {ISequenceJoin} from "./interfaces/ISequenceJoin";
import {ISequenceDefault} from "./interfaces/ISequenceDefault";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {CoalescingOperator} from "./enums/CoalescingOperator";

export abstract class SequenceBuilder implements ISequenceBuilder {

    public condition: ISequenceCondition;
    public location: ISequenceLocation;
    public operation: ISequenceOperation;
    public joins: ISequenceJoin[] = [];
    public ordering: ISequenceDefault;
    public grouping: ISequenceDefault;
    public limitation: LimitDefault;

    public orderBy (column: ISequenceColumn, arrangement: Arrangement) {
        if (!this.ordering) this.ordering = new SequenceDefault(Default.OrderBy, CoalescingOperator.And);
        this.ordering.sortings.push(new SequenceSorting(column, arrangement));
        return this;
    }

    public groupBy (column: ISequenceColumn, arrangement: Arrangement) {
        if (!this.grouping) this.grouping = new SequenceDefault(Default.GroupBy, CoalescingOperator.And);
        this.grouping.sortings.push(new SequenceSorting(column, arrangement));
        return this;
    }

    public limit (amount: number): this {
        if (!this.limitation) this.limitation = new LimitDefault(amount);
        return this;
    }

    public stringifyJoins (): string {
        const reducer: (a: string, j: ISequenceJoin) => string = (a, j) => `${a} ${j.stringify()}`;
        return this.joins.length ? this.joins.reduce<string>(reducer, "") : "";
    }

    public stringify (): string {
        const ordering = !!this.ordering ? this.ordering.stringify() : "";
        const grouping = !!this.grouping ? this.grouping.stringify() : "";
        const limitation = !!this.limitation ? this.limitation.stringify() : "";
        return `${ordering} ${grouping} ${limitation} ${this.stringifyJoins()}`.trimRight();
    }

    public toString (): string {
        return this.stringify();
    }

}
