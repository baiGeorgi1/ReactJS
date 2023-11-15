import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;
