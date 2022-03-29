function GetTitles(author: string): string[];                       // signature 1  
function GetTitles(author: string, available:boolean): string[];    // signature 2 overload
function GetTitles(author: string, available?: boolean): string[] { //implement funtcion , must be complatible with bot of the overloads.

    const allBooks = GetAllBooks3();
    const searchResults: string[] = [];

    if (available !== undefined) {



    }



    return ["a"];


}