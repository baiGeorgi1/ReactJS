import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import { createContext } from "react";
import Path from "../paths";
import usePersistedState from "../Hooks/usePersistedStade";

const AuthContext = createContext();

// Advanced techniques

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    // Advanced techniques
    const [auth, setAuth] = usePersistedState("auth", {});

    const loginHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem("accessToken", result.accessToken);
        navigate(Path.Home);
    };

    const registerHandler = async (values) => {
        const result = await authService.register(
            values.email,
            values.password,
        );
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
    return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthContext;
