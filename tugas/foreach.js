// PRACTICE QUESTIONS: Array forEach Method
// Complete each question by implementing the forEach method

// ========================================
// QUESTION 1: Print Numbers with Index
// ========================================
// Given an array of numbers, use forEach to print each number with its index
// Format: "Index [index]: [number]"
// Example output: "Index 0: 10", "Index 1: 20", etc.

const numbers = [10, 20, 30, 40, 50];

console.log("Question 1 - Print Numbers with Index:");
// TODO: Use forEach to print each number with its index
numbers.forEach((n, i) => {
  console.log(`Index ${i}: ${n}`);
});

// ========================================
// QUESTION 2: Calculate Total Price
// ========================================
// Given an array of product objects, use forEach to calculate the total price
// Print each product name and price, then print the total at the end

const products = [
  { name: "Laptop", price: 8000000 },
  { name: "Mouse", price: 150000 },
  { name: "Keyboard", price: 450000 },
  { name: "Monitor", price: 2500000 },
  { name: "Headphones", price: 300000 },
];

console.log("\nQuestion 2 - Calculate Total Price:");
let totalPrice = 0;

// TODO: Use forEach to:
// 1. Print each product name and price
// 2. Add each price to totalPrice

console.log("Total Price: Rp", totalPrice);

// ========================================
// QUESTION 3: Update Array Elements
// ========================================
// Given an array of student objects, use forEach to:
// 1. Add a "grade" property based on score
//    - A: score >= 90
//    - B: score >= 80
//    - C: score >= 70
//    - D: score >= 60
//    - F: score < 60
// 2. Print each student's name, score, and grade

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "Diana", score: 55 },
  { name: "Eve", score: 78 },
];

console.log("\nQuestion 3 - Add Grades to Students:");
// TODO: Use forEach to add grade property and print results

console.log("\nUpdated students array:", students);

// ========================================
// BONUS CHALLENGE
// ========================================
// Given an array of numbers, use forEach to create a new array containing
// only the even numbers that are greater than 10

const mixedNumbers = [5, 12, 8, 20, 3, 16, 7, 24, 10, 15];
const result = [];

console.log("\nBonus - Filter with forEach:");
// TODO: Use forEach to populate result array

console.log("Result:", result);

// method chaining
const r = mixedNumbers
  .filter((n) => n % 2 == 0 && n > 10)
  .map((n) => n * n)
  .join();
console.log(r);
