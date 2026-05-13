const angka = 10.4;
console.log(Math.floor(angka));

// class => cetakan untuk membuat object
// static class => mengelompokkan fungsi yang sejenis
Math.abs(-10);
Math.min(11, 4, 2, 12);
Math.max(11, 4, 2, 12);

class MyMath {
  // static property
  static PI = 3.14;

  // static method => fungsi yang langsung dipanggil dari class tanpa perlu instantiation
  static abs(number) {
    if (number < 0) {
      return number * -1;
    }

    return number;
  }
}

const x = MyMath.abs(-90);
console.log(x);
console.log(MyMath.PI);
