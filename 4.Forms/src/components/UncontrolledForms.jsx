export default function UncontrolledForm() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);

    const formData = new FormData(e.currentTarget);
  };
  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
}
