"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function CreateFile(pathToWriteTo, contents) {
    return new Promise((resolve, reject) => {
        const fileWritten = (error) => error ? reject(error) : resolve();
        fs_1.writeFile(pathToWriteTo, contents, fileWritten);
    });
}
exports.default = CreateFile;
//# sourceMappingURL=CreateFile.js.map