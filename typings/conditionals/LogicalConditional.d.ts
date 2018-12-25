import { LogicalOperator } from "../enums/LogicalOperator";
import { ISequenceColumn } from "../interfaces/ISequenceColumn";
import { ISequenceConditional } from "../interfaces/ISequenceConditional";
import { SequenceConditional } from "../SequenceConditional";
export declare class LogicalConditional extends SequenceConditional implements ISequenceConditional {
    readonly logicalOperator: LogicalOperator;
    readonly value: string | number;
    constructor(column: ISequenceColumn, logicalOperator: LogicalOperator, value: string | number);
    stringify(): string;
    static stringifyLogicalOperator(logicalOperator: LogicalOperator): ">" | ">=" | "=" | "<" | "<=" | "/" | "%";
}
//# sourceMappingURL=LogicalConditional.d.ts.map