

import { CategoryMod } from "../enummod";
import { Books, DamageLogger, Librarian, Author, Magazine } from "../interfacemod";
import { Encyclopedia, ReferenceItem } from "../ReferenceItem";
import * as  utility from "../utility";

/**
 * 
 * @param item 
 * 
 *     1) promises added to es2015  in the tsconfig file
       2)  let p: Promise<string[]> = new Promise((resolve, reject) 
       3) resolve returns strings
       4) reject returns error.
       5) 
*/


// interface defines a function signature ; function type
// interface LibMgrCallback {
//     (err:  Error, titles: string[]) : void;
// }

// data required for call and a higher order function returning the data (Called by the higher getBooksBy Category when the function is complete)
function getBooksByCategory ( cat : CategoryMod ) : Promise<string[]> {

    let p: Promise<string[]> = new Promise((resolve, reject) =>  {
        setTimeout(() => {  //used to delay the return
            let foundBooks: string[] = utility.GetBookTitlesByCategoryMod(cat);

            if (foundBooks.length > 0 ) 
            {
               resolve (foundBooks);
            }
            else
            {
                reject ('No books found for the category . ');
            }
    

        }
        , 2000);
    });

    return p;
    
}




/* normal way
console.log(`beginning search ...`);
getBooksByCategory(CategoryMod.Fiction)
.then(titles => console.log(`found titles: ${titles}`))
.catch(reason => console.log(`Error: ${reason}`));
console.log(`search submitted ...`);
*/

//chaining of promises which chains
console.log(`beginning search ... for ${CategoryMod.Fiction}` );
getBooksByCategory(CategoryMod.Fiction)
.then(titles => { 
    console.log(`found titles: ${titles}`) ; 
    return titles.length;}  , reason => {return 0;}) // diverting from catch
.then(numOfBooks => console.log(`number of books found : ${numOfBooks}`))
.catch(reason => console.log(`Error: ${reason}`)); // reason comes back from reject function in promise.
console.log(`search submitted ...`);




