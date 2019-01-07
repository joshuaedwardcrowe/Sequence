// Testing import
import {expect} from "chai";

// Dependencies
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {CriteriaConditional} from "../src/conditionals/CriteriaConditional";

// Testing import
import {SequenceColumn} from "../src/SequenceColumn";

// Test data.
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let valueA: string;
let valueB: string;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.Count, "columnB");
    valueA = `'valueA'`;
    valueB = `'valueB'`;
});

describe("CriteriaConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN clause", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, valueA, valueB);
                expect(conditional.stringify()).to.equal("columnA IN ('valueA', 'valueB')");
            });
            it("Stringifies an IN clause with a column", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, columnB);
                expect(conditional.stringify()).to.equal("columnA IN (COUNT(columnB))")
            });
            it("Stringifies a NOT IN clause", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, valueA, valueB);
                expect(conditional.stringify()).to.equal("columnA NOT IN ('valueA', 'valueB')");
            });
            it("Stringifies an NOT IN clause with a column", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, columnB);
                expect(conditional.stringify()).to.equal("columnA NOT IN (COUNT(columnB))")
            });
        });
        describe("toString", () => {
            it("Interpolates as an IN clause", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, valueA, valueB);
                expect(`${conditional}`).to.equal("columnA IN ('valueA', 'valueB')");
            });
            it("Interpolates as an IN clause with a column", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.In, columnA, columnB);
                expect(`${conditional}`).to.equal("columnA IN (COUNT(columnB))")
            });
            it("Interpolates a NOT IN clause", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, valueA, valueB);
                expect(`${conditional}`).to.equal("columnA NOT IN ('valueA', 'valueB')");
            });
            it("Interpolates as an NOT IN clause with a column", () => {
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, columnA, columnB);
                expect(`${conditional}`).to.equal("columnA NOT IN (COUNT(columnB))")
            });
        })
    });
});
