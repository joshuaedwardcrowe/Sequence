"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
var HubRegistry = require("gulp-hub");
gulp_1.registry(new HubRegistry(["deployment/tasks/*.js"]));
gulp_1.task("build", gulp_1.series([
    "CleanActiveDirectories",
    "CompileSource",
    "CompileSourceIndex",
    "CompileTypingIndex",
    "GenerateDocumentation",
    "DisableJekyll"
]));
