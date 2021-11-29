"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Problem #1
let isTrue = boolean => boolean === true;
console.log('isTrue: ' + isTrue(true));

// Problem #2
let isFalse = boolean => boolean === false;
console.log('isFalse: ' + isFalse(true));

// Problem #3
let not = boolean => !boolean;
console.log(`not: ${not(false)}`);

// Problem #4
let addOne = num => num + 1;
console.log(`addOne: ${addOne(0)}`);

// Problem #5
let isEven = num => num % 2 === 0;
console.log(`isEven: ${isEven(4)}`);

// Problem #6
let isIdentical = (num1, num2) => num1 === num2;
console.log(`isIdentical: ${isIdentical(5,4)}`);

// Problem #7
let isEqual = (num1, num2) => num1 == num2;
console.log(`isEqual: ${isEqual(7, '7')}`);

// Problem #8
let or = (bool1, bool2) => bool1 || bool2;
console.log(`or: ${or(false, false)}`);

// Problem #9
let and = (bool1, bool2) => bool1 && bool2;
console.log(`and: ${and(true, false)}`);

// Problem #10
function concat (a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    } else if(typeof a === "number" && typeof b === "number") {
        return (a.toString() + b.toString());
    }
}

console.log(`concat: ${concat('blue','red')}`);