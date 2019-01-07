// Testing imports
import {expect} from "chai";
// Dependencies
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";
// Tested import
import {SelectionOperation} from "../src/operations/SelectionOperation";

// Test data
let columnA: SequenceColumn;
let columnB: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.Count, "columnB");
});

describe("SelectionOperation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies into a wildcard if no columns are given", () => {
                const operation: SelectionOperation = new SelectionOperation();
                expect(operation.stringify()).to.equal("SELECT *");
            });
            it("Stringifies into a set of columns", () => {
                const operation: SelectionOperation = new SelectionOperation();
                operation.columns.push(columnA, columnB);
                expect(operation.stringify()).to.equal("SELECT columnA, COUNT(columnB)");
            });
        });
        describe("toString", () => {
            it("Interpolates into a wildcard if no columns are given", () => {
                const operation: SelectionOperation = new SelectionOperation();
                expect(`${operation}`).to.equal("SELECT *");
            });
            it("Interpolates into a set of columns", () => {
                const operation: SelectionOperation = new SelectionOperation();
                operation.columns.push(columnA, columnB);
                expect(`${operation}`).to.equal("SELECT columnA, COUNT(columnB)");
            });
        });
    });
});
