import { useState, useEffect } from "react";
import { TodoContext } from "./contexts/todoContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddModal from "./components/AddModal";

const URL = "http://localhost:3030/jsonstore/todos";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  // Hide/show modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const onTodoAdd = async (values) => {
    const response = await fetch(URL, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await response.json();
    setShowModal(false);
    setTodos((state) => [...state, result]);
    // console.log(result);
  };
  // show Modal
  const onTodoAddClick = () => {
    setShowModal(true);
  };
  // hide Modal
  const onTodoClose = () => {
    setShowModal(false);
  };
  const onDoneClick = async (todoId) => {
    await fetch(`${URL}/${todoId}`, { method: "delete" });
    setTodos((state) => state.filter((x) => x._id !== todoId));
  };
  // Mark task with line
  const onTodoClick = async (itemId) => {
    console.log(itemId);
    const todo = todos.find((x) => x._id === itemId);
    await fetch(`${URL}/${itemId}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...todo, isCompleted: !todo.isCompleted }),
    });
    setTodos((state) =>
      state.map((x) =>
        x._id === itemId ? { ...x, isCompleted: !x.isCompleted } : x,
      ),
    );
  };
  // Create context object with functions
  const contextValues = {
    onDoneClick,
    onTodoClick,
  };
  return (
    // use context
    <TodoContext.Provider value={contextValues}>
      <div>
        <Header />
        <TodoList
          // done={onDoneClick}   => not needed here when using context
          todos={todos}
          showHideModal={onTodoAddClick}
        />
        <AddModal
          showModal={showModal}
          onTodoAdd={onTodoAdd}
          onTodoClose={onTodoClose}
        />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
