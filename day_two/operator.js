// Operator in javascript
var title = "Day Two - Operators in JavaScript";

// 1. Arithamatic Opertors in JavaScript
var price = 1500.45;
var discont = 250.50;
var vat = 150;

var total_with_vat = price + vat;
var total_with_discount = total_with_vat +total_with_discount;

console.log(title);
console.log("Item price : " + price);
console.log("vat");
console.log("Item Discount: " + discount);
console.log("Vat Amount: " + vat);
console.log ("Price including vat: " + total_with_vat);
console.log ("Price including discount: " + total_with_discount);
console.log("Total Amount of pay: " + total_with_discount);
// displaying the price and discount in html page
var content_title = document.getElementById("title");
content_title.innerHTML = title;

var content_price = document.getElementById("price");
content_price.innerHTML = price;

var content_discount = document.getElementById("discount");
content_discount.innerHTML = discont;

var content_vat = document.getElementById("vat");
content_vat.innerHTML = vat;

var content_total_with_vat =document.getElementById("total_with_vat") ;
content_total_with_vat.innerHTML = total_with_vat;

var content_total_with_discount = document.getElementById("total_with_discount");
content_total_with_discount = total_with_discount;


//modulas example
var a= 10;
var b = 3;
console.log("Modules of a and b: " + a % b);

//2.Assignment Operator
var x = 10;
var y = 20;
console.log("value of x: " + x);
console.log("value of y: " + y);


x += y; // x = x + y
console.log("x after addtion: " + x);

x -= y; // x = x-y
console.log("x after subtraction: " +  x) ;

x *= y; // x = x * y
console.log("x after multiplication: " + x);

x /= y // x = x / y
console.log("x after division: " + x);

x %= y // x = x%y
console.log("x after modules : " +x);

var addition_of_x = document.getElementById("addition");
addition_of_x.innerHTML = " x after addition : "+ x;

var subtraction_of_x = document.getElementById("subtraction");
subtraction_of_x.innerHTML = " x after subraction : "+ x;

var multiplication_of_x = document.getElementById("multiplication");
multiplication_of_x.innerHTML = "x after multiplication : "+ x;

var division_of_x = document.getElementById("division");
division_of_x.innerHTML = "x after division: " + x;

var modulas_of_x =  document .getElementById("modulas");
modulas_of_x.innerHTML = "x after modules : "+ x;


