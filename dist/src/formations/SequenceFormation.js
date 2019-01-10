"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Formation_1 = require("../enums/Formation");
const SequenceCoalescent_1 = require("../SequenceCoalescent");
class SequenceFormation extends SequenceCoalescent_1.SequenceCoalescent {
    constructor(defaultType, coalescingOperator, ...filters) {
        super();
        this.formation = defaultType;
        this.coalescingOperator = coalescingOperator;
        this.filters = filters;
    }
    stringify() {
        const formation = SequenceFormation.stringifyFormation(this.formation);
        return SequenceFormation.coalesce(formation, this.coalescingOperator, this.filters);
    }
    static stringifyFormation(defaultType) {
        switch (defaultType) {
            case Formation_1.Formation.GroupBy: return "GROUP BY";
            case Formation_1.Formation.OrderBy: return "ORDER BY";
            case Formation_1.Formation.Limit: return "LIMIT";
        }
    }
}
exports.SequenceFormation = SequenceFormation;
