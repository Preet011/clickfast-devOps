let count = 0;
let timeLeft = 5;
let timerInterval;

const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const timer = document.getElementById("timer");


function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timer.textContent = `Time left: ${timeLeft} secondes`;
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      timer.textContent = "Time!";
      incrementBtn.disabled = true;
    }
  }, 1000);
}

incrementBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

function init() {
  incrementBtn.disabled = false;
  timeLeft = 5;
  count = 0;
  counter.textContent = count;
  startTimer();
}


window.onload = init;