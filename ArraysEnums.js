var Category;
(function (Category) {
    Category[Category["Biography"] = 5] = "Biography";
    Category[Category["Poetry"] = 8] = "Poetry";
    Category[Category["Fiction"] = 9] = "Fiction";
})(Category || (Category = {}));
;
function GetAllBooks() {
    //let keeps scope
    //type script infers the types output
    let books = [
        { title: 'Ulyses', author: 'James Joyce', available: true, category: Category.Poetry },
        { title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: Category.Biography },
        { title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
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
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category : ' + categoryFilter);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);
//# sourceMappingURL=ArraysEnums.js.map