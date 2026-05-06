// PRACTICE QUESTIONS: Array Find Method
// Complete each question by implementing the find method

// ========================================
// QUESTION 1: Find First Even Number
// ========================================
// Given an array of numbers, find the first even number
// Return the number itself, or undefined if not found

const numbers = [1, 3, 7, 8, 9, 11, 12, 15];

// TODO: Use find method to get the first even number
const firstEven = numbers.find((n) => n % 2 == 0);
console.log("Question 1 - First Even Number:", firstEven);

// ========================================
// QUESTION 2: Find Student by Name
// ========================================
// Given an array of student objects, find the student with name "Charlie"
// Return the entire student object, or undefined if not found

const students = [
  { name: "Alice", score: 85, class: "A" },
  { name: "Bob", score: 62, class: "B" },
  { name: "Charlie", score: 78, class: "A" },
  { name: "Diana", score: 55, class: "C" },
  { name: "Eve", score: 92, class: "A" },
];

// TODO: Use find method to get the student named "Charlie"
const charlie = students.find((s) => s.name === "Charlie");
console.log("Question 2 - Find Charlie:", charlie);

// ========================================
// QUESTION 3: Find Product by ID
// ========================================
// Given an array of product objects and a product ID (3),
// find and return the product with that ID

const products = [
  { id: 1, name: "Laptop", price: 8000000, stock: 5 },
  { id: 2, name: "Mouse", price: 150000, stock: 20 },
  { id: 3, name: "Keyboard", price: 450000, stock: 15 },
  { id: 4, name: "Monitor", price: 2500000, stock: 8 },
  { id: 5, name: "Headphones", price: 300000, stock: 12 },
];

const searchId = 3;

// TODO: Use find method to get the product with id === searchId
const foundProduct = products.find((p) => p.id === searchId);
console.log("Question 3 - Product with ID 3:", foundProduct);

// ========================================
// BONUS CHALLENGE
// ========================================
// Find the first student who scored above 80 AND is in class "A"
// If found, print: "Found: [name] with score [score]"
// If not found, print: "No student found"

const topStudentInClassA = students.find((s) => s.score > 80 && s.class == "A");

if (!topStudentInClassA) {
  return console.log("No student found");
}

console.log(
  `Found: ${topStudentInClassA.name} with score ${topStudentInClassA.score}`,
);
