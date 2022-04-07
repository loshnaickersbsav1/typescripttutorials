"use strict";
exports.__esModule = true;
var enummod_1 = require("./enummod");
var ReferenceItem_1 = require("./ReferenceItem");
var utility_1 = require("./utility");
var Shelf_1 = require("./Shelf");
var _ = require("lodash");
function GetAllBooksMod() {
    //let keeps scope
    //type script infers the types output
    /*
        id: number;
        title: string;
        author: string;
        available: boolean;
        category: CategoryMod;
    */
    var books = [
        { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: enummod_1.CategoryMod.Poetry },
        { id: 2, title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: enummod_1.CategoryMod.Biography },
        { id: 3, title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: enummod_1.CategoryMod.Fiction }
    ];
    return books;
}
function LogFirstAvailable2(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        //let firstAvailable = '';
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
            2;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    //console.log('First Available: ' + firstAvailable)
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory2(categoryFilter) {
    console.log('Getting books in category : ' + categoryFilter);
    var allBooks = GetAllBooksMod();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles2(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByIDMod(id) {
    var allBooks = GetAllBooksMod();
    //.filter takes a predicate , like in java , returns a list of books 
    // but we're expecting one back. Looking at the javascript shows ou how it evaluates to with  Function ...
    return allBooks.filter(function (books) { return books.id === id; })[0].title;
}
var myBook = {
    id: 5,
    title: "title",
    author: "Robin Sharma",
    available: true,
    category: enummod_1.CategoryMod.Biography,
    price: 55.00,
    markedDamaged: function (reason) { return console.log("damaged: " + reason); }
};
function PrintBook(currentBook) {
    console.log(currentBook);
    console.log(currentBook.category); //price is not accessible
}
var fictionBooks = GetBookTitlesByCategory2(enummod_1.CategoryMod.Fiction);
//for each and val 1st parameter returned
fictionBooks.forEach(function (val, idx, arr) { return console.log(++idx + '-' + val); });
var logDmage;
//provide the implementation
logDmage = function (damage) { return console.log('damage reported interface ftypes ' + damage); };
//invoking the function
logDmage("new damage");
// console.log("get book " + GetBookByIDMod(1) );
// PrintBook(myBook);
// myBook.markedDamaged("missing +");
var refBook = new ReferenceItem_1.Encyclopedia("f", 1999, 13); //if extends is used. super implied if not specified.
// refBook.printItem();
//refBook.year;// not available for use
var ref2 = new ReferenceItem_1.Encyclopedia("abstractpedia ", 2021, 15); // doesn't ovride ref
ref2.printItem();
var Inventory = [
    { id: 1, title: 'c', author: 'James Joyce', available: true, category: enummod_1.CategoryMod.Poetry },
    { id: 2, title: 'Code complete ', author: 'Ernst Hemingway', available: false, category: enummod_1.CategoryMod.Biography },
    { id: 3, title: 'Cobol', author: 'Maya A', available: true, category: enummod_1.CategoryMod.Fiction }
];
var PurgedBooked = (0, utility_1.Purge)(Inventory);
//let PurgedBooked2: number[] = Purge<Books> (Inventory); error , not of type expected.
PurgedBooked.forEach(function (books) { return console.log("Purged books ".concat(books.title)); });
var PurgedNums = (0, utility_1.Purge)([1, 2, 3]);
PurgedNums.forEach(function (x) { return console.log(x); });
var InventoryShelf = [
    { id: 1, title: 'c', author: 'James Joyce', available: true, category: enummod_1.CategoryMod.Poetry },
    { id: 2, title: 'Code complete ', author: 'Ernst Hemingway', available: false, category: enummod_1.CategoryMod.Biography },
    { id: 3, title: 'Cobol', author: 'Maya A', available: true, category: enummod_1.CategoryMod.Fiction }
];
var bookShelf = new Shelf_1["default"]();
Inventory.forEach(function (x) { return bookShelf.add(x); });
var firstBook = bookShelf.getFirst();
var magInventory = [
    { title: 'c', publisher: 'James Joyce' },
    { title: 'Code complete ', publisher: 'Ernst Hemingway' },
    { title: 'Cobol', publisher: 'Maya A' }
];
var magShelf = new Shelf_1["default"]();
magInventory.forEach(function (x) { return magShelf.add(x); });
var firstMag = magShelf.getFirst();
//let numShelf : Shelf<number> = new Shelf<number>(); // does not contain the constraint
//[5,10,15].forEach(n => numShelf.add(n));
var snakeCaseTitle = _.snakeCase('For ME tp YOU!!');
console.log("Output ".concat(snakeCaseTitle));
