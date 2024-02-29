"use strict"; //treat all JS code as never version
//Likhne ki jarurat nahi kyuki sab kuch newer version me hi chalta hai
//but this is a good practice

alert(3+3); //WE are using Nodejs , not browser

let a = null;
typeof(a); // returns "object"

let b;
typeof(b); // returns "Undefined"

let c = {
    name: 'John',
    age: 30,
    isMarried: false
};
typeof(c); // returns "object"