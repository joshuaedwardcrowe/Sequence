import {ISequencePart} from "./interfaces/ISequencePart";
import {Wrapping} from "./enums/Wrapping";
import {LogicalOperator} from "./enums/LogicalOperator";

export abstract class SequencePart implements ISequencePart {

    public stringify (): string {
        throw new TypeError("Stringify was not overridden");
    }

    public toString (): string {
        return this.stringify();
    }

    protected static stringifyWrapping (wrapping: Wrapping, values: any[]) {
        switch (wrapping) {
            case Wrapping.Parentheses: return `(${values.join(", ")})`;
        }
    }

    protected static stringifyLogicalOperator (logicalOperator: LogicalOperator) {
        switch (logicalOperator) {
            case LogicalOperator.GreaterThan: return ">";
            case LogicalOperator.GreaterThanOrEquality: return ">=";
            case LogicalOperator.Equality: return "=";
            case LogicalOperator.LessThan: return "<";
            case LogicalOperator.LessThanOrEquality: return "<=";
            case LogicalOperator.Division: return "/";
            case LogicalOperator.Modulo: return "%";
        }
    }

}
