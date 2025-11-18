let totalSeconds = 10;

const timerDisplay = document.getElementById("timerDisplay");
timerDisplay.innerHTML = totalSeconds;

//when press the button to start> run the timer
const startBtn = document.getElementById('startBtn'); //add or call the button into the JS
startBtn.addEventListener('click', timeDown);

function timeDown () {
    setInterval(() => {
        --totalSeconds;
        console.log(totalSeconds);
        timerDisplay.innerText = totalSeconds;
        if (totalSeconds <= 0) {
            clearInterval(timeDown);
    }
    }, 1000);

}


