import {task} from "gulp";
import * as ts from "gulp-typescript";
import {TS_SETTINGS} from "../gulpfile.settings";
import {dest, src} from "gulp";

task("CompileSourceIndex", () => {
    const typescript = ts(TS_SETTINGS);
    return src("sequence.ts")
        .pipe(typescript)
        .js.pipe(dest("dist/"));
});
