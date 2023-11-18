import { ListGroup, Button } from "react-bootstrap";
import { useContext } from "react"; // for context use
import { TodoContext } from "../contexts/todoContext";

const TodoItem = ({ _id, text, isCompleted }) => {
  //done =>we use context
  const { onDoneClick, onTodoClick } = useContext(TodoContext); // use context
  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
      onClick={() => onTodoClick(_id)}
    >
      <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {text}
      </p>
      <Button variant="success" onClick={() => onDoneClick(_id)}>
        Done
      </Button>
    </ListGroup.Item>
  );
};
export default TodoItem;
