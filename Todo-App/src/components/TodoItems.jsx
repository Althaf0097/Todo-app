import TodoItem from "./Todoitem";

const TodoItems = ({ TodoItems })=>{
  return (
    <div className="items-container">
      <TodoItem todoDate="4/10/2023" todoName="Buy Milk"></TodoItem>
      <TodoItem todoDate="4/10/2023" todoName="Go to College"></TodoItem>
    </div>
  );
};

export default TodoItems;
