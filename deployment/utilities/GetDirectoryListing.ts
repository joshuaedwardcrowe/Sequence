import {readdir} from "fs";

export default function GetDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {

    return new Promise((resolve: (directoryListing: string[]) => void, reject: (error: Error) => void) => {

        const directoryRead = (err: Error, files: string[]) => err ? reject(err) : resolve(files);

        readdir(pathToReadFrom, fileSystemOptions, directoryRead);

    });
}
