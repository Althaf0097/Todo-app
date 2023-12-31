function TodoItem({todoName, todoDate}) {
  return(
  <div className="container">
    <div className="row kg-row">
      <div className="col-6 item-all">{todoName}</div>
      <div className="col-4 item-all">{todoDate}</div>
      <div className="col-2 item-all">
        <button type="button" className="btn btn-danger kg-button">Delete</button>
      </div>
    </div>
  </div>
  );  
}

export default TodoItem;
