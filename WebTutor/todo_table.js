const taskList = document.getElementsByClassName("form_task")[0];
const taskInput = document.getElementsByClassName("form_to_create")[0];
const template = document.getElementById("template");
let taskArray = [];
id = 0;
getFromStorage();

taskInput.addEventListener("submit", function (e){
    e.preventDefault();
    const formData = new FormData(taskInput);
    let task = formData.get("task");
    if (task !== "") {
        const task = {
            task: formData.get("task"),
            isChecked: false,
            id: Date.now().toString()+ id,
        };
        id++;
        taskArray.push(task);
        taskInput.reset();
        setTaskInStorages(taskArray);
    }
});

function setTaskInStorages(taskArray){
    localStorage.setItem('listTodo', JSON.stringify(taskArray));
    displayTaskList(taskArray);
}

function getFromStorage(){
    const ref = localStorage.getItem('listTodo');
    if (ref){
        taskArray = JSON.parse(ref);
        displayTaskList(taskArray);
    }
}

function clearStorage(){
    localStorage.removeItem('listTodo');
    taskArray.splice(0, taskArray.length);
    displayTaskList(taskArray);
}

function displayTaskList(taskArray){
    console.log(taskArray);
    taskList.innerHTML = '';
    taskArray.forEach(function (task) {
        const clone = template.content.cloneNode(true);
        const item = clone.querySelector(".list_item");
        const isChecked = task.isChecked ? "checked" : null;
        item.setAttribute('id', task.id);
        clone.querySelector('input').setAttribute(isChecked, isChecked);
        item.querySelector('span').textContent = task.task;
        taskList.append(clone);
    })
}

function deleteTask(id){
    taskArray = taskArray.filter(function (task) {
        return task.id !== id;
    });
    setTaskInStorages(taskArray);
}

function CheckItem(id){
    console.log(taskArray);
    for (let i = 0; i < taskArray.length; i++){
        if (taskArray[i].id == id){
            taskArray[i].isChecked = !taskArray[i].isChecked;
            console.log(taskArray[i]);
        }
    }
    setTaskInStorages(taskArray);
}

function smartCheckItem(id){
    let arr = []
    for (let i = 0; i < taskArray.length; i++){
        if (taskArray[i].id == id){
            if (taskArray[i].isChecked == false){
                arr = taskArray.slice();
                arr[i].isChecked = true;
                let tmp = arr[i];
                arr[i] = arr[taskArray.length - 1];
                arr[taskArray.length - 1] = tmp;
            }
            else{
                arr = taskArray.slice();
                arr[i].isChecked = false;
                let tmp = arr[i];
                arr[i] = arr[0];
                arr[0] = tmp;
            }
            console.log(taskArray[i]);
        }
    }
    taskArray = arr.slice();
    setTaskInStorages(taskArray);
}

taskList.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains("delete_button");
    const isCheckBox = event.target.classList.contains("checkbox");
    if (isButton){
        deleteTask(event.target.parentElement.id);
    }
    if(isCheckBox){
        smartCheckItem(event.target.parentElement.id)
    }
})