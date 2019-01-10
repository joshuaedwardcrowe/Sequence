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

// Testing instance
let select: Select;

// Test data
const tableName: string = "table";
const columnAName: string = "columnA";
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let numberComparisonValue: number;
let stringComparisonValue: string;
let stringComparisonValues: string[];

beforeEach(() => {
    select = new Select();
    columnA = new SequenceColumn(Predicate.None, columnAName);
    columnB = new SequenceColumn(Predicate.None, "columnB");
    numberComparisonValue = 1;
    stringComparisonValue = "A";
    stringComparisonValues = ["A", "B", "C"];
});

describe("Select", () => {
    describe("Instance Methods", () => {
        describe("column", () => {
            it("Adds a {SequenceColumn} to the {Select}'s {ColumnOperation}'s .columns collection", () => {
                select.operation = new ColumnOperation(Operation.Select);
                expect(select.operation.columns).to.be.empty;
                select.column(columnA);
                select.column(columnB);
                expect(select.operation.columns).to.not.be.empty;
                expect(select.operation.columns.length).to.equal(2);
                expect(select.operation.columns).to.include(columnA);
                expect(select.operation.columns).to.include(columnB);
            });
        });
        describe("from", () => {
            it("Sets the .location to a {SequenceLocation} with a {Location} of From", () => {
                expect(select.location).to.be.undefined;
                select.from(tableName);
                expect(select.location).instanceOf(SequenceLocation);
                expect(select.location.location).to.equal(Location.From);
                expect(select.location.name).to.equal(tableName);
            });
        });
        describe("stringify", () => {
            it("Stringifies a SELECT * statement", () => {
                expect(select.stringify()).to.equal("SELECT *");
            });
            it("Stringifies a SELECT * FROM statement", () => {
               select.from(tableName);
               expect(select.stringify()).to.equal(`SELECT * FROM ${tableName}`);
            });
            it("Stringifies a SELECT * FROM WHERE statement", () => {
                select
                    .from(tableName)
                    .where(columnA, LogicalOperator.Equality, numberComparisonValue);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} WHERE ${columnAName} = ${numberComparisonValue}`);
            });
            it("Stringifies a SELECT * FROM WHERE IN statement", () => {
                select
                    .from(tableName)
                    .whereIn(columnA, ...stringComparisonValues);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} WHERE ${columnAName} IN ('${stringComparisonValues.join("', '")}')`);
            });
            it("Stringifies a SELECT * FROM WHERE NOT IN statement", () => {
                select
                    .from(tableName)
                    .whereNotIn(columnA, ...stringComparisonValues);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} WHERE ${columnAName} NOT IN ('${stringComparisonValues.join("', '")}')`);
            });
            it("Stringifies a SELECT * FROM ORDER BY statement", () => {
                select
                    .from(tableName)
                    .orderBy(columnA, Arrangement.Ascending);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} ORDER BY ${columnAName} ASCENDING`);
            });
            it("Stringifies a SELECT * FROM GROUP BY statement", () => {
                select
                    .from(tableName)
                    .groupBy(columnA, Arrangement.Ascending);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} GROUP BY ${columnAName} ASCENDING`);
            });
            it("Stringifies a SELECT * FROM LIMIT statement", () => {
                select
                    .from(tableName)
                    .limit(numberComparisonValue);
                expect(select.stringify()).to.equal(`SELECT * FROM ${tableName} LIMIT ${numberComparisonValue}`);
            });
        });
    });
});
