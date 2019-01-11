import {IntoLocation} from "./locations/IntoLocation";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {Operation} from "./enums/Operation";
import {SequenceOperation} from "./operations/SequenceOperation";
import {ISequenceSupplement} from "./interfaces/ISequenceSupplement";
import {IInsert} from "./interfaces/IInsert";
import {SequenceBuilder} from "./SequenceBuilder";
import {SequenceSupplement} from "./SequenceSupplement";
import {Supplement} from "./enums/Supplement";
import {Wrapping} from "./enums/Wrapping";
import {SqlSanitize} from "./utilities/SqlSanitise";
import {LogicalOperator} from "./enums/LogicalOperator";
import {Arrangement} from "./enums/Arrangement";

export class Insert extends SequenceBuilder implements IInsert {

    public supplement: ISequenceSupplement;

    constructor () {
        super ();

        this.operation = new SequenceOperation(Operation.Insert);
    }

    public into (tableName: string, ...columns: ISequenceColumn[]): this {
        if (!this.location) this.location = new IntoLocation(tableName, ...columns);
        return this;
    }

    public values (...values: any[]): this {
        if (!this.supplement) this.supplement = new SequenceSupplement(Supplement.Values, Wrapping.Parentheses);
        const cleansed: any[] = values.map(SqlSanitize.input);
        this.supplement.values.push(...cleansed);
        return this;
    }

    public where (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this {
        throw new Error(`INSERT statements cannot have a WHERE clause`);
    }

    public whereIn (column: ISequenceColumn, ...values: any[]): this {
        throw new Error(`INSERT statements cannot have a WHERE IN clause`);
    }

    public whereNotIn (column: ISequenceColumn, ...values: any[]): this {
        throw new Error(`INSERT statements cannot have a WHERE NOT IN clause`);
    }

    public orderBy (column: ISequenceColumn, arrangement: Arrangement): this {
        throw new Error(`INSERT statements cannot have an ORDER BY clause`);
    }

    public groupBy (column: ISequenceColumn, arrangement: Arrangement): this {
        throw new Error(`INSERT statements cannot have a GROUP BY clause`);
    }

    public limit (amount: number): this {
        throw new Error(`INSERT statements cannot have a LIMIT clause`);
    }

    public stringify (): string {
        this.addPartToBuilder(this.operation);
        this.addPartToBuilder(this.location);
        this.addPartToBuilder(this.supplement);

        return this.builder.toString().trim();
    }

}
