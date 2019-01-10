// Testing imports
import {expect} from "chai";
// Dependencies
import {SequenceColumn} from "../../src/SequenceColumn";
import {Predicate} from "../../src/enums/Predicate";
// Tested import
import {ColumnOperation} from "../../src/operations/ColumnOperation";
import {Operation} from "../../src/enums/Operation";

// Test data
let columnA: SequenceColumn;
let columnB: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.Count, "columnB");
});

describe("ColumnOperation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a SELECT * statement", () => {
                const operation: ColumnOperation = new ColumnOperation(Operation.Select);
                expect(operation.stringify()).to.equal("SELECT *");
            });
            it("Stringifies a SELECT columnA, columnB statement", () => {
                const operation: ColumnOperation = new ColumnOperation(Operation.Select);
                operation.columns.push(columnA, columnB);
                expect(operation.stringify()).to.equal("SELECT columnA, COUNT(columnB)");
            });
        });
    });
});
