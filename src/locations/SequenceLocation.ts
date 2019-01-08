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
        const location = SequenceLocation.stringifyLocation(this.location);
        return `${location} ${this.name}`;
    }

    protected static stringifyLocation (location: Location) {
        switch (location) {
            default: return Location[location].toUpperCase();
        }
    }

}
