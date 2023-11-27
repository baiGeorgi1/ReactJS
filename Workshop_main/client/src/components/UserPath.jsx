import { Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";

const UserPath = ({ loginHandler }) => {
  return (
    <Routes>
      <Route path="login" element={<Login loginHandler={loginHandler} />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" />
    </Routes>
  );
};
export default UserPath;
