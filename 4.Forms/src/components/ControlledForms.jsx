export default function ControlledForms() {
  const usernameChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Controlled Forms</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            defaultValue="userName"
            onChange={usernameChangeHandler}
          />
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
