
function CreateCustomerbyID (name: string , surname:string): string  
{
        return name + " " + surname;
}

//function parameters and return  
let functionTypeVar : ( name: string, surname:string)  => string;
functionTypeVar = CreateCustomerbyID;
let newName: string = functionTypeVar("losh" , "Naicker");

console.log(newName);