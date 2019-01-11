import {ISequencePart} from "../interfaces/ISequencePart";

export namespace SqlSanitize {

    export function part(partToStringify: ISequencePart, alterationCallback?: (stringified: string) => string): string {
        const initial: string = !!partToStringify ? `${partToStringify.stringify()} ` : "";
        return alterationCallback ? alterationCallback(initial) : initial;
    }

    export function input(value: any): any {
        return String(value) === value ? `'${value}'` : value;
    }

    export function inputs (values: any[]): any[] {
        return values.map(input);
    }

}
