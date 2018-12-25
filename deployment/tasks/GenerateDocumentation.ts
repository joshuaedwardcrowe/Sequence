import {src, task} from "gulp";
import * as td from "gulp-typedoc";
import {TD_SETTINGS} from "../gulpfile.settings";
import {readMergedDirectoryListing} from "../gulpfile.utility";

task("GenerateDocumentation",  (done: any) => {
    const typedoc: NodeJS.ReadWriteStream = td(TD_SETTINGS);
    const callback = (source: string[]) => src([...source]).pipe(typedoc).on("end", done);
    const filter = (files: string[]) => callback(files.filter(f => f.endsWith(".ts")));
    readMergedDirectoryListing("./src").then(filter);
});
