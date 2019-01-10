"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const ts = require("gulp-typescript");
const gulpfile_settings_1 = require("../gulpfile.settings");
const merge = require("merge2");
gulp_1.task("CompileSource", () => {
    // Create the typescript compiler source.
    const typescript = ts(gulpfile_settings_1.TYPESCRIPT);
    // Create the compiler stream.
    const compiler = gulp_1.src("src/**/*.ts").pipe(typescript);
    // Create the destination for .js and .d.ts files.
    const js = compiler.js.pipe(gulp_1.dest("dist/src"));
    const declarations = compiler.dts.pipe(gulp_1.dest("typings"));
    // Merge to kill the task.
    return merge([js, declarations]);
});
//# sourceMappingURL=CompileSource.js.map