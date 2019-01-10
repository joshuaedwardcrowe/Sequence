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
import {Sanitise} from "./utilities/Sanitise";
import {LogicalOperator} from "./enums/LogicalOperator";
import {SequenceCondition} from "./conditions/SequenceCondition";
import {Condition} from "./enums/Condition";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {CriteriaConditional} from "./conditions/conditionals/CriteriaConditional";
import {Conditional} from "./enums/Conditional";
import {Arrangement} from "./enums/Arrangement";
import {SequenceFormation} from "./formations/SequenceFormation";
import {Formation} from "./enums/Formation";
import {SequenceFilter} from "./formations/filters/SequenceFilter";
import {LimitFormation} from "./formations/LimitFormation";

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
        const cleansed: any[] = values.map(Sanitise.input);
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
        const operation: string = Sanitise.part(this.operation);
        const location: string = Sanitise.part(this.location);
        const supplement: string = Sanitise.part(this.supplement);
        return `${operation}${location}${supplement}${this.stringifyBase()}`.trim();
    }

}
