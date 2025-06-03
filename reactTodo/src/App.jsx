
import './App.css'

function App() {

 

  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todo-list-mainDiv '>
        <h3>My Todo List</h3>
        <div>
          <input type='text' name='todo-item-input' placeholder='Enter Your Todo Task'/>
          <buttom className="btn btn-danger btn-sm">+</buttom>
          <ul>
            <li>
              
            </li>
          </ul>
        </div>


      </div>
    </div>
  )
}

export default App
