interface IUser {
    name: string; // This is a user interface
}

type TUser = {  // with equals sign
    name: string; // This is a user type
}

/* const user: IUser = {
    name: 'jasmin' // This is a user object

};

const user2: TUser = {
    name: 'jasmin' // This is a user object
}; */

// parameters with types
const func = (name:string, age?:number) => {  // question mark means age is optional
    return `name: ${name} age: ${age}`;     // backticks for string interpolation, dollar sign and curly braces for variable insertion
}

// calling the function with arguments
func('jasmin');     // still no error since age is optional




type Data = string | number // | means union type (or), can be either string or number
let data: Data = 'jasmin'; // data can be either string or number; let declares variables with block scope

let array:number[] = [1, 2, 3]; // array of numbers

// array of objects
interface Banana {
    id: number; // id is a number type
    expiryDate: Date; // expiryDate is a Date type
    isFresh: boolean; // isFresh is a boolean type
}

const listOfBananas: Banana[] = [{id:1, expiryDate: new Date(), isFresh: true}, {id:2, expiryDate: new Date(), isFresh: false}]; // array of Banana objects

