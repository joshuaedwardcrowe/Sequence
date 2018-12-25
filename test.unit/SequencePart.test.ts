import {expect} from "chai";
import {SequencePart} from "../src/SequencePart";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

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
    });
});
