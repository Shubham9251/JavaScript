
//  simple method...
// let accordion = document.getElementsByClassName('accordion-content');

// for (let i= 0; i < accordion.length; i++) {
    
//     accordion[i].addEventListener('click', function(){
    //         this.classList.toggle('active');
        
//     })
    

// };




//  extra feature 

let accordion = document.querySelectorAll('.accordion-content');

accordion.forEach((item,index) => {
    
    item.addEventListener('click', function(){
        this.classList.toggle('active');

        // for remve active class on other items...
        removeOpenedContent(index);
        
    })
    
});

function removeOpenedContent(index){
    
    accordion.forEach((item2,index2)=>{

        if(index != index2){

            item2.classList.remove("active");
        }
    })
}
