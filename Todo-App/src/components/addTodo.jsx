function AddTodo() {
  return (
  <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6 item-all">
        <input type="text" placeholder="Ener Todo Here" />
      </div>
      <div className="col-4 item-all">
        <input type="date" />
      </div>
      <div className="col-2 item-all">
        <button type="button" className="btn btn-success kg-button">Add</button>
      </div>
    </div>
  </div>    
);
}
export default AddTodo;