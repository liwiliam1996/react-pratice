import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Form from './components/form';
import FilterButton from './components/FilterButton';



function App(props) {
  console.log(props);

  const taskList = props.tasks.map((task) => {
     return <Todo id= {task.id} name= {task.name} completed = {task.completed} key = {task.id} />
  });

  const buttons = props.buttons.map((button) => {
    return <FilterButton id= {button.id} name= {button.name} completed = {button.pressed} key = {button.id} />
 });


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      <div className="filters btn-group stack-exception">
      {buttons}
       
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        { taskList}
      </ul>
    </div>
  );
}


export default App;
