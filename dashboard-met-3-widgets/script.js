let timerInterval;
let time = 0;
let milliseconds = 0;
let isRunning = false;

const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const timeDisplay = document.getElementById('time');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');

function updateTime() {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    const ms = String(milliseconds).padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}:${ms}`;
}

startStopButton.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
    } else {
        timerInterval = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                time++;
            }
            updateTime();
        }, 10);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetButton.addEventListener('click', function() {
    clearInterval(timerInterval);
    time = 0;
    milliseconds = 0;
    updateTime();
    startStopButton.textContent = 'Start';
    isRunning = false;
});

slider.addEventListener('input', function() {
    sliderValue.textContent = `Waarde: ${slider.value}`;
    document.body.style.fontSize = `${1 + slider.value / 100}rem`;
});


const contentDiv = document.getElementById('content');
const loadContentButton = document.getElementById('loadingcontent');

const images = [
    'auto1.jpeg',
    'images (1).jpeg',
    'images (2).jpeg',
    'images (3).jpeg',
    'images.jpeg'
];

let currentIndex = 0;

loadContentButton.style.backgroundColor = 'blue';
loadContentButton.style.color = 'white';
loadContentButton.style.padding = '1rem 2rem';
loadContentButton.style.border = 'none';
loadContentButton.style.borderRadius = '12px';
loadContentButton.style.cursor = 'pointer';
loadContentButton.style.fontSize = '1.5rem';
loadContentButton.style.transition = 'background-color 0.3s';

loadContentButton.addEventListener('mouseover', function() {
    loadContentButton.style.backgroundColor = '#0056b3';
});

loadContentButton.addEventListener('mouseout', function() {
    loadContentButton.style.backgroundColor = 'blue';
});

loadContentButton.addEventListener('click', function() {
    contentDiv.innerHTML = `<img src="${images[currentIndex]}" alt="Dynamische afbeelding" style="width:100%; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">`;
    currentIndex = (currentIndex + 1) % images.length;
});