
import { CategoryMod } from "./enummod";
import { Books} from "./interfacemod";


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
    {id:2, title: 'A farewell to Arms'  , author: 'Ernst Hemingway', available: false, category: CategoryMod.Biography},
    {id:3, title: 'I know why the Caged Bird Sings'  , author: 'Maya A', available: true, category: CategoryMod.Fiction}
    ];

    return books;

}

function LogFirstAvailable2(books: any): void{

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
    

        //let firstAvailable = '';
        if (currentBook.available) {
        firstAvailable = currentBook.title;
        break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    //console.log('First Available: ' + firstAvailable)
    console.log('First Available: ' + firstAvailable)

}


function GetBookTitlesByCategory2(categoryFilter: CategoryMod): Array <string> {

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

function LogBookTitles2 (titles : string[]): void {

    for (let title of titles) 
    {
        console.log(title);
    }
}

function GetBookByIDMod(id: number):Books
{
    const allBooks = GetAllBooksMod();
    //.filter takes a predicate , like in java , returns a list of books 
    // but we're expecting one back. Looking at the javascript shows ou how it evaluates to with  Function ...
    return allBooks.filter( books => books.id === id)[0].title;
}

const  fictionBooks = GetBookTitlesByCategory2(CategoryMod.Fiction);

//for each and val 1st parameter returned
fictionBooks.forEach( (val , idx, arr) =>     console.log(++idx + '-' + val) );


console.log("get book " + GetBookByIDMod(1) );