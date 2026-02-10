// no error
let message = "hello";
message = 123456;

let n = 123;
n = 12.345;

alert(1 / 0); 
alert(Infinity); 
alert("not a number" / 2);

alert(NaN + 1);
alert(3 * NaN);
alert("not a number" / 2 - 1);


// BigInt
console.log(9007199254740991 + 1);
console.log(9007199254740991 + 2);

const bigInt = 1234567890123456789012345678901234567890n;


// Strings
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let userName = "John";

alert(`Hello, ${userName}!`);
alert(`the result is ${1 + 2}`);

alert("the result is ${1 + 2}");


// Boolean
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
alert(isGreater);


// null
let age = null;


// undefined
let age1;
alert(age1);

let age2 = 100;
age2 = undefined;
alert(age2);


// typeof
typeof undefined;
typeof 0;
typeof 10n;
typeof true;
typeof "foo";
typeof Symbol("id");
typeof Math;
typeof null;
typeof alert;


// Task
let name = "Ilya";

alert(`hello ${1}`);       // hello 1
alert(`hello ${"name"}`);  // hello name
alert(`hello ${name}`);    // hello Ilya
