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
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let numberValues: number[];
let stringValues: string[];

beforeEach(() => {
    classUnderTest = new Insert();
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.None, "columnB");
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
            it("Supports passing {String} values, correcting them", () => {
                expect(classUnderTest.supplement).to.be.undefined;
                classUnderTest.values(...stringValues);
                expect(classUnderTest.supplement).instanceOf(SequenceSupplement);
                expect(classUnderTest.supplement.values).to.include("'A'");
                expect(classUnderTest.supplement.values).to.include("'B'");
            });
        });
        describe("stringify", () => {
            it("Stringifies an INSERT statement", () => {
                classUnderTest.into(tableName, columnA, columnB).values(...stringValues);
                expect(classUnderTest.stringify()).to.equal("INSERT INTO table (columnA, columnB) VALUES ('A', 'B')");
            });
        });
        describe("toString", () => {
            it("Interpolates as an INSERT statement", () => {
                classUnderTest.into(tableName, columnA, columnB).values(...stringValues);
                expect(`${classUnderTest}`).to.equal("INSERT INTO table (columnA, columnB) VALUES ('A', 'B')");
            });
        });
    });
});
