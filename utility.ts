import {Books} from "./interfacemod"
import {CategoryMod} from "./enummod"
import {Magazine} from "./interfacemod"


//type parameter     ; array T's retrun Array of T's
function Purge<T> (inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
} 



function GetBookTitlesByCategoryMod(categoryFilter: CategoryMod): Array <string> {

    console.log('Getting books in category : ' + categoryFilter);

    const allBooks = GetAllBooksMod();
    
    const filteredTitles: string[] = [];
    
    for ( let currentBook of allBooks)
    {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    
    return filteredTitles;
}

function  GetAllMagazinesMod():Magazine[] {
    //let keeps scope
    //type script infers the types output
    /*
        id: number;
        title: string;
        author: string;
        available: boolean;
        category: CategoryMod;
    */

    let Magazine: Magazine []= [
    {title: 'Ulyses'  , publisher: 'James Joyce'},
    {title: 'A farewell to Arms'  , publisher: 'Ernst Hemingway'},
    {title: 'I know why the Caged Bird Sings'  , publisher: 'Maya A'}
    ];
    return Magazine;

}



function  GetAllBooksMod():Books[] {
    //let keeps scope
    //type script infers the types output
    /*
        id: number;
        title: string;
        author: string;
        available: boolean;
        category: CategoryMod;
    */

    let books = [
    {id:1, title: 'Ulyses'  , author: 'James Joyce', available: true, category: CategoryMod.Poetry},
    {id:2, title: 'A farewell to Arms'  , author: 'Ernst Hemingway', available: false, category: CategoryMod.Fiction},
    {id:3, title: 'I know why the Caged Bird Sings'  , author: 'Maya A', available: true, category: CategoryMod.Fiction}
    ];
    return books;

}

export {Purge, GetAllBooksMod, GetAllMagazinesMod, GetBookTitlesByCategoryMod};