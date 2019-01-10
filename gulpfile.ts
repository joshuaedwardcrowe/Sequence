import { registry, task, series } from "gulp";
import * as HubRegistry from "gulp-hub";

registry(new HubRegistry(["deployment/tasks/*.js"]));

task("build", series([
    "CleanActiveDirectories",
    "CompileSource",
    "CompileSourceIndex",
    "CompileTypingIndex",
    "GenerateDocumentation",
    "DisableJekyll"
]));
