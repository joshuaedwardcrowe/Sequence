// Testing imports
import {expect} from "chai";

// Dependencies
import {Predicate} from "../src/enums/Predicate";
import {Arrangement} from "../src/enums/Arrangement";
import {SequenceColumn} from "../src/SequenceColumn";
// Tested imports
import {SequenceFilter} from "../src/SequenceFilter";

// Test data
const column: SequenceColumn = new SequenceColumn(Predicate.None, "column");

describe("SequenceFilter",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a ascending column", () => {
                const filter: SequenceFilter = new SequenceFilter(column, Arrangement.Ascending);
                expect(filter.stringify()).to.equal("column ASCENDING");
            });
            it("Stringifies a descending column", () => {
                const filter: SequenceFilter = new SequenceFilter(column, Arrangement.Descending);
                expect(filter.stringify()).to.equal("column DESCENDING");
            });
        });
    });
});
