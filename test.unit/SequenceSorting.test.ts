import {expect} from "chai";
import {SequenceSorting} from "../src/SequenceSorting";
import {Predicate} from "../src/enums/Predicate";
import {Arrangement} from "../src/enums/Arrangement";
import {SequenceColumn} from "../src/SequenceColumn";

describe("SequenceSorting",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a ascending column", () => {
                const sorting = new SequenceSorting(new SequenceColumn(Predicate.None, "column"), Arrangement.Ascending);
                expect(sorting.stringify()).to.equal("column ASCENDING");
            });
            it("Stringifies a descending column", () => {
                const sorting = new SequenceSorting(new SequenceColumn(Predicate.None, "column"), Arrangement.Descending);
                expect(sorting.stringify()).to.equal("column DESCENDING");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifyArrangement", () => {
            it("Stringifies an Ascending arrangement", () => {
                const arrangement = SequenceSorting.stringifyArrangement(Arrangement.Ascending);
                expect(arrangement).to.equal("ASCENDING");
            });
            it("Stringifies a Descending arrangement", () => {
                const arrangement = SequenceSorting.stringifyArrangement(Arrangement.Descending);
                expect(arrangement).to.equal("DESCENDING");
            });
        });
    });
});
