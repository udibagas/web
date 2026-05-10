// buat class dengan menerapkan konsep
// encapsulation (property private, getter, setter)
// inheritance (buat 2 kelas turunan)
// polymorphism (overide contructor dan min 1 method yg lain)

class Animal {
  name;
  legsCount;
  #price;
  habitate;

  constructor(name, legsCount = 4, price = 0, habitate = "jungle") {
    this.name = name;
    this.legsCount = legsCount;
    this.#price = price;
    this.habitate = habitate;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

  walk() {
    console.log(`Jalan pakai ${this.legsCount} kaki`);
  }
}

class Mammal extends Animal {}

class SeaMammal extends Mammal {
  constructor(name, sirip, price) {
    super(name, 0, price, "Sea");
    this.sirip = sirip;
  }

  swim() {
    console.log("Berenang di laut. Byar byur");
  }
}

const kucing = new Mammal("kitty", undefined, 200_000);
console.log(kucing);
kucing.price = 300_000;
console.log(kucing.price);

kucing.walk();

const hiu = new SeaMammal("Hiu Paus", 5, 300_000_000);
console.log(hiu);

hiu.swim();
