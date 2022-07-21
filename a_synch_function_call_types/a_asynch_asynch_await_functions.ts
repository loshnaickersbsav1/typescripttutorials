

import { CategoryMod } from '../enummod';
import * as  utility from '../utility';

/**
*
* @param item
*/

function getBooksByCategory(cat: CategoryMod): Promise<string[]> {

    const p: Promise<string[]> = new Promise((resolve, reject) => {
        setTimeout(() => {  // used to delay the return
            const foundBooks: string[] = utility.GetBookTitlesByCategoryMod(cat);

            if (foundBooks.length > 0) {
                resolve(foundBooks);
            } else {
                reject('No books found for the category . ');
            }


        }
            , 2000);
    });

    return p;

}


// asynch says, it's executing asynchronous code
async function logSearchResults(bookCat: CategoryMod) {
    // awaited function must return a promise
    const foundBooks = await getBooksByCategory(bookCat); // you can use a try catch block or the catch statement like below for the promise

    console.log(foundBooks);
}

console.log(`beginning search ...`);
logSearchResults(CategoryMod.Biography).catch(reason => console.log(`error  ${reason}`));
console.log(`search submitted ...`);
