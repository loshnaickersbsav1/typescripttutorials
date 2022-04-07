abstract class ReferenceItem {

    /**
     * Getter _publisher
     * @return {string}
     */
    public get_publisher(): string {
        return this._publisher;
    }

    /**
     * Setter _publisher
     * @param {string} value
     */
    public set_publisher(value: string) {
        this._publisher = value;
    }

    private _publisher: string; // best practice for private use.
    static department: string = 'Research';


    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferencItem..');
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`); //template string
        console.log(`Department : ${ReferenceItem.department}.`); //template string
    }


    abstract printCitation():void;

}

class Encyclopedia extends ReferenceItem {

    printCitation(): void {
        console.log(`citation:  + ${this.title} + ${this.year}`);
    }

    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(`edition:  + ${this.edition} + ${this.year}`);
    }
}


export { ReferenceItem, Encyclopedia };
