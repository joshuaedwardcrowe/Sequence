import {expect} from "chai";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";

describe("SequenceColumn",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a non-predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.None, "column");
                expect(column.stringify()).to.equal("column");
            });
            it("Stringifies a DISTINCT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Distinct, "column");
                expect(column.stringify()).to.equal("DISTINCT column");
            });
            it("Stringifies a COUNT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Count, "column");
                expect(column.stringify()).to.equal("COUNT(column)");
            });
        });
        describe("toString", () => {
            it("Interpolates a non-predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.None, "column");
                expect(`${column}`).to.equal("column");
            });
            it("Interpolates a DISTINCT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Distinct, "column");
                expect(`${column}`).to.equal("DISTINCT column");
            });
            it("Interpolates a COUNT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Count, "column");
                expect(`${column}`).to.equal("COUNT(column)");
            });
        });
    });
});
