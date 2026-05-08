// object oriented programming

// object literal
const person = {
  name: "Bagas",
  age: 30,
  // method
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// console.log(person);
// person.sayHello();

// console.log(console);

const people = [
  { name: "Bagas", age: 30 },
  { nama: "Udi", age: 31 },
  { name: "Sahsangka", age: 20 },
  { name: "Eddy", age: 28 },
  { name: "Sanjaya", age: 30 },
];

console.table(people);

// cetakan dari sebuah object = class

// aturan penamaan class (naming convention)
// 1. Bahasa Inggris
// 2. Singular (tunggal)
// 3. PascalCase (Setiap awal huruf dalam setiap kata harus capital)

class Person {
  // property
  name;
  age;

  // special method yang otomatis dijalankan saat proses instantiation
  constructor(name, age) {
    console.log("Saya dipanggil");
    // this -> keyword untuk memanggil property atau method di class itu sendiri
    // this -> mewakili object itu sendiri
    this.name = name;
    this.age = age;
  }

  // method = fungsi yang melekat di object / class
  sayHello() {
    // `${x}` => template literal (concate string with variable or function)
    console.log(`Hello, my name is ${this.name}`);
  }
}

// instantiation = proses pembuatan object baru dari sebuah class
// object yg dihasilkan disebut dengan object instance atau instance
// bagas = instance dari class Person
const bagas = new Person("bagas", 30);
const eddy = new Person("Eddy", 20);

console.log(bagas);
console.log(eddy);

bagas.name = "Bagas Udi Sahsangka";
bagas.age = 38;
console.log(bagas);

bagas.sayHello();
eddy.sayHello();

// const numbers = [1, 2, 3, 4]; // array = object
const numbers = new Array(1, 2, 3, 4); // Array = built in class di javascript
console.log(numbers.length);
// length = property dari object array
console.log(numbers.join());
// join => method

// beberapa built in object di javascript
// Date
const now = new Date();
console.log(now.getMonth());
// const str = "ini;contoh;string"; // string = array of character
// // const str = new String("ini contoh string");
// console.log(typeof str);
// console.log(str.split(" ")); // split = method string

// const n = 12_000_000;
// // const n = new Number(12);
// console.log(n.toLocaleString("id-ID"));
