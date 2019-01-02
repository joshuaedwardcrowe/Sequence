import {expect} from "chai";
import {SequencePart} from "../src/SequencePart";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";
import {Wrapping} from "../src/enums/Wrapping";

describe("SequencePart",  () => {
    describe("Static Methods", () => {
        describe("stringifyCoalescingOperator", () => {
            it("Stringifies a None coalescing operator", () => {
                const operator = SequencePart.stringifyCoalescingOperator(CoalescingOperator.None);
                expect(operator).to.equal("");
            });
            it("Stringifies an AND coalescing operator", () => {
                const operator = SequencePart.stringifyCoalescingOperator(CoalescingOperator.And);
                expect(operator).to.equal("AND");
            });
        });
        describe("stringifyWrapping", () => {
            it("Wraps a set of values in punctuation marks", () => {
                const wrapped = SequencePart.stringifyWrapping(Wrapping.Parentheses, [1, 2, 3]);
                expect(wrapped).to.equal("(1, 2, 3)");
            })
        })
    });
});
