import AppName from "./components/AppName";
import TodoItem2 from "./components/TodoItem2 copy";
import TodoItem1 from "./components/Todoitem1";
import AddTodo from "./components/addTodo";
import "./App.css";

function App() {

  return (
  <center
    className='todo-container'>
    <AppName />
    <AddTodo />
    <div className="items-container">
      <TodoItem1 />
      <TodoItem2 />
    </div>
  </center>
  );
}

export default App
