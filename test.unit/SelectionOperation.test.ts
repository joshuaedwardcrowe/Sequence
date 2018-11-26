import {expect} from "chai";
import {SelectionOperation} from "../src/operations/SelectionOperation";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";

describe("SelectionOperation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Generates a wildcard if no columns are given", () => {
                const operation = new SelectionOperation();
                expect(operation.stringify()).to.equal("SELECT *");
            });
            it("Generates a set of columns", () => {
                const operation = new SelectionOperation();
                operation.columns.push(new SequenceColumn(Predicate.None, "name"));
                operation.columns.push(new SequenceColumn(Predicate.Count, "age"));
                expect(operation.stringify()).to.equal("SELECT name, COUNT(age)");
            });
        });
    });
});
