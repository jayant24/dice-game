var randomno;
randomno = Math.floor(Math.random() * 6 + 1);
if (randomno === 1)
  document.querySelector(".img1").setAttribute("src", "dice1.png");
else if (randomno === 2)
  document.querySelector(".img1").setAttribute("src", "dice2.png");
else if (randomno === 3)
  document.querySelector(".img1").setAttribute("src", "dice3.png");
else if (randomno === 4)
  document.querySelector(".img1").setAttribute("src", "dice4.png");
else if (randomno === 5)
  document.querySelector(".img1").setAttribute("src", "dice5.png");
else
  document.querySelector(".img1").setAttribute("src", "dice6.png")

var randomno1;
randomno1 = Math.floor(Math.random() * 6 + 1);
if (randomno1 === 1)
  document.querySelector(".img2").setAttribute("src", "dice1.png");
else if (randomno1 === 2)
  document.querySelector(".img2").setAttribute("src", "dice2.png");
else if (randomno1 === 3)
  document.querySelector(".img2").setAttribute("src", "dice3.png");
else if (randomno1 === 4)
  document.querySelector(".img2").setAttribute("src", "dice4.png");
else if (randomno1 === 5)
  document.querySelector(".img2").setAttribute("src", "dice5.png");
else
  document.querySelector(".img2").setAttribute("src", "dice6.png")

if (randomno > randomno1)
  document.querySelector("h1").innerHTML = "player 1 wins!"
else {
    document.querySelector("h1").innerHTML = "player 2 wins!"
}
