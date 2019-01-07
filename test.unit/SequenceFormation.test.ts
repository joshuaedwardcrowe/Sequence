import {expect} from "chai";
import {SequenceFormation} from "../src/SequenceFormation";
import {Formation} from "../src/enums/Formation";
import {SequenceFilter} from "../src/SequenceFilter";
import {Predicate} from "../src/enums/Predicate";
import {Arrangement} from "../src/enums/Arrangement";
import {SequenceColumn} from "../src/SequenceColumn";
import {CoalescingOperator} from "../src/enums/CoalescingOperator";

describe("SequenceFormation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies the set of filters", () => {
                const sequenceDefault = new SequenceFormation(Formation.GroupBy, CoalescingOperator.And);
                sequenceDefault.filters.push(new SequenceFilter(new SequenceColumn(Predicate.None, "name"), Arrangement.Ascending));
                sequenceDefault.filters.push(new SequenceFilter(new SequenceColumn(Predicate.None, "age"), Arrangement.Ascending));
                expect(sequenceDefault.stringify()).to.equal("GROUP BY name ASCENDING AND age ASCENDING");
            });
        });
    });
});
