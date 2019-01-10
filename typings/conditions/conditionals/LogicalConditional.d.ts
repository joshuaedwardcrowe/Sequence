import { SequenceConditional } from "./SequenceConditional";
import { ILogicalConditional } from "../../interfaces/conditions/conditionals/ILogicalConditional";
import { LogicalOperator } from "../../enums/LogicalOperator";
import { ISequenceColumn } from "../../interfaces/ISequenceColumn";
export declare class LogicalConditional extends SequenceConditional implements ILogicalConditional {
    readonly logicalOperator: LogicalOperator;
    readonly value: any;
    constructor(column: ISequenceColumn, logicalOperator: LogicalOperator, value: any);
    stringify(): string;
}
//# sourceMappingURL=LogicalConditional.d.ts.map