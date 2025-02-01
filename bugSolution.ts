function greeter(person: string | string[]): string | string[] {
    if (typeof person === 'string') {
        return "Hello, " + person;
    } else if (Array.isArray(person)) {
        return person.map(name => "Hello, " + name);
    } else {
        return "Invalid input. Please provide a string or an array of strings.";
    }
}

let user = ["Jane", "Doe"];
let user2 = "John";

console.log(greeter(user)); // Output: [ 'Hello, Jane', 'Hello, Doe' ]
console.log(greeter(user2)); // Output: Hello, John
console.log(greeter(123)); //Output: Invalid input. Please provide a string or an array of strings.