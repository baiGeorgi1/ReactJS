import { useNavigate } from "react-router-dom";

const withNavigate = (Component) => {
    const Template = (props) => {
        const navigate = useNavigate();

        return <Component {...props} navigate={navigate} />;
    };
    return Template;
};
export default withNavigate;
