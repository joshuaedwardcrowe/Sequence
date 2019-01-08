// Testing imports
import {expect} from "chai";
// Dependencies
import {Formation} from "../../src/enums/Formation";
import {SequenceFilter} from "../../src/formations/filters/SequenceFilter";
import {Predicate} from "../../src/enums/Predicate";
import {Arrangement} from "../../src/enums/Arrangement";
import {SequenceColumn} from "../../src/columns/SequenceColumn";
import {CoalescingOperator} from "../../src/enums/CoalescingOperator";
// Tested imports.
import {SequenceFormation} from "../../src/formations/SequenceFormation";

// Testing instance
let classUnderTest: SequenceFormation;

// Testing data.
const formation: Formation = Formation.GroupBy;
const coalescingOperator: CoalescingOperator = CoalescingOperator.And;
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const columnBPredicate: Predicate = Predicate.None;
const columnBName: string = "columnB";
let columnB: SequenceColumn;
const filterAArrangement: Arrangement = Arrangement.Ascending;
let filterA: SequenceFilter;
const filterBArrangement: Arrangement = Arrangement.Ascending;
let filterB: SequenceFilter;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
    columnB = new SequenceColumn(columnBPredicate, columnBName);
    filterA = new SequenceFilter(columnA, filterAArrangement);
    filterB = new SequenceFilter(columnB, filterBArrangement);
    classUnderTest = new SequenceFormation(formation, coalescingOperator);
});

describe("SequenceFormation",  () => {
    describe("Instance Methods",  () => {
        describe("stringify", () => {
            it("Stringifies the set of {SequenceFilter} and their {SequenceColumn}", () => {
                classUnderTest.filters.push(filterA, filterB);
                expect(classUnderTest.stringify()).to.equal("GROUP BY columnA ASCENDING AND columnB ASCENDING");
            });
        });
        describe("toString", () => {
            it("Interpolates the set of {SequenceFilter} and their {SequenceColumn}", () => {
                classUnderTest.filters.push(filterA, filterB);
                expect(`${classUnderTest}`).to.equal("GROUP BY columnA ASCENDING AND columnB ASCENDING");
            });
        });
    });
});
