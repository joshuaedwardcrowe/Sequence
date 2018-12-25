import {task} from "gulp";
import * as ts from "gulp-typescript";
import {TS_SETTINGS} from "../gulpfile.settings";
import {dest, src} from "gulp";
import * as merge from "merge2";

task("CompileSource", () => {

    // Create the typescript compiler source.
    const typescript: NodeJS.ReadWriteStream = ts(TS_SETTINGS);

    // Create the compiler stream.
    const compiler: any = src("src/**/*.ts").pipe(typescript);

    // Create the destination for .js and .d.ts files.
    const js = compiler.js.pipe(dest("dist/src"));
    const declarations = compiler.dts.pipe(dest("typings"));

    // Merge to kill the task.
    return merge([js, declarations]);

});
