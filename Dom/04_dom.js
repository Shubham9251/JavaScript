// Event Listeners

// element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love java!!')
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover event

const newBackgroundColor = document.querySelector('.box-3');

function changeColor() {
    newBackgroundColor.style.backgroundColor = 'red'
}

newBackgroundColor.addEventListener("mouseover", changeColor)


const buttonThree = document.querySelector('.btn-3');
function changeColor2() {
    newBackgroundColor.style.backgroundColor = 'transparent'
}

buttonThree.addEventListener("click", changeColor2)