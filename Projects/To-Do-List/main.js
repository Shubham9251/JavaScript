// variables

let addTask = document.getElementById('add-task');

let taskContainer = document.getElementById('task-container');

let input = document.getElementById('input-task');


//  Event Listener for add button

addTask.addEventListener('click', function () {
    
    console.log("m chal raha hu");
    
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${input.value}`;

    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if (input.value === "") {
        alert("Please Enter a Task");
    }
    else{
        taskContainer.appendChild(task);
    }

    input.value = "";

    checkBtn.addEventListener('click', function () {
        
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click', function (e) {
        
        let target = e.target;

        target.parentElement.parentElement.remove();
    });
})




















// addTask.addEventListener('click', function() {
    
//     addingNewTask();
// })


// function addingNewTask() {
    
    
//     let p = document.createElement('p');
//     // let i = document.createElement('i').setAttribute('id','delete')
    
//     // p.innerText = input;
//     p.innerHTML =input + `<i class="fa-solid fa-trash", id="delete"></i>`;


//     taskContainer.appendChild(p);
    

// }