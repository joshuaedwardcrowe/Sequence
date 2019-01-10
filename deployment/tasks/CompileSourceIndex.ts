import {task, dest, src} from "gulp";
import * as ts from "gulp-typescript";
import {TYPESCRIPT} from "../gulpfile.settings";

task("CompileSourceIndex", (): NodeJS.ReadWriteStream => {

    const typescript = ts(TYPESCRIPT);

    return src("sequence.ts")
        .pipe(typescript)
        .js.pipe(dest("dist/"));

});
