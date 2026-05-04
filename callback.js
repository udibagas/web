// parameter berup angka
function sum(a, b) {
  return a + b;
}

// parameter berup string
function hello(name) {
  console.log(`Hello, ${name}!`);
}

// berupa boolean
function printStatus(isOnline) {
  if (isOnline) {
    console.log("User is online");
  } else {
    console.log("User is offline");
  }
}

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printDetails(person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`City: ${person.city}`);
}

// console.log(sum(2, 3)); // Output: 5
// hello("Bagas"); // Output: Hello, Bagas!
// printStatus(false); // Output: User is offline

// const array = [1, 2, 3, 4, 5];
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
// printArray(names); // Output: Alice Bob Charlie David Eve

const person = { name: "John", age: 30, city: "New York" };
// printDetails(person); // Output: Name: John Age: 30 City: New York

function helloWorld() {
  console.log("Hello, World!");
}

function helloDunia() {
  console.log("Hello, Dunia!");
}

function callAnotherFn(fn) {
  fn();
}

// callAnotherFn(helloWorld); // Output: Hello, World!
// callAnotherFn(helloDunia); // Output: Hello, Dunia!

// callAnotherFn(() => {
//   console.log("Hello, Dunia!");
// });

// callAnotherFn(() => console.log("Hello, Dunia!"));

const numbers = [1, 2, 3, 4, 5];

// const genap = [2, 4];

function filterGenap(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (isGenap(n)) {
      result.push(n);
    }
  }

  return result;
}

function filterGanjil(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (isGanjil(n)) {
      result.push(n);
    }
  }

  return result;
}

function filter(numbers, fn) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (fn(n)) {
      result.push(n);
    }
  }

  return result;
}

function isGenap(n) {
  return n % 2 === 0;
}

function isGanjil(n) {
  return n % 2 === 1;
}

function isKelipatan3(n) {
  return n % 3 === 0;
}

const genap = filterGenap(numbers);
const genap2 = filterGenap([10, 15, 20, 25, 30]);
console.log(genap2); // Output: [2, 4]

const ganjil = filterGanjil(numbers);
console.log(ganjil);

const genap3 = filter(numbers, isGenap);
console.log(genap3); // Output: [2, 4]

const ganjil3 = filter(numbers, isGanjil);
console.log(ganjil3); // Output: [1, 3, 5]

// 1. external function
// const kelipatan3 = filter(numbers, isKelipatan3);

// 2. inline function
// const kelipatan3 = filter(numbers, function isKelipatan3(n) {
//   return n % 3 === 0;
// });

// 3. anonymous function
// const kelipatan3 = filter(numbers, function (n) {
//   return n % 3 === 0;
// });

// 4. arrow function
// const kelipatan3 = filter(numbers, (n) => {
//   return n % 3 === 0;
// });

// 5. single line arrow function
// const kelipatan3 = filter(numbers, (n) => n % 3 === 0);

// const kelipatan3 = numbers.filter((n) => n % 3 === 0);
// const kelipatan3 = numbers.find((n) => n % 3 === 0);
// const kelipatan3 = numbers.findIndex((n) => n % 3 === 0);

// console.log(kelipatan3); // Output: [3]

numbers.forEach((n, i, arr) => {
  console.log(`Index ke ${i} adalah ${n}`, arr);
});

// 1,2,3,4,5  => 1,4,9,16,25

const kuadrat = numbers.map((n) => n * n);

console.log(kuadrat); // Output: [1, 4, 9, 16, 25]
