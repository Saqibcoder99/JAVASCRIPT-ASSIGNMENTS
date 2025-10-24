   let secret_no=8;
   user_number=prompt("Enter a number between 1 to 10");
   if(user_number==secret_no){
    console.log( "Correct answer");
   }   
   else if(user_number==secret_no+1||user_number==secret_no-1){
    console.log("Close enough to the correct answer");
   }
    else if(user_number==secret_no+2||user_number==secret_no-2){
    console.log("qareeb ho rahy ho");
   }
      else if(user_number==secret_no-3||user_number==secret_no-4){
    console.log("Thora sa better guess");
   }
    else if(user_number==secret_no-5){
    console.log("thora sa or try karoo");
   }   else if(user_number==secret_no-7||user_number==secret_no-6){
    console.log("lower guess");
   }
   else{
    console.log("Invalid Number")
   }
