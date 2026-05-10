"use strict";

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  eat() {
    console.log("Makan nasi");
    return this; // mengacu ke object instance
  }

  sleep() {
    console.log("Zzzzz");
    return this;
  }

  work() {
    console.log("Kerja bagai kuda");
    return this;
  }
}

const numbers = [1, 2, 3, 4, 5]; // 1-9-25

// 1. filter angka ganjil
const ganjil = numbers.filter((n) => n % 2 == 1);
console.log(ganjil);
// 2. map (dikuadratkan)
const kuadrat = ganjil.map((n) => n * n);
console.log(kuadrat);
// 3. join
const hasil = kuadrat.join("-");
console.log(hasil);

const hasil2 = numbers
  .filter((n) => n % 2 == 1)
  .map((n) => n * n)
  .join("-");

console.log(hasil2);

const agus = new Person("Agus", "M");
console.log(agus);
agus.eat().sleep().work().eat().sleep().work().eat().sleep().work();

// agus.eat().sleep().work();

class Calculator {
  result;

  constructor(r) {
    this.result = r;
  }

  add(number) {
    this.result += number;
    return this;
  }

  substract(number) {
    this.result -= number;
    return this;
  }
}

const x = new Calculator(0);
console.log(x);

x.add(3).add(4).add(7).substract(9).add(10);
console.log(x);
