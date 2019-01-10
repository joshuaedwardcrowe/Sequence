// Testing imports
import {expect} from "chai";
// Dependencies
import {ColumnOperation} from "../src/operations/ColumnOperation";
import {Predicate} from "../src/enums/Predicate";
import {Operation} from "../src/enums/Operation";
import {SequenceColumn} from "../src/SequenceColumn";
import {SequenceLocation} from "../src/locations/SequenceLocation";
import {Location} from "../src/enums/Location";
import {LogicalOperator} from "../src/enums/LogicalOperator";
// Tested import
import {Select} from "../src/Select";
import {Arrangement} from "../src/enums/Arrangement";
import {Delete} from "../src/Delete";

// Testing instance
let classUnderTest: Delete;

// Test data
const tableName: string = "table";
const columnAName: string = "columnA";
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let numberComparisonValue: number;
let stringComparisonValue: string;
let stringComparisonValues: string[];

beforeEach(() => {
    classUnderTest = new Delete();
    columnA = new SequenceColumn(Predicate.None, columnAName);
    columnB = new SequenceColumn(Predicate.None, "columnB");
    numberComparisonValue = 1;
    stringComparisonValue = "A";
    stringComparisonValues = ["A", "B", "C"];
});

describe("Delete", () => {
    describe("Instance Methods", () => {
        describe("column", () => {
            it("Adds a {SequenceColumn} to the {Select}'s {ColumnOperation}'s .columns collection", () => {
                classUnderTest.operation = new ColumnOperation(Operation.Select);
                expect(classUnderTest.operation.columns).to.be.empty;
                classUnderTest.column(columnA);
                classUnderTest.column(columnB);
                expect(classUnderTest.operation.columns).to.not.be.empty;
                expect(classUnderTest.operation.columns.length).to.equal(2);
                expect(classUnderTest.operation.columns).to.include(columnA);
                expect(classUnderTest.operation.columns).to.include(columnB);
            });
        });
        describe("from", () => {
            it("Sets the .location to a {SequenceLocation} with a {Location} of From", () => {
                expect(classUnderTest.location).to.be.undefined;
                classUnderTest.from(tableName);
                expect(classUnderTest.location).instanceOf(SequenceLocation);
                expect(classUnderTest.location.location).to.equal(Location.From);
                expect(classUnderTest.location.name).to.equal(tableName);
            });
        });
        describe("orderBy", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.orderBy).throws(Error, `INSERT statements cannot have an ORDER BY clause`);
            });
        });
        describe("groupBy", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.groupBy).throws(Error, `INSERT statements cannot have a GROUP BY clause`);
            });
        });
        describe("limit", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.limit).throws(Error, `INSERT statements cannot have a LIMIT clause`);
            });
        });
        describe("stringify", () => {
            it("Stringifies a DELETE statement", () => {
                expect(classUnderTest.stringify()).to.equal("DELETE");
            });
            it("Stringifies a DELETE FROM statement", () => {
                classUnderTest.from(tableName);
                expect(classUnderTest.stringify()).to.equal(`DELETE FROM ${tableName}`);
            });
            it("Stringifies a DELETE FROM WHERE statement", () => {
                classUnderTest
                    .from(tableName)
                    .where(columnA, LogicalOperator.Equality, numberComparisonValue);
                expect(classUnderTest.stringify()).to.equal(`DELETE FROM ${tableName} WHERE ${columnAName} = ${numberComparisonValue}`);
            });
            it("Stringifies a DELETE FROM WHERE IN statement", () => {
                classUnderTest
                    .from(tableName)
                    .whereIn(columnA, ...stringComparisonValues);
                expect(classUnderTest.stringify()).to.equal(`DELETE FROM ${tableName} WHERE ${columnAName} IN ('${stringComparisonValues.join("', '")}')`);
            });
            it("Stringifies a DELETE FROM WHERE NOT IN statement", () => {
                classUnderTest
                    .from(tableName)
                    .whereNotIn(columnA, ...stringComparisonValues);
                expect(classUnderTest.stringify()).to.equal(`DELETE FROM ${tableName} WHERE ${columnAName} NOT IN ('${stringComparisonValues.join("', '")}')`);
            });
        });
    });
});
