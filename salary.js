const karyawan = [
  {
    name: "Alice",
    age: 30,
    city: "New York",
    position: "Manager",
    salary: 10_000_000,
    isActive: true,
  },
  {
    name: "Bob",
    age: 25,
    city: "Los Angeles",
    position: "Staff",
    salary: 5_000_000,
    isActive: true,
  },
  {
    name: "Charlie",
    age: 35,
    city: "Chicago",
    position: "Staff",
    salary: 6_000_000,
    isActive: true,
  },
  {
    name: "Bagas",
    age: 30,
    city: "Semarang",
    position: "Supervisor",
    salary: 7_000_000,
    isActive: false,
  },
];

// buat fungsi untuk menghitung total gaji semua karyawan
// 1. Gaji dipotong 10% untuk pajak
// 2. Posisi manager dapat bonus 20% dari gaji setelah dipotong pajak
// 3. Tunjangan jabatan manager 20%, supervisor 15%

function calculateTax(value, taxRate = 0.1) {
  return taxRate * value;
}

// const calculateTax = (value, taxRate = 0.1) => taxRate * value;

// function calculateTax(value, taxRate) {
//   if (taxRate === undefined) {
//     taxRate = 0.1;
//   }

//   return taxRate * value;
// }

function getBaseSalary(position) {
  const baseSalaries = {
    Director: 20_000_000,
    Manager: 10_000_000,
    Asmen: 7_000_000,
    Supervisor: 6_000_000,
    Staff: 5_000_000,
  };

  // baseSalary[position] => baseSalary.Director, baseSalary.Manager, undefined

  if (baseSalaries[position]) {
    return baseSalaries[position];
  }

  return 0;
}

function calculatePositionIncentive(salary, position) {
  // dictionary
  const incentiveRates = {
    Director: 0.3,
    Manager: 0.2,
    Asmen: 0.17,
    Supervisor: 0.15,
  };

  if (incentiveRates[position]) {
    return salary * incentiveRates[position];
  }

  return 0;

  // let incentiveRate = 0;

  // if (position == "Manager") {
  //   incentiveRate = 0.2;
  // }

  // if (position == "Supervisor") {
  //   incentiveRate = 0.15;
  // }

  // return incentiveRate * salary;
}

function calculateSalaryPerEmployee(employee) {
  // empoyee = {
  //   name: "Bagas",
  //   age: 30,
  //   city: "Semarang",
  //   position: "Supervisor",
  //   salary: 7_000_000,
  // }

  const salary = employee.salary;
  const tax = calculateTax(employee.salary);
  const salaryAfterTax = salary - tax;
  const tunjangan = calculatePositionIncentive(salary, employee.position);
  const salaryPerEmployee = salaryAfterTax + tunjangan;
  return salaryPerEmployee;
}

function calculateTotalSalary(employees) {
  let totalSalary = 0;

  for (const employee of employees) {
    // if (employee.isActive == false) continue;
    if (!employee.isActive) continue;
    totalSalary += calculateSalaryPerEmployee(employee);
  }

  return totalSalary;
}

const totalSalary = calculateTotalSalary(karyawan);
console.log(totalSalary);
