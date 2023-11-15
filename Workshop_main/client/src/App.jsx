import { Routes, Route } from "react-router-dom";
import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<UserPath />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;