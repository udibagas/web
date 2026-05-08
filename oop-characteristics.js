// 1. Encapsulation
// 2. Abstraction (abstract class, interface)
// 3. Inheritance (pewarisan sifat)
// 4. Polymorphism
//    - Overiding
//    - Overloading

class Employee {
  // public property = property yang bisa diakses diluar class
  name;
  position;

  // private property = property yang hanya bisa diakses di dalam class
  #salary;

  // public, private => access modifier
  // protected => di javascript tidak di implementasi

  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
  }

  getSalary() {
    return this.#salary;
  }

  setSalary(newValue) {
    this.#salary = newValue;
  }

  // getter, accessor
  get salary() {
    // return this.#salary;
    return this.#salary.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  set salary(newValue) {
    this.#salary = newValue;
  }
}

class Staff extends Employee {
  jumlahAnak;

  // overiding
  constructor(name, salary) {
    // super = fungsi untuk memanggil constructor di class parent
    super(name, "Staff", salary);
    this.jumlahAnak = 0;
  }

  getSalary() {
    return super.getSalary() - 10_000;
  }

  lembur() {
    console.log("Kerja keras bagai kuda");
  }
}

class Manager extends Employee {
  #tunjangan;

  constructor(name, salary) {
    super(name, "Manager", salary);
    this.#tunjangan = 0.1 * salary;
  }

  getTakeHomePay() {
    return super.getSalary() + this.#tunjangan;
  }
}

// Staff = Child class
// Employee = Parent class

const bagas = new Employee("Bagas", "Staff", 5_000_000);
console.log(bagas); // property name bisa diakses di luar kelas karena merupakan property public
console.log(bagas.name); // property name bisa diakses di luar kelas karena merupakan property public
// console.log(bagas.#salary); // ERROR! karena #salary adalah property private
console.log(bagas.getSalary()); // nilai dari property salary didapat dari method
console.log(bagas.salary); // nilai dari property salary didapat dari getter
// bagas.setSalary(10_000_000);
bagas.salary = 10_000_000; // mengubah value property private dari setter
console.log(bagas.salary); // nilai dari property salary didapat dari getter

// const eddy = new Manager("Eddy", 5_000_000);
// console.log(eddy);
// console.log(eddy.getTakeHomePay());
