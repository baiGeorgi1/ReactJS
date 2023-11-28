// Adv techniques HOC

import { useContext } from "react";
import AuthContext from "../contexts/auth";

// Този патерн ни позволява да "инжектираме" доп.неща към  Component
export default function withAuth(Component) {

    const EnhancedComponent = (props) => {
        const auth = useContext(AuthContext);
        return <Component {...props} {...auth} />;
    };
    return EnhancedComponent;
}