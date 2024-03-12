var body = document.getElementById("bd");
var allSection = document.getElementsByClassName("sect");
var firstParagraph = document.querySelector('p');
var allParagraphs = document.querySelectorAll(`p`);
var buttonOne = document.getElementById("bgbtn");
// DOM: Document Object Model

function changeBackground() {
    body.style.backgroundColor = "gray";
}

buttonOne.addEventListener("click", changeBackground);

function changeTextColor() {
    var colors = ["blue", "green", "yellow", "brown", "white", "cyan", "tomato", "gray"]
    var length = colors.length;

    var colorPosition = Math.floor(Math.random() * length);
    var newColor = colors[colorPosition];

    firstParagraph.style.color = newColor;
}