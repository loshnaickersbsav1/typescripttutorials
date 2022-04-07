"use strict";
exports.__esModule = true;
var enummod_1 = require("./enummod");
var utility = require("./utility");
function getBooksByCategory(cat, callback) {
    //  pretends to be a server call
    //  code to be run after the time out expires, is the 1st parameter in the timeout.
    setTimeout(function () {
        try {
            //actual work to be performed, pretending this might take a while to return
            var foundBooks = utility.GetBookTitlesByCategoryMod(cat);
            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            }
            else {
                throw new Error('No books found.');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}
function logCategorySearch(err, titles) {
    if (err) {
        console.log("Error message ".concat(err.message));
    }
    else {
        console.log("Found the following titles: ");
        console.log(titles);
    }
}
console.log("beginning search ...");
getBooksByCategory(enummod_1.CategoryMod.Fiction, logCategorySearch);
console.log("search submitted ...");
