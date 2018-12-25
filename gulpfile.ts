import { task, series, src, dest } from "gulp";
import * as ts from "gulp-typescript";
import { Settings } from "gulp-typescript";
import * as td from "gulp-typedoc";
import { Options } from "gulp-typedoc";
import { Stats, readFile, readdir, lstat, writeFile } from "fs";
import { Queue } from "@gallink/oxygen";
import * as rimraf from "rimraf";
import * as merge from "merge2";
import { open } from "fs";

// TODO: Move to a config file.
const TS_SETTINGS: Settings = {
    declaration: true,
    module: "commonjs",
    lib: ["es2018"],
    target: "es2018"
};
const TD_SETTINGS: Options = {
    module: "commonjs",
    target: "es2018",
    out: "docs/",
    mode: "file",
    name: "Gallink Sequence",

};

// TODO: Move to a config file.
const DEPLOYMENT_FOLDERS = ["docs", "typings", "dist"];


// TODO: Move to a utility file.
function readFileContents (pathToReadFrom: string, fileSystemEncoding: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, contents: string) => err ? reject(err) : resolve(contents);
        readFile(pathToReadFrom, fileSystemEncoding, callback);
    });
}

async function readMergedFileContents (filePathsOfFilesToRead: string[], fileSystemEncoding: string): Promise<string[]> {
    const filesRead = [];
    for (const filePathOfFileToRead of filePathsOfFilesToRead) {
        filesRead.push(await readFileContents(filePathOfFileToRead, fileSystemEncoding));
    }
    return filesRead;
}

// TODO: Move to a utility file.
function readDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, files: string[]) => err ? reject(err) : resolve(files);
        readdir(pathToReadFrom, fileSystemOptions, callback);
    });
}

function getObjectStatistics (pathToReadFrom: string): Promise<Stats> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, stats: Stats) => err ? reject(err) : resolve(stats);
        lstat(pathToReadFrom, callback);
    });
}

// TODO: Move to a utility file.
async function readMergedDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {
    const read: string[] = await readDirectoryListing(pathToReadFrom);
    const listings: Queue<string> = new Queue<string>(read);
    const resolved: string[] = [];

    while (listings.items.length > 0) {
        const listing: string = listings.dequeue();
        const listingPath = listing.includes(pathToReadFrom) ? listing : `${pathToReadFrom}/${listing}`;
        // const listingPath = `${pathToReadFrom}/${listing}`; // e.g. typings/conditionals
        const listingDetails = await getObjectStatistics(listingPath);

        if (listingDetails.isFile()) resolved.push(listingPath); // e.g typings/sequenceBuilder
        if (listingDetails.isDirectory()) {
            const further = await readMergedDirectoryListing(listingPath);
            further.forEach(furth => listings.enqueue(furth));
        }
    }
    return resolved;
}

// TODO: Move to a utility file.
function removeDirectory (pathToReadFrom: string, rimrafOptions: object = {}): Promise<void> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error) => err ? reject(err) : resolve();
        rimraf(pathToReadFrom, rimrafOptions, callback);
    });
}

function createFile (pathToWriteTo: string, contents: string) {
    return new Promise((resolve, reject) => {
       const callback = (err: Error) => err ? reject(err) : resolve();
       writeFile(pathToWriteTo, contents,  callback);
    });
}

function cleanseDeclarations (contentsToCleanse: string[]): string[] {
    return contentsToCleanse.map(contentToCleanse => {
        const contentsSplit = contentToCleanse.split("\n");
        const contentsMapped = contentsSplit.filter(x => !x.startsWith("import") && !x.startsWith("//#"));
        return contentsMapped.join("\n");
    });
}

// Step 1: Clean up by deleting the /dist, /typings, and docs/ folders.
task("cleanDirectories", async () => {
    const directories: string[] = await readDirectoryListing("./");
    for (const directory of directories) {
        if (DEPLOYMENT_FOLDERS.includes(directory)) await removeDirectory(`./${directory}`);
    }
});

// Step 2: Generate the source and index.d.ts files.
task("compileSource", () => {

    // Create the typescript compiler source.
    const typescript: NodeJS.ReadWriteStream = ts(TS_SETTINGS);

    // Create the compiler stream.
    const compiler: any = src("src/**/*.ts").pipe(typescript);

    // Create the destination for .js and .d.ts files.
    const js = compiler.js.pipe(dest("dist/src"));
    const declarations = compiler.dts.pipe(dest("typings"));

    // Merge to kill the task.
    return merge([js, declarations]);

});

// Step 3: Generate the index file
task("compileSourceIndex", () => {
    const typescript = ts(TS_SETTINGS);
    return src("sequence.ts")
        .pipe(typescript)
        .js.pipe(dest("dist/"));
});

task("compileTypingIndex", async () => {
    const typings: string[] = await readMergedDirectoryListing("./typings");
    const contents: string[] = await readMergedFileContents(typings, "utf8");
    const cleansed: string[] = cleanseDeclarations(contents);
    await createFile(`./dist/index.d.ts`, cleansed.join("\n\n"));
});

task("generateDocs",  (done: any) => {
    const typedoc: NodeJS.ReadWriteStream = td(TD_SETTINGS);
    const callback = (source: string[]) => src([...source]).pipe(typedoc).on("end", done);
    const filter = (files: string[]) => callback(files.filter(f => f.endsWith(".ts")));
    readMergedDirectoryListing("./src").then(filter);
});

task("disableJekyll", done => {
    const callback = (err: Error) => done(err ? err : undefined);
    open("./docs/.nojekyll", "w", callback);
});

task("build", series([
    "cleanDirectories",
    "compileSource",
    "compileSourceIndex",
    "compileTypingIndex",
    "generateDocs",
    "disableJekyll"
]));


