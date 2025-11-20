                                            //CHAPTER 31-34

//Answer 1

console.log(new Date())

//Answer 2

let str=["Jan","Feb","Mar","Apr","May","June", "July","Aug","Sep","Oct","Nov","Dec"]
console.log("Current Month: ",str[new Date().getMonth()])


//Answer 3

let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

console.log("Current Day : ",days[new Date().getDay()])



//Answer 4

/**let day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
currentDay=day[new Date().getDay()]
if(currentDay==Sun || Sat){
    console.log("Its Fun Day")
}
else{
       console.log("Its Not Fun Day")
}**/


//Answer 5

let date=new Date().getDate();
if(date<=15){
    console.log("First Fifteen Days of the Month")
}
else{
        console.log("Last Fifteen Days of the Month")
}


//Answer 6


//Answer 7

let time=new Date().getHours();
if(time<12){
    console.log("Its AM")
}
else{
     console.log("Its PM")
}

//Answer 8

let LaterDate=new Date("dec 31,2020");
console.log("Later Date: ",LaterDate)

//Answer 9

let pastRamadan=new Date("June 18,2015").getTime()
currentDate=new Date().getTime()
daysCount=(currentDate-pastRamadan)/(1000*60*60*24);
console.log(Math.round(daysCount),`days have passed since 1st Ramadan 2015`)

//Answer 10


let referenceDate=new Date("Dec 5,2015 22:50:16")
pastDate=new Date("jan 1,2015").getTime()
secPassed=Math.round((referenceDate.getTime()-pastDate)/(1000));
console.log("On reference date  ",referenceDate ,secPassed,"  seconds had passed since beginning of 2015")








//Answer 13

let age=21;
console.log("Your age is: ",age)
calculateAge=new Date().getFullYear()-age
console.log("Your birth year is: ",calculateAge)


//Answer 14

document.writeln("<h1>Answer: 14</h1>")
document.writeln("<h1>K-Electric Bill</h1>")
let custumerName="Saqib Awan";
month=new Date().getMonth();
noUnits=Math.round("410.42");
chargesUnit=16;
latePay=350;
document.writeln("<h3>Custumer Name: ",custumerName)
document.writeln("<br/>Month :  ",str[month])
document.writeln("<br/>Number of Units: ",noUnits)
document.writeln("<br/>Charges Per Units: ",chargesUnit)
document.writeln("<br/><br/><br/> Net Amount Payable (within Due Date):  ",noUnits*chargesUnit)
document.writeln("<br/> Late Payment Surcharge :  ",latePay)
document.writeln("<br/> Gross Amount Payable (after Due Date):  ",(noUnits*chargesUnit)+latePay)