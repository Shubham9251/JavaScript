// Variables for buttons
let timer = document.getElementById('timer');
let startStopBtn = document.querySelector('#startbtn');
let resetBtn = document.querySelector('#resetbtn');

// Variable for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval & timerstatus

let timerInterval = null;
let timerStatus = "stopped";

//Stop Watch Function

function stopWatch(){

    seconds++

    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes/60 ===1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }
    else{
    leadingSeconds = seconds;
    }
    
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    }
    else{
    leadingMinutes = minutes;
    }
    
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    }
    else{
    leadinghours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// window.setInterval(stopWatch, 1000)

startStopBtn.addEventListener("click", function(){

    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch,1000);
        document.getElementById("startbtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startbtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener('click',function(){
    
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById("startbtn").innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
})