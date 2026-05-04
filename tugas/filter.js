// PRACTICE QUESTIONS: Array Filter Method
// Complete each question by implementing the filter method

// ========================================
// QUESTION 1: Filter Even Numbers
// ========================================
// Given an array of numbers, filter out only the even numbers
// Example: [1, 2, 3, 4, 5, 6] should return [2, 4, 6]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Use filter method to get only even numbers
const evenNumbers = // Your code here
  console.log("Question 1 - Even Numbers:", evenNumbers);

// ========================================
// QUESTION 2: Filter Students by Score
// ========================================
// Given an array of student objects, filter students who scored 70 or above
// Return only the students who passed

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 62 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 55 },
  { name: "Eve", score: 92 },
  { name: "Frank", score: 68 },
];

// TODO: Use filter method to get students with score >= 70
const passingStudents = // Your code here
  console.log("Question 2 - Passing Students:", passingStudents);

// ========================================
// QUESTION 3: Filter Products in Stock
// ========================================
// Given an array of product objects, filter products that are:
// 1. In stock (inStock: true)
// 2. AND price is less than or equal to 500000

const products = [
  { name: "Laptop", price: 8000000, inStock: true },
  { name: "Mouse", price: 150000, inStock: true },
  { name: "Keyboard", price: 450000, inStock: false },
  { name: "Monitor", price: 2500000, inStock: true },
  { name: "Headphones", price: 300000, inStock: true },
  { name: "Webcam", price: 750000, inStock: true },
  { name: "USB Cable", price: 50000, inStock: false },
];

// TODO: Use filter method to get products in stock with price <= 500000
const affordableProducts = // Your code here
  console.log("Question 3 - Affordable Products:", affordableProducts);

// ========================================
// BONUS CHALLENGE
// ========================================
// Combine filter with map to get only the names of passing students
// const passingStudentNames = // Your code here
