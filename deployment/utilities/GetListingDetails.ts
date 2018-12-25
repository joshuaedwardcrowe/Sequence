import {lstat, Stats} from "fs";

export default function GetListingDetails (pathToReadFrom: string): Promise<Stats> {

    return new Promise((resolve: (listingDetails: Stats) => void, reject: (error: Error) => void) => {

        const listingDetailsRetrieved = (error: Error, listingDetails: Stats) => error ? reject(error) : resolve(listingDetails);

        lstat(pathToReadFrom, listingDetailsRetrieved);

    });

}
