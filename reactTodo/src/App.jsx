import { useState } from 'react'
import './App.css'
import TaskItem from './Components/TaskItem'

function App() {

  const[newTask,setNewTask]=useState("");
  const[myTask,setMyTask]=useState([])

  function handleInput(e){
    let NewValue=e.target.value;
    setNewTask(NewValue)
    
  }

  function addTask() {
  if (newTask.trim() === "") {
    alert("Please enter a task before submitting.");
    return;
  }
  setMyTask(prev => [...prev, newTask]);
  setNewTask("");
}


  function deleteTask(taskName){
    let afterDeletionTask=myTask.filter(x=>x!=taskName)
    console.log(taskName)
    setMyTask(afterDeletionTask)
  }
 

  return (
    <div className='main-body d-flex justify-content-center align-items-center container'>
      <div className='todo-list-mainDiv'>
        <h3 className='heading'>My Todo List</h3>
          <div className='todo-task-input-div'>
            <div class="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="Todo task" onChange={(e)=>{
                handleInput(e)

              }} value={newTask}/>
              <label htmlFor="floatingInput">Todo Task</label>
            </div>
            <buttom className="btn btn-primary" id='add-button' onClick={()=>{
              addTask()
            }}>Submit</buttom>
          </div>
          
          
          <ul className='task-list'>
            {
              myTask.map((task,index)=>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask}/>

              )
            }
            
           
          </ul>
      </div>
    </div>
  )
}

export default App
