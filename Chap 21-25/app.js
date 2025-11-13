                                                //CHAPTER 21-25

//Answer 1                                                



//Answer 2

document.writeln("<h1>Answer : 2</h1>")
let userFav_mob=prompt("Enter Your Fav Mob Phone Model");
document.writeln("<h3> My Fav Mob Phone Model is:"," ",userFav_mob.toUpperCase())
document.writeln("<h3>Length of String:"," ",userFav_mob.length)

//Answer 3

document.writeln("<h1>Answer : 3</h1>")
let country="Pakistani";
document.writeln("<h2>String:"," ",country);
document.writeln("<h3>Index of 'n':"," ",country.indexOf("n"))

//Answer 4

document.writeln("<h1>Answer : 4</h1>")
string="Hello World";
document.writeln("<h2>String:"," ",string);
document.writeln("<h3>Last Index of 'l':"," ",string.lastIndexOf("l"))

//Answer 5

document.writeln("<h1>Answer : 5</h1>")
let String="Pakistani";
document.writeln("<h2>String:"," ",String);
document.writeln("<h3>Character at index 3 :"," ",String.charAt(3))

//Answer 6

//Answer 7

document.writeln("<h1>Answer : 7</h1>")
let city="Hyderabad";
document.writeln("<h2>City:"," ",city);
document.writeln("<h3>After Replacement:"," ",city.replace("Hyder","Islam"))

//Answer 8

document.writeln("<h1>Answer : 8</h1>")
let message="Ali and Sami are best friends.They play cricket and football together.";
document.writeln("<h2>Message:"," ",message);
document.writeln("<h3>After Replacement :"," ",message.replaceAll("and","&"))


//Answer 9

document.writeln("<h1>Answer : 9</h1>")
let number="472";
document.writeln("<h2>Value:"," ",number,"<br/>Type:","",typeof number);
document.writeln("<h2>Value:"," ",parseInt(number),"<br/>Type:","",typeof parseInt(number) );


//Answer 10

document.writeln("<h1>Answer : 10</h1>")
let userInput=prompt("Enter Your Fav Dry fruit");
document.writeln("<h2>User input:"," ",userInput);
document.writeln("<h3>Upper case:"," ",userInput.toUpperCase())



//Answer 12

document.writeln("<h1>Answer : 12</h1>")
var num=35.36;
str=num.toString()
document.writeln("<h2>Number:"," ",num);
document.writeln("<h2>Result:"," ",str.replace(/\./g,""));


//Answer 16

console.log("Answer : 16")
let university="university of karachi";
console.log("convert to array:"," ",university.split())


//Answer 17

let Str="Pakistan";
document.writeln("<h1>Answer : 17</h1>")
document.writeln("<h2>User input:"," ",Str);
document.writeln("<h3>Last Character of input  :"," ",Str.charAt(Str.length-1))



//Answer 18

let text="The quick brown fox jumps over the lazy dog";
document.writeln("<h1>Answer : 17</h1>")
document.writeln("<h3>There are two occurrence(s) of word  :"," ",countOccurrences(text))