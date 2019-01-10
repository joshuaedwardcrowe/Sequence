import { ISequenceFilter } from "../interfaces/formations/filters/ISequenceFilter";
import { CoalescingOperator } from "../enums/CoalescingOperator";
import { Formation } from "../enums/Formation";
import { ISequenceCoalescent } from "../interfaces/ISequenceCoalescent";
import { ISequenceFormation } from "../interfaces/formations/ISequenceFormation";
import { SequenceCoalescent } from "../SequenceCoalescent";
export declare class SequenceFormation extends SequenceCoalescent implements ISequenceFormation, ISequenceCoalescent {
    readonly formation: Formation;
    readonly coalescingOperator: CoalescingOperator;
    readonly filters: ISequenceFilter[];
    constructor(defaultType: Formation, coalescingOperator: CoalescingOperator, ...filters: ISequenceFilter[]);
    stringify(): string;
    protected static stringifyFormation(defaultType: Formation): "GROUP BY" | "ORDER BY" | "LIMIT";
}
//# sourceMappingURL=SequenceFormation.d.ts.map