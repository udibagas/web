// array = kumpulan data sejenis
// masing2 data disebut sebagai element
// posisi ditunjukkan dengan index
// index mulai dari 0
// penamaan variable = dalam bentuk jamak (plural)
const numbers = [1, 2, 3, 4, 5];

// cara mengakses
const angkaPertama = numbers[0];
const angkaTerakhir = numbers[4];
console.log(angkaPertama);
console.log(angkaTerakhir);
console.log(numbers[3]);

// cara mengubah nilai
numbers[0] = 10;
console.log(numbers);

// sifat passed by value (data primitive)
let angka = 1;
let angka2 = angka;
angka = 3;
let nama = "bagas";
let nama2 = nama;
nama = "udi";

console.log("angka:", angka);
console.log("angka2:", angka2);
console.log("nama", nama);
console.log("nama2", nama2);

// passed by reference
const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

console.log(arr1);
console.log(arr2);

arr1[2] = 9999;
console.log(arr1);
console.log(arr2);

let ember1 = "air";
let ember2 = ember1; // bikin variable baru

ember1 = "bensin";

console.log(ember1);
console.log(ember2);

const kaleng1 = [1, 2, 3, 4];
const kaleng2 = kaleng1; // namain kaleng1 dengan nama lain kaleng2

kaleng1[0] = 999;

console.log(kaleng1);
console.log(kaleng2);

// array multidimensi
const array2d = [
  [1, 2, 3, 4], // index 0
  [11, 21, 31, 47], // index 1
  [3, 4, 5, 67], // index 2
];

console.log(array2d[1][2]);

// const angka_prima => snake case
// const angkaPrima => camel case

const negara = ["konoha", "zimbabwe", "wakanda"];

// panjang array
console.log(negara.length);

// negara.push("indonesia", "china", "jepang"); // menambahkan di akhir
// console.log(negara);
// negara.unshift("belanda", "inggris");
// console.log(negara);

// negara.pop();
negara.shift();
console.log(negara);
