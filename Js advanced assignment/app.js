// Section 1 – Objects (1–5)

// Q2.
// Dot notation aur Bracket notation me kya difference hai?
// const user = {
// name: "Hasan",
// age: 22
// };
// Dono tarikon se name access karke dikhayein.
                                // ANSWER
// console.log( user.name);
// console.log( user['name']);





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
