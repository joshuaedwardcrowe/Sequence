import {expect} from "chai";
import {SequenceSupplement} from "../../src/supplements/SequenceSupplement";
import {Supplement} from "../../src/enums/Supplement";
import {Wrapping} from "../../src/enums/Wrapping";

describe("SequenceSupplement", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies a supplementary statement", () => {
                const supplement: SequenceSupplement = new SequenceSupplement(Supplement.Values, Wrapping.Parentheses, 1, 2, 3);
                expect(supplement.stringify()).to.equal("VALUES (1, 2, 3)");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifySupplement", () => {
            it("Stringifies a Values supplement", () => {
                const supplement: string = SequenceSupplement.stringifySupplement(Supplement.Values);
                expect(supplement).to.equal("VALUES");
            })
        })
    })
});
