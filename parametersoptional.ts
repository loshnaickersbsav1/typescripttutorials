
function LogBookTitles (titles:string[]):void {
    for (let title of titles) {
        console.log(title);
    }
}

enum Category3 { Biography=5, Poetry=8, Fiction=9 };


function GetAllBooks3() {
    //let keeps scope
    //type script infers the types output
    let books = [
        { id: 1, title: 'Ulyses', author: 'James Joyce', available: true, category: Category3.Poetry },
        { id: 2, title: 'A farewell to Arms', author: 'Ernst Hemingway', available: false, category: Category3.Biography },
        { id: 3, title: 'I know why the Caged Bird Sings', author: 'Maya A', available: true, category: Category3.Fiction }
    ];
    return books;
}

function GetBookTitlesByCategory3(categoryFilter : Category3 = Category3.Fiction) {
    console.log('Getting books in category : ' + categoryFilter);
    const allBooks = GetAllBooks3();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function CreateCustomer(name :string, age?: number ,  city?: string): void{
    console.log('Creating a customer ' + name );
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('Age: ' + city);
    }
}

function CheckoutBooks( customer:string ,  ...bookIDs: number[]): string[]
{
    console.log('Checking ou books for ' + customer);

    let booksChekedOut : string[] = [];

    for (let id of bookIDs) {

        let book = GetBookByID(id);

        if (book.isa)

    }

    return [" "];
}
//
CreateCustomer('Losh');

CreateCustomer('Losh' , 12);

CreateCustomer('Losh' , 12 , 'texas');


console.log ( "default  titles :" + GetBookTitlesByCategory3());

console.log ( "Poetry  titles :" + GetBookTitlesByCategory3(Category3.Poetry));