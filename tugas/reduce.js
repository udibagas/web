const x = [1, 2, 3, 4];

const sum = x.reduce((p, c) => p + c, 0);
console.log(sum);

const products = [
  { name: "Laptop", price: 8000000, discount: 0.1 },
  { name: "Mouse", price: 150000, discount: 0.2 },
  { name: "Keyboard", price: 450000, discount: 0.1 },
  { name: "Monitor", price: 2500000, discount: 0.4 },
  { name: "Headphones", price: 300000, discount: 0.3 },
];

const totalPrice = products.reduce((p, c) => {
  const discount = c.price * c.discount;
  return p + (c.price - discount);
}, 0);
console.log(totalPrice);
