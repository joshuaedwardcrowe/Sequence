
export default function CleanseDeclaration (contentToCleanse: string): string {
    const contentLines = contentToCleanse.split("\n");
    const contentFilter = (contentLine: string) => !contentLine.startsWith("import") && !contentLine.startsWith("//#");
    const contentWithoutImports = contentLines.filter(contentFilter);
    return contentWithoutImports.join("\n")
}
