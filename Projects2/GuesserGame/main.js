let tips = document.getElementById('tips')
let btn = document.getElementById('btn')
let number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let arr = [];
let prev = document.getElementById('prev');
let rem = document.getElementById('rem');
let num = 10;


btn.addEventListener('click',function(){
    let input = parseInt(document.getElementById('input').value);
    if (num<1) {
        tips.innerText = "GAME OVER"
    }
    else
    {
        arr.push(input);

        if (input<=0 || input>100 || isNaN(input)) {
            tips.innerText = "Please write a valid input betwwen 1 to 100."
        }
        else if (input == number) {
            tips.innerText = "You have guessed right number."
        }
        else if (input > number) {
            tips.innerText = "You have guessed Too high ."
        }
        else if (input < number) {
            tips.innerText = "You have guessed Too low."
        }
        
        prev.innerText = "Previous Guess : " + arr;
        
        num = num-1;
        rem.innerText = "Remaining Guesses : " + (num);}
})
