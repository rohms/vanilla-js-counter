const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");
const calculator = document.querySelector("#calculator");
const countDisplay = document.querySelector("#count");
const resetBtn = document.querySelector("#reset");
const info = document.querySelector("#info");

let count = 0;

function myCalculator() {
  increaseBtn.addEventListener("click", increase);
  decreaseBtn.addEventListener("click", decrease);
  resetBtn.addEventListener("click", resetting);
  countDisplay.textContent = count;
}

function increase() {
  count++;
  countDisplay.textContent = count;
  info.textContent = "";
}

function decrease() {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  } else {
    info.textContent = "Can't go below zero!";
    info.style.color = "red";
    return;
  }
}

function resetting() {
  if (count === 0) {
    info.textContent = "Already zero!";
    info.style.color = "blue";
  } else {
    count = 0;
    countDisplay.textContent = count;
    return;
  }
}

myCalculator();
