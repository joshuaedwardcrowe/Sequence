"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rimraf = require("rimraf");
function RemoveDirectory(pathToReadFrom, rimrafOptions = {}) {
    return new Promise((resolve, reject) => {
        const fileRemoved = (error) => error ? reject(error) : resolve();
        rimraf(pathToReadFrom, rimrafOptions, fileRemoved);
    });
}
exports.default = RemoveDirectory;
//# sourceMappingURL=RemoveDirectory.js.map