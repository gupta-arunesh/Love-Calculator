function lovecheck(){

    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;
    if(name==""){
        alert("Please enter your name");
    }else if(name.length<=2){
        alert("Minmum name length is 3");
    }else if(!isNaN(name)){
        alert("Numbers are not allowed");
    }else if(lname==""){
        alert("Please enter your name");
    }else if(lname.length<=2){
        alert("Minmum name length is 3");
    }else if(!isNaN(lname)){
        alert("Number are not allowed");
    }else{
    var lovechecker = Math.random()*100;
    lovechecker = Math.floor(lovechecker);
    document.getElementById("lovevalue").value = lovechecker+" %";
    document.getElementById("love").value = lovechecker+" %";

    //document.getElementById("love").innerHTML = "You are love with your partner "+lovechecker+" %";

    if(lovechecker<=15){
        document.getElementById("love").innerHTML = "Sorry, "+name +" "+ lovechecker+"% Your love is not true.";
    }else if(lovechecker<=30){
        document.getElementById("love").innerHTML = name +"Your"+ lovechecker+"% i think, Your Relationship is average.";
    }else if(lovechecker<=50){
        document.getElementById("love").innerHTML = "Hey, "+name +" Your love percentage is "+lovechecker+" % i think, Good Relationship.";
    }else if(lovechecker<=75){
        document.getElementById("love").innerHTML = "Congratulations "+name+" Your love percentage is "+lovechecker+" % i think, this is is the Great Relationship with your lover.";
    }else if(lovechecker<=100){
        document.getElementById("love").innerHTML = "Very-Very congratulations "+name+" Your love percentage "+lovechecker+" % is very high, Excellent Relationship, i wish always you love him";
    }

     document.getElementById('btn').disabled = true;
    }

}




//  reload page function
function myFunction() {
location.reload();
}
