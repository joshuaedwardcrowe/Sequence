import {expect} from "chai";
import {SequenceCondition} from "../src/SequenceCondition";
import {Condition} from "../src/enums/Condition";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {LogicalConditional} from "../src/conditionals/LogicalConditional";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

describe("SequenceCondition",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a set of conditionals", () => {
               const condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
               const columnA = new SequenceColumn(Predicate.Count, "age");
               const columnB = new SequenceColumn(Predicate.None, "name");
               const conditionalA = new LogicalConditional(columnA, LogicalOperator.GreaterThanOrEquality, 25);
               const conditionalB = new LogicalConditional(columnB, LogicalOperator.Equality, `'Test'`);
               condition.conditionals.push(conditionalA);
               condition.conditionals.push(conditionalB);
               expect(condition.stringify()).to.equal("WHERE COUNT(age) >= 25 AND name = 'Test'");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifyCondition", () => {
            it("Stringifies a Where condition", () => {
                const condition = SequenceCondition.stringifyCondition(Condition.Where);
                expect(condition).to.equal("WHERE");
            });
            it("Stringifies an ON condition", () => {
                const condition = SequenceCondition.stringifyCondition(Condition.On);
                expect(condition).to.equal("ON");
            });
        });
    });
});
