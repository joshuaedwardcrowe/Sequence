import {expect} from "chai";
import {ParenthesesConditional} from "../src/conditionals/ParenthesesConditional";
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";

describe("ParenthesesConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new ParenthesesConditional(Conditional.In, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name IN ('john', 'james')");
            });
            it("Stringifies a NOT IN clause", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new ParenthesesConditional(Conditional.NotIn, column, `'john'`, `'james'`);
                expect(conditional.stringify()).to.equal("name NOT IN ('john', 'james')");
            })
        });
    });
});
