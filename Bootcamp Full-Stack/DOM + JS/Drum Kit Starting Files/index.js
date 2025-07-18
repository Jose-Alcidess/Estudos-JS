var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll('.drum')[i].addEventListener("click", handleClick);
}

var audio = new Audio('sounds/tom-1.mp3');

function handleClick() {
  audio.play();
}