
//######### String
/* The code is declaring and initializing variables in TypeScript. */
let fName : string;
fName = 'Mohasin';

//######### Number

/* The code is declaring and initializing a variable named `num` with a number data type. It is then
assigning the value `54.5` to the `num` variable. */
let num : number;
num = 54.5

//######### Boolean

/* The code is declaring and initializing a variable named `check` with a boolean data type. It is
initially set to `false`. The commented line `// check=true;` is assigning the value `true` to the
`check` variable. Finally, the `console.log(check)` statement is printing the value of the `check`
variable to the console. */
let check : boolean=false;
// check=true;
console.log(check)

//######### Arrays

/* The code is declaring and initializing a variable named `numList` as an array of numbers. The
`number[]` syntax indicates that `numList` is an array that can only contain numbers. The `//OR`
comment is providing an alternative syntax to declare and initialize the `numList` variable. The
line `numList = [1,2,3,4,5];` is assigning an array of numbers `[1,2,3,4,5]` to the `numList`
variable. */
let numList : number[] //OR
numList = [1,2,3,4,5];

/* The code is declaring and initializing a variable named `list` as an array of strings. The
`Array<string>` syntax indicates that `list` is an array that can only contain strings. The line
`list = ['one','two','three','four','five'];` is assigning an array of strings
`['one','two','three','four','five']` to the `list` variable. */
let list : Array<string>
list = ['one','two','three','four','five']


//######### Enum

const enum Color  {
     Red,
     Green,
     Yellow
}

let c : Color = Color.Yellow

console.log(c)

// ###### Tuple

/* The code is declaring and initializing a variable named `tup` as a tuple. A tuple is a data
structure in TypeScript that allows you to store a fixed number of elements of different types. */
let tup : [number,string,boolean]

tup = [1567, 'Activa', true]

// here the order must be same
// tup = ['Activa', 1567, true]

//###### Any

/* The code is declaring a variable named `department` with the type `any`. The `any` type in
TypeScript allows the variable to hold values of any type. */
let department : any

department = 'IT'
department = 10