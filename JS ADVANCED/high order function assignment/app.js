

// ANSWER:1
//  ek esa function jo dusre function ko apne argument main ly higher order function kehlata ha

// ANSWER:2

//    Yes,map()is a higher order function                         


// ANSWER:3

//  No, forEach() does not return a value                            

// ANSWER:4


// ANSWER:5

// esa function jo dosre  function ky argument mai call ho

// ANSWER:6

// let printName = (name) => {
//     console.log(name);

// }

// let userName = () => {
// }


// printName(userName)


// Answer : 7

// filter() ka use araay pr filteration ky liye hota ha

// Answer : 8

// reduce ka purpose congrate ky liye hota ha yani do value ko milane ky liye

// Answer : 9

// find sirf single chz dhondne ky liye hota ha
// find return main sigle element return krta ha
//  or 
// filter multiple chz ky liye 
// filter return mai filteration array return karta ha

// Answer : 10

// map modification ky liye use hota ha 
// map return main new modification array return karta ha
// or
// forEach iteration ky liye use hota ha
// forEach return kuch bhi nh karta sirf undefine deta ha return main

// Answer : 11

// let nums=[1,2,3,4];
// let doubledNums=nums.map((n)=>n*2)
// console.log(doubledNums);

// Answer : 12

// let userName=["saqib","aqib","hasan","abdullah"]
// let name=userName.map((name)=>name.toUpperCase())
// console.log(name);

// Answer : 13

// let prices=[10,20,30,40,50]
// pricesIncrease=prices.map((pri)=>pri+10)
// console.log(pricesIncrease);


// Answer : 14

//  let userName=["saqib","aqib","hasan","abdullah"];
//  updatedName=userName.map((name)=>`Mr.${name}`)
//  console.log(updatedName);
 

// Answer : 15

// let nums=[5,6,7];
// let squareNums=nums.map((nums)=>nums*nums);
// console.log(squareNums);

// Answer : 16

// let num=[1,2,3,4,5,6];
// let filterNums=num.filter((num)=>num%2==0)
// console.log(filterNums);

// Answer : 17

//  let userName=["saqib","aqib","hasan","abdullah"];
//  findName=userName.filter((name)=>name.length>5)
//  console.log(findName);
 
// Answer : 18

//  let prices=[100,80,300,90,500]
//  let findPrices=prices.filter((price)=>price>100)
//  console.log(findPrices);
 
// Answer : 19

// let stuResult = [
//     {
//         name: "Saqib",
//         result: "Pass"
//     },
//     {
//         name: "Aqib",
//         result: "Fail"
//     },
//     {
//         name: "Hasan",
//         result: "Pass"
//     },
//     {
//         name: "Abdullah",
//         result: "Fail"
//     },
//     {
//         name: "Haseeb",
//         result: "Pass"
//     },
//     {
//         name: "Nazim",
//         result: "Fail"
//     },
//     {
//         name: "Babar",
//         result: "Pass"
//     }
// ]
// stuResult.filter((item)=>{
// if(item.result.toLowerCase()==="pass"){
//     console.log(item);

// }    
// })

// Answer :20

// let nums=[-5,-4,5,4,0,-2,2]
// let negNumbers=nums.filter((num)=>num<0
// )
// console.log(negNumbers);

// Answer :21

//  let userName=["saqib","aqib","hasan","abdullah"];
//  userName.forEach((name)=>console.log(name)
//  )


// Answer :22

// let fruitArray=["apple","orange","banana","peach"];
// fruitArray.forEach((fruits,index)=>console.log(index,fruits)
// )

// Answer :23

//  let userName=["saqib","aqib","hasan","abdullah"];
//   userName.forEach((name)=>console.log("welcome",name))


// Answer :24

// let nums=[5,4,5,4,0,2,2]
// let total=0;
// nums.forEach((num)=>total+=num)
// console.log(total);

// Answer :25

//   let userName=["saqib","aqib","hasan","abdullah"];
//   userName.forEach((name)=>console.log(name.toUpperCase()))

// Answer :26

// let number=[10,20,30,40];
// let greaterNumber=number.find((num)=>num>25
// )
// console.log(greaterNumber);

// Answer :27

//   let userName=["saqib","ali","hasan","abdullah"];
//   userName.find((name)=>{
//     if(name==="ali"){ console.log(name)}
//   }
//   )

// Answer :28


// Answer :29

//  let nums=[5,4,5,6,0,2,2];
//  let firstEven=nums.find((even)=>even%2==0);
//  console.log(firstEven);

// Answer :30

let stuResult = [
    {
        name: "Saqib",
        result: "Pass"
    },
    {
        name: "Aqib",
        result: "Fail"
    },
    {
        name: "Hasan",
        result: "Pass"
    },
    {
        name: "Abdullah",
        result: "Fail"
    },
    {
        name: "Haseeb",
        result: "Pass"
    },
    {
        name: "Nazim",
        result: "Fail"
    },
    {
        name: "Babar",
        result: "Pass"
    }
]
stuResult.find((fail) => {
    if (fail.result.toLowerCase() === "fail") {
        console.log(fail);
    }
})


// Answer :31

// let reduceNumbers=[1,2,3,4];
// const hello=reduceNumbers.reduce((accumulator, item) => {
// return accumulator + item;
// }, 0);
// console.log(hello);

// Answer :32
// let pricesArray=[500,300,100,100];
// let result=pricesArray.reduce((accumlator,price)=>{
//     return accumlator+price;
// })
// console.log(result);

// Answer :33


// Answer :34

// let words=["ali","going","to","school"]
// let sentence=words.reduce((previousValue,currentValue,index)=>{
//    return previousValue+(index>0?" ":"")+currentValue
// },"")
// console.log(sentence);

// Answer :35

// let product = [
//     {
//         name: "bag",
//         price: 1500
//     },
//     {
//         name: "bottle",
//         price: 500
//     },
//     {
//         name: "books",
//         price: 5000
//     },
//     {
//         name: "fee",
//         price: 2000
//     }
// ]
// let productPrice=product.reduce((accumlator,item)=>{
//   return  accumlator+item.price;
    
// },0)
// console.log(productPrice);


// Answer: 41

// object ek dynamic data structure hota ha jis mai hum data ko apne andar as a key value pair  store krta ha jese hum property name bhi kehty ha

// Answer: 42

let std1={
name:"Saqib",
age:18
}
// console.log(std1);

// Answer: 43

// console.log(std1.name);
// console.log(std1["name"]);

// Answer: 44

// std1.id="1";
// console.log(std1);

// Answer: 45

// delete std1.age;
// console.log(std1);

// Answer: 46

// let car={
//     brand="landcruiser",
//     model=2008
// }

// Answer: 47
