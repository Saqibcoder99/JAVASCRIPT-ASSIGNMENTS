                                                    //Chapter 35-38


//Answer 1

function currentDateTime(){
    console.log(new Date());
}
currentDateTime()

//Answer 2

function name(){
    let firstName="Saqib";
    lastName="Javaid";
    fullName=firstName+" "+lastName;
    console.log("Hello", fullName)
}

name()

//Answer 3

function sum(){
    let num1=15;
    num2=15;
    return num1+num2
}
console.log("The Sum Of Two Numbers is: ",sum())


//Answer 4

function multiplication(a,b,c){
}
 multiplication()

//Answer 5

function squares(a){
 console.log("Arguments Square:  ",a*a)
} 
squares(5)



//Answer 6

function factorial(a){
factorialNum=1
for(i=1;i<=a;i++){
  factorialNum*=(i);
}
 console.log("The Factorial of a Number  ", a," is: ",factorialNum);
 
}


factorial(4)


//Answer 7

function counting(){
    let start=prompt("enter start counting number")
    let end=prompt("enter end counting number")
    for( i=start;i<=end;i++){
      document.writeln(i)
    }
}
counting()

//Answer 9

function Area(){
  A=h*w
  console.log("Area: ",A);
}
let h=15;
w=10;
Area(h,w)

//Answer 10

function palindrome(){
  let str="umer";
  arr=str.split('').reverse().join('');

  console.log(arr)
  if(arr==str){
    console.log("This is palindrome")
  }
  else{
        console.log("This is not palindrome")
  }
  
}
palindrome()


//Answer 11




  
//Answer 12

function longestWord(){
  let str="Web Development Tutorial"
arr=str.split(' ')
if(arr[0].length >arr[1].length && arr[0].length > arr[2].length){
  console.log ("Longest word:",arr[0])
}
else if(arr[1].length >arr[0].length && arr[1].length > arr[2].length){
  console.log ("Longest word:",arr[1])
}
else{
   console.log ("Longest word:",arr[2])
}
}
//longestWord()
