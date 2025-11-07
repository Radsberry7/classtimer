//Find a way to input the time. For now, let's just use 1 minute, which is 6,000 miliseconds

//let inputTime = 61000;
//let timeRemaining = inputTime;
let timeRemaining = 62500; 
let totalSeconds = Math.floor(timeRemaining/1000) //converting the miliseconds into seconds.
let countDownInterval;
let timer = document.getElementById('timer');
let intervalTime = setInterval(1000); //calls updateTimer every second.

//when press the button to start> run the timer
const startBtn = document.getElementById('startBtn');

startBtn.addEventListener('click', startTimer);
    //console.log("Button was clicked!");

//Code for when the timer starts
function startTimer() {
    //display the time from timeRemaining
    let minutes = Math.floor(timeRemaining/60);
    let seconds = Math.floor((timeRemaining/60));
    timer.textContent = `${minutes}:${seconds}`
    //start updateTimer
    //code for the timer to go down
    function updateTimer () {
        inputTime -= 1000;
        if (seconds <10){
            seconds = seconds.toString().padStart(2,'0');
        }
        timer.textContent = `${minutes}:${seconds}`;
        //when the timer is 0, clear the interval i.e stop
        if (timeRemaining <=0){
            clearInterval(intervalTime);
            timer.textContent= "00:00"
        }
    }
}

// Code for displaying stuff on the timer

function displayTime(){
    timer.innerText = inputTime;
}
