var player_one = prompt("Player1's name: ");
var player_two = prompt("Player2's name: ");

if (player_one && player_two){
    document.querySelector(".dice p").innerHTML= player_one;
    document.querySelectorAll(".dice p")[1].innerHTML= player_two;
}
else if (player_one){
    document.querySelector(".dice p").innerHTML= player_one;
    document.querySelectorAll(".dice p")[1].innerHTML= "Player2";
}
else if(player_two){
    document.querySelector(".dice p").innerHTML= "Player1";
    document.querySelectorAll(".dice p")[1].innerHTML= player_two;
}
else if (player_one == null && player_two){
    document.querySelector(".dice p").innerHTML= "Player1";
    document.querySelectorAll(".dice p")[1].innerHTML= "Player2";
}
var randomNumber1 = Math.floor(Math.random()* 6) + 1;//1-6

var randomDiceImge = "dice"+randomNumber1+".png";

var randomImages = "images/"+ randomDiceImge;
//change attribute 
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImages);

//second  image
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

//title change depending on winner 
if(randomNumber1>randomNumber2){
    //randomNumber and image1 wins!
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML = "DRAW!!";
}



