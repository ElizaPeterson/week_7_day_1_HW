import './App.css';
import React, {useState} from 'react';

function App() {

  const newPriority = (event) => {
    setNewTaskPriority(event.target.value)
  }

  const [tasks, setTasks] = useState([
    {name: "Feed Cats", priority: "High"},
    {name: "CodeClan PDA", priority: "Low"},
    {name: "Paint Office", priority: "High"}
  ]);

  const taskNodes = tasks.map((task, index) => {
    return (
      <li className="list" key={index}><span>{task.name}</span>
      <span>Priority: {task.priority==="High" ? <span className="high-priority"> {task.priority} </span>  : <span className="low-priority">{task.priority}</span>}</span>
      </li>
    );
  });

  const [newTask, setNewTask] = useState("");

  const [newTaskPriority, setNewTaskPriority] = useState("");

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, priority: newTaskPriority})
    setTasks(copyTasks)
    setNewTask('')
  }



  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>

    <ul className="task-list">
      {taskNodes}
    </ul>

    <form onSubmit={saveNewTask}>
      <label htmlFor="new-task">Add a new task:</label>
      <input className="new-task" type= "text" value={newTask} onChange={handleTaskInput}/>
      <input className="priority" type="radio" value="High" name="priority" onChange={newPriority}/> High Priority
      <input className="priority" type="radio" value="Low" name="priority" onChange={newPriority}/> Low Priority
      <input type="submit" value="Save New Task"/>
    </form>

    </div>
  );
}

export default App;
