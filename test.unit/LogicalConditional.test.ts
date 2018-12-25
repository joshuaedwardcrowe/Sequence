import {expect} from "chai";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
import {LogicalOperator} from "../src/enums/LogicalOperator";
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
    describe("Static Methods", () => {
        describe("stringifyLogicalOperator", () => {
           it("Stringifies a Greater Than operator", () => {
              const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.GreaterThan);
              expect(operator).to.equal(">");
           });
           it("Stringifies a Greater Than Or Equality operator", () => {
               const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.GreaterThanOrEquality);
               expect(operator).to.equal(">=");
           });
           it("Stringifies an Equality operator", () => {
               const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.Equality);
               expect(operator).to.equal("=");
           });
           it("Stringifies a Less Than or Equality operator", () => {
               const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.LessThanOrEquality);
               expect(operator).to.equal("<=");
           });
           it("Stringifies a Less Than operator", () => {
                const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.LessThan);
                expect(operator).to.equal("<");
           });
           it("Stringifies a Division operator", () => {
                const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.Division);
                expect(operator).to.equal("/");
            });
           it("Stringifies a Modulo operator", () => {
               const operator = LogicalConditional.stringifyLogicalOperator(LogicalOperator.Modulo);
               expect(operator).to.equal("%");
            });
        });
    });
});
