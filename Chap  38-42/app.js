function power(a,b){
let c=a;
for(i=1;i<b;i++){
    c=c*a
}
console.log(c)
}
power(3,4)

function year(a){
    if((a % 4 === 0 && a % 100 !== 0) || (a % 400 === 0)){
        console.log("This is Leap Year")
    }
    else{
               console.log("This is not Leap Year")
    }
}
year(2025)


function findS(a,b,c){
S=(a+b+c)/2
return S;
}
function findArea(a,b,c){
let S=findS(a,b,c);
A=Math.sqrt(S*(S-a)*(S-b)*(S-c))
console.log("Area of Triangle",A)
}
findArea(5,5,5)