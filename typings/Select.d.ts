import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISelect } from "./interfaces/ISelect";
import { SequenceBuilder } from "./SequenceBuilder";
export declare class Select extends SequenceBuilder implements ISelect {
    all(): this;
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}
//# sourceMappingURL=Select.d.ts.map