class TaskEntity{

   static _id=0;
   Id = 0;
   task;

   constructor(task){
      this.task = task;
      this.getId((id)=>this.Id=id);
   }

   async getId(callback){
      let tasks = [];
      tasks = await TaskDAO.allTasks();
      if(tasks.length<1 || tasks==null || tasks == undefined) callback(1);
      else callback(tasks[tasks.length-1].Id+1);
   }
}