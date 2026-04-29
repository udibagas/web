const users = ["Bagas", "Edy", "Putri", "Salsa"];

// console.log("Hello, Bagas!");
// console.log("Hello, Edy!");
// console.log("Hello, Putri!");
// console.log("Hello, Salsa!");

// hoisting
// void function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// greet("Bagas"); // Hello, Bagas!
// greet("Edy"); // Hello, Edy!
// greet("Putri"); // Hello, Putri!
// greet("Salsa"); // Hello, Salsa!

for (const n of users) {
  greet(n);
}

// f(x) => x * x;

// function square(x) {
//   const result = x * x;
//   return result;
// }

function square(x) {
  return x * x;
}

const result = square(3);
console.log(result); // 25

function add(a, b) {
  return a + b;
}

const hasil = add(5, 7);
console.log(hasil); // 12

// function isGenap()

// function isGenap(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isGenap(number) {
//   return number % 2 === 0 ? true : false;
// }

function isGenap(number) /* number = parameter */ {
  return number % 2 === 0;
}

const angka = 21; // variable
const hasil1 = isGenap(angka); // argument
console.log(hasil1); // false

const numbers = [10, 15, 20, 25, 30];
const numbers2 = [1, 2, 3, 4, 5];

function sum(arr) {
  let total = 0;

  for (const num of arr) {
    total += num;
  }

  return total;
}

function sumGanjilOnly(arr) {
  let total = 0;

  for (const num of arr) {
    if (num % 2 == 1) {
      total += num;
    }
  }

  return total;
}

const total1 = sum(numbers); // 100
const total2 = sum(numbers2); // 15

console.log(total1);
console.log(total2);
console.log(sumGanjilOnly(numbers)); // 40

console.log(sum(10, 20));

// named function: fungsi yang punya nama
// hoisting
function sum(a, b) {
  return a + b;
}

// anonymous function: fungsi yg ga punya nama
// const sumFn = function (a, b) {
//   return a + b;
// };

// arrow function
// const sumFn = (a, b) => {
//   return a + b;
// };

// single line arrow function
const sumFn = (a, b) => a + b;

console.log(sumFn(10, 20));
