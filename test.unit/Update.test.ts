// Testing imports
import {expect} from "chai";
import {Update} from "../src/Update";
import {SequenceLocation} from "../src/locations/SequenceLocation";
import {Location} from "../src/enums/Location";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
import {LogicalOperator} from "../src/enums/LogicalOperator";

// Test instance
let classUnderTest: Update;

// Test data
const tableName: string = "table";
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const comparisonValue: string = "comparisonValue";

beforeEach(() => {
    classUnderTest = new Update();
    columnA = new SequenceColumn(columnAPredicate, columnAName);
});

describe("Update", () => {
    describe("Instance Methods", () => {
        describe("table", () => {
            it("Sets the .location to a {SequenceLocation} with a {Location} of None", () => {
                expect(classUnderTest.location).to.be.undefined;
                classUnderTest.table(tableName);
                expect(classUnderTest.location).instanceOf(SequenceLocation);
                expect(classUnderTest.location.name).to.equal(tableName);
                expect(classUnderTest.location.location).to.equal(Location.None);
            });
        });
        describe("column", () => {
            it("Adds a {SequenceAssignation} to the {SequenceAssignment}", () => {
                expect(classUnderTest.assignment.assignations).to.have.length(0);
                classUnderTest.column(columnA, comparisonValue);
                expect(classUnderTest.assignment.assignations).to.have.length(1);
                expect(classUnderTest.assignment.assignations[0].column).to.equal(columnA);
                expect(classUnderTest.assignment.assignations[0].logicalOperator).to.equal(LogicalOperator.Equality);
                expect(classUnderTest.assignment.assignations[0].value).to.equal(`'${comparisonValue}'`);
            });
        });
        describe("orderBy", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.orderBy).throws(Error, `UPDATE statements cannot have an ORDER BY clause`);
            });
        });
        describe("groupBy", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.groupBy).throws(Error, `UPDATE statements cannot have a GROUP BY clause`);
            });
        });
        describe("limit", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.limit).throws(Error, `UPDATE statements cannot have a LIMIT clause`);
            });
        });
        describe("stringify", () => {
            it("Stringifies an UPDATE statement", () => {
                classUnderTest
                    .table(tableName);
                expect(classUnderTest.stringify()).to.equal(`UPDATE ${tableName} SET`);
            });
            it("Stringifies an UPDATE SET statement", () => {
                classUnderTest
                    .table(tableName)
                    .column(columnA, comparisonValue);
                expect(classUnderTest.stringify()).to.equal(`UPDATE ${tableName} SET ${columnAName} = '${comparisonValue}'`);
            });
            it("Stringifies an UPDATE SET WHERE", () => {
                classUnderTest
                    .table(tableName)
                    .column(columnA, comparisonValue)
                    .where(columnA, LogicalOperator.Equality, comparisonValue);
                expect(classUnderTest.stringify()).to.equal(`UPDATE ${tableName} SET ${columnAName} = '${comparisonValue}' WHERE ${columnAName} = '${comparisonValue}'`);
            });
            it("Stringifies an UPDATE SET WHERE IN", () => {
                classUnderTest
                    .table(tableName)
                    .column(columnA, comparisonValue)
                    .whereIn(columnA, ...[comparisonValue]);
                expect(classUnderTest.stringify()).to.equal(`UPDATE ${tableName} SET ${columnAName} = '${comparisonValue}' WHERE ${columnAName} IN ('${comparisonValue}')`);
            });
            it("Stringifies an UPDATE SET WHERE NOT IN", () => {
                classUnderTest
                    .table(tableName)
                    .column(columnA, comparisonValue)
                    .whereIn(columnA, ...[comparisonValue]);
                expect(classUnderTest.stringify()).to.equal(`UPDATE ${tableName} SET ${columnAName} = '${comparisonValue}' WHERE ${columnAName} IN ('${comparisonValue}')`);
            });
        });
    });
});
