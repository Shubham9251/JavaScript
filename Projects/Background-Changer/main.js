// variables

let bg = document.getElementById('background').style;
let next = document.getElementById('forward');
let back = document.getElementById('backward');

window.onload = function start() {
    slideForward();
    slideBackward();
}

function slideForward() {
    var num = 1, style = document.getElementById('background').style;
    next.addEventListener('click', function () {
        // increase by num 1, reset to 0
        if (num >= 6) {
            num = 1;
        }
        else{
            num = (num+1) % 7;
        }
        console.log(num);
        style.backgroundImage = "url('imgs/bg_" + num + ".jpg')";
    });

    back.addEventListener('click', function () {
        // decrease by num 1, reset to 0

        if (num <= 1) {
            num = 6;
        }
        else{
            num = (num-1) % 7;
        }
        console.log(num);
        style.backgroundImage = "url('imgs/bg_" + num + ".jpg')";
    });
}
