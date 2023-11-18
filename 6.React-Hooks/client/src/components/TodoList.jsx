import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem ";
import Button from "react-bootstrap/Button";

const TodoList = ({ todos, showHideModal }) => {
  //done Не се подава,защото има контекст
  return (
    <div style={{ width: "30%", margin: "10px auto" }}>
      <h2>ToDo List</h2>
      <ListGroup style={{ marginBottom: "10px" }}>
        {todos.map((x) => (
          <TodoItem key={x._id} {...x} /> //done={done} Не се подава,защото има контекст
        ))}
      </ListGroup>
      <Button variant="primary" onClick={showHideModal}>
        Add
      </Button>{" "}
    </div>
  );
};
export default TodoList;
