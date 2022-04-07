"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var enummod_1 = require("./enummod");
//import * as  utilit from "./enummod";
var utility = require("./utility");
// import {Purge}  from "./utility";
// import Shelf from "./Shelf";
// import * as _ from "lodash";
function PrintBookInfo(item) {
    console.log("".concat(item.title, " was authored by ").concat(item.author));
}
function PrintBookInfo2(_a) {
    var newtitle = _a.title, newautor = _a.author;
    console.log("destructed with new names book1 in a function arguent and field rename : ".concat(newtitle, " and ").concat(newautor));
}
//let [books1 , books2] = utility.GetAllBooksMod();
//PrintBookInfo(books1);
//PrintBookInfo(books2);
function LogFavouritesBooks(_a) {
    var books1 = _a[0], books2 = _a[1], others = _a.slice(2);
    PrintBookInfo(books1);
    PrintBookInfo(books2);
    console.log("----rest");
    others.forEach(function (x) { return PrintBookInfo(x); });
    console.log("----destructure of book1");
    var title = books1.title, author = books1.author;
    console.log("destructed book1 : ".concat(title, " and ").concat(author));
    console.log("----");
    var newtitle = books1.title, newautor = books1.author;
    console.log("destructed with new names book1 and field rename : ".concat(newtitle, " and ").concat(newautor));
    console.log("----");
    PrintBookInfo2(books1);
    console.log("----spead operator");
    console.log("----spead operator -using push");
    var schoolBooks = [
        { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: enummod_1.CategoryMod.Poetry },
        { id: 2, title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: enummod_1.CategoryMod.Biography },
        { id: 3, title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: enummod_1.CategoryMod.Fiction }
    ];
    var booksRead = utility.GetAllBooksMod();
    booksRead.push.apply(booksRead, schoolBooks);
    booksRead.forEach(function (x) { return console.log("books ".concat(x.title)); });
    console.log("----spead operator -using array element");
    var poets = ['chaucer', 'thomas swift', 'shakespear'];
    var authors = __spreadArray(['robin sharma', 'elon musk', 'thomas edison'], poets, true);
    console.log(authors);
}
LogFavouritesBooks(utility.GetAllBooksMod());
