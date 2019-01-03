// Testing imports
import {expect} from "chai";

// Dependencies
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";

// Testing import:
import {SequenceConditional} from "../src/SequenceConditional";

describe("SequenceConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN conditional term and its column", () => {
               const column: SequenceColumn = new SequenceColumn(Predicate.None, "name");
               const conditional: SequenceConditional = new SequenceConditional(Conditional.In, column);
               expect(conditional.stringify()).to.equal("name IN");
            });
            it("Stringifies a NOT IN conditional term and its column", () => {
                const column: SequenceColumn = new SequenceColumn(Predicate.None, "name");
                const conditional: SequenceConditional = new SequenceConditional(Conditional.NotIn, column);
                expect(conditional.stringify()).to.equal("name NOT IN");
            });
        });
    });
});
