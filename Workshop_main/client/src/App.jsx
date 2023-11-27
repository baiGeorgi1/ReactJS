import { Routes, Route } from "react-router-dom";
import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";
import GameDetails from "./components/gameDetails/GameDetails";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState({});

  const loginHandler = (values) => {
    console.log(values);
  };

  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users/*"
          element={<UserPath loginHandler={loginHandler} />}
        />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:gameId/details" element={<GameDetails />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
