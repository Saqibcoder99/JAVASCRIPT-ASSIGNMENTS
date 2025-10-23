                                                    //CHAPTER 10,11                                        
            //ANSWER 1
let User_city=prompt("Enter Your City Name");
if(User_city== "Karachi"|| User_city=="karachi"){
console.log("Welcome To The City Of Lights");
}


            //ANSWER 2
let User_gender=prompt("Enter Your Gender");
if(User_gender== "Male"|| User_gender=="male"){
console.log("Good Morning Sir!");
}
else if(User_gender== "Female"|| User_gender=="female")
{
    console.log("Good Morning Mam!");

}
 

          //ANSWER 3
let signal_color=prompt("Enter Signal color");
if(signal_color== "Red"|| signal_color=="red"){
console.log(signal_color,"Must Stop");
}
else if(signal_color== "Yellow"|| signal_color=="yellow")
{
    console.log(signal_color,"Ready to Move");

}
else if (signal_color== "Green"|| signal_color=="green")
{
    console.log(signal_color,"Move Now");

}

                  //ANSWER 4
let current_fuel=prompt("Enter Your Remaining Fuel");
if(current_fuel<=0.25){
console.log("Please refill fuel in the car");
}
                  //ANSWER 5
                    //part1
var a=4;
if(++a===5){
    alert("given condition for variable a is true");
}
                    //part2

var b=82;
if(b++===83){
    alert("given condition for variable a is true");
}
                    //part3

var c=12;
if(c++===13){
    alert("condition 1 is true");
}
if(c===13){
    alert("condition 2 is true");
}
if(++c<14){
    alert("condition 3 is true");
}
if(c===14){
    alert("condition 4 is true");
}
                    //part4
  
 var materialCost=20000;
     labourCost=2000;
     totalCost=materialCost+labourCost;
     if(totalCost===materialCost+labourCost)   {
        alert("The costs equals")
     }                  
                    //part5

if(true){
    alert("True");
}

if(false){
    alert("False");
}
                    //part6
 if("car"<"cat")  {
    alert("car is smaller than cat");
 }                 

                    //ANSWER 6

  let math=prompt("Enter your math number");
  phy=prompt("Enter your physics number");  
  comp=prompt("Enter your computer number");     
  Total_marks=prompt("Enter your total marks")
  obtained=math  +  phy +  comp;
  document.writeln("total",Total_marks);    
  document.writeln("liye h",obtained);    
                
  
  
  
  
                    //ANSWER 7

   let secret_no=8;
   user_number=prompt("Enter a number");
   if(user_number==secret_no){
    console.log( "Correct answer");
   }   
   else if(user_number==9){
    console.log("Close enough to the correct answer");
   }

                     //ANSWER 8

     let number=prompt("Enter a Number");
     if(number/3){
        console.log("The number is divided by 3")
       // console.log(number/3)
     }               
                     //ANSWER 9
     let z=24;
     if(z%2==0){
       console.log ("Even number");
     }     
     else {
          console.log ("Odd number");
     }               

                     //ANSWER 10

let T=prompt("Enter Current Temperature");
if(T>40){
    console.log("It is too hot outside ")
}
else if(T>30){
    console.log("The weather today is normal")
}
else if(T>20){
    console.log("Today  weather is Cool ")
}
else if(T>10){
    console.log(" OMG! Today  weather is so Cool ")
}
                     //ANSWER 11
 
 let first_number=10;       
     second_number=2;
     op= prompt("Enter Operation (+,-,*,/,%):");                
     if(op=="+"){
        console.log("Addition",first_number+second_number);
     }
    else if(op=="-"){
        console.log("Subtraction",first_number-second_number);
     }
     else if(op=="*"){
        console.log("Multiplication",first_number*second_number);
     } 
     else if(op=="/"){
        console.log("Division",first_number/second_number);
     } 
    else if(op=="%"){
        console.log("Remainder",first_number%second_number);
     }  
     else {
        console.log("Invalid Number");
     } 