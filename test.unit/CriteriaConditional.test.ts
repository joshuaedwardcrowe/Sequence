import {expect} from "chai";
import {CriteriaConditional} from "../src/conditionals/CriteriaConditional";
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";

describe("CriteriaConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new CriteriaConditional(Conditional.In, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name IN ('john', 'james')");
            });
            it("Stringifies a NOT IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new CriteriaConditional(Conditional.NotIn, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name NOT IN ('john', 'james')");
            });
        });
    });
});
