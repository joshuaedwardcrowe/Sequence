import {expect} from "chai";
import {SequenceConditional} from "../src/SequenceConditional";
import {Conditional} from "../src/enums/Conditional";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";

describe("SequenceConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a conditional term and its column", () => {
                const column = new SequenceColumn(Predicate.None, "name");
                const conditional = new SequenceConditional(Conditional.NotIn, column);
                expect(conditional.stringify()).to.equal("name NOT IN");
            });
        });
    });
    describe("Static Methods", () => {
       describe("stringifyConditional", () => {
         it("Stringifies a Logical conditional", () => {
             const conditional = SequenceConditional.stringifyConditional(Conditional.Logical);
             expect(conditional).to.equal("")
         });
           it("Stringifies an In conditional", () => {
               const conditional = SequenceConditional.stringifyConditional(Conditional.In);
               expect(conditional).to.equal("IN");
           })
         it("Stringifies a Not In conditional", () => {
             const conditional = SequenceConditional.stringifyConditional(Conditional.NotIn);
             expect(conditional).to.equal("NOT IN");
         })
       });
    });
});
