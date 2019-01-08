// Testing imports
import {expect} from "chai";

// Dependencies
import {SequenceColumn} from "../../src/SequenceColumn";
import {Predicate} from "../../src/enums/Predicate";

// Tested import
import {IntoLocation} from "../../src/locations/IntoLocation";

// Testing instance
let classUnderTest: IntoLocation;

// Test data
const tableName = "table";
let columnA: SequenceColumn
let columnB: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.None, "columnB");
    classUnderTest = new IntoLocation(tableName, columnA, columnB);
});

describe("IntoLocation", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies an INTO statement", () => {
                expect(classUnderTest.stringify()).to.equal("INTO table (columnA, columnB)");
            });
        });
        describe("toString", () => {
            it("Interpolates as an INTO clause", () => {
                expect(`${classUnderTest}`).to.equal("INTO table (columnA, columnB)");
            });
        });
    });
});
