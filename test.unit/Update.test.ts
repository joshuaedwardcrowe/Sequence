// Testing imports
import {expect} from "chai";
import {Update} from "../src/Update";
import {SequenceLocation} from "../src/locations/SequenceLocation";
import {Location} from "../src/enums/Location";
import {Predicate} from "../src/enums/Predicate";
import {SequenceColumn} from "../src/SequenceColumn";
import {LogicalOperator} from "../src/enums/LogicalOperator";

// Test instance
let classUnderTest: Update;

// Test data
const tableName: string = "table";
const columnAPredicate: Predicate = Predicate.None;
const columnAName: string = "columnA";
let columnA: SequenceColumn;
const comparisonValue: string = "comparisonValue";

beforeEach(() => {
    classUnderTest = new Update();
    columnA = new SequenceColumn(columnAPredicate, columnAName);
});

describe("Update", () => {
    describe("Instance Methods", () => {
        describe("table", () => {
            it("Sets the .location to a {SequenceLocation} with a {Location} of None", () => {
                expect(classUnderTest.location).to.be.undefined;
                classUnderTest.table(tableName);
                expect(classUnderTest.location).instanceOf(SequenceLocation);
                expect(classUnderTest.location.name).to.equal(tableName);
                expect(classUnderTest.location.location).to.equal(Location.None);
            });
        });
        describe("column", () => {
            it("Adds a {SequenceAssignation} to the {SequenceAssignment}", () => {
                expect(classUnderTest.assignment.assignations).to.have.length(0);
                classUnderTest.column(columnA, comparisonValue);
                expect(classUnderTest.assignment.assignations).to.have.length(1);
                expect(classUnderTest.assignment.assignations[0].column).to.equal(columnA);
                expect(classUnderTest.assignment.assignations[0].logicalOperator).to.equal(LogicalOperator.Equality);
                expect(classUnderTest.assignment.assignations[0].value).to.equal(`'${comparisonValue}'`);
            })
        })
    });
});
