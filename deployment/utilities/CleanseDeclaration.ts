
export default function CleanseDeclaration (contentToCleanse: string): string {
    const contentLines: string[] = contentToCleanse.split("\n");
    const contentFilter = (contentLine: string) => !contentLine.startsWith("import") && !contentLine.startsWith("//#");
    const contentWithoutImports: string[] = contentLines.filter(contentFilter);
    return contentWithoutImports.join("\n");
}
