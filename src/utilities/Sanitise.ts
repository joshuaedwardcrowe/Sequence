import {ISequencePart} from "../interfaces/ISequencePart";

export namespace Sanitise {

    export function part(part: ISequencePart) {
        return !!part ? `${part.stringify()} ` : "";
    }

    export function input(value: any): any {
        return String(value) === value ? `'${value}'` : value;
    }

    export function inputs (values: any[]): any[] {
        return values.map(input);
    }

}