import {expect} from "chai";
import {Insert} from "../src/Insert";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";
import {IntoLocation} from "../src/locations/IntoLocation";
import {Wrapping} from "../src/enums/Wrapping";
import {SequenceSupplement} from "../src/SequenceSupplement";

describe("Insert", () => {
    describe("Instance Methods", () => {
        describe("into", () => {
            it("Sets the location to an IntoLocation", () => {
                const insert: Insert = new Insert();
                expect(insert.location).to.be.undefined;
                const column: SequenceColumn = new SequenceColumn(Predicate.None, "Column");
                insert.into("Table", column);
                expect(insert.location).instanceOf(IntoLocation);
                expect((insert.location as IntoLocation).name).to.equal("Table");
                expect((insert.location as IntoLocation).wrapping).to.equal(Wrapping.Parentheses);
                expect((insert.location as IntoLocation).columns).to.include(column);
            });
        });
        describe("values", () => {
            it("Sets the supplement to a SequenceSupplement of Values", () => {
                const insert: Insert = new Insert();
                expect(insert.supplement).instanceOf(SequenceSupplement);
                expect(insert.supplement.values).to.be.empty;
                insert.values(1, 2, 3);
                expect(insert.supplement.values).to.include(1);
                expect(insert.supplement.values).to.include(2);
                expect(insert.supplement.values).to.include(3);
            });
        });
        describe("stringify", () => {
            it("Stringifies an INSERT statement", () => {
                const colA: SequenceColumn = new SequenceColumn(Predicate.None, "colA");
                const colB: SequenceColumn = new SequenceColumn(Predicate.None, "colB");
                const insert: Insert = new Insert()
                    .into("Table", colA, colB)
                    .values(1, 2);
                expect(insert.stringify()).to.equal("INSERT INTO Table (colA, colB) VALUES (1, 2)");
            });
        });
    });
});
