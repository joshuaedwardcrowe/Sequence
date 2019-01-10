import { SequenceOperation } from "./SequenceOperation";
import { Operation } from "../enums/Operation";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { ISequenceCoalescent } from "../interfaces/ISequenceCoalescent";
export declare class ColumnOperation extends SequenceOperation implements ISequenceCoalescent {
    readonly coalescingOperator: CoalescingOperator;
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
}
//# sourceMappingURL=ColumnOperation.d.ts.map