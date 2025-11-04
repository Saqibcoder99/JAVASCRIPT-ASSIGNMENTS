                                                //CHAPTER 17-20
//Answer 1     

//let arr=[[],[],[]]

//Answer 2

let arr=[[0,1,2,3],[1,0,1,2,],[2,1,0,1]]
console.log(arr);

//Answer 3

document.writeln("<h1>Answer 3"); 
for( i=1; i<=10; i++){
   document.writeln("<h3>",i);
}

//Answer 4

document.writeln("<h1>Answer 4"); 
let table_num=prompt("Enter a table number");
 table_length=prompt("Enter a table length");
 document.writeln("<h2>Multiplication table of"," ",table_num," ","Length"," ",table_length); 
for( i=1; i<=table_length; i++){
   document.writeln("<h3>",table_num," ","X"," ",i," ","="," ",table_num*i);
}

//Answer 5

let fruits=["apple","banana","mango","orange","strawbery"];
document.writeln("<h1>Answer 5"); 
for(i=0;i<fruits.length;i++){
document.writeln("<h3>Element at index"," ",i," " ,"is"," ",fruits[i]); 
}


//Answer 6

document.writeln("<h1>Answer 6"); 
document.writeln("<h2>Counting:"); 
for( i=1; i<=15; i++){
   document.writeln("<h3>",i);
}
document.writeln("<h2>Reverse Counting:"); 
for( i=10; i>=1; i--){
   document.writeln("<h3>",i);
}
document.writeln("<h2>Even numbers:"); 
for( i=0; i<=10; i++){
   document.writeln("<h3>",i*2);
}
document.writeln("<h2>Series:"); 
for( i=1; i<=10; i++){
   document.writeln("<h3>",i*2,"k");
}

//Answer 7

let bakery=["cake","apple pie","cookie","chips","patties"];
user_choice=prompt("Welcome to AWAN BROTHERS bakery what do you want to order sir? ")
document.writeln("<h1>Answer 7");
for(i=0;i<bakery.length;i++){
   if(user_choice==bakery[i]){
      document.writeln("<h3> ",user_choice," ","is <b>available</b> at index"," ",i," ","in our bakery","</h3>")
   }
   else{
            document.writeln("<h3>We are Sorry. ",user_choice," ","is  <b>not available</b> in our bakery","</h3>")
   }
}
//Answer 8

let A=[24,91,78,53,12];
let max=A[0];
document.writeln("<h1>Answer 8");
for(i=0;i<A.length;i++){
   if(A[i]>max){
      max=A[i];
   }
}
  document.writeln("<h3>The Largest Number is:"," ",max);

//Answer 9

let B=[24,91,78,53,12];
let min=A[0];
document.writeln("<h1>Answer 9");
for(i=0;i<B.length;i++){
   if(B[i]<min){
      min=B[i];
   }
}
  document.writeln("<h3>The Smallest Number is:"," ",min);    

//Answer 10
for(i=1;i<=20;i++){
   console.log(i*5)
}
        















