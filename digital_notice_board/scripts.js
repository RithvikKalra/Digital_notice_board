// Pomodoro Timer functionality
let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(countdown, 1000);
  }
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  isRunning = false;
  updateDisplay();
});

function countdown() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(timer);
      isRunning = false;
      alert('Pomodoro session completed!');
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Poll functionality
document.getElementById('poll-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const selectedOption = formData.get('poll');
  document.getElementById('poll-result').textContent = `You selected: ${selectedOption}`;
});
