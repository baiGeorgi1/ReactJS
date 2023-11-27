import { useContext } from "react";
import AuthContext from "../../contexts/auth";
import { useForm } from "../../Hooks/useForm";

const registerKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

const Register = () => {
  const { registerHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerHandler, {
    [registerKeys.Email]: "",
    [registerKeys.Password]: "",
    [registerKeys.ConfirmPassword]: "",
  });

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={onSubmit}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
            onChange={onChange}
            value={values[registerKeys.Email]}
          />

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="password"
            id="register-password"
            onChange={onChange}
            value={values[registerKeys.Password]}
          />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            onChange={onChange}
            value={values[registerKeys.ConfirmPassword]}
          />

          <input className="btn submit" type="submit" value="Register" />

          <p className="field">
            <span>
              If you already have profile click <a href="/users/login">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};
export default Register;
