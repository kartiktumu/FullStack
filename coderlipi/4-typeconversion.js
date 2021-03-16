
// Without using parseInt()
let a = 7;
let b ="3";
let c = a + b;
console.log("Answer is " + c);

// With using parseInt()
let d = 5;
let e = '10';
e = parseInt(e,10);
let f = d + e;
console.log("Answer is " +f);

// Nan (Not a number)

let g = parseInt('kartik',10);
console.log(g);
let h = isNaN(g);
console.log(h);