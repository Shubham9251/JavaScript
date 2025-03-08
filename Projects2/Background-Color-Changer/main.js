let bg = document.querySelector('.background');
// let red = document.querySelector('.red');
// let greenyellow = document.querySelector('.greenyellow');
// let orange = document.querySelector('.orange');
// let purple = document.querySelector('.purple');

let butns = document.querySelectorAll('.btn');



bg.addEventListener('click',function(){

    bg.style.background = 'white';

    butns.forEach( (button) => {
    
        button.style.background = e.target.id;
        button.style.color = '';
    });
    
    
})

butns.forEach( (button) => {

    button.addEventListener('click', function (e) {
        
        bg.style.backgroundColor = e.target.id;

        e.target.style.background = e.target.id;
        e.target.style.color = 'white';
    })
});


//or


// red.addEventListener('click',function(){

//     bg.style.background = 'red';
    
//     red.style.background = 'red';
//     red.style.color = 'white';

    
// })

// greenyellow.addEventListener('click',function(){

//     bg.style.background = "greenyellow";
//     greenyellow.style.background = 'greenyellow';
//     greenyellow.style.color = 'white';
    
// })

// orange.addEventListener('click',function(){

//     bg.style.background = "orange";
//     orange.style.background = 'orange';
//     orange.style.color = 'white';
    
// })

// purple.addEventListener('click',function(){

//     bg.style.background = "purple";
//     purple.style.background = 'purple';
//     purple.style.color = 'white';
    
// })