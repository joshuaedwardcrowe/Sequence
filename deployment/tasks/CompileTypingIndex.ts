import {task} from "gulp";
import GetMergedDirectoryListing from "../utilities/GetMergedDirectoryListing";
import GetMergedFileContents from "../utilities/GetMergedFileContents";
import CleanseDeclaration from "../utilities/CleanseDeclaration";
import CreateFile from "../utilities/CreateFile";

task("CompileTypingIndex", async () => {

    const typeFiles: string[] = await GetMergedDirectoryListing("./typings");

    const typeDeclarations: string[] = await GetMergedFileContents(typeFiles, "utf8");

    const cleansedDeclaration: string[] = typeDeclarations.map(CleanseDeclaration);

    await CreateFile(`./dist/index.d.ts`, cleansedDeclaration.join("\n\n"));

});
