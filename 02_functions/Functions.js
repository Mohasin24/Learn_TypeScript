"use strict";
/**
 * The function "add" takes two numbers as input and returns their sum.
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The parameter `num2` is a number that will be added to `num1` in the
 * function.
 * @returns The sum of num1 and num2.
 */
function add(num1, num2) {
    return num1 + num2;
}
/**
 * The function "sub" subtracts two numbers and returns the result.
 * @param {number} num1 - The first number to be subtracted.
 * @param {number} num2 - The parameter `num2` is a number that will be subtracted from `num1` in the
 * `sub` function.
 * @returns the result of subtracting `num2` from `num1`.
 */
const sub = (num1, num2) => {
    return num1 - num2;
};
/**
 * The function "multi" takes two numbers as input and returns their product.
 * @param {number} num1 - The first parameter, num1, is a number that will be multiplied with the
 * second parameter, num2.
 * @param {number} num2 - The parameter `num2` is a number that will be multiplied with `num1` in the
 * `multi` function.
 * @returns the product of `num1` and `num2`.
 */
const multi = function (num1, num2) {
    return num1 * num2;
};
// ######### Function with optional parameter
/**
 * The function "addition" takes in two numbers and an optional third number, and returns the sum of
 * the numbers.
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The parameter `num2` is a required number parameter.
 * @param {number} [num3] - The num3 parameter is an optional parameter. It means that it is not
 * required to be passed when calling the function. If it is passed, it will be added to the sum of
 * num1 and num2. If it is not passed, the function will only return the sum of num1 and
 * @returns the sum of num1 and num2, with an optional third parameter num3. If num3 is provided, it
 * will be added to the sum.
 */
function addition(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// ######### Required parameter 
/**
 * The function "subtraction" takes in three numbers and returns the result of subtracting the second
 * and third numbers from the first number.
 * @param {number} num1 - The first number to be subtracted.
 * @param {number} num2 - The parameter `num2` is a number that will be subtracted from `num1`.
 * @param {number} [num3=10] - The num3 parameter is an optional parameter with a default value of 10.
 * This means that if you don't provide a value for num3 when calling the subtraction function, it will
 * default to 10.
 * @returns the result of subtracting num2 and num3 from num1.
 */
const subtraction = (num1, num2, num3 = 10) => {
    return num1 - num2 - num3;
};
// ######### Rest parameters 
/**
 * The `summation` function takes in two numbers and an optional array of numbers, and returns the sum
 * of all the numbers.
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The `num2` parameter is a number that will be added to `num1` in the
 * `summation` function.
 * @param {number[]} num3 - The `num3` parameter is a rest parameter, which means it can accept any
 * number of additional arguments as an array. In this case, it is used to accept an array of numbers.
 * @returns The function `summation` returns the sum of all the numbers passed as arguments.
 */
const summation = (num1, num2, ...num3) => {
    return num1 + num2 + num3.reduce((acc, num) => (acc + num), 0);
};
let arr = [1, 2, 3, 4, 5];
console.log(summation(1, 2, ...arr));
console.log(summation(1, 2, ...[1, 2, 3, 4, 5]));
