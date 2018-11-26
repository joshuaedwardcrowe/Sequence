import {expect} from "chai";
import {LimitDefault} from "../src/defaults/LimitDefault";

describe("LimitDefault",  () => {
    describe("Instance Methods",  () => {
        describe("toString", () => {
            it("When interpolated, turns into a LIMIT statement", () => {
                const test = new LimitDefault(25);
                expect(`${test}`).to.equal("LIMIT 25");
            });
        });
    });
});
