
function  GetAllBooks2() {
    //let keeps scope
    //type script infers the types output
    let books = [
    {id:1, title: 'Ulyses'  , author: 'James Joyce', available: true, category: Cat.Poetry},
    {id:2, title: 'A farewell to Arms'  , author: 'Ernst Hemingway', available: false, category: Cat.Biography},
    {id:3, title: 'I know why the Caged Bird Sings'  , author: 'Maya A', available: true, category: Cat.Fiction}
    ];

    return books;

}

function LogFirstAvailable2(books: any): void{

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (let currentBook of books) {
    

        //let firstAvailable = '';
        if (currentBook.available) {
        firstAvailable = currentBook.title;
        break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    //console.log('First Available: ' + firstAvailable)
    console.log('First Available: ' + firstAvailable)

}


function GetBookTitlesByCategory2(categoryFilter: Cat): Array <string> {

    console.log('Getting books in category : ' + categoryFilter);

    const allBooks = GetAllBooks2();
    
    const filteredTitles: string[] = [];
    
    for ( let currentBook of allBooks)
    {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    
    return filteredTitles;
}

function LogBookTitles2 (titles : string[]): void {

    for (let title of titles) 
    {
        console.log(title);
    }
}

function GetBookByID(id: number):any
{
    const allBooks = GetAllBooks2();
    //.filter takes a predicate , like in java , returns a list of books 
    // but we're expecting one back. Looking at the javascript shows ou how it evaluates to with  Function ...
    return allBooks.filter(book => book.id === id)[0].title;
}

enum Cat { Biography=5, Poetry=8, Fiction=9 };
//*************
const  fictionBooks = GetBookTitlesByCategory2(Cat.Fiction);

//for each and val 1st parameter returned
fictionBooks.forEach( (val , idx, arr) =>     console.log(++idx + '-' + val) );


console.log("get book " + GetBookByID(1) );