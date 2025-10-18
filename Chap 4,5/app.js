//CHAPTER 4

//ANSWER 1
document.writeln("<h1>ANSWER 1</h1><br/><br/>")
let q = 1, p = 2, o = 3;


//ANSWER 2


document.writeln("<h1>ANSWER 2</h1>")
document.writeln("<h1>LEGAL NAMES</h1>")
document.writeln("<h2>MUST BEGINS WITH</h2>")
document.writeln("<h3>A Letter (a-z or A-Z)</h3>")
document.writeln("<h3>A Dollor Sign ($)</h3>")
document.writeln("<h3>An Underscores(_)</h3>")
document.writeln("<h3>name</h3>")
document.writeln("<h3>Total</h3>")
document.writeln("<h1>ILLEGAL NAMES</h1>")
document.writeln("<h3>functin</h3>")
document.writeln("<h3>var</h3>")
document.writeln("<h3>1st</h3>")
document.writeln("<h3>!username</h3>")
document.writeln("<h3>delete</h3>")


//ANSWER 3
document.writeln("<h1>ANSWER 3</h1>")
document.writeln("<h3>Rules for naming JS variables</h3>")
document.writeln("<h5>Variable names can only contain numbers,$ or underscores. For Example: $my_1stVariable</h5>")
document.writeln("<h5>Variables name must begin with a letter, $ or underscores For Example: $name, _name or name</h5>")
document.writeln("<h5>Variable names are case sensitive</h5>")
document.writeln("<h5>Variable names should not be JS keywords</h5>")





//CHAPTER 5
//ANSWER 1
let num1 = 3; num2 = 5;
result = num1 + num2;
document.writeln("<h1>ANSWER 1</h1><br/><br/>")
document.writeln(`<br/>Sum of 3 and 5 is :`, result)



//ANSWER 2
result = num1 - num2;
document.writeln("<h1>ANSWER 2</h1><br/><br/>")
document.writeln(`<br/>Sub of 3 and 5 is :`, result)
result = num1 * num2;
document.writeln(`<br/>Multi of 3 and 5 is :`, result)
result = num1 / num2;
document.writeln(`<br/>Divide of 3 and 5 is :`, result)
result = num1 % num2;
document.writeln(`<br/> Remainder of 3 and 5 is :`, result)
//ANSWER 3
let a;
document.writeln("<h1>ANSWER 3</h1><br/><br/>")
document.writeln("<br/><br/>Value after variable declaration is:", a)
let b = 9;
document.writeln("<br/>Initial value", b)
let c = 9;
document.writeln("<br/>value after increment is:", ++c)
result = c + 7
document.writeln("<br/>value after addition is:", result)
document.writeln("<br/>value after decrement is:", --result)
remainder = result % 4
document.writeln("<br/>The remainder is:", remainder)

//ANSWER 4

let ticket_price = `600`;
total = ticket_price * 5
document.writeln("<h1>ANSWER 4</h1><br/><br/>")
document.writeln("<br/><h4>Total cost to by 5 tickets to a movie is:", total, "PKR</h4>")
//ANSWER 5
let num = "4";
document.writeln("<h1>ANSWER 5</h1><br/><br/>")
document.writeln(`<h2>Table of `, num, "<br/></h2>")
document.writeln("<h3>", num, "x", "1", "=", num, "<br/>")
document.writeln(num, "x", "2", "=", num * 2, "<br/>")
document.writeln(num, "x", "3", "=", num * 3, "<br/>")
document.writeln(num, "x", "4", "=", num * 4, "<br/>")
document.writeln(num, "x", "5", "=", num * 5, "<br/>")
document.writeln(num, "x", "6", "=", num * 6, "<br/>")
document.writeln(num, "x", "7", "=", num * 7, "<br/>")
document.writeln(num, "x", "8", "=", num * 8, "<br/>")
document.writeln(num, "x", "9", "=", num * 9, "<br/>")
document.writeln(num, "x", "10", "=", num * 10, "<br/></h3>")
//ANSWER 6
let C_temp = 15; F_temp = 20;
F = (C_temp * 9 / 5) + 32
document.writeln("<h1>ANSWER 6</h1><br/><br/>")
document.writeln("<h5><br/>15C is", F, "F")

