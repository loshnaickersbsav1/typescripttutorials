function  GetAllBooks() {
    //let keeps scope
    //type script infers the types output
    let books = [
    {title: 'Ulyses'  , author: 'James Joyce', available: true},
    {title: 'A farewell to Arms'  , author: 'Ernst Hemingway', available: false},
    {title: 'I know why the Caged Bird Sings'  , author: 'Maya A', available: true}
    ];

    return books;

}

function LogFirstAvailable(books: any): void{

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

const  allBooks = GetAllBooks();
allBooks.push(    {title: 'I know why the Caged Bird Sings 2'  , author: 'Maya A', available: true});
LogFirstAvailable(allBooks);