function CreateCustomerbyID(name, surname) {
    return name + " " + surname;
}
//function parameters and return  
var functionTypeVar;
functionTypeVar = CreateCustomerbyID;
var newName = functionTypeVar("losh", "Naicker");
console.log(newName);
