//CHAPTER 14,15,16
//Answer:1

let student_names = [];

//Answer:2   

let student_name = [];

//Answer:3   

let a;
a = ["Saqib"];

//Answer:4  

let b;
b = [8];

/** //Answer:5  
  
let c;
c=[False];

//Answer:6   

let d;
d=["Saqib",8,False];
console.log(d);**/

//Answer7

let education_qualification;
education_qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.writeln("<h1>Qualification:</h1>")
document.writeln("<h3>1)", " ", education_qualification[0]);
document.writeln("<h3>2)", " ", education_qualification[1]);
document.writeln("<h3>3)", " ", education_qualification[2]);
document.writeln("<h3>4)", " ", education_qualification[3]);
document.writeln("<h3>5)", " ", education_qualification[4]);
document.writeln("<h3>6)", " ", education_qualification[5]);
document.writeln("<h3>7)", " ", education_qualification[6]);
document.writeln("<h3>8)", " ", education_qualification[7]);

//Answer8

let student_Name = ["Saqib", "Rehman", "Kashan"];
student_scores = [480, 320, 230];
percentage_1 = student_scores[0] * 100 / 500;
percentage_2 = student_scores[1] * 100 / 500;
percentage_3 = student_scores[2] * 100 / 500;
document.writeln("<br/><br/><br/><h2>Score of", " ", student_Name[0], " ", "is", " ", student_scores[0], ".", " ", "Percentage:", " ", percentage_1, "%");
document.writeln("<h2>Score of", " ", student_Name[1], " ", "is", " ", student_scores[1], ".", " ", "Percentage:", " ", percentage_2, "%");
document.writeln("<h2>Score of", " ", student_Name[2], " ", "is", " ", student_scores[2], ".", " ", "Percentage:", " ", percentage_3, "%");

//Answer9

//Answer10

let scores = [320, 230, 480, 120];
scores.sort();
//scores.sort((a,b)=>b-a); decending order ky liye
document.writeln("<br/><br/><br/><h3>Ordered Scores of Students:", " ", scores);

//Answer11
let city=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.writeln("<br/><br/><br/>Cities List:",city)
document.writeln("<br/>Selected Cities List:",city.slice(2,4))
//Answer12

var arr = ["This", "is", "my", "cat."];
// arr.join(" ");
document.writeln("<br/><br/><br/>", arr.join(" "))

//Answer13

let members = [];
members.unshift("Saqib");
members.unshift("Maqsood");
members.unshift("Asad");
console.log(members);
console.log("Removed:", members.shift());
console.log("Removed:", members.shift());
console.log("Removed:", members.shift());

//Answer14

let member = [];
member.push("Saqib");
member.push("Maqsood");
member.push("Asad");
console.log(member);
console.log("Removed:", member.pop());
console.log("Removed:", member.pop());
console.log("Removed:", member.pop());

//Answer15

/**let phone_manufacture = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.writeln(<select name='phones'>
    <option>  phone_manufacture[0]  </option>
    <option>  phone_manufacture[1]  </option>
    <option>  phone_manufacture[2]  </option>
    <option>  phone_manufacture[3]  </option>
    <option>  phone_manufacture[4]  </option>
    <option>  phone_manufacture[5]  </option>

</select>);**/
