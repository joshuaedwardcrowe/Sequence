import {expect} from "chai";
import {Location} from "../../src/enums/Location";
import {SequenceLocation} from "../../src/locations/SequenceLocation";

describe("SequenceLocation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a location clause", () => {
                const location = new SequenceLocation(Location.From, "table");
                expect(location.stringify()).to.equal("FROM table");
            });
        });
    });
});
