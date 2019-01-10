"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function GetDirectoryListing(pathToReadFrom, fileSystemOptions) {
    return new Promise((resolve, reject) => {
        const directoryRead = (err, files) => err ? reject(err) : resolve(files);
        fs_1.readdir(pathToReadFrom, fileSystemOptions, directoryRead);
    });
}
exports.default = GetDirectoryListing;
//# sourceMappingURL=GetDirectoryListing.js.map