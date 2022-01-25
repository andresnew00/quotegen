// roses
/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
TweenLite.set("#container", { perspective: 600 });
TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

var total = 30;
var warp = document.getElementById("container"),
  w = window.innerWidth,
  h = window.innerHeight;

for (i = 0; i < total; i++) {
  var Div = document.createElement("div");
  TweenLite.set(Div, {
    attr: { class: "dot" },
    x: R(0, w),
    y: R(-200, -150),
    z: R(-200, 200),
  });
  warp.appendChild(Div);
  animm(Div);
}

function animm(elm) {
  TweenMax.to(elm, R(6, 15), {
    y: h + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15,
  });
  TweenMax.to(elm, R(4, 8), {
    x: "+=100",
    rotationZ: R(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
  });
  TweenMax.to(elm, R(2, 8), {
    rotationX: R(0, 360),
    rotationY: R(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
  });
}

function R(min, max) {
  return min + Math.random() * (max - min);
}

// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW

// array of inspirational quotes
var quotes = [
  "The best way to predict the future is to create it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "The best way to keep a secret is to tell it to nobody.",
  "The best way to find yourself is to lose yourself in the service of others.",
];

// select element with id "quote"
var quote = document.getElementById("quote");

//  grab random quote from quotes array and display it
function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[randomNumber];
}

// button onclick display quote and play sound
document.getElementById("quoteButton").onclick = function () {
  var music = new Audio(
    "./sounds/Beautiful Japanese Music - Cherry Blossoms.mp3"
  );
  music.play();
  setTimeout(myFunction, 5000);
  newQuote();
  
};

myFunction = function () {
  var audio = new Audio("./sounds/Anime moan meme.mp3");
  audio.play();
}
