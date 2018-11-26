import Location from "../enums/Location";
import {ISequencePart} from "./ISequencePart";

export default interface ISequenceLocation extends ISequencePart {

    location: Location;

}
