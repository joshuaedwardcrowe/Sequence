import {ISequenceFilter} from "./interfaces/ISequenceFilter";
import {Arrangement} from "./enums/Arrangement";
import {SequencePart} from "./SequencePart";
import {ISequencePart} from "./interfaces/ISequencePart";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";

export class SequenceFilter extends SequencePart implements ISequencePart, ISequenceFilter {

    public readonly column: ISequenceColumn;
    public readonly arrangement: Arrangement;

    constructor (column: ISequenceColumn, arrangement: Arrangement) {
        super();

        this.column = column;
        this.arrangement = arrangement;
    }

    public stringify (): string {
        const arrangement = SequenceFilter.stringifyArrangement(this.arrangement);
        return `${this.column.stringify()} ${arrangement}`;
    }

    protected static stringifyArrangement (arrangement: Arrangement) {
        switch (arrangement) {
            default: return Arrangement[arrangement].toUpperCase();
        }
    }

}
