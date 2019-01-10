"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function GetFileContents(pathToReadFrom, fileSystemEncoding) {
    return new Promise((resolve, reject) => {
        const fileContentsRead = (error, fileRead) => error ? reject(error) : resolve(fileRead);
        fs_1.readFile(pathToReadFrom, fileSystemEncoding, fileContentsRead);
    });
}
exports.default = GetFileContents;
//# sourceMappingURL=GetFileContents.js.map