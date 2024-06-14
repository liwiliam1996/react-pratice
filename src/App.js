import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';
import { useState } from 'react';
import { nanoid } from 'nanoid';



function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const [filter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: ()=> true,
    Active: (task) => !task.completed,
    completed: (task) => task.completed
  }

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => task.id !== id);
    setTasks(remainingTasks);
  }

  function toggleComplete(id) {

    const updateTasks = tasks.map((task) => {

      if (task.id === id) {

        return { ...task, completed: !task.completed };

      }
      return task;
    })

    console.log(updateTasks);

    setTasks(updateTasks);

  }

  function editTask(id, newName) {

    alert(id + " " + newName);

    const reNamedTasks = tasks.map((task) => {

      if (task.id === id) {

        return { ...task, name: newName };

      }
      return task;
    })

    // const reNamedTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, name: newName }
    //   }
    //   return task;
    // });
    setTasks(reNamedTasks);
  }
  const teskNon = tasks.length > 1 ? "tasks" : "task";

  const headingText = ` ${tasks.length} ${teskNon} remaining`;

  console.log(filter);
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => {
    return <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
  });

  const buttons = FILTER_NAMES.map((name) => {
    return <FilterButton key={name} name={name} pressed={filter===name ? true: false} setFilter={setFilter} />
  });


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {buttons}

      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}


export default App;
