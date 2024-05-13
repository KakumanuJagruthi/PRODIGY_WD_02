let timer;
let startTime;
let running = false;
let lapCount = 1;

function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("startStop").innerHTML = "Start";
    running = false;
  } else {
    startTime = new Date().getTime();
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").innerHTML = "Stop";
    running = true;
  }
}

function updateDisplay() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;
  let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  document.getElementById("display").innerHTML =
    formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatTime(milliseconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function recordLap() {
  let time = document.getElementById("display").innerHTML;
  let lapItem = document.createElement("li");
  lapItem.innerText = "Lap " + lapCount + ": " + time;
  document.getElementById("laps").appendChild(lapItem);
  lapCount++;
}

function reset() {
  clearInterval(timer);
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
  document.getElementById("laps").innerHTML = "";
  running = false;
  lapCount = 1;
}
