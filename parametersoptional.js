function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
var Category3;
(function (Category3) {
    Category3[Category3["Biography"] = 5] = "Biography";
    Category3[Category3["Poetry"] = 8] = "Poetry";
    Category3[Category3["Fiction"] = 9] = "Fiction";
})(Category3 || (Category3 = {}));
;
function GetAllBooks3() {
    //let keeps scope
    //type script infers the types output
    var books = [
        { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: Category3.Poetry },
        { id: 2, title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: Category3.Biography },
        { id: 3, title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: Category3.Fiction }
    ];
    return books;
}
function GetBookTitlesByCategory3(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category3.Fiction; }
    console.log('Getting books in category : ' + categoryFilter);
    var allBooks = GetAllBooks3();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function CreateCustomer(name, age, city) {
    console.log('Creating a customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('Age: ' + city);
    }
}
//
CreateCustomer('Losh');
CreateCustomer('Losh', 12);
CreateCustomer('Losh', 12, 'texas');
console.log("default  titles :" + GetBookTitlesByCategory3());
console.log("default  titles :" + GetBookTitlesByCategory3(Category3.Poetry));
