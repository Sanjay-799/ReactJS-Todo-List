
import './App.css'

function App() {

 

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-mainDiv '>
        <h3>My Todo List</h3>
        <div>
          <div className='todo-task-input-div'>
            <div class="form-floating w-75">
              <input type="text" className="form-control" id="floatingInput" placeholder="Todo task" />
              <label htmlFor="floatingInput">Todo Task</label>
            </div>
            <buttom className="btn btn-primary" id='add-button'>+</buttom>
          </div>
          
          
          <ul className='task-list'>
            <li className='task d-flex justify-content-between'>Writing Notes
              <div className='task-buttons w-25'>
                <button className='btn btn-sm btn-success'>Edit</button>
                <button className='btn btn-sm btn-danger'>Delete</button>
              </div>
            </li>
            <li>Reading Book</li>
            <li>Attending Event</li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default App
