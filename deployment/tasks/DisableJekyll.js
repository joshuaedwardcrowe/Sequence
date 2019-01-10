"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const fs_1 = require("fs");
gulp_1.task("DisableJekyll", (done) => {
    const fileOpened = (error) => done(error ? error : undefined);
    fs_1.open("./docs/.nojekyll", "w", fileOpened);
});
//# sourceMappingURL=DisableJekyll.js.map