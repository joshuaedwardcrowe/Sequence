"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SequencePart_1 = require("../SequencePart");
const Location_1 = require("../enums/Location");
class SequenceLocation extends SequencePart_1.SequencePart {
    constructor(locationType, name) {
        super();
        this.location = locationType;
        this.name = name;
    }
    stringify() {
        const location = SequenceLocation.stringifyLocation(this.location);
        const padded = SequenceLocation.padLocation(this.location, location);
        return `${padded}${this.name}`;
    }
    static stringifyLocation(location) {
        switch (location) {
            case Location_1.Location.None: return "";
            default: return Location_1.Location[location].toUpperCase();
        }
    }
    static padLocation(location, stringified) {
        switch (location) {
            case Location_1.Location.None: return stringified;
            default: return `${stringified} `;
        }
    }
}
exports.SequenceLocation = SequenceLocation;
//# sourceMappingURL=SequenceLocation.js.map