document.getElementById('content').innerHTML = '<h2>We Growth The knoweledge of JS</h2>';

console.log('WE are at tut 45 in js');

let name = 'gaurav';
let name1 = 'ritik';
let name2 = 'prasad';
let name3 = 'krushna';
let greetText = " Good Morning";

function greet(name, greetText="greeting in js") {
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}

function sum(a , b , c) {  
    let d = a + b + c;     
    return d;
}

let returnVal = sum (1,2,3);
console.log(returnVal);

greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);


// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
