import {ISequencePart} from "./interfaces/ISequencePart";
import {CoalescingOperator} from "./enums/CoalescingOperator";

export abstract class SequencePart implements ISequencePart {

    public stringify (): string {
        throw new TypeError("Stringify was not overridden");
    }

    public toString (): string {
        return this.stringify();
    }

    public static stringifyCoalescingOperator (coalescingOperator: CoalescingOperator): string {
        switch (coalescingOperator) {
            case CoalescingOperator.None: return "";
            default: return CoalescingOperator[coalescingOperator].toUpperCase();
        }
    }

}
