// Testing imports
import {expect} from "chai";
// Dependencies
import {Join} from "../src/enums/Join";
// Tested import
import {SequenceJoin} from "../src/SequenceJoin";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {SequenceCondition} from "../src/conditions/SequenceCondition";
import {LogicalConditional} from "../src/conditions/conditionals/LogicalConditional";
import {Condition} from "../src/enums/Condition";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";
import {CriteriaConditional} from "../src/conditions/conditionals/CriteriaConditional";

// Testing data
const join: Join = Join.Inner;
const tableName: string = "table";
let classUnderTest: SequenceJoin;
const columnAName: string = "columnA";
const columnAPredicate: Predicate = Predicate.None;
let columnA: SequenceColumn;
const comparisonValue: string = "comparisonValue";
const numberComparsonValues: number[] = [1, 2, 3];
const conditionACondition: Condition = Condition.On;
const conditionACoalescingOperator: CoalescingOperator = CoalescingOperator.And;
let conditionA: SequenceCondition;

beforeEach(() => {
    classUnderTest = new SequenceJoin(join, tableName);
    columnA = new SequenceColumn(columnAPredicate, columnAName);
    conditionA = new SequenceCondition(conditionACondition, conditionACoalescingOperator);
});

describe("SequenceJoin", () => {
   describe("Instance Methods", () => {
       describe("on", () => {
           it("Sets the .condition to a {SequenceCondition} with a {Condition} of On, adding a {LogicalConditional}", () => {
              expect(classUnderTest.condition).to.be.undefined;
              classUnderTest.on(columnA, LogicalOperator.Equality, comparisonValue);
              expect(classUnderTest.condition).instanceOf(SequenceCondition);
              expect(classUnderTest.condition.conditionals).to.have.length(1);
              expect(classUnderTest.condition.conditionals[0]).instanceOf(LogicalConditional);
              const castedConditionalUnderTest: LogicalConditional = classUnderTest.condition.conditionals[0] as LogicalConditional;
              expect(castedConditionalUnderTest.column).to.equal(columnA);
              expect(castedConditionalUnderTest.logicalOperator).to.equal(LogicalOperator.Equality);
              expect(castedConditionalUnderTest.value).to.equal(`'${comparisonValue}'`);
           });
       });
       describe("onIn", () => {
           it("Sets the .condition to a {SequenceCondition} with a {Condition} of On, adding a {CriteriaConditional}", () => {
               expect(classUnderTest.condition).to.be.undefined;
               classUnderTest.onIn(columnA, ...numberComparsonValues);
               expect(classUnderTest.condition).instanceOf(SequenceCondition);
               expect(classUnderTest.condition.conditionals).to.have.length(1);
               expect(classUnderTest.condition.conditionals[0]).instanceOf(CriteriaConditional);
               const castedConditionalUnderTest: CriteriaConditional = classUnderTest.condition.conditionals[0] as CriteriaConditional;
               expect(castedConditionalUnderTest.column).to.equal(columnA);
               expect(castedConditionalUnderTest.values).to.deep.equal(numberComparsonValues);
           });
       });
       describe("onNotIn", () => {
           it("Sets the .condition to a {SequenceCondition} with a {Condition} of On, adding a {Criteria Conditional}", () => {
               expect(classUnderTest.condition).to.be.undefined;
               classUnderTest.onIn(columnA, ...numberComparsonValues);
               expect(classUnderTest.condition).instanceOf(SequenceCondition);
               expect(classUnderTest.condition.conditionals).to.have.length(1);
               expect(classUnderTest.condition.conditionals[0]).instanceOf(CriteriaConditional);
               const castedConditionalUnderTest: CriteriaConditional = classUnderTest.condition.conditionals[0] as CriteriaConditional;
               expect(castedConditionalUnderTest.column).to.equal(columnA);
               expect(castedConditionalUnderTest.values).to.deep.equal(numberComparsonValues);
           });
       });
       describe("stringify", () => {
           it("Stringifies a JOIN", () => {
               classUnderTest.on(columnA, LogicalOperator.Equality, comparisonValue);
               classUnderTest.onIn(columnA, ...numberComparsonValues);
               classUnderTest.onNotIn(columnA, ...numberComparsonValues);
               expect(classUnderTest.stringify()).to.equal("INNER JOIN table ON columnA = 'comparisonValue' AND columnA IN (1, 2, 3) AND columnA NOT IN (1, 2, 3)");
           });
       });
   });
});
