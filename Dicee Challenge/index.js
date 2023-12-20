randomNumber1=Math.floor(Math.random()*6+1);
randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber1)
console.log(randomNumber2)
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "<em>Player 1 wins</em>"
}
else if (randomNumber2>randomNumber1)
{
        document.querySelector("h1").innerHTML = "<em>Player 2 wins</em>";

}
else
{
        document.querySelector("h1").innerHTML = "<em>DRAW</em>";
    
}