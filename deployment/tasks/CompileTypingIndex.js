"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const GetMergedDirectoryListing_1 = require("../utilities/GetMergedDirectoryListing");
const GetMergedFileContents_1 = require("../utilities/GetMergedFileContents");
const CleanseDeclaration_1 = require("../utilities/CleanseDeclaration");
const CreateFile_1 = require("../utilities/CreateFile");
gulp_1.task("CompileTypingIndex", async () => {
    const typeFiles = await GetMergedDirectoryListing_1.default("./typings");
    const typeDeclarations = await GetMergedFileContents_1.default(typeFiles, "utf8");
    const cleansedDeclaration = typeDeclarations.map(CleanseDeclaration_1.default);
    await CreateFile_1.default(`./dist/index.d.ts`, cleansedDeclaration.join("\n\n"));
});
//# sourceMappingURL=CompileTypingIndex.js.map