export default function TodoItem({
  id,
  text,
  isCompleted,
  changeStatusHandler,
}) {
  function changeStatusFunc() {
    changeStatusHandler(id);
  }

  return (
    // use ternar to change the status

    <tr className={`todo${isCompleted ? " is-completed" : ""}`}>
      <td>{text}</td>
      <td>{isCompleted ? "Complete" : "Incomplete"}</td>
      <td className="todo-action">
        <button onClick={changeStatusFunc} className="btn todo-btn">
          Change status
        </button>
      </td>
    </tr>
  );
}
