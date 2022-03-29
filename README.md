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












