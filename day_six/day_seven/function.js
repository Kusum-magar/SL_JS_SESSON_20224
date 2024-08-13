// arrow function in JavaScript

let msg = () => {
    return "Happy Coding Day to All Users";
}

console.log(msg())

// adding two numbers using arrow function in javascript
let add = (a,b) => {
    return a + b;
}

console.log(add(12, 13));

// traditionla javascript function
function addTwoNumber(a , b){
    return a + b;
}

// return single statement in arrow function in javascript
let multiply = (a , b) => a*b;

console.log(multiply(12 ,13));

//note: we  must pass the arguments to the function if they are passed in the opertaion

let divide = (a,b) => a / b; // we must pass the arguments in the function divide(a,b) otherwise it will raise ReferenceError

console.log(divide(12,13));

// create an arrow function that takes two parameter city_name and country_name.
// concat the parameter to uppercase with underscore and return it.
let getCountryInfo = ( city_name , country_name) => {
     if(country_name = "Nepal"){
        // converting  city_name and country_name to uppercase
        let country = country_name.toUpperCase(); // toUpperCase() is a string method
        let city = city_name.toUpperCase();
        return country + "_" + city;
     }else{
        return "Inavalid Country Name";
     }
}
console.log(getCountryInfo("lalitpur", "Nepal")); // should return "NEPAL_KATHMANDU"

// more short form
let getCountryDetai = (city_name,country_name) => {
    if(country_name !== "Nepal"){
        return "Invalid Country Name";
    }
    return country_name.toUpperCase()+"_"+city_name.toUpperCase();
}