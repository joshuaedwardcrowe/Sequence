import {expect} from "chai";
import {SequenceDefault} from "../src/SequenceDefault";
import {Default} from "../src/enums/Default";
import {SequenceSorting} from "../src/SequenceSorting";
import {Predicate} from "../src/enums/Predicate";
import {Arrangement} from "../src/enums/Arrangement";
import {SequenceColumn} from "../src/SequenceColumn";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

describe("SequenceDefault",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies the set of sortings", () => {
                const sequenceDefault = new SequenceDefault(Default.GroupBy, CoalescingOperator.And);
                sequenceDefault.sortings.push(new SequenceSorting(new SequenceColumn(Predicate.None, "name"), Arrangement.Ascending));
                sequenceDefault.sortings.push(new SequenceSorting(new SequenceColumn(Predicate.None, "age"), Arrangement.Ascending));
                expect(sequenceDefault.stringify()).to.equal("GROUP BY name ASCENDING AND age ASCENDING");
            });
        });
    });
    describe("Static Methods", () => {
        describe("stringifySequenceDefaultType", () => {
            it("Calculates the string version of a Default enum", () => {
                const groupBy = SequenceDefault.stringifyDefaultType(Default.GroupBy);
                const orderBy = SequenceDefault.stringifyDefaultType(Default.OrderBy);
                const limit = SequenceDefault.stringifyDefaultType(Default.Limit);
                expect(groupBy).to.equal("GROUP BY");
                expect(orderBy).to.equal("ORDER BY");
                expect(limit).to.equal("LIMIT");
            });
        });
    });
});
