// Testing imports
import {expect} from "chai";
// Dependencies
import {SequenceColumn} from "../../src/SequenceColumn";
import {Predicate} from "../../src/enums/Predicate";
// Tested import
import {SelectionOperation} from "../../src/operations/SelectionOperation";

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
            it("Stringifies a SELECT * statement", () => {
                const operation: SelectionOperation = new SelectionOperation();
                expect(operation.stringify()).to.equal("SELECT *");
            });
            it("Stringifies a SELECT columnA, columnB statement", () => {
                const operation: SelectionOperation = new SelectionOperation();
                operation.columns.push(columnA, columnB);
                expect(operation.stringify()).to.equal("SELECT columnA, COUNT(columnB)");
            });
        });
        describe("toString", () => {
            it("Interpolates a SELECT * statement", () => {
                const operation: SelectionOperation = new SelectionOperation();
                expect(`${operation}`).to.equal("SELECT *");
            });
            it("Interpolates a SELECT columnA, columnB statement", () => {
                const operation: SelectionOperation = new SelectionOperation();
                operation.columns.push(columnA, columnB);
                expect(`${operation}`).to.equal("SELECT columnA, COUNT(columnB)");
            });
        });
    });
});
