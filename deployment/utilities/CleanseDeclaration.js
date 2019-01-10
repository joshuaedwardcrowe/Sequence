"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CleanseDeclaration(contentToCleanse) {
    const contentLines = contentToCleanse.split("\n");
    const contentFilter = (contentLine) => !contentLine.startsWith("import") && !contentLine.startsWith("//#");
    const contentWithoutImports = contentLines.filter(contentFilter);
    return contentWithoutImports.join("\n");
}
exports.default = CleanseDeclaration;
//# sourceMappingURL=CleanseDeclaration.js.map