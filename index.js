var randomNumber1 = Math.floor(Math.random()*6 + 1);  //1 to 6
var randomDice = "dice"+randomNumber1+".png"; //dice che 1 te 6 chitra yeila
var randomImagesource = "images/"+randomDice;//tikd pn change hoil img number

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImagesource);

//Player 2

var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomImagesource2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

//</MAIN>

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " Player 1 is Euuuu !";
}
else if (randomNumber2 >  randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Ezz broo ezz !"
}
else{
  document.querySelector("h1").innerHTML = "Euuuu Drawwwwwwwwwwww :) "
}
