const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray' , perimeter);
let totalDuration = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(duration) {
        totalDuration = duration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / totalDuration - perimeter);
    },
    onComplete() {
        console.log("completed");
    }
});