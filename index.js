function change() {
  var randomVar1 = 1 + (Math.round(Math.random() * 10) % 6);
  var randomVar2 = 1 + (Math.round(Math.random() * 10) % 6);
  var t = new Date();
  var d = "images/dice" + randomVar1 + ".png";
  $("#img1").attr("src", d);
  d = "images/dice" + randomVar2 + ".png";
  $("#img2").attr("src", d);
  if (randomVar1 > randomVar2) {
    $("h1").html("Player 1 wins");
  } else if (randomVar2 > randomVar1) {
    $("h1").html("Player 2 wins");
  } else {
    $("h1").html("Fuck yourself it's a draw!");
  }
}
