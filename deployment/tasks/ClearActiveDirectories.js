"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const gulpfile_settings_1 = require("../gulpfile.settings");
const GetDirectoryListing_1 = require("../utilities/GetDirectoryListing");
const RemoveDirectory_1 = require("../utilities/RemoveDirectory");
/**
 * Cleans directories that are updated as we develop, such as docs/ and dist/.
 */
gulp_1.task("CleanActiveDirectories", async () => {
    const directories = await GetDirectoryListing_1.default("./");
    for (const directory of directories) {
        if (gulpfile_settings_1.DEPLOYMENT_FOLDERS.includes(directory)) {
            await RemoveDirectory_1.default(`./${directory}`);
        }
    }
});
//# sourceMappingURL=ClearActiveDirectories.js.map