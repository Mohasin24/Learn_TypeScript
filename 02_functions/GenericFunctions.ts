/**
 * The function "getItems" takes an array of any type and returns a new array with the same elements.
 * @param {Type[]} item - The parameter "item" is an array of type "Type".
 * @returns The function `getItems` is returning a new array that is a concatenation of the input array
 * `item`.
 */

function getItems<Type>(item : Type[]) : Type[]{
     return new Array<Type>().concat(item)
}

let concat = getItems<number>([2,3,5,6,9])

console.log(concat);
