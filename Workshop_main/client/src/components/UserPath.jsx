import { Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";

const UserPath = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" />
    </Routes>
  );
};
export default UserPath;
