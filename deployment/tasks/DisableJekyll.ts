import {task} from "gulp";
import {open} from "fs";

task("DisableJekyll", (done: any) => {

    const fileOpened = (error: Error) => done(error ? error : undefined);

    open("./docs/.nojekyll", "w", fileOpened);

});
