class TaskDAO{
   
   _storageKey = "com.soham.todo.deepThought";

   static async add(task){
      if(task instanceof TaskEntity){
         let tasks = await TaskDAO.allTasks();
         tasks.push(task);
         localStorage.setItem(this._storageKey, JSON.stringify(tasks));
         return true;
      }
      return false;
   }

   static async deleteById(id){
      let tasks = await TaskDAO.allTasks();
      for(let i=0;i<tasks.length;i++){
         if(tasks[i].Id==id){
            tasks.splice(i,1);
            localStorage.setItem(this._storageKey,JSON.stringify(tasks));
            return true;
         }
      }
      return false;
   }

   static async allTasks(){
      let tasks = localStorage.getItem(this._storageKey);
      return tasks == null ? [] : JSON.parse(tasks);
   }

   static deleteAllTasks(){
      localStorage.clear();
   }
}