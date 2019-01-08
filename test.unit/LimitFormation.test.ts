// Testing imports
import {expect} from "chai";

// Tested imports
import {LimitFormation} from "../src/formations/LimitFormation";

// Testing instance
let classUnderTest: LimitFormation;

// Testing data
const amount: number = 25;

beforeEach(() => {
    classUnderTest = new LimitFormation(amount);
});

describe("LimitFormation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a LIMIT statement", () => {
                expect(classUnderTest.stringify()).to.equal("LIMIT 25");
            });
        });
        describe("toString", () => {
            it("Interpolates into a LIMIT statement", () => {
                expect(`${classUnderTest}`).to.equal("LIMIT 25");
            });
        });
    });
});
