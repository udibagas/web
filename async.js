// sync
// console.log("1. A jajan di warteg beli mie, bakso, nasi goreng");
// console.log("2. A dilyani");
// console.log("3. Pesanan A datang");
// console.log("4. Transaksi A selesai");
// console.log("1. B jajan di warteg beli mie");
// console.log("2. B dilyani");
// console.log("3. Pesanan B datang");
// console.log("4. Transaksi B selesai");

// async
// console.log("1. A jajan di restoran beli mie, bakso, nasi goreng");
// console.log("2. A dilyani");

// setTimeout(() => {
//   console.log("3. Pesanan A datang");
//   console.log("4. Transaksi A selesai");
// }, 3000);

// console.log("1. B jajan di restoran beli air mineral");
// console.log("2. B dilyani");
// console.log("3. Pesanan B datang");
// console.log("4. Transaksi B selesai");

// function sum(a, b, cb) {
//   setTimeout(() => {
//     const hasil = a + b;
//     cb(hasil);
//   }, 1000);
// }

// nested callback
// callback hell
// sum(2, 3, (hasil) => {
//   console.log({ hasil });
//   sum(hasil, 10, (hasil2) => {
//     console.log({ hasil2 });
//     sum(hasil2, 20, (hasil3) => {
//       console.log({ hasil3 });
//     });
//   });
// });

const fs = require("fs"); // built in module untuk interaksi dengan filesystem (baca tulis file)

// callback hell
fs.readFile("./data/data-besar.zip", "utf-8", (err, data) => {
  if (err) {
    console.log("Gagal baca file data-besar.zip");
  } else {
    console.log("Berhasil baca data data-besar.zip");
    fs.readFile("./data/cities.json", "utf-8", (err, data) => {
      if (err) {
        console.log("Gagal baca file cities.json");
      } else {
        console.log("Berhasil baca data cities.json");
        fs.readFile("./data/provinces.json", "utf-8", (err, data) => {
          if (err) {
            console.log("Gagal baca file provinces.json");
          } else {
            console.log("Berhasil baca data provinces.json");
          }
        });
      }
    });
  }
});
