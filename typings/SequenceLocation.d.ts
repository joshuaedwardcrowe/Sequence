import { SequencePart } from "./SequencePart";
import { Location } from "./enums/Location";
import { ISequenceLocation } from "./interfaces/ISequenceLocation";
export declare class SequenceLocation extends SequencePart implements ISequenceLocation {
    readonly location: Location;
    readonly name: string;
    constructor(locationType: Location, name: string);
    stringify(): string;
    static stringifyLocation(location: Location): string;
}
//# sourceMappingURL=SequenceLocation.d.ts.map