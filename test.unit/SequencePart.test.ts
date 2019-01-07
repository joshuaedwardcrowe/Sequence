import {expect} from "chai";
import {SequencePart} from "../src/SequencePart";
import {Wrapping} from "../src/enums/Wrapping";

describe("SequencePart",  () => {
    describe("Static Methods", () => {
        describe("stringifyWrapping", () => {
            it("Wraps a set of values in punctuation marks", () => {
                const wrapped = SequencePart.stringifyWrapping(Wrapping.Parentheses, [1, 2, 3]);
                expect(wrapped).to.equal("(1, 2, 3)");
            })
        })
    });
});
