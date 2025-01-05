export function getPathFromUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return `...${parsedUrl.pathname}`;
    } catch (error) {
        console.error("Invalid URL:", error.message);
        return null;
    }
}