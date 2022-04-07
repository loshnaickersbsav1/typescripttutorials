https://www.markdownguide.org/basic-syntax/


# TypeScript-Getting-Started

Valid Java script is also valid typescript.
Type script is a super set of Javascript
Node is a java script runtime

# Pre-requisite 
 Download node and npm 
 npm i -g typescript 


# Module 1
Tsconfig
-Compiler options
- target , version of java script es5
- name of the java script file that the compiler will o  output.
files element is the files you want to compile.

## Typescript home page
npm install -g typescript /*installs typescript globally. { to run tsc from anywhere}

name - quickly browse all the type script compiler options

tsc cli option - alphabetical list of all the compiler options.
tsc --help ; console will list them there.
tsc --init ; create tsconfig.json with all options

watch; recompile source files as they are saved.

tsc app.ts -> compiles and generates a java script file

tsconfig files can be placed in each directory to use different behavior for folders.

## Webpack
Is the development server to deliver to the browser; that will serve your ouput java code

used to compile establish entry points into code e.g. app.ts and output of java script ; ie. bundle.js

This can be changed in the index.html ; bundle.js is cached and won't appear in the output folders.

## javascript
message!. {if you know value is not null or use if}

# 2 module 2
.Taking an of built in types
. declaration 
. type anonnotations and type inference
. Managing null and underfined
. Control flow-based type analysis
Ba


sic type script
Boolean 
Number - represents floating point same as javascrip
String - single or double quotes
       -template string `
Arrays - same as ..
Enum - not in java script but in type script
let instead of var for variables e.g let someString = 'Hello World';

//constants , values don't change const someString = 'Hellow World'

# VS CODE

# Variables 

Types
. Booleans 
. Number 
. String 
. Array 
. Enum 
. Any (of any type)
. Void (doesnt return a type)

---
let myString = 'this is a string';
myString = 42; //error

function ReturnNumber() {
       return 42;
}

## Annotation of types
. After variable : let myString: string= 'this is a string'; //annotation of a type -explicit of type in use
. Off return types after parameter list: function LogFirstAvailable(books: any): void{


## Enums

Category 

* enum Category { Biography, Poetry, Fiction }; //0,1,2
* enum Category { Biography=1, Poetry, Fiction }; //different value, and the rest will increment 
* enum Category { Biography=5, Poetry=8, Fiction=9 }; //5,8,9 

let favouriteCategoty: Categeogry = Category.Biography;

console.log(favoriteCategory); // 5
let categoryString = Category[favouriteCategory];
console.log(categortString); //Biography

## Arrays - important topic 

1. let strArray1: string[] = ['here' , 'are'  , 'String'] ; 
1. let strArray1: Arry<string> = ['here' , 'are'  , 'String'] ;  
1. let strArray: any[] = [42 , true, 'banana']; 


## Tuple 

* Arrays where the types for the first few elements are specificied


# Functions 

1. 
              --param types    --return type
CreateCustomeId (name:string ): string{} 

2. 
```
Arrow functions: (params, ) =>  statement ;  --statement will return or be a        
                               predicate  test in some cases.
```
3.
```
Function types
 defining a function type
       let (pars:type) => returnedval;
```



## Optional  params

1. CreateCustomeId (name:string , surname?: string ): string{}  ?optional parameter and will be undefined if not passed.

## Default Parmaters
2. CreateCustomeId (name:string , surname?: string ): string{};
   Default parameters will be used as the 

## Rest parameters
3. function CreateCustomeId (name: string, ...arrayname:string[]){

for ( letx)

}


## Overloading functions
function GetTitles(author: string): string[];                       // signature 1  
function GetTitles(author: string, available:boolean): string[];    // signature 2 overload
function GetTitles(author: string, available?: boolean): string[] { //implement funtcion , must be complatible with bot of the overloads.

    const allBooks = GetAllBooks3();
    const searchResults: string[] = [];


## Testing for getting titles

.  !== undefined (testing for undefined)



# Interfaces 

## Duck typing 

```
/**
the thing doesn't need to be the same as 
You don't expressy say implments ..simply uses function types and them pass instead.
Polymorphic
*/
interface Duck {
    walk:() => string;
    swim:() => string;
    quack:() => string;
}

//Object 
let probADuck = {
    walk:() => {return "walk  like a  duck"},
    swim:() => {return "swim like a duck " },
    quack:() => {return "quack like a duck "}
}

function FlyOverWater(bird:Duck) 
{ 
   console.log( bird.swim() );
}
FlyOverWater(probADuck);
```

## Syntax

interface Book{
       id:number;
       title: string;
       author: string;
       pages?:number;
       markDamaged: (reason: string=>)
}

Can have optional fields and functions.

## Interface for Function types

function CreateCustomerId ( name: sring, id: number ): string {
       return name + id;
}


interface DamageLogger {
(reason:string) : void; 
}

-----
//provide the implementation
logDmage = (damage: string) => console.log('damage reported interface ftypes ' + damage);

//invoking the function
logDmage("new damage");

### note:
 Java script doesn't implement interfaces typescript does


 # Classes

Perform -initialization of new intances of a class

```
class 
{
       constrcutor ( title:  string publisher?: string) {

       }
}

