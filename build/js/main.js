"use strict";
let myName = 'Anupam Poudel';
let myAge;
let isMarried;
let herName; //union data type can be either string or number and is not limited to 2 data type
let rE = /\w+/g; //typescript also suggests data types on its own if not defined as example this is regExp 
myAge = 23;
isMarried = true;
herName = 7673;
herName = "rose";
console.log("Name: " + myName + ", Age: " + myAge + ", Married: " + isMarried);
console.log("Married to " + herName);
// this is not possible in typescript because typescript sets default type to any
// so we have to define data type of a and b to make this function work
// const sum = (a, b) => {
//     return a + b
// }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(3, 5));
