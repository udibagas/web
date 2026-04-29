// object
const laptop = {
  // key : value
  color: "midnight black",
  model: "macbook air",
  cpu: 2.4,
  isNew: false,
  "apakah baru": false,
  price: 15_000_000,
};

const laptop1 = laptop; // alias

console.log(laptop.model);
laptop.price = 12_000_000;
console.log(laptop);
laptop.owner = "bagas";
console.log(laptop);
delete laptop.isNew;
console.log(laptop);

laptop1.color = "Blue";

console.log(laptop);
