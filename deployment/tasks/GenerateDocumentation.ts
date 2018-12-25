import {src, task} from "gulp";
import * as td from "gulp-typedoc";
import {TYPEDOC} from "../gulpfile.settings";
import GetMergedDirectoryListing from "../utilities/GetMergedDirectoryListing";

task("GenerateDocumentation",  (done: any) => {

    const typedoc: NodeJS.ReadWriteStream = td(TYPEDOC);

    const generateDocumentation = (source: string[]) =>
        src([...source])
        .pipe(typedoc)
        .on("end", done);

    const filterDirectoryListing = (directoryListing: string) => directoryListing.endsWith(".ts");

    const filterDirectoryListings = (directoryListings: string[]) => generateDocumentation(directoryListings.filter(filterDirectoryListing));

    GetMergedDirectoryListing("./src").then(filterDirectoryListings);

});
