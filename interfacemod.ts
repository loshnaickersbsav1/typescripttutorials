import { CategoryMod } from "./enummod";


interface Books  {

    id: number;
    title: string;
    author: string;
    available: boolean;
    category: CategoryMod;
    copies?:number;
    markedDamaged?: DamageLogger; 

}

interface DamageLogger {
(reason:string) : void; 
}

interface Person {
    name: string;
    surname : string;
}

interface Author extends Person {
    numberOfBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    //assistCustomer: (custName : string) => void;
}

interface Magazine { 
    title : string ; 
    publisher: string; 
}

export {Books , DamageLogger, Author, Librarian, Magazine };