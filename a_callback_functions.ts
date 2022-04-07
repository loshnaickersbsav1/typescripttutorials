

import { CategoryMod } from "./enummod";
import { Books, DamageLogger, Librarian, Author, Magazine } from "./interfacemod";
import { Encyclopedia, ReferenceItem } from "./ReferenceItem";
import * as  utility from "./utility";

/**
 * 
 * @param item 
 * 
 * setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other 
 * functions in the functions stack. In other words, you cannot use setTimeout() to create a "pause" before the next 
 * function in the function stack fires.
 * 
 *      1) A higher order function(fnctions that take other functions as param), may be passed functions 
        as parameters. These functions are call back functions
       2) Callbacks execute after an asynchrounous operation
       3) Commonly used to process asynchronous results
       4) May have a signature
       5) Convention 2 params -> error object  and a data parameter that the call back needs to process
*/


// interface defines a function signature ; function type
interface LibMgrCallback {
    (err:  Error, titles: string[]) : void;
}


function getBooksByCategory ( cat : CategoryMod, callback : LibMgrCallback ) : void {

    //  pretends to be a server call
    //  code to be run after the time out expires, is the 1st parameter in the timeout.
    setTimeout (() => { 
    try 
    {
        //actual work to be performed, pretending this might take a while to return
        let foundBooks: string[] = utility.GetBookTitlesByCategoryMod(cat);

        if (foundBooks.length > 0 ) 
        {
            callback( null , foundBooks);
        }
        else
        {
            throw new Error('No books found.');
        }

    } catch (error) 
    {
        callback(error, null );
    }
} , 2000);

}


function logCategorySearch (err: Error, titles: string[]): void {

    if (err) {
        console.log(`Error message ${err.message}`);
    }
    else{
        console.log(`Found the following titles: `);
        console.log(titles);
    }

}



console.log(`beginning search ...`);
getBooksByCategory(CategoryMod.Fiction, logCategorySearch);
console.log(`search submitted ...`)




