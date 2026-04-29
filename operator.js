"use strict"; // strict mode

// assignment operator
let nama = "Bagas";
nama += " Udi"; // nama = nama + " Udi"
console.log(nama);

// arithmetic operator
let a = "5";
let b = 5;
let hasil = a + b; // string concatenation
hasil += 10; // hasil = hasil + 10
console.log(hasil); // 51010
hasil -= 10; // hasil = hasil - 10
console.log(hasil); // 51000
hasil *= 2; // hasil = hasil * 2
console.log(hasil); // 102000
hasil /= 2; // hasil = hasil / 2
console.log(hasil); // 51000
hasil %= 3; // hasil = hasil % 3
console.log(hasil); // 0
hasil **= 2; // hasil = hasil ** 2
console.log(hasil); // 0

console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus
console.log(a ** b); // exponentiation

// comparison operator
console.log(a == b); // equal to
console.log(a === b); // equal value and type
// console.log(a != b); // not equal to
// console.log(a !== b); // not equal value or type
// console.log(a > b); // greater than
// console.log(a < b); // less than
// console.log(a >= b); // greater than or equal to
// console.log(a <= b); // less than or equal to

console.log(5 + "5"); // string concatenation
console.log("5" - 5); // string to number conversion

console.log("Bagas" + " " + "Udi"); // string concatenation

// logical operator
let isStudent = true;
let isEmployed = false;

console.log(isStudent && isEmployed); // logical AND
console.log(isStudent || isEmployed); // logical OR
console.log(!isStudent && !isEmployed); // logical NOT
// unary operator
let x = 5;
// x++ => x = x + 1
console.log(x++); // post-increment
console.log(x); // 6
console.log(++x); // pre-increment
console.log(x--); // post-decrement
console.log(x); // 6
console.log(--x); // pre-decrement
// binary operator
// ternary operator
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";
console.log(isAdult); // Yes

// operator precedence
let result = 5 + 3 * 2; // multiplication has higher precedence than addition
console.log(result); // 11
result = (5 + 3) * 2; // parentheses have the highest precedence
console.log(result); // 16

console.log("Bagas", "Udi", "Sahsangka", 1, false, 6 + 2); // multiple arguments
