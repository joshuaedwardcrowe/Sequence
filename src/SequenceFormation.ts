import {CoalescingOperator} from "./enums/CoalescingOperator";
import {Formation} from "./enums/Formation";
import {ISequenceFormation} from "./interfaces/ISequenceFormation";
import {ISequenceCoalescent} from "./interfaces/ISequenceCoalescent";
import {ISequenceFilter} from "./interfaces/ISequenceFilter";
import {SequenceCoalescent} from "./SequenceCoalescent";

export class SequenceFormation extends SequenceCoalescent implements ISequenceFormation, ISequenceCoalescent {

    public readonly formation: Formation;
    public readonly coalescingOperator: CoalescingOperator;
    public readonly filters: ISequenceFilter[];

    constructor (defaultType: Formation, coalescingOperator: CoalescingOperator, ...filters: ISequenceFilter[]) {
        super();

        this.formation = defaultType;
        this.coalescingOperator = coalescingOperator;
        this.filters = filters;
    }

    public stringify (): string {
        const formation: string = SequenceFormation.stringifyFormation(this.formation);
        return SequenceFormation.coalesce(formation, this.coalescingOperator, this.filters);
    }

    protected static stringifyFormation (defaultType: Formation) {
        switch (defaultType) {
            case Formation.GroupBy: return "GROUP BY";
            case Formation.OrderBy: return "ORDER BY";
            case Formation.Limit: return "LIMIT";
        }
    }
}
