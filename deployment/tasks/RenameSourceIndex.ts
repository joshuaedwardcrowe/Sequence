import {task} from "gulp";
import RenameFile from "../utilities/RenameFile";
import {MAIN_FILE_NAME, MAIN_FILE_NAME_DISTRIBUTED} from "../gulpfile.settings";

task("RenameSourceIndex", async () => {

    await RenameFile(`./dist/${MAIN_FILE_NAME}`, `./dist/${MAIN_FILE_NAME_DISTRIBUTED}`);

});
