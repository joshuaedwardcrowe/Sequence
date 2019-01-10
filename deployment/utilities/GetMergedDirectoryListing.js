"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Queue_1 = require("@gallink/oxygen/dist/src/Queue");
const GetDirectoryListing_1 = require("./GetDirectoryListing");
const GetListingDetails_1 = require("./GetListingDetails");
const getPathFromRoot = (listing, root) => listing.includes(root) ? listing : `${root}/${listing}`;
async function GetMergedDirectoryListing(pathToReadFrom, fileSystemOptions) {
    // Get the liting of the directory.
    const directoryListing = await GetDirectoryListing_1.default(pathToReadFrom, fileSystemOptions);
    // Queue the entire contents of the listing.
    const directoryListingQueue = new Queue_1.Queue(directoryListing);
    const resolved = [];
    while (directoryListingQueue.pending) {
        const currentListing = directoryListingQueue.dequeue();
        const listingPath = getPathFromRoot(currentListing, pathToReadFrom);
        const listingDetails = await GetListingDetails_1.default(listingPath);
        if (listingDetails.isFile())
            resolved.push(listingPath);
        if (listingDetails.isDirectory()) {
            const furtherListings = await GetMergedDirectoryListing(listingPath);
            furtherListings.forEach(furtherListing => directoryListingQueue.enqueue(furtherListing));
        }
    }
    return resolved;
}
exports.default = GetMergedDirectoryListing;
//# sourceMappingURL=GetMergedDirectoryListing.js.map