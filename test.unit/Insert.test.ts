// Testing imports
import {expect} from "chai";

// Dependencies
import {SequenceColumn} from "../src/SequenceColumn";
import {IntoLocation} from "../src/locations/IntoLocation";

// Tested imports
import {Insert} from "../src/Insert";
import {Predicate} from "../src/enums/Predicate";
import {Wrapping} from "../src/enums/Wrapping";
import {SequenceSupplement} from "../src/SequenceSupplement";

// Testing instance
let classUnderTest: Insert;

// Testing data
const tableName: string = "table";
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const columnBName: string = "columnB";
let columnB: SequenceColumn;
let numberValues: number[];
let stringValues: string[];

beforeEach(() => {
    classUnderTest = new Insert();
    columnA = new SequenceColumn(Predicate.None, columnAName);
    columnB = new SequenceColumn(Predicate.None, columnBName);
    numberValues = [1, 2, 3];
    stringValues = ["A", "B"];
});

describe("Insert", () => {
    describe("Instance Methods", () => {
        describe("into", () => {
            it("Sets the .location of the {Insert} to an {IntoLocation}", () => {
                expect(classUnderTest.location).to.be.undefined;
                classUnderTest.into(tableName, columnA);
                expect(classUnderTest.location).instanceOf(IntoLocation);
                const castedClassUnderTest: IntoLocation = classUnderTest.location as IntoLocation;
                expect(castedClassUnderTest.name).to.equal(tableName);
                expect(castedClassUnderTest.wrapping).to.equal(Wrapping.Parentheses);
                expect(castedClassUnderTest.columns).to.include(columnA);
            });
        });
        describe("values", () => {
            it("Sets the .supplement of the {Insert} with the {Number} values given", () => {
                expect(classUnderTest.supplement).to.be.undefined;
                classUnderTest.values(...numberValues);
                expect(classUnderTest.supplement).instanceOf(SequenceSupplement);
                expect(classUnderTest.supplement.values).to.include(1);
                expect(classUnderTest.supplement.values).to.include(2);
                expect(classUnderTest.supplement.values).to.include(3);
            });
            it("Supports passing {String} values by correcting them", () => {
                expect(classUnderTest.supplement).to.be.undefined;
                classUnderTest.values(...stringValues);
                expect(classUnderTest.supplement).instanceOf(SequenceSupplement);
                expect(classUnderTest.supplement.values).to.include("'A'");
                expect(classUnderTest.supplement.values).to.include("'B'");
            });
        });
        describe("where", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.where).throws(Error, `INSERT statements cannot have a WHERE clause`);
            });
        });
        describe("whereIn", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.whereIn).throws(Error, `INSERT statements cannot have a WHERE IN clause`);
            });
        });
        describe("whereNotIn", () => {
            it("Does not allow calling", () => {
                expect(classUnderTest.whereNotIn).throws(Error, `INSERT statements cannot have a WHERE NOT IN clause`);
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
            it("Stringifies an INSERT statement", () => {
                expect(classUnderTest.stringify()).to.equal("INSERT");
            });
            it("Stringifies an INSERT INTO statement", () => {
               classUnderTest
                   .into(tableName, columnA, columnB);
               expect(classUnderTest.stringify()).to.equal(`INSERT INTO ${tableName} (${columnAName}, ${columnBName})`);
            });
            it("Stringifies an INSERT INTO VALUES statement", () => {
                classUnderTest
                    .into(tableName, columnA, columnB)
                    .values(...stringValues);
                expect(classUnderTest.stringify()).to.equal(`INSERT INTO ${tableName} (${columnAName}, ${columnBName}) VALUES ('${stringValues.join("', '")}')`);
            });
        });
    });
});
