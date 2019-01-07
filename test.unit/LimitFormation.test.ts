// Testing imports
import {expect} from "chai";

// Tested imports
import {LimitFormation} from "../src/formations/LimitFormation";

describe("LimitFormation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a LIMIT statement", () => {
                const formation: LimitFormation = new LimitFormation(25);
                expect(formation.stringify()).to.equal("LIMIT 25");
            });
        });
        describe("toString", () => {
            it("Interpolates into a LIMIT statement", () => {
                const formation: LimitFormation = new LimitFormation(25);
                expect(`${formation}`).to.equal("LIMIT 25");
            });
        });
    });
});
