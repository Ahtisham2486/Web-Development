var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomDice= "dice"+randomNumber1+".png";
var radomImages="./images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",radomImages );


var randomNumber2=Math.floor(Math.random()*6)+1;
var diceImage="./images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceImage);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";

}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
    
}else{
    document.querySelector("h1").innerHTML="draw";
}