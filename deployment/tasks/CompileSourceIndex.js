"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const ts = require("gulp-typescript");
const gulpfile_settings_1 = require("../gulpfile.settings");
gulp_1.task("CompileSourceIndex", () => {
    const typescript = ts(gulpfile_settings_1.TYPESCRIPT);
    return gulp_1.src("sequence.ts")
        .pipe(typescript)
        .js.pipe(gulp_1.dest("dist/"));
});
//# sourceMappingURL=CompileSourceIndex.js.map