import * as rimraf from "rimraf";

export default function RemoveDirectory (pathToReadFrom: string, rimrafOptions: object = {}): Promise<void> {

    return new Promise((resolve: () => void, reject: (error: Error) => void) => {

        const fileRemoved = (error: Error) => error ? reject(error) : resolve();

        rimraf(pathToReadFrom, rimrafOptions, fileRemoved);

    });

}
