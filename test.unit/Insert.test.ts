// Testing imports
import {expect} from "chai";

// Dependencies
import {SequenceColumn} from "../src/SequenceColumn";
import {IntoLocation} from "../src/locations/IntoLocation";

// Tested imports
import {Insert} from "../src/Insert";
import {Predicate} from "../src/enums/Predicate";
import {Wrapping} from "../src/enums/Wrapping";
import {SequenceSupplement} from "../src/SequenceSupplement";

const tableName: string = "table";
let columnA: SequenceColumn;
let columnB: SequenceColumn;
let numberValues: number[];
let stringValues: string[];

beforeEach(() => {
    columnA = new SequenceColumn(Predicate.None, "columnA");
    columnB = new SequenceColumn(Predicate.None, "columnB");
    numberValues = [1, 2, 3];
    stringValues = ["A", "B"];
});

describe("Insert", () => {
    describe("Instance Methods", () => {
        describe("into", () => {
            it("Sets the location to an IntoLocation", () => {
                const insert: Insert = new Insert();
                expect(insert.location).to.be.undefined;
                insert.into(tableName, columnA);
                expect(insert.location).instanceOf(IntoLocation);
                const casted: IntoLocation = insert.location as IntoLocation;
                expect(casted.name).to.equal(tableName);
                expect(casted.wrapping).to.equal(Wrapping.Parentheses);
                expect(casted.columns).to.include(columnA);
            });
        });
        describe("values", () => {
            it("Sets the supplement with the values given", () => {
                const insert: Insert = new Insert();
                expect(insert.supplement).to.be.undefined;
                insert.values<number>(...numberValues);
                expect(insert.supplement).instanceOf(SequenceSupplement);
                expect(insert.supplement.values).to.include(1);
                expect(insert.supplement.values).to.include(2);
                expect(insert.supplement.values).to.include(3);
            });
            it("Handles supplements with strings", () => {
                const insert: Insert = new Insert();
                expect(insert.supplement).to.be.undefined;
                insert.values<string>(...stringValues);
                expect(insert.supplement).instanceOf(SequenceSupplement);
                expect(insert.supplement.values).to.include("'A'");
                expect(insert.supplement.values).to.include("'B'");
            })
        });
        describe("stringify", () => {
            it("Stringifies an INSERT statement", () => {
                const insert: Insert = new Insert()
                    .into(tableName, columnA, columnB)
                    .values(...stringValues);

                expect(insert.stringify()).to.equal("INSERT INTO table (columnA, columnB) VALUES ('A', 'B')");
            })
        });
        describe("toString", () => {
            it("Interpolates as an INSERT statement", () => {
                const insert: Insert = new Insert()
                    .into(tableName, columnA, columnB)
                    .values(...stringValues);

                expect(`${insert}`).to.equal("INSERT INTO table (columnA, columnB) VALUES ('A', 'B')")
            })
        })
    });
});
