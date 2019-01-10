import {readFile} from "fs";

export default function GetFileContents (pathToReadFrom: string, fileSystemEncoding: string): Promise<string> {

    return new Promise((resolve: (readFile: string) => void, reject: (error: Error) => void) => {

        const fileContentsRead = (error: Error, fileRead: string) => error ? reject(error) : resolve(fileRead);

        readFile(pathToReadFrom, fileSystemEncoding, fileContentsRead);

    });

}
