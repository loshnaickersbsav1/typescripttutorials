class HelloWorld {
    constructor(public message: string) { }
}

var hello = new HelloWorld('test');

console.log("Hello world " + hello.message);

