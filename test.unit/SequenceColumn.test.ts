import {expect} from "chai";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";

describe("SequenceColumn",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a non-predicate column", () => {
                const column = new SequenceColumn(Predicate.None, "column");
                expect(column.stringify()).to.equal("column");
            });
            it("Stringifies a distinct-predicate column", () => {
                const column = new SequenceColumn(Predicate.Distinct, "column");
                expect(column.stringify()).to.equal("DISTINCT column");
            });
            it("Stringifies a count-predicate column", () => {
                const column = new SequenceColumn(Predicate.Count, "column");
                expect(column.stringify()).to.equal("COUNT(column)");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifyPredicate", () => {
            it("Stringifies a None predicate", () => {
                const predicate = SequenceColumn.stringifyPredicate(Predicate.None);
                expect(predicate).to.equal("");
            })
            it("Stringifies a Distinct predicate", () => {
                const predicate = SequenceColumn.stringifyPredicate(Predicate.Distinct);
                expect(predicate).to.equal("DISTINCT");
            });
            it("Stringifies a Count predicate", () => {
                const predicate = SequenceColumn.stringifyPredicate(Predicate.Count);
                expect(predicate).to.equal("COUNT");
            })
        })
    })
});
