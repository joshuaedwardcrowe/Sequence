import { Wrapping } from "./enums/Wrapping";
import { LogicalOperator } from "./enums/LogicalOperator";
export declare abstract class SequencePart {
    protected static stringifyWrapping(wrapping: Wrapping, values: any[]): string;
    protected static stringifyLogicalOperator(logicalOperator: LogicalOperator): ">" | ">=" | "=" | "<" | "<=" | "/" | "%";
}
