"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetFileContents_1 = require("./GetFileContents");
async function GetMergedFileContents(filePathsOfFilesToRead, fileSystemEncoding) {
    const filesRead = [];
    for (const filePathOfFileToRead of filePathsOfFilesToRead) {
        const fileRead = GetFileContents_1.default(filePathOfFileToRead, fileSystemEncoding);
        filesRead.push(await fileRead);
    }
    return filesRead;
}
exports.default = GetMergedFileContents;
//# sourceMappingURL=GetMergedFileContents.js.map