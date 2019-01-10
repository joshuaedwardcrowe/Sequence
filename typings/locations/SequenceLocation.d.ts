import { SequencePart } from "../SequencePart";
import { ISequenceLocation } from "../interfaces/locations/ISequenceLocation";
import { Location } from "../enums/Location";
export declare class SequenceLocation extends SequencePart implements ISequenceLocation {
    readonly location: Location;
    readonly name: string;
    constructor(locationType: Location, name: string);
    stringify(): string;
    protected static stringifyLocation(location: Location): string;
    protected static padLocation(location: Location, stringified: string): string;
}
//# sourceMappingURL=SequenceLocation.d.ts.map