// if else
const hari = "sabtu";

if (hari == "minggu" || hari == "sabtu") {
  console.log("Libur");
} else {
  console.log("Kerja");
}

// grading
// > 90 = A
// 80 s.d < 90 = B
// 70 s.d < 80 = C
// 60 s.d < 70 = D
// < 60 = E

const nilai = 55;
let grade = "E";

// if (nilai > 90) {
//   grade = "A";
// } else if (nilai >= 80 && nilai < 90) {
//   grade = "B";
// } else if (nilai >= 70 && nilai < 80) {
//   grade = "C";
// } else if (nilai >= 60 && nilai < 70) {
//   grade = "D";
// } else {
//   grade = "E";
// }

if (nilai > 90) {
  grade = "A";
}

if (nilai >= 80 && nilai < 90) {
  grade = "B";
}

if (nilai >= 70 && nilai < 80) {
  grade = "C";
}

if (nilai >= 60 && nilai < 70) {
  grade = "D";
}

console.log(grade);

// A = Istimewa
// B = Baik
// C = Cukup
// D = Buruk
// E = Gagal

switch (grade) {
  case "A":
    console.log("Istimewa");
    break;
  case "B":
    console.log("Baik");
    break;
  case "C":
    console.log("Cukup");
    break;
  case "D":
    console.log("Buruk");
    break;
  default:
    console.log("Gagal");
}

const tinggiMinimum = 120;
const umurMinimal = 9;
let tinggiSaya = 110;
let umurSaya = 30;

if (tinggiSaya < tinggiMinimum || umurSaya < umurMinimal) {
  console.log("Ga boleh masuk");
} else {
  console.log("Silakan masuk");
}

const angka = 20;

// if (angka % 2 == 0) {
//   console.log("Genap");
// } else {
//   console.log("Ganjil");
// }

// angka % 2 == 0 ? console.log("Genap") : console.log("Ganjil");

console.log(angka % 2 == 0 ? "Genap" : "Ganjil");

const x = 9;

if (x < 10) {
  console.log("Kurang dari 10");
}
