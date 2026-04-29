// for (expression) {
//   // code block to be executed
// }

// for (initialization; condition; increment) {
//   // code block to be executed
// }

let i = 0;
// i = i + 1
// i += 1;
// i++

for (let i = 10; i > 0; i--) {
  console.log(i); // 4
}

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// looping through array
const names = ["Alice", "Bob", "Charlie", "Dave", "Eve"];

// console.log(names[0]); // Alice
// console.log(names[1]); // Bob
// console.log(names[2]); // Charlie

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// for (let i = 0; i < names.length; i++) {
//   const name = names[i];
//   const nomor = i + 1;
//   console.log("Data ke " + nomor + ": " + name);
// }

for (const name of names) {
  console.log(name);
}

// for (let i = 0; i < 25; i++) {
//   console.log("Iterasi ke " + i);
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

for (let i = 1; i < 25; i += 2) {
  console.log(i);
}

const user = {
  name: "Alice",
  age: 30,
  city: "New York",
};

console.log(user.name); // Alice
console.log(user["name"]); // Alice

console.log(user.age); // 30
console.log(user.city); // New York

for (const key in user) {
  console.log(key, ":", user[key]);
}

const users = [
  {
    name: "Alice",
    age: 30,
    city: "New York",
  },
  {
    name: "Bob",
    age: 25,
    city: "Los Angeles",
  },
  {
    name: "Charlie",
    age: 35,
    city: "Chicago",
  },
];

console.table(users);

for (const u of users) {
  detail(u);
}

function detail(user) {
  console.log("Name:", user.name); // Alice
  console.log("Age:", user.age); // 30
  console.log("City:", user.city); // New York
  console.log("-------------------");
}

// continue

// break

const numbers = [867, 43534, 232, 31231];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(`Index Ke-${i}`);

//   if (i === 3) {
//     break;
//   }
// }

// find
for (let i of numbers) {
  if (i % 2 === 0) {
    console.log(i);
    break;
  }
}

// continue

const a = [1, 2, 3, 4, 5, 6];

for (let i of a) {
  // if (i % 2 == 0) {
  //   console.log(i);
  // } else {
  //   continue;
  // }

  if (i % 2 === 1) continue;
  console.log(i);
}
