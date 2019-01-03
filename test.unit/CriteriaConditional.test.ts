// Testing import
import {expect} from "chai";

// Dependencies
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {CriteriaConditional} from "../src/conditionals/CriteriaConditional";

// Testing import
import {SequenceColumn} from "../src/SequenceColumn";

describe("CriteriaConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new CriteriaConditional(Conditional.In, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name IN ('john', 'james')");
            });
            it("Stringifies an IN clause with a column", () => {
                const comparingColumn: SequenceColumn = new SequenceColumn(Predicate.None, "comparingColumn");
                const includedColumn: SequenceColumn = new SequenceColumn(Predicate.Count, "includedColumn");
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.In, comparingColumn, includedColumn);
                expect(conditional.stringify()).to.equal("comparingColumn IN (COUNT(includedColumn))")
            });
            it("Stringifies a NOT IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new CriteriaConditional(Conditional.NotIn, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name NOT IN ('john', 'james')");
            });
            it("Stringifies an IN clause with a column", () => {
                const comparingColumn: SequenceColumn = new SequenceColumn(Predicate.None, "comparingColumn");
                const includedColumn: SequenceColumn = new SequenceColumn(Predicate.Count, "includedColumn");
                const conditional: CriteriaConditional = new CriteriaConditional(Conditional.NotIn, comparingColumn, includedColumn);
                expect(conditional.stringify()).to.equal("comparingColumn NOT IN (COUNT(includedColumn))")
            });
        });
    });
});
