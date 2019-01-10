import { SequenceOperation } from "./SequenceOperation";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { ISequenceCoalescent } from "../interfaces/ISequenceCoalescent";
export declare class SelectionOperation extends SequenceOperation implements ISequenceCoalescent {
    readonly coalescingOperator: CoalescingOperator;
    constructor(...columns: ISequenceColumn[]);
    stringify(): string;
}
//# sourceMappingURL=SelectionOperation.d.ts.map