import { useState } from 'react';
// import Counter from "./Counter";
// import Person from "./Person";
// import Modal from './Modal';
// import Item from './Item';
import Task from './Task';
import Forms from './Forms';
import './App.css';

function App() {
  let [tasks, setTasks] = useState([
    {
      text: "Выучить JavaScript",
      done: false
    },
    {
      text: "Познакомиться с React",
      done: false
    },
    {
      text: "Устроиться на работу",
      done: false
    }
  ]);

  let addTask = text => {
    let newTask = [...tasks, {text}];
    setTasks(newTask);
  }

  let doneTask = index => {
    let newTask = [...tasks];
    newTask[index].done = true;
    setTasks(newTask);
  }

  let deleteTask = index => {
    let newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  }

   console.log(tasks);

  return (
    <div className="App">
      <div className="task-list">
        {
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              index={index}
              doneTask={doneTask}
              deleteTask={deleteTask}
            />
          ))
        }
        <Forms addTask={addTask} />
      </div>
      {/* <Modal />
      <Item />
      <Counter />
      <Person /> */}
    </div>
  );
}

export default App;
