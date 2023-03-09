const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const taskInput = document.querySelector('#task');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');


function LoadTasks(){
    //add task
    form.addEventListener('submit',addTask); 
    //remove task
    tasklist.addEventListener('click',removeTask);

    clearBtn.addEventListener('click',clearTask);

    filter.addEventListener('keyup',filterTask);
}
LoadTasks();

//add task
function addTask(e){
    if(taskInput.value === ''){
        alert("data is empty");
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-trash"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);
// blank input
    taskInput.value = ' ';
    
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('are you sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTask(e){
    tasklist.innerHTML = ' ';
    e.preventDefault();
}

function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}