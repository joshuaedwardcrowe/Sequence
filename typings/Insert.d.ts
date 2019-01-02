import { SequenceBuilder } from "./SequenceBuilder";
import { ISequenceBuilder } from "./interfaces/ISequenceBuilder";
import { ISequenceColumn } from "./interfaces/ISequenceColumn";
import { ISequenceSupplement } from "./interfaces/ISequenceSupplement";
export declare class Insert extends SequenceBuilder implements ISequenceBuilder {
    supplement: ISequenceSupplement;
    constructor();
    into(tableName: string, ...columns: ISequenceColumn[]): this;
    values(...values: any[]): this;
    stringify(): string;
}
//# sourceMappingURL=Insert.d.ts.map