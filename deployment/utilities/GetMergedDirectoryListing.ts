import {Queue} from "@gallink/oxygen/dist/src/Queue";
import GetDirectoryListing from "./GetDirectoryListing";
import GetListingDetails from "./GetListingDetails";

const getPathFromRoot = (listing: string, root: string) => listing.includes(root) ? listing : `${root}/${listing}`;

export default async function GetMergedDirectoryListing (pathToReadFrom: string, fileSystemOptions?: object): Promise<string[]> {

    // Get the liting of the directory.
    const directoryListing: string[] = await GetDirectoryListing(pathToReadFrom, fileSystemOptions);

    // Queue the entire contents of the listing.
    const directoryListingQueue: Queue<string> = new Queue<string>(directoryListing);

    const resolved: string[] = [];

    while (directoryListingQueue.pending) {

        const currentListing: string = directoryListingQueue.dequeue();

        const listingPath = getPathFromRoot(currentListing, pathToReadFrom);

        const listingDetails = await GetListingDetails(listingPath);

        if (listingDetails.isFile()) resolved.push(listingPath);

        if (listingDetails.isDirectory()) {

            const furtherListings = await GetMergedDirectoryListing(listingPath);

            furtherListings.forEach(furtherListing => directoryListingQueue.enqueue(furtherListing));

        }

    }
    return resolved;
}
