import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);

  const addTask = () => {
    setTodoList([...todoList, {task: currentTask,completed:false}]);
    inputTask.current.value = "";
  }

  const deletTask = (taskToDelete) => { 
    setTodoList(
      todoList.filter((task) => {
        return task.task !== taskToDelete;
  })
)
  }

  const completedTask = (taskToComplete) => {
    setTodoList(todoList.map((task) => {
      return task.task === taskToComplete ?
        { task: taskToComplete, completed: true } :
        { task: task.task, completed: task.completed ? true : false }  
    }))
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className='add-list'>
        <h1>Make A List</h1>
      <div className='in-bt'>
        <input ref={inputTask} type="text" placeholder='Task..'
          onChange={(event) => {
            setCurrentTask(event.target.value)
          }} />
        <button className='task-btn' onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="tasks">
      <ul>
        {todoList.map((val, key) => {
          return(
          <div>
              <li key={key}>{val.task}</li>
              <button onClick={() => completedTask(val.task)}>Completed</button>
              <button onClick={() => deletTask(val.task)}>Delete</button>
              {val.completed ? (<h1>Task Completed</h1> ):(<h1>Task Not Completed</h1>)}
          </div>
        );})}
      </ul>
      </div>
    </div>
  );
}

export default App;
