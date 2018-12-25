import {task, dest, src} from "gulp";
import * as ts from "gulp-typescript";
import {TYPESCRIPT} from "../gulpfile.settings";
import * as merge from "merge2";

task("CompileSource", (): NodeJS.ReadWriteStream => {

    // Create the typescript compiler source.
    const typescript: NodeJS.ReadWriteStream = ts(TYPESCRIPT);

    // Create the compiler stream.
    const compiler: any = src("src/**/*.ts").pipe(typescript);

    // Create the destination for .js and .d.ts files.
    const js: NodeJS.ReadWriteStream = compiler.js.pipe(dest("dist/src"));
    const declarations: NodeJS.ReadWriteStream = compiler.dts.pipe(dest("typings"));

    // Merge to kill the task.
    return merge([js, declarations]);

});
