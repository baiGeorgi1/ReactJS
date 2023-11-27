import { Routes, Route } from "react-router-dom";
import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";
import GameDetails from "./components/gameDetails/GameDetails";
import { useState } from "react";
import AuthContext from "./contexts/auth";
import Login from "./components/user/Login";

function App() {
  const [auth, setAuth] = useState({});

  const loginHandler = (values) => {
    console.log(values);
  };

  return (
    // use Auth.Provider for context
    // на value можем да подаваме ст-сти,обекти,ф-ии,хендлъри и т.н.
    <AuthContext.Provider value={{ loginHandler }}>
      <div id="box">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
