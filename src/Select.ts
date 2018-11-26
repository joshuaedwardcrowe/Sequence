import {LogicalOperator} from "./enums/LogicalOperator";
import {Predicate} from "./enums/Predicate";
import Location from "./enums/Location";
import Condition from "./enums/Condition";
import {Conditional} from "./enums/Conditional";
import {CoalescingOperator} from "./enums/CoalescingOperator";
import {ISequenceBuilder} from "./interfaces/ISequenceBuilder";
import {ISequenceColumn} from "./interfaces/ISequenceColumn";
import {SequenceBuilder} from "./SequenceBuilder";
import {SelectionOperation} from "./operations/SelectionOperation";
import {SequenceCondition} from "./SequenceCondition";
import {SequenceColumn} from "./SequenceColumn";
import {SequenceLocation} from "./SequenceLocation";
import {LogicalConditional} from "./conditionals/LogicalConditional";
import {ParenthesesConditional} from "./conditionals/ParenthesesConditional";

export class Select extends SequenceBuilder implements ISequenceBuilder {

    public all (): this {
        if (!this.operation) this.operation = new SelectionOperation();
        return this;
    }

    public column (predicate: Predicate, columnName: string) {
        if (!this.operation) this.operation = new SelectionOperation();
        this.operation.columns.push(new SequenceColumn(predicate, columnName));
        return this;
    }

    public from (tableName: string) {
        if (!this.location) this.location = new SequenceLocation(Location.From, tableName);
        return this;
    }

    public where (column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string|number) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where,  CoalescingOperator.And);
        this.condition.conditionals.push(new LogicalConditional(column, logicalOperator, comparisonValue));
        return this;
    }

    public whereIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new ParenthesesConditional(Conditional.In, column, ...values));
    }

    public whereNotIn (column: ISequenceColumn, ...values: any[]) {
        if (!this.condition) this.condition = new SequenceCondition(Condition.Where, CoalescingOperator.And);
        this.condition.conditionals.push(new ParenthesesConditional(Conditional.NotIn, column, ...values));
    }

    public stringify () {
        const operation = !!this.operation ? `${this.operation} ` : "";
        const location = !!this.location ? `${this.location} ` : "";
        const condition = !!this.condition ? `${this.condition} ` : "";
        return `${operation}${location}${condition}${super.stringify()}`.trim();
    }

}
