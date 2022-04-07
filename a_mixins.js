"use strict";
exports.__esModule = true;
var enummod_1 = require("./enummod");
var utility = require("./utility");
var a_classes_1 = require("./a_classes");
function PrintBookInfo(item) {
    console.log("".concat(item.title, " was authored by ").concat(item.author));
}
function PrintBookInfo2(_a) {
    var newtitle = _a.title, newautor = _a.author;
    console.log("destructed with new names book1 in a function arguent and field rename : ".concat(newtitle, " and ").concat(newautor));
}
var _a = utility.GetAllBooksMod(), books1 = _a[0], books2 = _a[1];
//PrintBookInfo(books1);
//PrintBookInfo(books2);
function LogFavouritesBooks(_a) {
    var books1 = _a[0], books2 = _a[1], others = _a.slice(2);
    console.log("----tuple");
    var myTuple = [10, 'Macbeth'];
    // myTuple[0]='hamlet'; must be string 1st 2 elements must agree with definition of the tuple array
    myTuple[0] = 1;
    myTuple[1] = 'hamlet';
    myTuple.push('hamlet');
    myTuple.push('new string');
    myTuple.push(1);
    myTuple.forEach(function (x) { return console.log("element  ".concat(x)); });
}
LogFavouritesBooks(utility.GetAllBooksMod());
var catlocation = ['sssss', books1]; //1st to [0],[1] - combines numerically name properties with values of array
catlocation.push(books2);
catlocation.push('some string');
// defining a k value pair array of string and books
var catlocationkv = ['A', books1];
catlocation.push.apply(catlocation, ['B', books2]);
/** One of several possible types */
function PrintIdentifier(id) {
}
/** Intersection type specifies, all members from multiple types */
var allBooks = utility.GetAllBooksMod();
var allMagazines = utility.GetAllMagazinesMod();
var readingMaterial = allBooks[0]; //accepts either
// let readingMaterialIntersections: Books & Magazine = allBooks[0]; //publisher missing
var readingMaterialIntersections2 = { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: enummod_1.CategoryMod.Poetry, publisher: "jack" }; //publisher now added and works
function PrintTitle(item) {
    console.log("  title of periodical  ".concat(item.title));
}
/**
 *  Construct to enable mixins, basic implementations of shared properties and functions required as in a_classes.
 *           class to which  you want to add to
 
*                       -List of classes from[]
*/
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtors) {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
applyMixins(a_classes_1.UnversityLibrarian, [a_classes_1.Employee, a_classes_1.Researcher]);
var newLibrian = new a_classes_1.UnversityLibrarian();
newLibrian.doResearch("bitcoin");
//PrintTitle(readingMaterialIntersections2);