C = (F_temp - 32) * 5 / 9
document.writeln("<br/>20F is", C, "C</h5>")

//ANSWER 7
document.writeln("<h1>ANSWER 7</h1><br/><br/>")
document.writeln("<h1>Shopping Cart</h1>")
let price_item1 = 500; price_item2 = 600; quantity_item1 = 5; quantity_item2 = 5; shipping_charges = 100;
Total = price_item1 * 5 + price_item2 * 5 + shipping_charges;
document.writeln("<br/><h3>Price of item 1 is:", price_item1)
document.writeln("<br/>Quantity of item 1 is:", quantity_item1)
document.writeln("<br/>Price of item 2 is:", price_item2)
document.writeln("<br/>Quantity of item 2 is:", quantity_item2)
document.writeln("<br/>Shipping charges is:", shipping_charges)
document.writeln("<br/>Total cost of your order is:", price_item1 * 5 + price_item2 * 5 + shipping_charges, "</h3>")


//ANSWER 8
let Total_marks = 980; marks_obtained = 804;
percentage = marks_obtained * 100 / Total_marks
document.writeln("<h1>ANSWER 8</h1><br/><br/>")
document.writeln("<h1> MARK SHEET:</h1>")
document.writeln(" <h3>Total marks:", Total_marks)
document.writeln(" <br/>Marks Obtained:", marks_obtained)
document.writeln("<br/>Percentage is :", percentage, "</h3>")

//ANSWER 9
let dollor = 10; riyal = 25;
total = 104.8 * 10 + 25 * 28
document.writeln("<h1>ANSWER 9</h1><br/><br/>")
document.writeln("<h1> Currency in PKR:</h1>")
document.writeln("<h5>Total Currency in PKR is :", total, "</h5>")
//ANSWER 10
let f = 20;
result = f + 2 * 10 / 2
document.writeln("<h1>ANSWER 10</h1><br/><br/>")
document.writeln("<h4>Answer 10 is :", result, "</h4>")

//ANSWER 11
let current_year = 2016; birth_year = 1992;
age = current_year - birth_year
document.writeln("<h1>ANSWER 11</h1><br/><br/>")
document.writeln(" <h1>Age Calculator</h1>:")
document.writeln(" <h4>Current Year:", current_year)
document.writeln("<br/> Birth Year:", birth_year)
document.writeln(" <br/>My Age is:", age, "</h4>")
//ANSWER 12
let radius = 20;
circumference = 2 * 3.141 * 20
area = 3.141 * 20 * 20
document.writeln("<h1>ANSWER 12</h1><br/><br/>")
document.writeln("<h1>The Geometrizer:</h1>")
document.writeln("<h5>Radius of a Circle:", radius)
document.writeln("<br/>The circumference is:", circumference)
document.writeln("<br/>The Area is:", area, "</h5>")
//ANSWER 13
document.writeln("<h1>ANSWER 13</h1><br/><br/>")
document.writeln("<h1>The Lifetime Supply Calculator</h1>")
let fav_snack = "SUPER biscuit";
C_age = 15;
m_age = 65;
per_day = 3;
Total_rest = (m_age - C_age) * per_day;

document.writeln("<h5>Favourite Snack:", fav_snack)
document.writeln("<br/>Current age:", C_age)
document.writeln("<br/> Estimated maximam age:", m_age)
document.writeln("<br/>Amount of snacks per day:", per_day)
document.writeln(`<br/>You will need `, Total_rest, ` Super biscuit to last you until the ripe old age of `, m_age, "</h5>")   
