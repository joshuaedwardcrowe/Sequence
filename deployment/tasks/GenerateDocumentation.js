"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const td = require("gulp-typedoc");
const gulpfile_settings_1 = require("../gulpfile.settings");
const GetMergedDirectoryListing_1 = require("../utilities/GetMergedDirectoryListing");
gulp_1.task("GenerateDocumentation", (done) => {
    const typedoc = td(gulpfile_settings_1.TYPEDOC);
    const generateDocumentation = (source) => gulp_1.src([...source])
        .pipe(typedoc)
        .on("end", done);
    const filterDirectoryListing = (directoryListing) => directoryListing.endsWith(".ts");
    const filterDirectoryListings = (directoryListings) => generateDocumentation(directoryListings.filter(filterDirectoryListing));
    GetMergedDirectoryListing_1.default("./src").then(filterDirectoryListings);
});
//# sourceMappingURL=GenerateDocumentation.js.map