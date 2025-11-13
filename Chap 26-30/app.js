                                            //CHAPTER 26-30

  //Answer 1
  
  let number=3.45214;
  document.writeln("<h1>Answer : 1 ");
  document.writeln("<h4>number:"," ",number);
  document.writeln("<h4>round off value:"," ",Math.round(number));
  document.writeln("<h4>Floor value:"," ",Math.floor(number));
  document.writeln("<h4>ceil value:"," ",Math.ceil(number));
  
  //Answer 2
  
  let num=-2.673;
  document.writeln("<h1>Answer : 2 ");
  document.writeln("<h4>number:"," ",num);
  document.writeln("<h4>round off value:"," ",Math.round(num));
  document.writeln("<h4>Floor value:"," ",Math.floor(num));
  document.writeln("<h4>ceil value:"," ",Math.ceil(num));
    
  //Answer 3

  let userNum=prompt("Enter a Number");
  document.writeln("<h1>Answer : 3 ");
  document.writeln("<h4> Absolute value:  ",Math.abs(userNum));
  
    //Answer 4

  document.writeln("<h1>Answer : 4 ");    
  let randomNumber=Math.random();
  document.writeln("<h4>random dice value: ",Math.round(randomNumber*6))

   
    //Answer 5

  document.writeln("<h1>Answer : 5 ");    
  let Toss=Math.ceil(Math.random()*2);
  //document.writeln("<h4>random dice value: ",Toss)
  if(Toss==2){
      document.writeln("<h4>",Toss,"<br/>random coin value:   Heads ")
  }
  else{
    document.writeln("<h4>",Toss,"<br/>random coin value:   Tails  ")
  }
    
    //Answer 6

  document.writeln("<h1>Answer : 6 ");    
  let random_Number=Math.random();
  document.writeln("<h4>random number between 1 and 100: ",Math.round(random_Number*100))

    //Answer 7

  document.writeln("<h1>Answer : 7");
  let  userWeight=prompt("Enter Your weight in kilograms") ;   

  document.writeln("<h4>The weight of user is:"," ",  parseFloat(userWeight)," ","kilograms");
   

  //Answer 8

  document.writeln("<h1>Answer : 8 </h1>"); 
  let secretNum="8";
  userNum=prompt("Enter a secret number");
  if(secretNum==userNum) {
    document.writeln("congratulation")
  }
  else{
       document.writeln("Try again")
  }