import { Books, DamageLogger, Librarian, Author, Magazine } from "./interfacemod";
import { Encyclopedia, ReferenceItem } from "./ReferenceItem";

class Employee {
    tilte: string;

    addToSchedule(): void {
        console.log('Employee added to schedule. ');
    }

    logTitle(): void {
        console.log(`Employee has title ${this.tilte}. `);
    }

}

class Researcher {
    doResearch(topic: string): void {
        console.log(`Do research on ${topic}.`);
    }



}

class UnversityLibrarian implements Librarian, Employee, Researcher {

    name: string;
    surname: string;
    email: string;
    department: string; 

    assistCustomer (custName: string) {
        console.log(`${this.name}  is assisting ${custName}`);
    }

    tilte: string;
    addToSchedule : () => void; 
    logTitle: () => void; 
    doResearch:(topic: string) => void;
}


class PublicLibrarian implements Librarian { 
    name: string;
    surname: string;
    email: string;
    department: string;

    assistCustomer (custName: string) {
        console.log('Assisting customer.');
    }

    teachCommunity() {
        console.log('Teaching community . ');
    }

}

export {UnversityLibrarian, Employee, Researcher, PublicLibrarian}