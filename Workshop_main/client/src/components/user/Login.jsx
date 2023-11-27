import { useForm } from "../../Hooks/useForm";
// Можем да си направим обект за по-добър мапинг като премахен magic strings
// и заменим на name='email' със name = {LoginFormKeys.Email}
//така намаляваме шанса за грешка!
const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const Login = ({ loginHandler }) => {
  const { values, onChange, onSubmit } = useForm(loginHandler, {
    [LoginFormKeys.Email]: "",
    [LoginFormKeys.Password]: "",
  });
  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginFormKeys.Email}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
          />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <a href="/users/register">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
export default Login;
