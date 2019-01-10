"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sanitise;
(function (Sanitise) {
    function part(part) {
        return !!part ? `${part.stringify()} ` : "";
    }
    Sanitise.part = part;
    function input(value) {
        return String(value) === value ? `'${value}'` : value;
    }
    Sanitise.input = input;
    function inputs(values) {
        return values.map(input);
    }
    Sanitise.inputs = inputs;
})(Sanitise = exports.Sanitise || (exports.Sanitise = {}));
//# sourceMappingURL=Sanitise.js.map