// Testing imports
import {expect} from "chai";

// Dependencies
import {Predicate} from "../../../src/enums/Predicate";
import {SequenceColumn} from "../../../src/SequenceColumn";

// Tested import
import {SequenceAssignation} from "../../../src/assignments/assignations/SequenceAssignation";

// Test instance
let classUnderTest: SequenceAssignation;

// Testing data
const comparisonValue: string = `'comparisonValue'`;
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
    classUnderTest = new SequenceAssignation(columnA, comparisonValue);
});

describe("SequenceAssignation", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies into an assignment clause", () => {
                expect(classUnderTest.stringify()).to.equal("columnA = 'comparisonValue'");
            });
        });
    });
});
