function validate (username,password,...restparams)
{
    console.log(username);
    console.log(password);
restparams.forEach(function(e){
    console.log(e);
});
}
validate ("kartik","Welcome10","jessy@gmail.com","blue");

