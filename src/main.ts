let username = "Anupam Poudel";
console.log(username);

// the type script accepts this as js accepts this 
// but the type scripts shows warning as you cant divide number by string

// let a = 18;
// let b = '6';
// let c = 3
// console.log(a / b);


let a: number = 18;
let b: string = '12';
let c: number = 6;

console.log(a / c);