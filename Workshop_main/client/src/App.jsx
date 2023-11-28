// Подреди импортите по значение
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/authService";
import AuthContext, { AuthProvider } from "./contexts/auth";

import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";
import GameDetails from "./components/gameDetails/GameDetails";
import Path from "./paths";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");
    return {};
  });

  const loginHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerHandler = async (values) => {
    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };
  const logoutHandler = () => {
    setAuth({});
    navigate(Path.Home);
    localStorage.removeItem("accessToken");
  };

  const info = {
    loginHandler,
    registerHandler,
    logoutHandler,
    username: auth.email,
    email: auth.email,
    isAuthenticated: !!auth.accessToken, //ако имаме юзър ще върне true
  };

  return (
    // use Auth.Provider for context
    // на value можем да подаваме ст-сти,обекти,ф-ии,хендлъри и т.н.
    <AuthProvider value={info}>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="/users/*" element={<UserPath />} />
          <Route path="/catalog" element={<CatalogPage />} />
          {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/catalog/:gameId/details" element={<GameDetails />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
