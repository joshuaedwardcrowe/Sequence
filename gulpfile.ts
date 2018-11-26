import * as gulp from "gulp";
import * as typedoc from "gulp-typedoc";
import * as ts from "gulp-typescript";
import * as clean from "gulp-clean";
import * as merge from "merge2";
import * as fs from "fs";

gulp.task("cleanDirectories", () => {
    return gulp.src(["dist/", "docs/"])
        .pipe(clean());
});

gulp.task("compileSource", () => {
    const tsResult = gulp.src("src/*.ts")
        .pipe(ts({
            declaration: true,
            module: "commonjs",
            lib: ["es2018"],
            target: "es2018",
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest("dist/")),
        tsResult.js.pipe(gulp.dest("dist/"))
    ]);
});

gulp.task("generateDocs", () => {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(typedoc({
            module: "commonjs",
            target: "es2018",
            out: "docs/",
            name: "Gallink Sequence"
        }));
});

// gulp.task("generateJekyllConfig", (done) => {
//     fs.readFile("./_config.yaml", "UTF8", (readError, cont) => {
//         if (readError) done(readError)
//         fs.appendFile("./docs/_config.yaml", cont, (appendError) => {
//             if (appendError) done(appendError);
//             done()
//         });
//     })
// })

gulp.task("disableJekyll", done => {
    fs.open("./docs/.nojekyll", "w", error => {
        if (error) done(error);
        done();
    });
});

gulp.task("build", gulp.series([
    "cleanDirectories",
    "compileSource",
    "generateDocs",
    "disableJekyll"
]));
