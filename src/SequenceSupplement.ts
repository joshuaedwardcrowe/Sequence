import {ISequenceSupplement} from "./interfaces/ISequenceSupplement";
import {Supplement} from "./enums/Supplement";
import {Wrapping} from "./enums/Wrapping";
import {SequencePart} from "./SequencePart";

export class SequenceSupplement<TValue> extends SequencePart implements ISequenceSupplement {

    public readonly supplement: Supplement;
    public readonly wrapping: Wrapping;
    public readonly values: TValue[];

    constructor (supplement: Supplement, wrapping: Wrapping, ...values: TValue[]) {
        super();

        this.supplement = supplement;
        this.wrapping = wrapping;
        this.values = values;
    }

    public stringify (): string {
        const supplement = SequenceSupplement.stringifySupplement(this.supplement);
        const wrapped = SequencePart.stringifyWrapping(this.wrapping, this.values);
        return `${supplement} ${wrapped}`;
    }

    public static stringifySupplement (supplement: Supplement): string {
        switch (supplement) {
            default: return Supplement[supplement].toUpperCase();
        }
    }
}
