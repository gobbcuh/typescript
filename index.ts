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

listOfBananas.push({id:3, expiryDate: new Date(), isFresh: true}); // pushing a new Banana object into the array

listOfBananas.map((banana) => {
    return banana.id; // mapping over the array to return an array of ids
})


// inherit
interface Type1 {
    name: string;
}

interface Type2 {
    age: number;
}

// CombinedType inherits from Type1 and Type2 (interface)
interface CombinedType extends Type1, Type2 {
    gender: string; // additional property
}

// CombinedType2 inherits from Type1 and Type2 (type)
type CombinedType2 = Type1 & Type2 & {
    gender: string; // additional property
}

const combinedData: CombinedType = {
    name: 'jasmin',
    age: 30,
    gender: 'female'
};

const combinedData2: CombinedType2 = {
    name: 'jasmin',
    age: 30,
    gender: 'bakla'
};


type Test = {
    orderBy: 'DESC' | 'desc' | 'ASC' | 'asc'; // union type for order
}

const test: Test = {
    orderBy: 'DESC' // can be either DESC, desc, ASC, or asc
};