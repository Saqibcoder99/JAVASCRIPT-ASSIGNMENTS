let ATM = 50000;
salary = 30000;
alert("WELCOME TO ATM MACHINE\n Hello Sir");
let pincode = 123456;
userpincode = prompt("Enter a Pincode");
if (userpincode == pincode) {
    console.log("Password Correct")
    let withdrawkaraneayeho = prompt("Yes or Not")
    if (withdrawkaraneayeho == Yes) {
        let withdraw = prompt("Enter Your Withdraw Amount");

        if (salary > withdraw) {
            salary = salary - withdraw
            atmMachine = atmMachine - withdraw
            console.log(atmMachine)
        }
         else if (salary < withdraw && atmMachine > withdraw) {
            console.log("aap jo pesy mang wo ziada")
        }
         else if (atmMachine < withdraw) {
            console.log("itny pesy nhi hain ubl ke pass")
        }

    }else{
        console.log("Time pass ky liye aye");
    }

}
else{
    console.log("Incorrect Password");
}

