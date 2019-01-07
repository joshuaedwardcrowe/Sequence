import {SequencePart} from "./SequencePart";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {ISequenceCoalescable} from "./interfaces/ISequenceCoalescable";

export class SequenceCoalescent extends SequencePart {

    private static stringifyCoalescingOperator (coalescingOperator: CoalescingOperator): string {
        switch (coalescingOperator) {
            case CoalescingOperator.None: return "";
            case CoalescingOperator.Comma: return ",";
            default: return CoalescingOperator[coalescingOperator].toUpperCase();
        }
    }

    private static padCoalescingOperator (coalescingOperator: CoalescingOperator, stringified: string) {
        switch (coalescingOperator) {
            case CoalescingOperator.Comma: return `${stringified} `;
            default: return ` ${stringified} `;
        }
    }

    protected static coalesce (startingKeyword: string, coalescingOperator: CoalescingOperator, coalescables: ISequenceCoalescable[]): string {
        const stringifiedCoalescingOperator: string = SequenceCoalescent.stringifyCoalescingOperator(coalescingOperator);
        const paddedCoalescingOperator: string = SequenceCoalescent.padCoalescingOperator(coalescingOperator, stringifiedCoalescingOperator);
        return coalescables.reduce<string>((coalesced: string, coalescable: ISequenceCoalescable, index: number) => {
            return index > 0 ? `${coalesced}${paddedCoalescingOperator}${coalescable}` : `${coalesced} ${coalescable}`;
        }, startingKeyword);
    }

}
