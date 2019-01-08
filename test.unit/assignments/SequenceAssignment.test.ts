// Testing imports
import {expect} from "chai";
// Tested import
import {SequenceAssignment} from "../../src/assignments/SequenceAssignment";
import {SequenceColumn} from "../../src/SequenceColumn";
import {Predicate} from "../../src/enums/Predicate";
import {SequenceAssignation} from "../../src/assignments/assignations/SequenceAssignation";
import {Assignment} from "../../src/enums/Assignment";

// Testing instance
let classUnderTest: SequenceAssignment;

// Test data
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const columnBPredicate: Predicate = Predicate.None;
const columnBName: string = "columnB";
let columnB: SequenceColumn;
const assignationAValue: number = 1;
let assignationA: SequenceAssignation;
const assignationBValue: string = `'value'`;
let assignationB: SequenceAssignation;

beforeEach(() => {
    columnA = new SequenceColumn(columnAPredicate, columnAName);
    columnB = new SequenceColumn(columnBPredicate, columnBName);
    assignationA = new SequenceAssignation(columnA, assignationAValue);
    assignationB = new SequenceAssignation(columnB, assignationBValue);
    classUnderTest = new SequenceAssignment(Assignment.Set);
});

describe("SequenceAssignment", () => {
    describe("Instance Methods", () => {
        describe("stringify", () => {
            it("Stringifies into a set of assignment clauses", () => {
                classUnderTest.assignations.push(assignationA, assignationB);
                expect(classUnderTest.stringify()).to.equal("SET columnA = 1, columnB = 'value'");
            });
        });
    });
});
