import {writeFile} from "fs";

export default function CreateFile (pathToWriteTo: string, contents: string) {

    return new Promise((resolve: () => void, reject: (error: Error) => void) => {

        const fileWritten = (error: Error) => error ? reject(error) : resolve();

        writeFile(pathToWriteTo, contents, fileWritten);

    });

}
