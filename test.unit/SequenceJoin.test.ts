import {expect} from "chai";
import {SequenceJoin} from "../src/SequenceJoin";
import {Join} from "../src/enums/Join";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";
import {LogicalOperator} from "../src/enums/LogicalOperator";
import {SequenceCondition} from "../src/SequenceCondition";
import Condition from "../src/enums/Condition";
import {SequenceConditional} from "../src/SequenceConditional";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

describe("SequenceJoin",  () => {
    describe("Instance Methods",  () => {
        describe("on", () => {
            it("Sets the condition to a condition with a type of On", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                expect(join.condition).to.be.undefined;
                join.on(new SequenceColumn(Predicate.None, "name"), LogicalOperator.Division, "name");
                expect(join.condition).instanceOf(SequenceCondition);
                expect(join.condition.condition).to.equal(Condition.On)
            });
            it("Adds a conditional to the condition's conditionals collection", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                join.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
                expect(join.condition.conditionals).to.be.empty;
                join.on(new SequenceColumn(Predicate.None, "name"), LogicalOperator.Equality, `'name'`);
                join.on(new SequenceColumn(Predicate.Count, "age"), LogicalOperator.Division, 5);
                expect(join.condition.conditionals).to.not.be.empty;
                expect(join.condition.conditionals.length).to.equal(2);
                for (let i = 0; i < join.condition.conditionals.length; i++) {
                    expect(join.condition.conditionals[i]).instanceOf(SequenceConditional)
                }
            })
        });
        describe("onIn", () => {
            it("Sets the condition to a condition with a type of On", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                expect(join.condition).to.be.undefined;
                join.onIn(new SequenceColumn(Predicate.None, "name"), "name");
                expect(join.condition).instanceOf(SequenceCondition);
                expect(join.condition.condition).to.equal(Condition.On)
            });
            it("Adds a conditional to the condition's conditionals collection", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                join.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
                expect(join.condition.conditionals).to.be.empty;
                join.onIn(new SequenceColumn(Predicate.None, "name"), "name");
                join.onIn(new SequenceColumn(Predicate.Count, "age"), 5);
                expect(join.condition.conditionals).to.not.be.empty;
                expect(join.condition.conditionals.length).to.equal(2);
                for (let i = 0; i < join.condition.conditionals.length; i++) {
                    expect(join.condition.conditionals[i]).instanceOf(SequenceConditional)
                }
            })
        });
        describe("onIn", () => {
            it("Sets the condition to a condition with a type of On", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                expect(join.condition).to.be.undefined;
                join.onNotIn(new SequenceColumn(Predicate.None, "name"), "name");
                expect(join.condition).instanceOf(SequenceCondition);
                expect(join.condition.condition).to.equal(Condition.On)
            });
            it("Adds a conditional to the condition's conditionals collection", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                join.condition = new SequenceCondition(Condition.On, CoalescingOperator.And);
                expect(join.condition.conditionals).to.be.empty;
                join.onNotIn(new SequenceColumn(Predicate.None, "name"), "name");
                join.onNotIn(new SequenceColumn(Predicate.Count, "age"), 5);
                expect(join.condition.conditionals).to.not.be.empty;
                expect(join.condition.conditionals.length).to.equal(2);
                for (let i = 0; i < join.condition.conditionals.length; i++) {
                    expect(join.condition.conditionals[i]).instanceOf(SequenceConditional)
                }
            })
        });
        describe("stringify", () => {
            it("Stringifies a join clause", () => {
                const join = new SequenceJoin(Join.Inner, "table");
                join.on(new SequenceColumn(Predicate.None, "name"), LogicalOperator.Equality, `'john'`);
                join.onNotIn(new SequenceColumn(Predicate.Count, "age"), 5, 6, 7);
                expect(join.stringify()).to.equal("INNER JOIN table ON name = 'john' AND COUNT(age) NOT IN (5, 6, 7)")
            })
        })
    });
});
