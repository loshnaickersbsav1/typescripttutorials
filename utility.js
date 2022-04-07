"use strict";
exports.__esModule = true;
exports.GetBookTitlesByCategoryMod = exports.GetAllMagazinesMod = exports.GetAllBooksMod = exports.Purge = void 0;
var enummod_1 = require("./enummod");
//type parameter     ; array T's retrun Array of T's
function Purge(inventory) {
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
function GetBookTitlesByCategoryMod(categoryFilter) {
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
exports.GetBookTitlesByCategoryMod = GetBookTitlesByCategoryMod;
function GetAllMagazinesMod() {
    //let keeps scope
    //type script infers the types output
    /*
        id: number;
        title: string;
        author: string;
        available: boolean;
        category: CategoryMod;
    */
    var Magazine = [
        { title: 'Ulyses', publisher: 'James Joyce' },
        { title: 'A farewell to Arms', publisher: 'Ernst Hemingway' },
        { title: 'I know why the Caged Bird Sings', publisher: 'Maya A' }
    ];
    return Magazine;
}
exports.GetAllMagazinesMod = GetAllMagazinesMod;
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
exports.GetAllBooksMod = GetAllBooksMod;
