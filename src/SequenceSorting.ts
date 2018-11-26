import {ISequenceSorting} from "./interfaces/ISequenceSorting";
import {Arrangement} from "./enums/Arrangement";
import {SequencePart} from "./SequencePart";
import {ISequencePart} from "./interfaces/ISequencePart";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";

export class SequenceSorting extends SequencePart implements ISequencePart, ISequenceSorting {

    public readonly column: ISequenceColumn;
    public readonly arrangement: Arrangement;

    constructor (column: ISequenceColumn, arrangement: Arrangement) {
        super();

        this.column = column;
        this.arrangement = arrangement;
    }

    public stringify (): string {
        const arrangement = SequenceSorting.stringifyArrangement(this.arrangement);
        return `${this.column} ${arrangement}`;
    }

    public static stringifyArrangement (arrangement: Arrangement) {
        switch (arrangement) {
            default: return Arrangement[arrangement].toUpperCase();
        }
    }


}
