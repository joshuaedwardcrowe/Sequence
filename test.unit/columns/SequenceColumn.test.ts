// Testing imports
import {expect} from "chai";

// Depdnencies
import {Predicate} from "../../src/enums/Predicate";

// Tested import
import {SequenceColumn} from "../../src/columns/SequenceColumn";

// Testing data
const columnName: string = "column";

describe("SequenceColumn",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a non-predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.None, columnName);
                expect(column.stringify()).to.equal("column");
            });
            it("Stringifies a DISTINCT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Distinct, columnName);
                expect(column.stringify()).to.equal("DISTINCT column");
            });
            it("Stringifies a COUNT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Count, columnName);
                expect(column.stringify()).to.equal("COUNT(column)");
            });
        });
        describe("toString", () => {
            it("Interpolates a non-predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.None, columnName);
                expect(`${column}`).to.equal("column");
            });
            it("Interpolates a DISTINCT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Distinct, columnName);
                expect(`${column}`).to.equal("DISTINCT column");
            });
            it("Interpolates a COUNT predicated {SequenceColumn}", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.Count, columnName);
                expect(`${column}`).to.equal("COUNT(column)");
            });
        });
    });
});
