import {task} from "gulp";
import {DEPLOYMENT_FOLDERS} from "../gulpfile.settings";
import GetDirectoryListing from "../utilities/GetDirectoryListing";
import RemoveDirectory from "../utilities/RemoveDirectory";

/**
 * Cleans directories that are updated as we develop, such as docs/ and dist/.
 */
task("CleanActiveDirectories", async (): Promise<void> => {

    const directories: string[] = await GetDirectoryListing("./");

    for (const directory of directories) {

        if (DEPLOYMENT_FOLDERS.includes(directory)) {

            await RemoveDirectory(`./${directory}`);

        }

    }

});
