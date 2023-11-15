import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Characters from "./components/Characters";
import CharacterInfo from "./components/CharacterInfo";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navigation />
      <h1>React Router</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="characters/:id" element={<CharacterInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  );
}

export default App;
