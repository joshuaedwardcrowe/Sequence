import {Settings} from "gulp-typescript";
import {Options} from "gulp-typedoc";

export const TYPESCRIPT: Settings = {
    declaration: true,
    lib: ["es2018"],
    module: "commonjs",
    target: "es2018"
};
export const TYPEDOC: Options = {
    mode: "file",
    module: "commonjs",
    name: "Gallink Sequence",
    out: "docs/",
    target: "es2018",

};
export const DEPLOYMENT_FOLDERS = [
    "docs",
    "typings",
    "dist"
];

export const MAIN_FILE_NAME = "sequence.js";
export const MAIN_FILE_NAME_DISTRIBUTED = "index.js";
