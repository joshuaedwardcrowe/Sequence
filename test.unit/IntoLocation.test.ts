import {expect} from "chai";
import {IntoLocation} from "../src/locations/IntoLocation";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";

describe("IntoLocation", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies an Into statement", () => {
                const columnA = new SequenceColumn(Predicate.None, "columnA");
                const columnB = new SequenceColumn(Predicate.None, "columnB");
                const into = new IntoLocation("Table", columnA, columnB);
                expect(into.stringify()).to.equal("INTO Table (columnA, columnB)");
            });
            it("Ignores the predicates of columns", () => {
                const columnA = new SequenceColumn(Predicate.Count, "columnA");
                const columnB = new SequenceColumn(Predicate.Count, "columnB");
                const into = new IntoLocation("Table", columnA, columnB);
                expect(into.stringify()).to.equal("INTO Table (columnA, columnB)");
            })
        })
    })
})
