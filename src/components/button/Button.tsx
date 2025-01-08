import { FC} from "react";
import "./Button.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
    img_path?: string;
    text: string;
    onClick?: () => void; 
    link_path?: string;
}

const Button: FC<ButtonProps> = ({ img_path, text,link_path, onClick }) => {
    const navigate = useNavigate(); 

    const handleClick = () => {
        if (link_path) {
            navigate(link_path);
        }
        if (onClick) {
            onClick(); 
        }
    };


    return (
        <button className="button" onClick={handleClick}>
            {img_path && <img src={img_path} alt="button symbol" className="button-icon" />}
            <p>{text}</p>
        </button>
    );
};

export default Button;