let encyclopedia = new ReferenceItem('WorldPedia' , 'WorldPub' ); 

/**calls Constructors - 1 constructor per class
constructor to return new instance of a class - new keyword*/
```


## Proteries and Methods

```
       class ReferenceItem {

              numberOfPage: number;




       }

```
## Access Modifiers

```
modifiers default(blank) public , parameter 
                  private , not be available to consumers of the class and subclasses
                   # ,   private field names in fron tof field names ; added   
                         protection. private even before compiled.
                   Protected - not publicly available on or subclasses  not on instances.      
```

## Static keyowrd
. static department: string = 'Research'; //only accessible by the keyword department
. use the class name ReferenceItem.department to reference the staic keword.

## Poperty Parameters

  If you want a porperty same as the constructor parm passed in 

  constrcutor ( public title:  string publisher?: string) {

  This is done by using the public keyword.


## Inheritance

![inheritance](/assets/inherit.png)

new instance of encyclopedia chiled with have all tthe Referencnce(parent)
Faciltates code reuse.


### Extending classes with In
```
class ReferenceItem {
       title: string;
       printItem(): void() {//print something here }
}

class Journal extends RefrenceItem {
       constructor() {
              super(); //must do this even if the parents havent fe
       }
}
```

## Abstract Classes

1. abstract infront of class
2. base classses that may not be instatiated
3. May contain implementation
4. abstract Methods are not implemented

## Class expressions

-Class statements are 1st type
-Class expression, name is optional

# Modules
- They're modular
- maintable and reusable
- native to node and es2015
- organised 
- Module Formats, typescript itself es2015 format, compiler set the output of the   
  java script to :
 
       * CommonJS 
       * Asynchronous AMD 
       * Universal UMD
       * System
       * ES2015, Es2020 etc


   - you import with as 
- exports from a module don't have to be done for all components.
  There may be base components that are not exportable.
- import * as Interfaces from './interfaces'; // to import entire module.

## default export
- if you want to export only 1 item from a module

// ./director.ts
    export default class {
       title: string;
       dir:string;
    }
- you don't have to know the name of the item when exported On doing the import
   import refbook from './director';

   ..new refbook..

# Generics
One bit of code that can be used to cover very different types.
type parameter ?

## Generic Arrays

Array<T>
Highlight tha Array it'self can be created with many types.


## Generic functions

function LogAndReturn<T> (thing: T): T { }  //T is specified next to the function name. T type will take T and return T

let somestring : string = LogAndReurn<string>('log');
let somestring : number = LogAndReurn<number>(9);

Bits of code that can work with multiple types of parameters.

- type parameters ; listed  <T> 
- actually instances created when the instance created  with the specific type.

1. Generic arrays will be used quite often
- let poetryBooks: Book[];
  let fictionBooks: Array<Book>;

2. Generic functions
 function Purge<T> (inventory: Array<T>): Array<T> {
    return inventory.splice(2, inventory.length);
} 
let PurgedBooked: Books[] = Purge<Books> (Inventory);
//let PurgedBooked2: number[] = Purge<Books> (Inventory); error , not of type expected.
PurgedBooked.forEach(books => console.log (`Purged books ${books.title}`) ); 


let PurgedNums: number[] = Purge<number> ([1,2,3]);
PurgedNums.forEach(x => console.log(x));


3.//t is a type parameter, can list more than one comma seperated 
interface Inventory<T> {
  getNewestItemm: () =>;
  addIem: (newItem)
}

# Generic Classes

Are very similar to non generic 

class Catalof<T> implement Inventory<T> {

       private catalofItems = new Array<T>();
       addItem(newItem: T) {
              this.catalogItems.push(newItem);
       }


}

let bookCatalog = new Catolog<books>;


## Constraints for generics

interface CatalogItem {
       catalogNumber: number;
}

class Catalog <T extends CatalogItem> implements Inventory<T> {

}


# Mixins 

Are an implemention of an Intersection type.



# TSconfig and 

watch - compiles ts on changes

# Declaration Files

Provide checking for node repo's available.

e.g. Lodash , seperate to typescript definitions
@types/lodashTypeScript definitions for Lo-Dash 

npm install --save @types/lodash --save-dev  ; use --save-dev cause you don't want to have type definitions in productions.



# Symbols
. Added in the ES2015 of the language 
. unique and immutable , primitives 
. why ? good questions. 
. specific use cases
       > Objects with enum like behaviouse
       > Computed property declarations
       > Short  list- customize internal language behaviour.







# Asyncheonous Code in Typescript 

## Synchronous
       1) as soon as slow task codes. Tasks are blocked.
       2) Everything returns to normal

## Asychronous

       1) work
       2) Long tasks can run in parralell

## Callback 
       1) A higher order function(fnctions that take other functions as param), may be passed functions 
          as parameters. These functions are call back functions
       2) Callbacks execute after an asynchrounous operation
       3) Commonly used to process asynchronous results
       4) May have a signature
       5) Convention 2 params -> error object  and a data parameter that the call back needs to process
       6) 







