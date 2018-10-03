var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandomColor = document.getElementById("randomButton");
var colorHex1 = '#';
var colorHex2 = '#';

function getRandomColor() {
    colorHex1 = '#';
    colorHex2 = '#'; 

    var letters = '0123456789ABCDEF';
    for (var i = 0; i < 6; i++) {
      colorHex1 += letters[Math.floor(Math.random() * 16)];
    }

    for (var i = 0; i < 6; i++) {
      colorHex2 += letters[Math.floor(Math.random() * 16)];
    }

    color1.value = colorHex1;
    color2.value = colorHex2;

    setGradient();
  }

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"; 

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonRandomColor.addEventListener("click", getRandomColor)

setGradient();