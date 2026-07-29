
                // Array | Object Destructuring | Rest or Spread operators

// 📌 Array Destructuring (7 Questions)

// Question 1
// Destructure the first and second values.

// const fruits = ["Apple", "Banana", "Orange"];
// Expected
// Apple
// Banana
                    // Awnser

// let [first,sec]=fruits;
// console.log(first,sec);

// Question 2
// Skip the second element.

// const colors = ["Red", "Green", "Blue"];
// Output
// Red
// Blue

                    // Awnser
// let [fir,,thir]=colors;
// console.log(fir,thir);

// Question 3
// Store the remaining values in another array.

// const numbers = [10, 20, 30, 40, 50];
// Expected
// 10
// [20,30,40,50]

// Question 4
// Swap two variables using destructuring.
// let a = 5;
// let b = 10;
// Expected
// a = 10
// b = 5
                        // Answer
//  [a,b]=[b,a]
// console.log(a,b);

// Question 5
// Give default values.
const names = ["Ali"];
// Expected
// Ali
// Ahmed

                        // Answer


//  Question 6
// Nested array destructuring.
// const data = ["HTML", ["CSS", "JavaScript"]];
// Expected
// HTML
// CSS
// JavaScript

                       
                            // Answer
// let [fir,[sec,thi]]=data
// console.log(fir,sec,thi);


// Question 7
// Destructure all values.
// const marks = [80, 90, 95];
// Print all three.
                            // Answer

// let [num1,num2,num3]=marks;
// console.log(num1,num2,num3);



// 📌 Object Destructuring (7 Questions)
// Question 8
// Destructure name and age.
// const user = {
// name: "Hasan",
// age: 23,
// city: "Lahore"
// };
// Expected
// Hasan
// 23


                                // Answer

//  let {name,age}=user;
//  console.log(name,age);
                                

// Question 9
// Rename variables.
const student = {
name: "Ayesha",
class: "10th"
};
// Expected variables
// studentName
// studentClass

                                // Answer



// Question 10
// Use default value.

const employee = {
name: "Ahmed"
};
// Expected
// Ahmed
// 50000

                                // Answer



// Question 11
// Nested object destructuring.

// const person = {
// name: "Ali",
// address: {
// city: "Karachi",
// country: "Pakistan"
// }
// };
// Expected
// Karachi
// Pakistan

                                // Answer

// let {address:{city,country}}=person;
// console.log(city,country);


// Question 12
// Destructure everything.

// const product = {
// title: "Laptop",
// price: 80000,
// brand: "Dell"
// };
// Print all values.
                                // Answer

// let {title,price,brand}=product;
// console.log(title,price,brand);


// Question 13
// Extract only email.

// const account = {
// username: "coder123",
// email: "coder@gmail.com",
// password: "12345"
// };

                                // Answer
// let {email}=account
// console.log(email);


// Question 14
// Combine object and array destructuring.

// const company = {
// employees: ["Ali", "Ahmed", "Sara"]
// };
// Expected
// Ali
// Ahmed
// Sara
                                // Answer

// let {employees:[firN,secN,thirN]}=company
// console.log(firN,secN,thirN);


// 📌 Rest Operator (3 Questions)
// Question 15
// Collect remaining values.
// const numbers = [1,2,3,4,5];
// Expected
// 1
// 2
// [3,4,5]
                                // Answer

// let [a,b,...rest]=numbers
// console.log(a,b,rest);


// Question 16
// Collect remaining object properties.

// const user = {
// name: "Hasan",
// age: 22,
// city: "Lahore",
// country: "Pakistan"
// };
// Expected
// name
// remaining object

// let {name,...rest}=user;
// console.log(name,rest);


// Question 17
// Create a function using Rest Parameters.

// Example
// sum(10,20,30,40);
// Expected Output
// 100
// Hint:
// Use
// function sum(...numbers)

                        // Answer
// function sum(...numbers){
//     console.log(numbers);
//     let [a,b,c,d]=numbers
//     console.log(a+b+c+d);
    
// }
// sum(10,20,30,40)


// 📌 Spread Operator (3 Questions)
// Question 18
// Merge two arrays.

// const frontend = ["HTML", "CSS"];
// const backend = ["Node", "MongoDB"];
// Expected
// ["HTML","CSS","Node","MongoDB"]

                        // Answer

// let arr=[...frontend,...backend]
// console.log(arr);

// Question 19
// Copy an array.
// const fruits = ["Apple","Banana","Orange"];
// Create a new copy using the spread operator.


                        // Answer
// const copyFruits=[...fruits]
// console.log(copyFruits);

// Question 20
// Merge two objects.

// const user = {
// name: "Hasan"
// };
// const details = {
// age: 22,
// city: "Lahore"
// };
// Expected
// {
// name: "Hasan",
// age: 22,
// city: "Lahore"
// }
                        // Answer


// let mergeObj={...user,...details}
// console.log(mergeObj);
