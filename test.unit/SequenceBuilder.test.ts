import {expect} from "chai";
import {SequenceBuilder} from "../src/SequenceBuilder";
import {ISequenceBuilder} from "../src/interfaces/ISequenceBuilder";
import {SequenceColumn} from "../src/SequenceColumn";
import {Predicate} from "../src/enums/Predicate";
import {Arrangement} from "../src/enums/Arrangement";
import {SequenceDefault} from "../src/SequenceDefault";
import {Default} from "../src/enums/Default";
import {SequenceSorting} from "../src/SequenceSorting";
import {LimitDefault} from "../src/defaults/LimitDefault";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

class TestBuilder extends SequenceBuilder implements ISequenceBuilder {};

describe("SequenceBuilder",  () => {
    describe("Instance Methods",  () => {
        describe("orderBy", () => {
            it("Sets the ordering to a SequenceDefault with a default of OrderBy", () => {
               const builder = new TestBuilder();
               expect(builder.ordering).to.be.undefined;
               builder.orderBy(new SequenceColumn(Predicate.None, "column"), Arrangement.Ascending);
               expect(builder.ordering).instanceOf(SequenceDefault);
               expect(builder.ordering.default).to.equal(Default.OrderBy);
            });
            it("Adds a sorting to the ordering's sortings collection", () => {
               const builder = new TestBuilder();
               builder.ordering = new SequenceDefault(Default.OrderBy, CoalescingOperator.And);
               expect(builder.ordering.sortings).to.be.empty;
               builder.orderBy(new SequenceColumn(Predicate.None, "column"), Arrangement.Ascending);
               builder.orderBy(new SequenceColumn(Predicate.Count, "age"), Arrangement.Ascending);
               expect(builder.ordering.sortings).to.not.be.empty;
               expect(builder.ordering.sortings.length).to.equal(2);
               for (let i = 0; i < builder.ordering.sortings.length; i++) {
                   expect(builder.ordering.sortings[i]).instanceOf(SequenceSorting);
               }
            });
        });
        describe("groupBy", () => {
            it("Sets the ordering to a SequenceDefault with a default of GroupBy", () => {
                const builder = new TestBuilder();
                expect(builder.grouping).to.be.undefined;
                builder.groupBy(new SequenceColumn(Predicate.None, "column"), Arrangement.Ascending);
                expect(builder.grouping).to.not.be.undefined;
                expect(builder.grouping).instanceOf(SequenceDefault);
                expect(builder.grouping.default).to.equal(Default.GroupBy);
            });
            it("Adds a sorting to the ordering's sortings collection", () => {
                const builder = new TestBuilder();
                builder.grouping = new SequenceDefault(Default.GroupBy, CoalescingOperator.And);
                expect(builder.grouping.sortings).to.be.empty;
                builder.groupBy(new SequenceColumn(Predicate.None, "column"), Arrangement.Ascending);
                builder.groupBy(new SequenceColumn(Predicate.Count, "age"), Arrangement.Ascending);
                expect(builder.grouping.sortings).to.not.be.empty;
                expect(builder.grouping.sortings.length).to.equal(2);
                for (let i = 0; i < builder.grouping.sortings.length; i++) {
                    expect(builder.grouping.sortings[i]).instanceOf(SequenceSorting)
                }
            });
        });
        describe("limit", () => {
            it("Sets the limitation to a LimitDefault", () => {
                const builder = new TestBuilder();
                expect(builder.limitation).to.be.undefined;
                builder.limit(5);
                expect(builder.limitation).to.not.be.undefined;
                expect(builder.limitation).instanceOf(LimitDefault);
                expect(builder.limitation.amount).to.equal(5);
            });
        });
        describe("stringify", () => {
            it("Stringifies an ORDER BY clause", () => {
                const builder = new TestBuilder();
                builder.orderBy(new SequenceColumn(Predicate.None, "name"), Arrangement.Ascending);
                expect(builder.stringify()).to.equal("ORDER BY name ASCENDING");
            });
        });
    });
});
