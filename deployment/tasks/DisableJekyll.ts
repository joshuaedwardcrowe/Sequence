import {task} from "gulp";
import {open} from "fs";

task("DisableJekyll", done => {
    const callback = (err: Error) => done(err ? err : undefined);
    open("./docs/.nojekyll", "w", callback);
});
