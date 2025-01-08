import { FC, ReactNode } from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    icon?: ReactNode;
    text: string;
    link_path: string;
}

const Button: FC<ButtonProps> = ({ icon, text, link_path }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(link_path);
    }

    return (
        <button className="button" onClick={handleClick}>
            {icon && <span className="button-icon">{icon}</span>}
            <span>{text}</span>
        </button>
    );
};

export default Button;
