

import { CategoryMod } from "./enummod";
import { Books, DamageLogger, Librarian, Author, Magazine } from "./interfacemod";
import { Encyclopedia, ReferenceItem } from "./ReferenceItem";
import * as  utility from "./utility";

/**
 * 
 * @param item 
 *      obj a
 *      obj b extends a -this referes to car ; polymorphic cause it represents 
 * 
 *      createfluent API for books
 */



class LibraryBook { 

    checkout(): this { 
        console.log('checkout book')
        return this;
    }

    checkin(): this { 
        
        //console.log('checking in a book.');

        if (this instanceof ChildrensBook)
        {
            console.log('Child checking in a book.');
        }

        if (this instanceof ElectronicBook)
        {
            console.log('electonic checking in a book.');
        }

        return this;
    }

}


class ChildrensBook extends LibraryBook {
    Clean(): this {
        console.log('cleaning a book.');
        return this;
    }

}

class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() : this {
        console.log ('remove');
        return this;
    }
}


let kidbook = new ChildrensBook();

kidbook.checkin() //checkin is inherited from Librarybook but still belongs to Childrens book, chilfdrens book returned.
.Clean() // therefore clean can be called
.checkout(); // then checkpit which also returns children book obj.


let elec = new ElectronicBook();


elec.checkin() //checkin is inherited from Librarybook but still belongs to Childrens book, chilfdrens book returned.
.RemoveFromCustomerDevice() // therefore clean can be called
.checkout(); // then checkpit which also returns children book obj.