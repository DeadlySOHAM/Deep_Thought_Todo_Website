const task_1 = new TaskEntity("checking");
const task_2 = new TaskEntity("checking");


const TaskContainer = document.getElementById("task_container");
const TaskInput = document.getElementById("task_input");

window.onload = updateTasks();

function addTask(){
   let taskObj = new TaskEntity(TaskInput.value);
   TaskDAO.add(taskObj).then((response)=>{
      if(response){
         TaskInput.value="";
         TaskContainer.insertAdjacentHTML('beforeend',getTaskView(taskObj));
   }});
}


function updateTasks(){
   TaskContainer.innerHTML = "";
   TaskDAO.allTasks().then((data)=>{
      data.forEach(element => {
         TaskContainer.insertAdjacentHTML('beforeend',getTaskView(element));
      });
   });
}

function deleteTask(id){
   TaskDAO.deleteById(id).then(response=>{
      updateTasks();
   });
}

function getTaskView(element){
   return `\
   <div class="task">\
      <button class="floatingActionButton remove_task_button" onclick=\"deleteTask(${element.Id})\">x</button>\
      <section class="task_text">${element.task}</section>\
   </div>`;
}