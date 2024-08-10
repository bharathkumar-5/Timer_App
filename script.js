let timerInterval;
let seconds = 0;
let isRunning = false;
function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timer').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
        isRunning = true;
    }
}
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}
function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateDisplay();
    isRunning = false;
}
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
updateDisplay();
