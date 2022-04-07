

import { CategoryMod } from "./enummod";
import { Books, DamageLogger, Librarian, Author, Magazine } from "./interfacemod";
import { Encyclopedia, ReferenceItem } from "./ReferenceItem";
//import * as  utilit from "./enummod";
import * as  utility from "./utility";

// import {Purge}  from "./utility";
// import Shelf from "./Shelf";
// import * as _ from "lodash";

function PrintBookInfo(item: Books): void {
    console.log(`${item.title} was authored by ${item.author}`);
}

function PrintBookInfo2({title:newtitle,author:newautor}: Books): void {
    console.log(`destructed with new names book1 in a function arguent and field rename : ${newtitle} and ${newautor}`);
}
//let [books1 , books2] = utility.GetAllBooksMod();
//PrintBookInfo(books1);
//PrintBookInfo(books2);

function LogFavouritesBooks([books1, books2,...others]: Books[]) {
    PrintBookInfo(books1);
    PrintBookInfo(books2);
    console.log("----rest");
    others.forEach(x=>PrintBookInfo(x));
    console.log("----destructure of book1");
    let {title,author} = books1;
    console.log(`destructed book1 : ${title} and ${author}`);
    console.log("----");
    let {title:newtitle,author:newautor} = books1;
    console.log(`destructed with new names book1 and field rename : ${newtitle} and ${newautor}`);
    console.log("----")
    PrintBookInfo2(books1);

    console.log("----spead operator");
    console.log("----spead operator -using push");

    let schoolBooks: Books[] = [
        {id:1, title: 'Ulyses'  , author: 'James Joyce', available: true, category: CategoryMod.Poetry},
        {id:2, title: 'A farewell to Arms'  , author: 'Ernst Hemingway', available: false, category: CategoryMod.Biography},
        {id:3, title: 'I know why the Caged Bird Sings'  , author: 'Maya A', available: true, category: CategoryMod.Fiction}
        ];

        let booksRead = utility.GetAllBooksMod();
        booksRead.push(...schoolBooks);
        booksRead.forEach(x =>  console.log(`books ${x.title}`));


        console.log("----spead operator -using array element");

        let poets:string[] = ['chaucer', 'thomas swift', 'shakespear'] ;
        let authors:string[] = ['robin sharma', 'elon musk', 'thomas edison', ...poets] ;

        console.log(authors);

}

LogFavouritesBooks( utility.GetAllBooksMod());
