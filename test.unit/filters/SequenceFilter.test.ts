// Testing imports
import {expect} from "chai";
// Dependencies
import {Predicate} from "../../src/enums/Predicate";
import {Arrangement} from "../../src/enums/Arrangement";
import {SequenceColumn} from "../../src/SequenceColumn";
// Tested imports
import {SequenceFilter} from "../../src/SequenceFilter";

// Test data
const columnAPredicate: Predicate = Predicate.None;
const columnAName = "columnA";
let columnA: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
});

describe("SequenceFilter",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a {SequenceFilter} and a {SequenceColumn} with an ASCENDING arrangement", () => {
                const filter: SequenceFilter = new SequenceFilter(columnA, Arrangement.Ascending);
                expect(filter.stringify()).to.equal("columnA ASCENDING");
            });
            it("Stringifies a {SequenceFilter} and a {SequenceColumn} with a DESCENDING arrangement", () => {
                const filter: SequenceFilter = new SequenceFilter(columnA, Arrangement.Descending);
                expect(filter.stringify()).to.equal("columnA DESCENDING");
            });
        });
        describe("toString", () => {
            it("Interpolates a {SequenceFilter} and a {SequenceColumn} with an ASCENDING arrangement", () => {
                const filter: SequenceFilter = new SequenceFilter(columnA, Arrangement.Ascending);
                expect(`${filter}`).to.equal("columnA ASCENDING");
            });
            it("Interpolates a {SequenceFilter} and a {SequenceColumn} with a DESCENDING arrangement", () => {
                const filter: SequenceFilter = new SequenceFilter(columnA, Arrangement.Descending);
                expect(`${filter}`).to.equal("columnA DESCENDING");
            });
        });
    });
});
