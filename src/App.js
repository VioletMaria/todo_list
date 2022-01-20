import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
      const [newTask, setNewTask] = useState("");
      const [tasks, setTasks] = useState([]);
    
      const onSubmitHandler = (event) => {
        event.preventDefault();
        
        const addedTask = {
          text : newTask,
          isDone : false,
        }
        setTasks([...tasks, addedTask])
      }

      const onDeleteHandler = (index) => {
        const filteredTasks = tasks.filter((task, i) => i !== index)
        console.log(filteredTasks)
        setTasks(filteredTasks)
      }

      const onCheckedHandler = (i) => {
        let newObject = {...tasks[i]}
        newObject.isDone = !newObject.isDone

        setTasks([...tasks.slice(0, i), newObject].concat(tasks.slice(i+1)))
      }

      const uncheckedTask = {
        textDecoration:"none"
      }

      const checkedTask = {
        textDecoration: "line-through"
      }

      return(
          <div className="App">
              <form onSubmit={onSubmitHandler}>
                  <input onChange={(e) => {setNewTask(e.target.value)}} type="text" placeholder="add new task"/>
                  <input type="submit" value="Add"/>
              </form>
              <ul style={{listStyle:'none'}}>
                  {
                      tasks.map((str, i) => {
                        return <li key={i}><span style={str.isDone? checkedTask: uncheckedTask}>{str.text}</span>
                        <button onClick={() => onDeleteHandler(i)}>Delete</button>
                        <input type="checkbox" checked={i.isDone} onChange={() => onCheckedHandler(i)}></input>
                        </li>
                      })
                  }
              </ul>
          </div>
      );
}

export default App;
