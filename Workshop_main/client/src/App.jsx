// Подреди импортите по значение
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/auth";

import CatalogPage from "./components/catalogPage/CatalogPage";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import CreatePage from "./components/gameCreate/CreatePage";
import UserPath from "./components/UserPath";
import GameDetails from "./components/gameDetails/GameDetails";
import Path from "./paths";

function App() {
    return (
        // use Auth.Provider for context
        // на value можем да подаваме ст-сти,обекти,ф-ии,хендлъри и т.н.
        <AuthProvider>
            <div id="box">
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path="/users/*" element={<UserPath />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    {/* <Route path="/logout" element={<Logout />} /> */}
                    <Route
                        path="/catalog/:gameId/details"
                        element={<GameDetails />}
                    />
                    <Route path="/create" element={<CreatePage />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

export default App;
