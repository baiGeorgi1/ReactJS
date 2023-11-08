import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  // fentch from server
  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/todos")
      .then((response) => response.json())
      .then((data) => {
        const items = Object.values(data);
        setTodos(items);
      })
      .catch((err) => console.log(err));
  }, []);
  // Понеже НЕ можем да сменяме 'props', трява да си направим хендлър,който да може да го вмъкнем през пропс
  const changeStatusHandler = (todoId) => {
    setTodos((state) =>
      state.map((todo) =>
        todo._id === todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      ),
    );
  };

  return (
    <section className="todo-list-container">
      <h1>Todo List</h1>

      <div className="add-btn-container">
        <button className="btn">+ Add new Todo</button>
      </div>

      <div className="table-wrapper">
        {/* <!-- Loading spinner - show the load spinner when fetching the data from the server--> */}

        {/* <Loading /> => uncomment when fetch */}

        <table className="table">
          <thead>
            <tr>
              <th className="table-header-task">Task</th>
              <th className="table-header-status">Status</th>
              <th className="table-header-action">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                id={todo._id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                changeStatusHandler={changeStatusHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
