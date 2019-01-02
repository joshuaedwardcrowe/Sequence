import {expect} from "chai";
import {Location} from "../src/enums/Location";
import {SequenceLocation} from "../src/SequenceLocation";

describe("SequenceLocation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a location clause", () => {
                const location = new SequenceLocation(Location.From, "table");
                expect(location.stringify()).to.equal("FROM table");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifyLocation", () => {
            it("Stringifies a From location", () => {
                const location = SequenceLocation.stringifyLocation(Location.From);
                expect(location).to.equal("FROM");
            });
        });
    });
});
