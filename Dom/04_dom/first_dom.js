// Event Probagation

// 3 Phases
    // 1. Event Capturing   => Document -> HTML -> BODY -> DIV -> BUTTON
    // 2. Target            => BUTTON
    // 3. Event Bubbling    => BUTTON -> DIV -> BODY -> HTML -> DOCUMENT

    // e.stopPropagation --> to prevent event bubbling or capturing


window.addEventListener("click",function(){
    console.log('Window');
},false);


document.addEventListener("click",function(){
    console.log('Document');
},false);

document.querySelector(".div_2").addEventListener ("click",function() {
    console.log('DIV 2');
},false);


document.querySelector(".div_1").addEventListener
("click",function() {
    console.log('DIV 1');
},false);


document.querySelector("button").addEventListener
("click",function(e) {
        console.log(e.target.innerText = 'clicked');
},false);