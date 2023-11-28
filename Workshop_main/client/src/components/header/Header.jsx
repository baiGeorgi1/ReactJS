/** @format */

import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";

const Header = () => {
    const { isAuthenticated, username, email } = useContext(AuthContext);
    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/catalog">All games</Link>
                {/* <!-- Logged-in users --> */}
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/create">Create Game</Link>
                        <Link to="/users/logout">Logout</Link>
                        <span>| Hi,{email}</span>
                    </div>
                )}

                {/* <!-- Guest users --> */}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/users/login">Login</Link>
                        <Link to="/users/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
};
export default Header;
