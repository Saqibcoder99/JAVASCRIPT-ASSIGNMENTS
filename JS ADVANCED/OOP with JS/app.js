

/*Object - Oriented Programming(OOP) programming ka ek tareeqa hai jisme hum Classes aur Objects 
ki madad se code likhte hain.Class ek blueprint hoti hai aur Object us class se banne wali
 asli cheez hoti hai.Constructor object banate waqt automatically chalta hai aur initial 
 values set karta hai.Properties object ka data hoti hain aur Methods uske functions hote
hain.Class ke methods prototype mein store hote hain, jis se sab objects unhein share 
  karte hain.OOP ka maqsad code ko clean, reusable, organized aur easy to maintain banana
hai.Iske 4 basic principles hain: Encapsulation, Inheritance, Polymorphism aur Abstraction.*/

// Ekdum Short(2–3 lines)

/*OOP programming ka ek tareeqa hai jisme hum Classes aur Objects ki madad se code likhte hain.
Class blueprint hoti hai aur Object us se banne wali cheez.OOP code ko reusable,
 organized aur easy to maintain banati hai.*/

                                    // EXAMPLE:1

/*function person(name,age){
   this.name=name
   this.age=age
   this.working=function(){
    console.log(this.name,"working.....");
   }
 }
let p1=new person("Hasan",25) 
let p2=new person("Saqib",20) 
console.log(p1);
p1.working()
console.log(p2);
p2.working()*/


                                    // EXAMPLE:2

/*function person(name,age){
   this.name=name
   this.age=age
 }
 
   function working(){
    console.log(this.name,"working.....");
   }
   function rest(){
    console.log(this.name,"rest.....");
   }
   person.prototype.working=working;
   person.prototype.rest=rest;
let p1=new person("Hasan",25) 
let p2=new person("Saqib",20) 
console.log(p1);
p1.working()
console.log(p2);
p2.rest()*/                                    



                                    // EXAMPLE:3

                                    // CLASSES


/*class person{
    constructor(name,age){
     this.name=name
     this.age=age
    }
}    
let p1=new person("Hasan",25) 
console.log(p1);*/


/*class person{
    constructor(name,age){
     this.name=name
     this.age=age
    }
   working(){
    console.log(this.name,"working.....");       // this function set in prototype
   }   
}    
let p1=new person("Hasan",25) 
console.log(p1);
p1.working()*/



                                    // EXAMPLE:4

/*class user{
    constructor(name,email){
     this.name=name
     this.email=email
    }
}    
let u1=new user("Hasan","hasan123@gmal.com") 
console.log(u1); 

class admin extends user{
constructor(){
    super("saleem", "saleem@gmail.com")
    this.admin="true"
}
}
let a1=new admin();
console.log(a1);*/
