"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function GetListingDetails(pathToReadFrom) {
    return new Promise((resolve, reject) => {
        const listingDetailsRetrieved = (error, listingDetails) => error ? reject(error) : resolve(listingDetails);
        fs_1.lstat(pathToReadFrom, listingDetailsRetrieved);
    });
}
exports.default = GetListingDetails;
//# sourceMappingURL=GetListingDetails.js.map