// Testing imports
import {expect} from "chai";
// Dependencies
import {Predicate} from "../../src/enums/Predicate";
import {LogicalOperator} from "../../src/enums/LogicalOperator";
import {SequenceColumn} from "../../src/SequenceColumn";
// Tested import
import {LogicalConditional} from "../../src/conditionals/LogicalConditional";

// Testing data
const comparisonValue: number = 25;
const columnAPredicate: Predicate = Predicate.Count;
const columnAName: string = "columnA";
let columnA: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
});

describe("LogicalConditional",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies a greater than clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.GreaterThan, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) > 25");
            });
            it("Stringifies a division clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Division, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) / 25");
            });
            it("Stringifies a equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Equality, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) = 25");
            });
            it("Stringifies a greater than/equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.GreaterThanOrEquality, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) >= 25");
            });
            it("Stringifies a less than clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.LessThan, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) < 25");
            });
            it("Stringifies a less than/equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.LessThanOrEquality, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) <= 25");
            });
            it("Stringifies a modulo clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Modulo, comparisonValue);
                expect(classUnderTest.stringify()).to.equal("COUNT(columnA) % 25");
            });
        });
        describe("toString", () => {
            it("Interpolates into a greater than clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.GreaterThan, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) > 25");
            });
            it("Interpolates into a division clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Division, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) / 25");
            });
            it("Interpolates into a equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Equality, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) = 25");
            });
            it("Stringifies a greater than/equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.GreaterThanOrEquality, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) >= 25");
            });
            it("Stringifies a less than clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.LessThan, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) < 25");
            });
            it("Stringifies a less than/equality clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.LessThanOrEquality, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) <= 25");
            });
            it("Stringifies a modulo clause", () => {
                const classUnderTest: LogicalConditional = new LogicalConditional(columnA, LogicalOperator.Modulo, comparisonValue);
                expect(`${classUnderTest}`).to.equal("COUNT(columnA) % 25");
            });
        });
    });
});
