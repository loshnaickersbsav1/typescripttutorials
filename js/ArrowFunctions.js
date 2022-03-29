function GetAllBooks2() {
    //let keeps scope
    //type script infers the types output
    var books = [
        { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: Cat.Poetry },
        { id: 2, title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: Cat.Biography },
        { id: 3, title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: Cat.Fiction }
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
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    //console.log('First Available: ' + firstAvailable)
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory2(categoryFilter) {
    console.log('Getting books in category : ' + categoryFilter);
    var allBooks = GetAllBooks2();
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
function GetBookByID(id) {
    var allBooks = GetAllBooks2();
    //.filter takes a predicate , like in java , returns a list of books 
    // but we're expecting one back. Looking at the javascript shows ou how it evaluates to with  Function ...
    return allBooks.filter(function (book) { return book.id === id; })[0].title;
}
var Cat;
(function (Cat) {
    Cat[Cat["Biography"] = 5] = "Biography";
    Cat[Cat["Poetry"] = 8] = "Poetry";
    Cat[Cat["Fiction"] = 9] = "Fiction";
})(Cat || (Cat = {}));
;
//*************
var fictionBooks = GetBookTitlesByCategory2(Cat.Fiction);
//for each and val 1st parameter returned
fictionBooks.forEach(function (val, idx, arr) { return console.log(++idx + '-' + val); });
console.log("get book " + GetBookByID(1));
//# sourceMappingURL=ArrowFunctions.js.map