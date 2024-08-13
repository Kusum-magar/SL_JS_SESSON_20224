// Conditional Statement in Java
// 1.if Statement

var username = "admin"
var password = "12344"

// we can also pass value directly to the document
document.getElementById("username").innerHTML = username;
document.getElementById("password").innerHTML = password;

if (username === "admin" && password === "12344")
{
    console.log("Welcome Admin!");
    document.getElementById("userCheck").innerHTML = "Welcome Admin "
}

var numOne = 12 ;
var numTwo = 13 ; 
document.getElementById("numOne").innerHTML = numOne;
document.getElementById("numTwo").innerHTML = numTwo;

if (numOne <= numTwo){
    console.log(numOne + "is less than or equal to " + numTwo);
    document.getElementById("numResult").innerHTML = numOne + " is less than or equal to " + numTwo;
}

//2. if...else statement

var userRole = "admin";

if(userRole === "admin"){
    console.log("You are an admin!");
    document.getElementById("roleCheck").innerHTML = "You are an admin";
} else {
    console.log("You are not admin.");
    document.getElementById("roleCheck").innerHTML = "You are not an admin";
}

// 3.Switch Statement
var day = "Saturday";
document.getElementById("day").innerHTML = day
switch (day) {
    case "Monday":
        console.log("Today is Monday");
        document.getElementById("dayCheck").innerHTML = "Today is Monday";
        break;
    case "Tuesday":
            console.log("Today is Tuesday");
            document.getElementById("dayCheck").innerHTML = "Today is Tuesday";
            break;
    case "Wednsday":
             console.log("Today is Wednsday");
             document.getElementById("dayCheck").innerHTML = "Today is Wednsday";
             break; 
    case "Thursday":
             console.log("Today is Thursday");
             document.getElementById("dayCheck").innerHTML = "Today is Thursday"; 
             break;
    case "Friday":
             console.log("Today is Friday");
             document.getElementById("dayCheck").innerHTML = "Today is Friday"
             break; 
    case "Saturday":
             console.log("Today is Saturday");
             document.getElementById("dayCheck").innerHTML = "Today is Saturday"
             break;
     case "Sunday":
             console.log("Today is Sunday");
             document.getElementById("dayCheck").innerHTML = "Today is Sunday"
             break;                     
}

// 4. If else if statement
var age = 18;
document.getElementById("age").innerHTML = age;

if(age >= 18) { 
    console.log("You are an adult");
    document.getElementById("ageCheck").innerHTML = "You are an adult";
} else if (age >= 13){
    console.log("You are a teenageer");
    document.getElementById("ageCheck").innerHTML = "You are a teenageer";
}else{
    console.log("You are a child");
    document.getElementById("ágeCheck").innerHTML = "You are a child";
}