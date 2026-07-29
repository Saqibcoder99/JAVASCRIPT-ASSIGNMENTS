// Section 1 – Objects (1–5)

// Q2.
// Dot notation aur Bracket notation me kya difference hai?
// const user = {
// name: "Hasan",
// age: 22
// };
// Dono tarikon se name access karke dikhayein.
//                                 // ANSWER

// Dot notation (user.name) is a cleaner and common, 
// Bracket notation (user['name'])is needed when the property name is dynamic (stored in a variable)

 // console.log( user.name);
// console.log( user['name']);

// Q3.
// Niche diye object ka output batayein.

// const student = {
// name: "Ali",
// age: 20
// };
// student.city = "Karachi";
// delete student.age;


                                   // ANSWER

// This is the output : {
//     city:"Karachi"
//     name:"Ali"
// }

// Q4.
// Object.keys(), Object.values(), aur Object.entries() kya return karte hain?
// Example ke sath explain karein.
                                   // ANSWER

// object.keys()--> object ky key return karta ha array mai return krta   
// object.values()-->object ky value return krta ha
// object.entries()-->object ky key value dono return karta ha


// Section 2 – Arrays (6–10)
// Q6
// Array aur Object me kya difference hai?

                                   // ANSWER

//  array used hota ha collection of data ky liye jis mai sirf hum value rakh sakty
//  obj used hota ha kisi bhi product ya user profile ky liye is mai hum key value dono rakhty                                  

// Q7.
// Output predict karein.
// const arr = [10,20,30];
// arr.push(40);
// arr.pop();
// console.log(arr);

                                   // ANSWER
// The output is:[10,20,30]

// Q9.
// Ek function likhein jo array ka sum return kare.
// Example
// sum([10,20,30])
// // Output
// 60

                                   // ANSWER
// function sum(arr){
// let [a,b,c]=arr;
// console.log(a+b+c);
// }
// sum([10,20,30])

// Q10.
// Ek array me duplicate values remove karein.
// [1,2,2,3,4,4,5]
// Expected Output
// [1,2,3,4,5]

                                   // ANSWER

//  let mySet=new Set( [1,2,2,3,4,4,5])   
//  console.log(mySet);
                                

// Section 3 – Destructuring (11–14)

// Q12.
// Output predict karein.
// const colors = ["red","blue","green"];
// const [a,b,c] = colors;
// console.log(b);

                                   // ANSWER
// this output is: blue

// Q13.
// Output batayein.
// const user = {
// name:"Hasan",
// age:22
// };
// const {name, age} = user;
// console.log(age);

                                   // ANSWER

//  This output is : 22
// Q14.
// Nested Object destructuring karein.
// const user = {
// name:"Ali",
// address:{
// city:"Karachi"
// }
// };
// City ko destructuring se nikalein.

                                   // ANSWER


// let {address:{city}}=user
// console.log(city);

// Section 4 – Shallow Copy & Deep Copy (15–18)

// Q15.
// Shallow Copy aur Deep Copy me kya difference hai?


                                   // ANSWER
/*Shallow copy mai hum sirf obj ko copy kr sakty but neested obj ya array copy nh kr sakty 
balky nessted ko kary gy to originaal bhi change hoga
            //    methods
            // spread operator or object.assign
*/
/* Deep copy ma hum nessted se neested ko pure obj ko copy kr sakty
        //    methods
        // structuredclone() or json.parse(json.stringify())
*/

// Q16.
// Output predict karein.
// const user1 = {
// name:"Ali",
// address:{
// city:"Karachi"
// }
// };
// const user2 = user1;
// user2.address.city = "Lahore";
// console.log(user1.address.city);

                                // ANSWER

//  The output is : lahore                               

// Q17.
// Spread operator se object copy karne par nested object me kya issue hota hai?
// Explain karein.
 
                                // ANSWER
/*spread operator se object copy karne pr nested object mai ye issue hota ha ky hum jo copy mai changes karty wo 
original mai bhi change hoo jati kyonky spread operator nested object ka sirf refference leta ha*/


// Q18.
// JavaScript me Deep Copy banane ke 3 methods likhein.


                                // ANSWER
// Mere ko 2 hi paata ha : 1. structuredclone() 2.JSON.parse(JSON.stringify(original))


// Section 5 – Rest & Spread Operator (19–22)

// Q20.
// Output predict karein.
// const arr = [10,20,30];
// const newArr = [...arr,40];
// console.log(newArr);

                                // ANSWER

// The output is:[10,20,30,40]

// Q21.
// Output batayein.
// function total(...numbers){
// console.log(numbers);
// }
// total(10,20,30,40);

                                // ANSWER

// The output is : [10,20,30,40]

// Q22.
// 2 Objects ko merge karein.
// const obj1 = {
// name:"Ali"
// };
// const obj2 = {
// age:20
// };
// Expected
// {
// name:"Ali",
// age:20
// }

                                // ANSWER

// const merj={...obj1,...obj2}
// console.log(merj);

// Section 6 – Array Higher Order Methods (23–26)


// Q23.
// map() aur forEach() me kya difference hai?

                                // Answer 
 //   map() or forEach array ky high order function ha  map modification ky liye usee hota 
 // ha or return ma array karta ha or foreach kuch return nh karta

//  Q24.
// filter() ka use karke sirf even numbers return karein.
                                // Answer 

// let arr=[1,2,3,4,5,6]
// let evenNum= arr.filter((num)=>{
// if(num%2==0){
// return num}
// })
// console.log(evenNum);

// Q25.
// reduce() ka use karke array ka total sum nikalein.

                                // Answer 

// let sum=[10,20,30].reduce((acc,cur)=>{
//         return acc+cur
// },0)
// console.log(sum);







// Section 7 – call(), apply(), bind() (27–29)

// Q27.
// call(), apply(), aur bind() me difference explain karein.
                                // ANSWER
// call()--> call function ko turant execute karta ha or auguments coma seprated pass hoty  ha.
// apply()--> apply function ko turant execute karta ha or auguments array ki form main pass hoty  ha.
/* bind()--> bind function ko turant execute nahin karta ha or balky ek naya  function 
 return krta ha jis mai this fix hota ha*/


/* Q28.
Output predict karein.
const user = {
name:"Hasan"
};
function greet(city){

console.log(this.name, city);

}
greet.call(user,"Karachi");*/

                                 // ANSWER

 // This is output : Hassan Karachi

//  Q29.
// Output batayein.
// const user = {
// name:"Ali"
// };
// function sayHello(country){
// console.log(this.name, country);
// }
// const result = sayHello.bind(user);
// result("Pakistan");


                                 // ANSWER

// This is the output : Ali Pakistan



// Final Mixed Question (30)
// Q30.
// Niche diye code ka exact output likhein aur har line explain karein.
const user = {
name: "Hasan",
skills: ["HTML", "CSS"]
};
const copy = structuredClone(user)
copy.skills.push("JavaScript");
console.log(user.skills);
console.log(copy.skills);
// Is code me Shallow Copy hui hai ya Deep Copy?
// Is problem ko Deep Copy se kaise solve karenge?
// Agar structuredClone() use karein to output me kya farq padega?

                                //   Answer 
 //  is code ma shallow copy use hoi haaa
//  is problem ko deep copy ky structuredclone() or json ky method se solve kr sakty
//  agr structuredclone() use kerein to sirf output copy mai changes ho gy original wese hi raahy gaaaa
