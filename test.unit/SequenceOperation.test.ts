import {expect} from "chai";
import {SequenceOperation} from "../src/SequenceOperation";
import Operation from "../src/enums/Operation";

describe("SequenceOperation",  () => {
    describe("Static Methods", () => {
        describe("stringifyOperation", () => {
            it("Stringifies a Select operation", () => {
                const operation = SequenceOperation.stringifyOperation(Operation.Select);
                expect(operation).to.equal("SELECT");
            });
        });
    })
});
