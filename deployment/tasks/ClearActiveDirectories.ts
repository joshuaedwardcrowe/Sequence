import {task} from "gulp";
import {DEPLOYMENT_FOLDERS} from "../gulpfile.settings";
import {readDirectoryListing, removeDirectory} from "../gulpfile.utility";

/**
 * Cleans directories that are updated as we develop, such as docs/ and dist/.
 */
task("CleanActiveDirectories", async () => {
    const directories: string[] = await readDirectoryListing("./");
    for (const directory of directories) {
        if (DEPLOYMENT_FOLDERS.includes(directory)) await removeDirectory(`./${directory}`);
    }
});
