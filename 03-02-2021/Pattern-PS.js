
//var str="MDP76767AYP";
//var pattern =/MDP[0-9]+AYP/;
//console.log(pattern.test(str));


//var str="Appleball";
//var pattern =/(?=.*[a-z])(?=.*[A-Z])/;
//console.log(pattern.test(str));

// 1 upper case, 1 lower case,1 special character,1 digit , length must be at-least(minimum) 8
var str="Ale#a9fa";
var pattern =/(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])[\w\W]{8,}/;
console.log(pattern.test(str));