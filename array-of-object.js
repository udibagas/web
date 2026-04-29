// const names = ["bagas", "eddy", "hamzah"];

// console.log(names);

const people = [
  {
    name: "bagas",
    gender: "male",
  },
  {
    name: "putri",
    gender: "female",
  },
  {
    name: "eddy",
    gender: "male",
  },
];

console.table(people);

people.push({
  name: "yasmin",
  gender: "female",
});

console.table(people);
