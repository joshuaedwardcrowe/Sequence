import {rename} from "fs";

export default function RenameFile (pathToRename: string, pathAfterRename: string) {

    return new Promise((resolve: () => void, reject: (error: Error) => void) => {

        const fileWritten = (error: Error) => error ? reject(error) : resolve();

        rename(pathToRename, pathAfterRename, fileWritten);

    });

}
