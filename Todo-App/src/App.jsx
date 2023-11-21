import AppName from "./components/AppName";
import AddTodo from "./components/addTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate:'4/10/2023'
    },
    {
      name: 'Go to college',
      dueDate:'4/10/2023'
    },
    {
      name: 'This is react app',
      dueDate:'TodoApp'
    }
  ];

  return (
  <center
    className='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems}></TodoItems>
    
  </center>
  );
}

export default App
