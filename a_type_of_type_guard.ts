

// import { CategoryMod } from "./enummod";
// import { Books, DamageLogger, Librarian, Author, Magazine } from "./interfacemod";
// import { Encyclopedia, ReferenceItem } from "./ReferenceItem";
// import * as  utility from "./utility";

// import { UnversityLibrarian, Employee, Researcher } from "./a_classes"


// function PrintBookInfo(item: Books): void {
//     console.log(`${item.title} was authored by ${item.author}`);
// }

// function PrintBookInfo2({ title: newtitle, author: newautor }: Books): void {
//     console.log(`destructed with new names book1 in a function arguent and field rename : ${newtitle} and ${newautor}`);
// }
// let [books1, books2] = utility.GetAllBooksMod();
// //PrintBookInfo(books1);
// //PrintBookInfo(books2);

// function LogFavouritesBooks([books1, books2, ...others]: Books[]) {

//     console.log("----tuple");

//     let myTuple: [number, string] = [10, 'Macbeth'];
//     // myTuple[0]='hamlet'; must be string 1st 2 elements must agree with definition of the tuple array
//     myTuple[0] = 1;
//     myTuple[1] = 'hamlet';
//     myTuple.push('hamlet');
//     myTuple.push('new string');
//     myTuple.push(1);
//     myTuple.forEach(x => console.log(`element  ${x}`));



// }

// LogFavouritesBooks(utility.GetAllBooksMod());


// let catlocation: [string, Books] = ['sssss', books1]; //1st to [0],[1] - combines numerically name properties with values of array

// catlocation.push(books2);
// catlocation.push('some string');
// /** tuple types are great for creating key value pair, below generic interface , takes  2 type parameters, 
//  *  interface;  because tuple types extend arrays , defining extends that will take array of k or V
//  */
// interface KeyValuePair<k, v> extends Array<k | v> {
//     0: k;
//     1: v;
// }

// // defining a k value pair array of string and books
// let catlocationkv: KeyValuePair<string, Books> = ['A', books1];

// catlocation.push(...['B', books2]);


// /** One of several possible types */

// function PrintIdentifier(id: string | number) {

// }

// /** Intersection type specifies, all members from multiple types */
// let allBooks: Books[] = utility.GetAllBooksMod();
// let allMagazines: Magazine[] = utility.GetAllMagazinesMod();

// let readingMaterial: Books | Magazine = allBooks[0]; //accepts either

// // let readingMaterialIntersections: Books & Magazine = allBooks[0]; //publisher missing

// let readingMaterialIntersections2: Books & Magazine =
//     { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: CategoryMod.Poetry, publisher: "jack" }; //publisher now added and works

// function PrintTitle(item: Books | Magazine): void {

//     console.log(`  title of periodical  ${item.title}`)
// }

// /**          
//  *  Construct to enable mixins, basic implementations of shared properties and functions required as in a_classes.
//  *           class to which  you want to add to
 
// *                       -List of classes from[]
// */

// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtors => {
//         Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtors.prototype[name];
//         });
//     });
// }

// applyMixins(UnversityLibrarian, [Employee, Researcher]);

// let newLibrian = new UnversityLibrarian();
// newLibrian.doResearch("bitcoin");


function logVistor(param: number | string) {
    if (typeof param === 'number') {
        console.log(`${param} new visitors arrived` );
    }
    else
    {
        //string
        console.log(`${param.toUpperCase()} visited` );
    }
}


console.log(`  number ${logVistor(500)}`  ); // didn't
console.log(`  named  ${logVistor('Jeff')}`  );
//PrintTitle(readingMaterialIntersections2);









