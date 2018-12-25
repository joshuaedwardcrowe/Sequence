import {expect} from "chai";
import {Select} from "../src/Select";
import {Predicate} from "../src/enums/Predicate";
import {SelectionOperation} from "../src/operations/SelectionOperation";
import {SequenceColumn} from "../src/SequenceColumn";
import {Location} from "../src/enums/Location";
import {SequenceLocation} from "../src/SequenceLocation";
import {SequenceCondition} from "../src/SequenceCondition";
import {Condition} from "../src/enums/Condition";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {Operation} from "../src/enums/Operation";
import {SequenceConditional} from "../src/SequenceConditional";
import {LogicalConditional} from "../src/conditionals/LogicalConditional";
import {ParenthesesConditional} from "../src/conditionals/ParenthesesConditional";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

describe("Select",  () => {
    describe("Instance Methods",  () => {
        describe("all", () => {
            it("Sets the operation to a SelectionOperation", () => {
                const select = new Select();
                expect(select.operation).to.be.undefined;
                select.all();
                expect(select.operation).instanceOf(SelectionOperation);
            });
        });
        describe("column", () => {
           it("Sets the operation to a SelectionOperation", () => {
               const select = new Select();
               expect(select.operation).to.be.undefined;
               select.column(Predicate.None, "name");
               expect(select.operation).instanceOf(SelectionOperation);
               expect(select.operation.operation).to.equal(Operation.Select);
           });
           it("Adds a column to the operation column collection", () => {
              const select = new Select();
              select.operation = new SelectionOperation();
              expect(select.operation.columns).to.be.empty;
              select.column(Predicate.None, "name");
              select.column(Predicate.None, "age");
              expect(select.operation.columns).to.not.be.empty;
              expect(select.operation.columns.length).to.equal(2);
              for (const column of select.operation.columns) {
                  expect(column).instanceOf(SequenceColumn);
              }
            });
        });
        describe("from", () => {
           it("Sets the location to a location with a location of From", () => {
              const select = new Select();
              expect(select.location).to.be.undefined;
              select.from("user");
              expect(select.location).instanceOf(SequenceLocation);
              expect(select.location.location).to.equal(Location.From);
           });
        });
        describe("where", () => {
            it("Sets the condition to a condition with a condition of Where", () => {
                const select = new Select();
                expect(select.condition).to.be.undefined;
                select.where(new SequenceColumn(Predicate.None, "name"), LogicalOperator.Equality, "name");
                expect(select.condition).instanceOf(SequenceCondition);
                expect(select.condition.condition).to.equal(Condition.Where);
            });
            it("Adds a column to the condition conditionals collection", () => {
                const select = new Select();
                select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
                expect(select.condition.conditionals).to.be.empty;
                select.where(new SequenceColumn(Predicate.None, "name"), LogicalOperator.Equality, `'name'`);
                select.where(new SequenceColumn(Predicate.Count, "age"), LogicalOperator.Equality, 25);
                expect(select.condition.conditionals).to.not.be.empty;
                expect(select.condition.conditionals.length).to.equal(2);
                for (const conditional of select.condition.conditionals) {
                    expect(conditional).instanceOf(SequenceConditional);
                }
            });
        });
        describe("whereIn", () => {
           it("Sets the condition to a condition with a condition of Where", () => {
               const select = new Select();
               expect(select.condition).to.be.undefined;
               select.whereIn(new SequenceColumn(Predicate.None, "name"), `'james'`, `'john'`);
               expect(select.condition).instanceOf(SequenceCondition);
               expect(select.condition.condition).to.equal(Condition.Where);
           });
           it("Adds a column to the condition conditionals collection", () => {
               const select = new Select();
               select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
               expect(select.condition.conditionals).to.be.empty;
               select.whereIn(new SequenceColumn(Predicate.None, "name"), `'james'`, `'john'`);
               select.whereIn(new SequenceColumn(Predicate.None, "age"), 1, 2, 3);
               expect(select.condition.conditionals).to.not.be.empty;
               expect(select.condition.conditionals.length).to.equal(2);
               for (const conditional of select.condition.conditionals) {
                   expect(conditional).instanceOf(ParenthesesConditional);
               }
           });
        });
        describe("whereNotIn", () => {
            it("Sets the condition to a condition with a condition of Where", () => {
                const select = new Select();
                expect(select.condition).to.be.undefined;
                select.whereNotIn(new SequenceColumn(Predicate.None, "name"), `'james'`, `'john'`);
                expect(select.condition).instanceOf(SequenceCondition);
                expect(select.condition.condition).to.equal(Condition.Where);
            });
            it("Adds a column to the condition conditionals collection", () => {
                const select = new Select();
                select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
                expect(select.condition.conditionals).to.be.empty;
                select.whereNotIn(new SequenceColumn(Predicate.None, "name"), `'james'`, `'john'`);
                select.whereNotIn(new SequenceColumn(Predicate.None, "age"), 1, 2, 3);
                expect(select.condition.conditionals).to.not.be.empty;
                expect(select.condition.conditionals.length).to.equal(2);
                for (const conditional of select.condition.conditionals) {
                    expect(conditional).instanceOf(ParenthesesConditional);
                }
            });
        });
        describe("stringify", () => {
            it("Stringifies a wildcarded SELECT statement", () => {
                const select = new Select();
                select.operation = new SelectionOperation();
                expect(select.stringify()).to.equal("SELECT *");
            });
            it("Stringifies a columned SELECT statement", () => {
               const select = new Select();
               select.operation = new SelectionOperation();
               select.operation.columns.push(new SequenceColumn(Predicate.None, "name"));
               expect(select.stringify()).to.equal("SELECT name");
            });
            it("Stringifies a columned SELECT FROM statement", () => {
                const select = new Select();
                select.operation = new SelectionOperation(new SequenceColumn(Predicate.None, "name"));
                select.location = new SequenceLocation(Location.From, "user");
                expect(select.stringify()).to.equal("SELECT name FROM user");
            });
            it("Stringifies a columned SELECT FROM WHERE statement", () => {
                const select = new Select();
                select.operation = new SelectionOperation(new SequenceColumn(Predicate.None, "name"));
                select.location = new SequenceLocation(Location.From, "user");
                select.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
                const conditionalColumn = new SequenceColumn(Predicate.None, "id");
                select.condition.conditionals.push(new LogicalConditional(conditionalColumn, LogicalOperator.Equality, 25));
                expect(select.stringify()).to.equal("SELECT name FROM user WHERE id = 25");
            });
        });
    });
});
