const numbers = [1, 20, 3, 4, 5, 6, 7, 8, 9, 10];

// mengetahui jumlah element
console.log(numbers.length); // length => property dari object array

// menambahkan element baru di akhir
// numbers.push(2, 3, 4, 5, 5);
// menambahkan element baru di awal
// numbers.unshift(0);
// menghapus element terakhir
// numbers.pop();
// menghapus element pertama
// numbers.shift();

// push, pop, shift, unshift : methods => fungsi yang dipanggil dari sebuah object atau class

console.log(typeof numbers);

// cara mengakses 1 element
// posisi di representasikan dengan index, index dimulai dari 0
console.log(numbers[2]);
// mengganti value dari index tertentu
// numbers[0] = 9999;
// numbers[3] = 3333;
// console.log(numbers);

// const angkaPertama = numbers[0];
// const angkaKedua = numbers[1];

// destructuring array
const [, , , , kelima, ...sisanya] = numbers;
// ... => rest operator

console.log(kelima, sisanya);

// clone array
const array1 = [1, 2, 3];
const array2 = [...array1]; // bikin array baru, dengan element array yg lain

array2.push(5, 6, 7, 8);
array1.push(11, 22, 33, 44);

console.log(array1);
console.log(array2);

const tmp = []; // [5,6,7,8]
// tmp[0] = 5
// tmp[1] = 6;

// for (let i = 0; i < 4; i++) {
//   tmp[i] = numbers[i];
// }

// for (let i = 4; i <= 7; i++) {
//   tmp[i - 4] = numbers[i];
// }

for (let i = 8; i <= 9; i++) {
  tmp[i - 8] = numbers[i];
}

function slice(from, to) {
  if (from > to) {
    throw new Error("From must be <= to");
  }

  const tmp = [];

  for (let i = from; i < to; i++) {
    tmp[i - from] = numbers[i];
  }

  return tmp;
}

const slice1 = slice(0, 2);

console.log(slice1);

console.log(numbers.slice(0, 2));

// function sorting(a, b) {
//   return a - b;
// }

// numbers.sort();

numbers.filter();
numbers.find();
numbers.some();
numbers.every();
numbers.join();
numbers.forEach();
numbers.reduce();

const randomNumbers = [20, 13, 43, 89, 1];

function sortNumeric(array) {
  // array = [20, 13, 43, 89, 1]
  // [1, 13, 20, 43, 89]
  const tmp = [];

  for (let i = 0; i < array.length - 1; i++) {
    const a = array[i]; // 20
    const b = array[i + 1]; // 43
    if (a > b) {
      tmp[i] = b;
      tmp[i + 1] = a;
    } else {
      tmp[i] = a;
      tmp[i + 1] = b;
    }
  }

  return tmp;
}

console.log(sortNumeric(randomNumbers));
