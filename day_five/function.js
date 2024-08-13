// Defining function in JavaScript
var USERNAME = "superadmin";
var PASSWORD = "admin123";

function checkCredentials(param_username ,param_password){
    console.log("Checking credentials");
    console.log("USERNAME");
    if (param_username === USERNAME && param_password === PASSWORD){
        console.log("Login successfull");
        return true;
    }else{
        console.log("Login failed")
        return false;
    }
}

// invoking the function
checkCredentials("hello", "pass");
 console.log ("Checking ")

// Example
var USERADMIN = "admin";
var USER = "user";

function checkRole(param_admin , param_user){
    console.log("Checking credentials");
    console.log("USERADMIN");
    if(param_admin === USERADMIN ){
        console.log("admin");
        return true;
    }else if(param_user == USER){
        console.log("user");
    }else{
        console.log("guest")
    }
    
}
checkRole("guest");