import { Routes, Route } from "react-router-dom";
import Login from "./user/Login";
import Register from "./user/Register";
import Path from "../paths";
import Logout from "./user/Logout";

const UserPath = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="logout" element={<Logout />} />
    </Routes>
  );
};
export default UserPath;
