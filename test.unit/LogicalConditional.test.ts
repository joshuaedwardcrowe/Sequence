// Testing imports
import {expect} from "chai";

// Dependencies
import {Predicate} from "../src/enums/Predicate";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {SequenceColumn} from "../src/SequenceColumn";

// Tested import
import {LogicalConditional} from "../src/conditionals/LogicalConditional";

describe("LogicalConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a greater than clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.GreaterThan, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) > 25");
            });
            it("Stringifies a division clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.Division, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) / 25");
            });
            it("Stringifies a equality clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.Equality, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) = 25");
            });
            it("Stringifies a greater than/equality clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.GreaterThanOrEquality, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) >= 25");
            });
            it("Stringifies a less than clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.LessThan, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) < 25");
            });
            it("Stringifies a less than/equality clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.LessThanOrEquality, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) <= 25");
            });
            it("Stringifies a modulo clause", () => {
                const column = new SequenceColumn(Predicate.Count, "age");
                const conditional = new LogicalConditional(column, LogicalOperator.Modulo, 25);
                expect(conditional.stringify()).to.equal("COUNT(age) % 25");
            });
        });
    });
});
