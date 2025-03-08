// let height = document.getElementById("height");
// let weight = document.getElementById("weight");
// let calculate = document.getElementById("btn");

// calculate.addEventListener('click',function(){
//     let x = (height.value/100)**2;
//     let y = weight.value;

//     ans = y/x;
    
//     let p = document.getElementById("ans");
//     p.innerText = "Your BMI :" + ans.toPrecision(4);

// })


let form = document.querySelector('form');
let answer = document.getElementById('answer');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // for prevent to go form data on server
    
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);

    if (height === "" || height < 0 || isNaN(height)) {
        answer.innerHTML = `<span> Please Give a valide height </span>`
    }
    else if (weight === "" || weight < 0 || isNaN(weight)) {
        answer.innerHTML = `<span> Please Give a valide weight </span>`
    }
    else{
        answer.innerHTML = `<span>${(weight / ((height*height)/10000)).toFixed(2)}</span>`
    }
    
})