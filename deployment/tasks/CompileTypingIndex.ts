import {task} from 'gulp';
import {cleanseDeclarations, createFile, readMergedDirectoryListing, readMergedFileContents} from "../gulpfile.utility";

task("CompileTypingIndex", async () => {
    const typings: string[] = await readMergedDirectoryListing("./typings");
    const contents: string[] = await readMergedFileContents(typings, "utf8");
    const cleansed: string[] = cleanseDeclarations(contents);
    await createFile(`./dist/index.d.ts`, cleansed.join("\n\n"));
});
