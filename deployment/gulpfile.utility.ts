import {lstat, readdir, readFile, Stats, writeFile} from "fs";
import {Queue} from "@gallink/oxygen";
import * as rimraf from "rimraf";

export function  readFileContents (pathToReadFrom: string, fileSystemEncoding: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, contents: string) => err ? reject(err) : resolve(contents);
        readFile(pathToReadFrom, fileSystemEncoding, callback);
    });
}

export async function readMergedFileContents (filePathsOfFilesToRead: string[], fileSystemEncoding: string): Promise<string[]> {
    const filesRead = [];
    for (const filePathOfFileToRead of filePathsOfFilesToRead) {
        filesRead.push(await readFileContents(filePathOfFileToRead, fileSystemEncoding));
    }
    return filesRead;
}

export function readDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, files: string[]) => err ? reject(err) : resolve(files);
        readdir(pathToReadFrom, fileSystemOptions, callback);
    });
}

export function getObjectStatistics (pathToReadFrom: string): Promise<Stats> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error, stats: Stats) => err ? reject(err) : resolve(stats);
        lstat(pathToReadFrom, callback);
    });
}

export async function readMergedDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {
    const read: string[] = await readDirectoryListing(pathToReadFrom);
    const listings: Queue<string> = new Queue<string>(read);
    const resolved: string[] = [];

    while (listings.items.length > 0) {
        const listing: string = listings.dequeue();
        const listingPath = listing.includes(pathToReadFrom) ? listing : `${pathToReadFrom}/${listing}`;
        const listingDetails = await getObjectStatistics(listingPath);

        if (listingDetails.isFile()) resolved.push(listingPath); // e.g typings/sequenceBuilder
        if (listingDetails.isDirectory()) {
            const further = await readMergedDirectoryListing(listingPath);
            further.forEach(furth => listings.enqueue(furth));
        }
    }
    return resolved;
}

export function removeDirectory (pathToReadFrom: string, rimrafOptions: object = {}): Promise<void> {
    return new Promise((resolve, reject) => {
        const callback = (err: Error) => err ? reject(err) : resolve();
        rimraf(pathToReadFrom, rimrafOptions, callback);
    });
}

export function createFile (pathToWriteTo: string, contents: string) {
    return new Promise((resolve, reject) => {
        const callback = (err: Error) => err ? reject(err) : resolve();
        writeFile(pathToWriteTo, contents,  callback);
    });
}

export function cleanseDeclarations (contentsToCleanse: string[]): string[] {
    return contentsToCleanse.map(contentToCleanse => {
        const contentsSplit = contentToCleanse.split("\n");
        const contentsMapped = contentsSplit.filter(x => !x.startsWith("import") && !x.startsWith("//#"));
        return contentsMapped.join("\n");
    });
}
