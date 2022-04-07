
import { CategoryMod } from "./enummod";
import { Books, DamageLogger, Magazine} from "./interfacemod";
import { Encyclopedia, ReferenceItem } from "./ReferenceItem";
import {Purge}  from "./utility";
import Shelf from "./Shelf";
import * as _ from "lodash";


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
        break;2
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

function GetBookByIDMod(id: number):string
{
    const allBooks:Books[] = GetAllBooksMod();
    //.filter takes a predicate , like in java , returns a list of books 
    // but we're expecting one back. Looking at the javascript shows ou how it evaluates to with  Function ...
    return allBooks.filter( books => books.id === id)[0].title;
}


let myBook = {
    id: 5,
    title: "title",
    author: "Robin Sharma",
    available: true,
    category: CategoryMod.Biography,
    price:55.00,
    markedDamaged: (reason:string) => console.log("damaged: " + reason)
}

function PrintBook(currentBook: Books): void {
    console.log(currentBook);
    console.log(currentBook.category); //price is not accessible
}


const  fictionBooks = GetBookTitlesByCategory2(CategoryMod.Fiction);

//for each and val 1st parameter returned
fictionBooks.forEach( (val , idx, arr) =>     console.log(++idx + '-' + val) );

let logDmage: DamageLogger;

//provide the implementation
logDmage = (damage: string) => console.log('damage reported interface ftypes ' + damage);

//invoking the function
logDmage("new damage");

// console.log("get book " + GetBookByIDMod(1) );

// PrintBook(myBook);
// myBook.markedDamaged("missing +");


let refBook = new Encyclopedia("f", 1999, 13); //if extends is used. super implied if not specified.
// refBook.printItem();
//refBook.year;// not available for use

let ref2: ReferenceItem = new Encyclopedia("abstractpedia ", 2021, 15); // doesn't ovride ref
ref2.printItem();

let Inventory: Array<Books> =   [
    {id:1, title: 'c'  , author: 'James Joyce', available: true, category: CategoryMod.Poetry},
    {id:2, title: 'Code complete '  , author: 'Ernst Hemingway', available: false, category: CategoryMod.Biography},
    {id:3, title: 'Cobol'  , author: 'Maya A', available: true, category: CategoryMod.Fiction}
    ];

let PurgedBooked: Books[] = Purge<Books> (Inventory);
//let PurgedBooked2: number[] = Purge<Books> (Inventory); error , not of type expected.
PurgedBooked.forEach(books => console.log (`Purged books ${books.title}`) ); 


let PurgedNums: number[] = Purge<number> ([1,2,3]);
PurgedNums.forEach(x => console.log(x));

let InventoryShelf: Array<Books> =   [
    {id:1, title: 'c'  , author: 'James Joyce', available: true, category: CategoryMod.Poetry},
    {id:2, title: 'Code complete '  , author: 'Ernst Hemingway', available: false, category: CategoryMod.Biography},
    {id:3, title: 'Cobol'  , author: 'Maya A', available: true, category: CategoryMod.Fiction}
    ];


let bookShelf : Shelf<Books> = new Shelf<Books>();
Inventory.forEach(x => bookShelf.add(x));

let firstBook: Books = bookShelf.getFirst();

let magInventory: Array<Magazine> =  [
    {title: 'c'  , publisher: 'James Joyce'},
    {title: 'Code complete '  , publisher: 'Ernst Hemingway'},
    {title: 'Cobol'  , publisher: 'Maya A'}
    ];

let magShelf : Shelf<Magazine> = new Shelf<Magazine>();
magInventory.forEach(x => magShelf.add(x));

let firstMag: Magazine = magShelf.getFirst();


//let numShelf : Shelf<number> = new Shelf<number>(); // does not contain the constraint
//[5,10,15].forEach(n => numShelf.add(n));

let snakeCaseTitle: string = _.snakeCase('For ME tp YOU!!');
console.log(`Output ${snakeCaseTitle}`);

