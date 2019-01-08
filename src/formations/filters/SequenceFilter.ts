import {Arrangement} from "../../enums/Arrangement";
import {ISequenceColumn} from "../../interfaces/ISequenceColumn";
import {ISequenceFilter} from "../../interfaces/formations/filters/ISequenceFilter";
import {SequencePart} from "../../SequencePart";

export class SequenceFilter extends SequencePart implements ISequenceFilter {

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
