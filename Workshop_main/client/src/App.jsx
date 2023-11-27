// Подреди импортите по значение
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/authService";
import AuthContext from "./contexts/auth";

import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";
import GameDetails from "./components/gameDetails/GameDetails";
import Path from "./paths";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginHandler = async (values) => {
    const result = await authService.login(values.email, values.password);
    setAuth(result);
    navigate(Path.Home);
  };
  const registerHandler = async (values) => {
    console.log(values);
  };
  const info = {
    loginHandler,
    registerHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email, //ако имаме юзър ще върне true
  };

  return (
    // use Auth.Provider for context
    // на value можем да подаваме ст-сти,обекти,ф-ии,хендлъри и т.н.
    <AuthContext.Provider value={info}>
      <div id="box">
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="/users/*" element={<UserPath />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:gameId/details" element={<GameDetails />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
