import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/auth";

export default function AuthGuardPro(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/users/login" />;
    }

    return <Outlet />;
}
