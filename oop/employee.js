"use strict";

class Employee {
  name;
  position;
  #baseSalary;

  static availablePositions = ["Staff", "Manager"];

  constructor(name, position, baseSalary) {
    this.name = name;
    this.position = position;
    this.#baseSalary = baseSalary;
  }

  get salary() {
    const pajak = 0.1 * this.#baseSalary;
    return this.#baseSalary - pajak;
  }

  set salary(newSalary) {
    this.#baseSalary = newSalary;
  }

  // instance method
  work() {
    console.log("Kerja kerja kerja");
  }

  static printPositions() {
    this.availablePositions.forEach((x) => {
      console.log(x);
    });
  }
}

class Manager extends Employee {
  constructor(name, baseSalary) {
    super(name, "Manager", baseSalary);
  }

  get salary() {
    const tunjangan = 0.15 * super.salary;
    return super.salary + tunjangan;
  }
}

// const budi = new Employee("Budi", "Manager", 20_000_000);

// console.log(budi.#baseSalary);
// budi.salary = 30_000_000;
// console.log(budi.salary);

const andi = new Manager("Andi", 20_000_000);
console.log(andi.salary);
andi.work();

console.log(Employee.availablePositions);
Employee.printPositions();
