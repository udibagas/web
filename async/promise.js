"use strict";

function sum(a, b, callback) {
  if (typeof a !== "number" || typeof b !== "number") {
    return callback("Input harus berupa angka", null);
  }

  setTimeout(() => {
    const result = a + b;
    callback(null, result);
  }, 1000);
}

// sum(10, 1, (error, result) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(`Result = ${result}`);
//     sum(result, 200, (error, result) => {
//       if (error) {
//         console.log(`Error: ${error}`);
//       } else {
//         console.log(`Result = ${result}`);
//       }
//     });
//   }
// });

function sumPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return reject("Input harus berupa angka");
    }
    setTimeout(() => {
      const result = a + b;
      resolve(result);
    }, 1000);
  });
}

// promise chaining
// sumPromise(10, 20)
//   .then((result) => {
//     console.log(`Hasil = ${result}`);
//     return sumPromise(result, 300);
//   })
//   .then((result) => {
//     console.log(`Hasil = ${result}`);
//     return sumPromise(result, 300);
//   })
//   .then((result) => {
//     console.log(`Hasil = ${result}`);
//     return sumPromise(result, "300");
//   })
//   .then((result) => {
//     console.log(`Hasil = ${result}`);
//     return sumPromise(result, 300);
//   })
//   .then((result) => {
//     console.log(`Hasil = ${result}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// try {
//   let hasil = await sumPromise(10, 20);
//   console.log(`Hasil = ${hasil}`);
//   hasil = await sumPromise(hasil, "300");
//   console.log(`Hasil = ${hasil}`);
//   hasil = await sumPromise(hasil, 300);
//   console.log(`Hasil = ${hasil}`);
//   hasil = await sumPromise(hasil, 300);
//   console.log(`Hasil = ${hasil}`);
// } catch (error) {
//   console.log(`Error: ${error}`);
// }

async function sumAsync(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Input harus berupa angka");
  }

  return a + b;
}

try {
  const y = await sumAsync(2, "3");
  console.log(y);
} catch (error) {
  // error = instance dari class Error
  // Error punya property message
  console.log(error.message);
}
