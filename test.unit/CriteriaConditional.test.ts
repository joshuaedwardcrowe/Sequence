// Testing import
import {expect} from "chai";
// Dependencies
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
// Testing import
import {CriteriaConditional} from "../src/conditionals/CriteriaConditional";

// Test data.
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const columnBPredicate: Predicate = Predicate.Count;
const columnBName: string = "columnB";
let columnB: SequenceColumn;
let valueA: string;
let valueB: string;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
    columnB = new SequenceColumn(columnBPredicate, columnBName);
    valueA = `'valueA'`;
    valueB = `'valueB'`;
});

describe("CriteriaConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN clause against a {SequenceColumn} and two {String} values", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, valueA, valueB);
                expect(classUnderTest.stringify()).to.equal("columnA IN ('valueA', 'valueB')");
            });
            it("Stringifies an IN clause with against a {SequenceColumn} with a {SequenceColumn} as a value", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, columnB);
                expect(classUnderTest.stringify()).to.equal("columnA IN (COUNT(columnB))");
            });
            it("Stringifies a NOT IN clause against a {SequenceColumn} with two {String} values", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, valueA, valueB);
                expect(classUnderTest.stringify()).to.equal("columnA NOT IN ('valueA', 'valueB')");
            });
            it("Stringifies an NOT IN clause against a {SequenceColumn} with a {SequenceColumn as a value", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, columnB);
                expect(classUnderTest.stringify()).to.equal("columnA NOT IN (COUNT(columnB))");
            });
        });
        describe("toString", () => {
            it("Interpolates an IN clause against a {SequenceColumn} and two {String} values", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, valueA, valueB);
                expect(`${classUnderTest}`).to.equal("columnA IN ('valueA', 'valueB')");
            });
            it("Interpolates an IN clause with against a {SequenceColumn} with a {SequenceColumn} as a value", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, columnB);
                expect(`${classUnderTest}`).to.equal("columnA IN (COUNT(columnB))");
            });
            it("Interpolates a NOT IN clause against a {SequenceColumn} with two {String} values", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, valueA, valueB);
                expect(`${classUnderTest}`).to.equal("columnA NOT IN ('valueA', 'valueB')");
            });
            it("Interpolates an NOT IN clause against a {SequenceColumn} with a {SequenceColumn as a value", () => {
                const classUnderTest: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, columnB);
                expect(`${classUnderTest}`).to.equal("columnA NOT IN (COUNT(columnB))");
            });
        });
    });
});
