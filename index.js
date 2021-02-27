var randomVar1 = 1 + (Math.round(Math.random() * 10) % 6);
var randomVar2 = 1 + (Math.round(Math.random() * 10) % 6);
var d = "images/dice" + randomVar1 + ".png";
var c = document.getElementById("img1").setAttribute("src", d);
d = "images/dice" + randomVar2 + ".png";
c = document.getElementById("img2").setAttribute("src", d);
if (randomVar1 > randomVar2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomVar2 > randomVar1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Fuck yourself it's a draw!";
}
