// Testing imports
import {expect} from "chai";
// Dependencies
import {Conditional} from "../src/enums/Conditional";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
// Testing import:
import {SequenceConditional} from "../src/SequenceConditional";

// Testing data
const columnAName: string = "name";
const columnAPredicate: Predicate = Predicate.None;
let columnA: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
});

describe("SequenceConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies an IN {SequenceConditional} term and its {SequenceColumn}", () => {
               const conditional: SequenceConditional = new SequenceConditional(Conditional.In, columnA);
               expect(conditional.stringify()).to.equal("name IN");
            });
            it("Stringifies a NOT IN {SequenceConditional} term and its {SequenceColumn}", () => {
                const conditional: SequenceConditional = new SequenceConditional(Conditional.NotIn, columnA);
                expect(conditional.stringify()).to.equal("name NOT IN");
            });
        });
        describe("toString", () => {
            it("Interpolates an IN {SequenceConditional} term and its {SequenceColumn}", () => {
                const conditional: SequenceConditional = new SequenceConditional(Conditional.In, columnA);
                expect(`${conditional}`).to.equal("name IN");
            });
            it("Interpolates a NOT IN {SequenceConditional} term and its {SequenceColumn}", () => {
                const conditional: SequenceConditional = new SequenceConditional(Conditional.NotIn, columnA);
                expect(`${conditional}`).to.equal("name NOT IN");
            });
        });
    });
});
