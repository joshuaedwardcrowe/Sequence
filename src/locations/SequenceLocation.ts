import {SequencePart} from "../SequencePart";
import {ISequenceLocation} from "../interfaces/locations/ISequenceLocation";
import {Location} from "../enums/Location";

export class SequenceLocation extends SequencePart implements ISequenceLocation {

    public readonly location: Location;
    public readonly name: string;

    constructor (locationType: Location, name: string) {
        super();

        this.location = locationType;
        this.name = name;
    }

    public stringify () {
        const location: string = SequenceLocation.stringifyLocation(this.location);
        const padded: string = SequenceLocation.padLocation(this.location, location);
        return `${padded}${this.name}`;
    }

    protected static stringifyLocation (location: Location) {
        switch (location) {
            case Location.None: return "";
            default: return Location[location].toUpperCase();
        }
    }

    protected static padLocation (location: Location, stringified: string) {
        switch (location) {
            case Location.None: return stringified;
            default: return `${stringified} `;
        }
    }

}
