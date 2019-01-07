// Testing imports
import {expect} from "chai";

// Dependencies
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";

// Tested import
import {IntoLocation} from "../src/locations/IntoLocation";

// Test data
const tableName = "table";
let columnA: SequenceColumn
let columnB: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.None, "columnB");
});

describe("IntoLocation", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies an Into statement", () => {
                const into: IntoLocation = new IntoLocation(tableName, columnA, columnB);
                expect(into.stringify()).to.equal("INTO table (columnA, columnB)");
            });
            it("Ignores the predicates of columns", () => {
                const into: IntoLocation = new IntoLocation(tableName, columnA, columnB);
                expect(into.stringify()).to.equal("INTO table (columnA, columnB)");
            });
        });
        describe("toString", () => {
            it("Interpolates as an INTO clause", () => {
                const into: IntoLocation = new IntoLocation(tableName, columnA, columnB);
                expect(`${into}`).to.equal("INTO table (columnA, columnB)");
            });
        });
    });
});
