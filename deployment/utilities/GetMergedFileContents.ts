import GetFileContents from "./GetFileContents";

export default async function GetMergedFileContents (filePathsOfFilesToRead: string[], fileSystemEncoding: string): Promise<string[]> {

    const filesRead = [];

    for (const filePathOfFileToRead of filePathsOfFilesToRead) {

        const fileRead = GetFileContents(filePathOfFileToRead, fileSystemEncoding);

        filesRead.push(await fileRead);

    }

    return filesRead;

}
