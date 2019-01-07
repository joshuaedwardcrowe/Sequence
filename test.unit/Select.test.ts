// Testing imports
import {expect} from "chai";

// Dependencies
import {SelectionOperation} from "../src/operations/SelectionOperation";
import {Predicate} from "../src/enums/Predicate";
import {Operation} from "../src/enums/Operation";
import {SequenceColumn} from "../src/SequenceColumn";
import {SequenceLocation} from "../src/SequenceLocation";
import {Location} from "../src/enums/Location";
import {Condition} from "../src/enums/Condition";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";
import {LogicalConditional} from "../src/conditionals/LogicalConditional";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {SequenceCondition} from "../src/SequenceCondition";

// Tested import
import {Select} from "../src/Select";

// Test data
const tableName: string = "table";
let columnA: SequenceColumn;
let columnB: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.None, "columnB");
});

describe("Select", () => {
    describe("Instance Methods", () => {
        describe("all", () => {
            it("Sets the operation to a {SelectionOperation}", () => {
                const select: Select = new Select();
                expect(select.operation).to.be.undefined;
                select.all();
                expect(select.operation).instanceOf(SelectionOperation);
            });
        });
        describe("column", () => {
            it("Sets the operation to a SelectionOperation", () => {
                const select = new Select();
                expect(select.operation).to.be.undefined;
                select.column(columnA);
                expect(select.operation).instanceOf(SelectionOperation);
                expect(select.operation.operation).to.equal(Operation.Select);
            });
            it("Adds a column to the operation column collection", () => {
                const select = new Select();
                select.operation = new SelectionOperation();
                expect(select.operation.columns).to.be.empty;
                select.column(columnA);
                select.column(columnB);
                expect(select.operation.columns).to.not.be.empty;
                expect(select.operation.columns.length).to.equal(2);
                expect(select.operation.columns).to.include(columnA);
                expect(select.operation.columns).to.include(columnB);
            });
        });
        describe("stringify", () => {
            it("Stringifies a wildcarded SELECT statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation();
                expect(select.stringify()).to.equal("SELECT *");
            });
            it("Stringifies a columned SELECT statement", () => {
                const select = new Select();
                select.operation = new SelectionOperation();
                select.operation.columns.push(columnA);
                expect(select.stringify()).to.equal("SELECT columnA");
            });
            it("Stringifies a columned SELECT FROM statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation(columnA);
                select.location = new SequenceLocation(Location.From, tableName);
                expect(select.stringify()).to.equal("SELECT columnA FROM table");
            });
            it("Stringifies a columned SELECT FROM WHERE statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation(columnA);
                select.location = new SequenceLocation(Location.From, tableName);
                select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
                select.condition.conditionals.push(new LogicalConditional(columnB, LogicalOperator.Equality, 25));
                expect(select.stringify()).to.equal("SELECT columnA FROM table WHERE columnB = 25");
            });
        });
        describe("toString", () => {
            it("Interpolates a wildcarded SELECT statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation();
                expect(`${select}`).to.equal("SELECT *");
            });
            it("Stringifies a columned SELECT statement", () => {
                const select = new Select();
                select.operation = new SelectionOperation();
                select.operation.columns.push(columnA);
                expect(`${select}`).to.equal("SELECT columnA");
            });
            it("Stringifies a columned SELECT FROM statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation(columnA);
                select.location = new SequenceLocation(Location.From, tableName);
                expect(`${select}`).to.equal("SELECT columnA FROM table");
            });
            it("Stringifies a columned SELECT FROM WHERE statement", () => {
                const select: Select = new Select();
                select.operation = new SelectionOperation(columnA);
                select.location = new SequenceLocation(Location.From, tableName);
                select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
                select.condition.conditionals.push(new LogicalConditional(columnB, LogicalOperator.Equality, 25));
                expect(`${select}`).to.equal("SELECT columnA FROM table WHERE columnB = 25");
            });
        });
    });
});
