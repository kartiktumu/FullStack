//Function with parameters and with return type

function authentication(username,password)
{
 if (username == "ravi" && password== "kiran")
 {
     return true;
 }
 else
 {
     return false;
 }

}

var result = authentication("ravi","kiran");
console.log(result);