// CLOSURES

/* A closure is the combination of a function and its lexical environment,
   allowing the function to access variables from its outer scope even
   after the outer scope has returned.*/
// let count=0;    

function outer() {
    let count = 0;
    function inner() {
        // let count = 0;
        count++;
        console.log(count);

    }
    return inner
}
const counter = outer()
counter()
counter()


// SHALLOW COPY

/*Top-level properties are copied, but nested objects or arrays share the same reference.

Changes to nested properties in the copy affect the original object and vice versa.*/

let userData = {
    name: "saqib",
    age: 20,
    location: {
        country: "pakistan",
        city: "karachi"
    }
}
// METHODS OF SHALLOW COPY

// spread operator

//  let user = {...userData}

// object.assign

// let user=Object.assign({},userData)

//  user.name="aqib"
//  user.age=25
//  user.location.country="dubai"
//  user.location.city="abu dhabi"
//  console.log("original",userData);
//  console.log("copy",user);

// DEEP COPY

/* In JavaScript, a deep copy creates a completely independent clone of an object,
 including all nested objects and arrays.*/

// METHODS OF DEEP COPY
    // structuredClone 
    // JSON.parse(JSON.stringify(obj ))

// let user=structuredClone(userData);
// let user=JSON.parse(JSON.stringify(userData))
// user.name="aqib"
//  user.age=25
//  user.location.country="dubai"
//  user.location.city="abu dhabi"
// console.log("original",userData);
// console.log("copy",user);

// OBJECT KEYWORD AND IT'S METHODS

// keys, entries, values, freeze, seal, assign

let obj={
    name:"saqib",
    age:20,
    email:"hello123@gmail.com"
}
// Object.freeze(obj)
// Object.seal(obj)
obj.age=30        // seal KI WAJA SE obj seal ho geaya  kuch add nh ho sakta lekin value change ho sakti
obj.pass="123"  // FREEZE KI WAJA SE obj freeeze ho geaya na kuch add or n kuch change ho sakta
console.log(obj);
console.log("keys",Object.keys(obj));
console.log("values",Object.values(obj));
console.log("entries",Object.entries(obj));


// MAP

/*The Map object in JavaScript holds key-value pairs and remembers the original insertion
order of the keys. It can use any value (both objects and primitive values) as either a key or a value.*/

// let myMap=new Map([
// ["apples", 500],
// ["bananas", 300],
// ["oranges", 200]
// ]);
// myMap.set("name","saqib")
// myMap.set(() => {}, "mera function hai ye...")
// console.log(myMap.get("name"));
// // myMap.clear()
// console.log(myMap);
// console.log(myMap.has("name"));
// console.log(myMap.size);

// SET

/*The Set object in JavaScript allows you to store unique values of any type,
 whether primitive values or object references*/
let mySet=new Set(["a", "b", "c"]);
mySet.add("d")
mySet.add("e")
mySet.add("f")
mySet.delete("f")
console.log( mySet.has("a"));
console.log(mySet.size);
mySet.clear()

console.log(mySet);






