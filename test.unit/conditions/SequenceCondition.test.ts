// Testing imports
import {expect} from "chai";

// Dependencies
import {Condition} from "../../src/enums/Condition";
import {SequenceColumn} from "../../src/columns/SequenceColumn";
import {Predicate} from "../../src/enums/Predicate";
import {LogicalOperator} from "../../src/enums/LogicalOperator";
import {LogicalConditional} from "../../src/conditions/conditionals/LogicalConditional";
import {CoalescingOperator} from "../../src/enums/CoalescingOperator";

// Tested import
import {SequenceCondition} from "../../src/conditions/SequenceCondition";

// Testing instance
let condition: SequenceCondition;

// Test data
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let logicalConditionalA: LogicalConditional;
let logicalConditionalB: LogicalConditional;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.Count, "age");
    columnB = new SequenceColumn(Predicate.None, "name");
    logicalConditionalA = new LogicalConditional(columnA, LogicalOperator.GreaterThanOrEquality, 25);
    logicalConditionalB = new LogicalConditional(columnB, LogicalOperator.Equality, `'Test'`);
    condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
});

describe("SequenceCondition",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a set of {SequenceConditional}", () => {
               condition.conditionals.push(logicalConditionalA, logicalConditionalB);
               expect(condition.stringify()).to.equal("WHERE COUNT(age) >= 25 AND name = 'Test'");
            });
        });
        describe("toString", () => {
            it("Interpolates a set of {SequenceConditional}", () => {
                condition.conditionals.push(logicalConditionalA, logicalConditionalB);
                expect(`${condition}`).to.equal("WHERE COUNT(age) >= 25 AND name = 'Test'");
            });
        });
    });
});
