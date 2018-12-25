import {Settings} from "gulp-typescript";
import {Options} from "gulp-typedoc";

export const TS_SETTINGS: Settings = {
    declaration: true,
    lib: ["es2018"],
    module: "commonjs",
    target: "es2018"
};
export const TD_SETTINGS: Options = {
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
