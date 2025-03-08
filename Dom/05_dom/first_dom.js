// Event delegation

// It allows users to append a SINGLE event listner to a parent element
//  that adds it to all of its present AND future descendants that match a selector.

document.querySelector('.unordered-List').addEventListener
('click',function(e) {
    console.log(e.target.innerText + " is Clicked ");

    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
    
})

const sports = document.querySelector('.unordered-List');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute("class", 'list-item');

sports.appendChild(newSport)