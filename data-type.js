// string,
// number,
// boolean,
// undefined,
// null
// object,
// array,

// built in boolean
// string
//  "" => boolean value = false, selain string kosong true
// " " => true
// "1" => true
// "a" => true
const str = "a";
// console.log(Boolean(str));
// console.log(!!str);

// number
// 0 => false, selain 0 => true
const number = 10;
console.log(Boolean(number));

// undefined: selalu false
console.log(Boolean(undefined));

// null: selalu false
console.log(Boolean(null));

// array : selalu true
const arr = [];
console.log(Boolean(arr));

// object: selalu true
const obj = {};
console.log(Boolean(obj));
