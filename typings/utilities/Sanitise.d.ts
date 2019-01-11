import { ISequencePart } from "../interfaces/ISequencePart";
export declare namespace Sanitize {
    function part(partToStringify: ISequencePart, alterationCallback?: (stringified: string) => string): string;
    function input(value: any): any;
    function inputs(values: any[]): any[];
}
