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
import GameEdit from "./components/gameEdit/GameEdit";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import AuthGuardPro from "./components/guards/AuthGuardPro";

function App() {
    return (
        <ErrorBoundary>
            {/*  use Auth.Provider for context
              на value можем да подаваме
            ст-сти,обекти,ф-ии,хендлъри и т.н. */}
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
                        <Route
                            path="/create"
                            element={
                                <AuthGuard>
                                    <CreatePage />
                                </AuthGuard>
                            }
                        />
                        <Route element={<AuthGuardPro />}>
                            <Route
                                path="/edit/:gameId"
                                element={<GameEdit />}
                            />
                            <Route
                                path="/games/:gameId/delete"
                                element={<GameEdit />}
                            />
                        </Route>
                    </Routes>
                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
}

export default App;
