import {Wrapping} from "./enums/Wrapping";
import {LogicalOperator} from "./enums/LogicalOperator";

export abstract class SequencePart {

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
