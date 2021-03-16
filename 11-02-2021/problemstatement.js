var arr=["kartik","raju","sai","kumar"];
function displayusers(...restparams)
{
    restparams.forEach(function(e){
        console.log(e);
    });
}
displayusers(...arr);