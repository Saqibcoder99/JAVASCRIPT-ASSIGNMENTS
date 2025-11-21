let currentDate=new Date();
ramadanDate=new Date("Feb 17, 2026")
daysLeft=(ramadanDate.getTime()-currentDate.getTime())/(1000*60*60*24)
console.log("Days Left in Ramadan:  ",Math.round(daysLeft))
monthsLeft=(ramadanDate.getTime()-currentDate.getTime())/(1000*60*60*24*30)
console.log("Months Left in Ramadan:  ",Math.round(monthsLeft))
weeksLeft=(ramadanDate.getTime()-currentDate.getTime())/(1000*60*60*24*7)
console.log("weeks Left in Ramadan:  ",Math.round(weeksLeft))




