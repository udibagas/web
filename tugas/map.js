// PRACTICE QUESTIONS: Array Map Method
// Complete each question by implementing the map method

// ========================================
// QUESTION 1: Double the Numbers
// ========================================
// Given an array of numbers, create a new array with each number doubled
// Example: [1, 2, 3] should return [2, 4, 6]

const numbers = [5, 10, 15, 20, 25, 30];

// TODO: Use map method to double each number
const doubledNumbers = // Your code here
  console.log("Question 1 - Doubled Numbers:", doubledNumbers);

// ========================================
// QUESTION 2: Extract Product Names
// ========================================
// Given an array of product objects, create a new array containing only the product names
// Result should be an array of strings

const products = [
  { id: 1, name: "Laptop", price: 8000000 },
  { id: 2, name: "Mouse", price: 150000 },
  { id: 3, name: "Keyboard", price: 450000 },
  { id: 4, name: "Monitor", price: 2500000 },
  { id: 5, name: "Headphones", price: 300000 },
];

// TODO: Use map method to extract only the names
const productNames = // Your code here
  console.log("Question 2 - Product Names:", productNames);

// ========================================
// QUESTION 3: Add Discount to Products
// ========================================
// Given an array of product objects, create a new array where each product has:
// - All original properties
// - A new "discountedPrice" property (10% discount from original price)
// - A new "discount" property with value "10%"

const items = [
  { name: "Laptop", price: 10000000 },
  { name: "Smartphone", price: 5000000 },
  { name: "Tablet", price: 3000000 },
  { name: "Smartwatch", price: 2000000 },
];

// TODO: Use map method to create new objects with discount info
const itemsWithDiscount = // Your code here
  console.log("Question 3 - Items with Discount:", itemsWithDiscount);

// ========================================
// BONUS CHALLENGE
// ========================================
// Given an array of students, create a new array with formatted strings
// Format: "Name: [name], Grade: [A/B/C/D/F based on score]"
// Grading: A(>=90), B(>=80), C(>=70), D(>=60), F(<60)

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 68 },
  { name: "Diana", score: 55 },
];

// const studentGrades = // Your code here
