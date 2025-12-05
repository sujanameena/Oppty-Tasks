//       Ask the user to enter a number.
// If the number is positive, print: "Positive number".

// let num=prompt("Enter any number :");
// if (num > 0 );
// console.log("positive number");

//       Ask for a person’s age.
// If the age is 18 or above, print: "You can vote".

// let age = prompt("Enter your age");
// if (age >= 18){
//   console.log("You can vote")
// }


//     Ask for marks (0–100).
// If marks ≥ 90 → print "A grade"
// Else If marks ≥ 75 → print "B grade"
// Else If marks ≥ 50 → print "C grade"
// Else → print "Fail"

// let marks = prompt("Enter your marks");
// if (marks >= 90) {
//     console.log("A Grade");
// } else if(marks >= 75) {
//     console.log("B Grade");
// } else if(marks >= 50) {
//     console.log("C Grade");
// } else if(marks >= 40) {
//     console.log("D Grade");
// } else {
//     console.log("Fail");
// }

// Ask for a speed.
// If speed > 120 → "Over speeding!"
// Else If speed > 60 → "Normal speed"
// Else → "Slow speed".

// let speed = prompt("Enter Speed");
// if (speed > 120){
//     console.log("Over speed");
// } else if (speed > 60){
//     console.log("Normal Speed");
// } else {
//     console.log("Slow speed");
// }


// For Nested If
// let age = prompt("Enter age");
// let country = "india";
// if (country == "india") {
//     if (age >= 16) {
//         console.log("He can drive");
//     }
// }
// let age = prompt("Enter your age");
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You cannot vote");
// }


// Switch
// let day = "tuesday";

// for (i = 20; i >= 1; i--) {
//     console.log("Decrement numbers:", i);
// }

// for (i = 1; i <= 20; i++) {
//     console.log("Increment Numbers:", i);
// }

// for (i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log("Even number", i);
//     }
// }

// for (i = 1; i <= 10; i++) {
//     console.log(7 || i);
// }


// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// even numbers 2 to 20
// let i = 2;
// while (i <= 20) {
//     console.log(i);
//     i += 2;
// }

// let i = 1;
// let sum = 0;

// while (i <= 100) {
//   sum = sum + i;
//   i = i + 1;
// }
// console.log(sum);

// sum of 50 numbers
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// 5. Ask for a password until the user enters "1234"
// let password = "";
// while (password !== "1234") {
//     password = prompt("Enter password:");
// }
// alert("Correct!");

// Print all multiples of 5 between 1 and 50

// let i = 1;
// while (i <= 50) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// let i = 1; 
// while (i <= 10) { 
//   console.log(5 * i);
//   i++;
// }
// while = repeats a block of code as long as the condition is true.
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// Do while loop = Exeutes a blockof code atleast once, then repeats it while the condition is true.
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// for loop = Repeats a block of code, specific number of Times.
// for (let i = 1; i <= 5; i++) {
//   console.log(i); 
// }
// For in = loops through the objects.
// let obj = {a: 1, b: 2};
// for (let key in obj) {
//   console.log(key + ": " + obj[key]);
// }
// for of = loops through each element of arrays, maps Etc..
// let arr = [10, 20, 30, 40];
// for (let value of arr) {
//   console.log(value);
// if (value === 30)break;
// }

// let arr = [10, 20, 30];
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
    
// }
// For each = Executes a function, once for each element in an array.
// [1, 2, 3].forEach(n => console.log(n));


// An array is a list of values stored in single variable.
// let rakesh = ["banana","apple","orange"];
// console.log(rakesh.length);
// console.log(rakesh[0]);
// array operations
// push=adds at the end
// pop=remove last element.
// shift=removes first element.
// unshift=adds at start

// Objects=key value pair
// Example:1

// let sujana = {
//     name: "sujana",
//     city: "hyderabad",
//     pinCode: "500089",
//     company: "oppty"
// }
// let length = Object.entries(sujana).length;
// let length = Object.keys(sujana).length;
// console.log(length);
// console.log(sujana.city);
// console.log(sujana);
// console.log(sujana.length);

//