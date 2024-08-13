//3.Comperative Operator in JavaScript
var num1 = 12;
var num2 = 23;

console.log("Comparsion of num1 > num2: " + (num1 > num2)); // false

console.log("Comparsion of num1 < num2: " + (num1 < num2)); // true

console.log("Comparsion of num1 >= num2: " + (num1 >= num2)); // false

console.log("Comparsion of num1 <= num2: " + (num1 <= num2)); // true

console.log("Comparsion of num1 == num2: " + (num1 == num2)); // false

console.log("Comparsion of num1 != num2: " + (num1 != num2)); // true

console.log("Comparsion of num1 === num2: " + (num1 === num2)); // false

console.log("Comparsion of num1 !== num2: " + (num1 !== num2)); // true

var coTitle =  document.getElementById("co_title");
coTitle.innerHTML = "Comparitive Operators in JavaScript";

var numOne = document.getElementById("num_One");
numOne.innerHTML = "Number One: " + num1;

var numTwo = document.getElementById("num_Two");
numTwo.innerHTML = "Number two: " + num2;

var greaterThan = document.getElementById("greater_than");
greaterThan.innerHTML ="Comparsion of num1 > num2: " + (num1 > num2);

var lesserThan = document.getElementById("lesser_than");
lesserThan.innerHTML = "Comparsion of num1 > num2: " + (num1 < num2);

var greaterThanEqualsTo = document.getElementById("greater_than_equals_to");
greaterThanEqualsTo.innerHTML = "Comparsion of num1 >= num2: " + (num1 >= num2);

var lesserThanEqualsTo = document.getElementById("lesser_than_equals_to");
lesserThanEqualsTo.innerHTML = "Comparsion of num1 <= num2: " + (num1 <= num2);

var equalsTo =  document.getElementById("equals_to");
equalsTo.innerHTML = "Comparsion of num1 == num2: " + (num1 == num2);

var notEqualsTo =  document.getElementById("not_equals_to");
notEqualsTo.innerHTML = "Comparsion of num1 != num2: " + (num1 != num2);

var strictEqualsTo = document.getElementById("strict_equals_to");
strictEqualsTo.innerHTML = "Comparsion of num1 === num2: " + (num1 === num2);

var strictNotEqualsTo = document.getElementById("strict_not_equals_to");
strictNotEqualsTo.innerHTML = "Comparsion of num1 !== num2: " + (num1 !== num2);

// 4. logical Operator in JavaScript
var username ="david";
var password = "david123";

console.log("Logical AND : " + (username === "david " && password === "david123")); //true
console.log("Logical AND : " + (username === "david " && password === "david123")); //flase

console.log("Logical OR: " + (username === "admin" || password === "david123")); //true
console.log("Logical OR: " + (username === "david" || password === "david123")); //false

console.log("Logical NOT : " + !(username === "admin" && password === "david123")); //true
console.log("Logical NOT : " + !(username === "admin" || password === "david123")); //false
console.log("Logical NOT : " + !username === "admin" && password === "david123");//true

var loTitle = document.getElementById("lo_title");
loTitle.innerHTML = "Logical Operator in JavaScript";

var userInput = document.getElementById("uname");
var passwordInput = document.getElementById("pwd");

userInput.innerHTML = username;
userInput.innerHTML = password;

var andResult = document.getElementById("and_Result");
andResult.innerHTML = "Logical AND: " + (username === "david " && password === "david123");

var orResult = document.getElementById("or_Result");
orResult.innerHTML = "Logical OR: " + (username === "david " || password === "david123");

var notResult = document.getElementById("not_Result");
notResult.innerHTML = "Logical NOT: " + !(username === "david " || password === "david123");

// 5. Bitwise Opertaor in JavaScript
console.log("Bitwise AND: " + (10 & 5)); //0
console.log("Bitwise OR: " + (10 | 5)); //15
console.log("Bitwise XOR: " + (10 ^ 5)); //0
console.log("Bitwise NOT: " + (~10)); //-11
console.log("Bitwise Left Shift: " + (10 << 1)); //20
console.log("Bitwise Right Shift: " + (10 >> 1)); //5

//6. Ternanry Opertaor in JavaScript
var age = 25;
var result = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Operator Result: " + result);